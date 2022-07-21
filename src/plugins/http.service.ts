import { IS_DEFINED, IS_NUMERIC, IS_OBJECT } from "@/plugins/utils/check.functions";
import { TRIM, RTRIM, GET_MARK } from "@/plugins/utils/modify-string.functions";
import { GET_URL } from "@/plugins/utils/check-url.functions";
import { ITERATE, STRINGIFY } from "@/plugins/utils/modify-object.function";

export class MpHttp {

    /**
     * Libovolny get bez hlavicek
     *
     * @param {string} url
     * @param {RequestInit} [options]
     * @return {*}  {Promise<Response>}
     * @memberof MpHttp
     */
    async get(url: string, options?: RequestInit): Promise<Response> {
        return fetch(TRIM(TRIM(url, '&'), '/'), options);
    }

    protected _getOptions(options: RequestInit, method: 'POST' | 'PATCH' | 'GET' | 'PUT' | 'DELETE' = 'GET', fields?: any): RequestInit {
        options.method = options.method || method;
        options.headers = options.headers || { 'Content-Type': 'application/json' };
        if (fields) {
            options.body = STRINGIFY(fields);
        }
        return options;
    }

    /**
     * Post kamkoliv
     *
     * @param {string} url
     * @param {*} fields
     * @param {RequestInit} [options]
     * @return {*}  {Promise<Response>}
     * @memberof MpHttp
     */
    async post(url: string, fields: any, options?: RequestInit): Promise<Response> {
        return fetch(TRIM(TRIM(url, '&'), '/'), this._getOptions(options || {}, 'POST', fields));
    }

    /**
     * Put kamkoliv
     *
     * @param {string} url
     * @param {*} fields
     * @param {RequestInit} [options]
     * @return {*}  {Promise<Response>}
     * @memberof MpHttp
     */
    async put(url: string, fields: any, options?: RequestInit): Promise<Response> {
        return fetch(TRIM(TRIM(url, '&'), '/'), this._getOptions(options || {}, 'PUT', fields));
    }

    /**
     * Patch kamkoliv
     *
     * @param {string} url
     * @param {*} fields
     * @param {string} etag
     * @param {RequestInit} [options]
     * @return {*}  {Promise<Response>}
     * @memberof MpHttp
     */
    async patch(url: string, fields: any, etag: string, options?: RequestInit): Promise<Response> {
        options = this._getOptions(options || {}, 'PATCH', fields);
        options.headers = { 'Content-Type': 'application/json', 'If-Match': etag };
        return fetch(TRIM(TRIM(url, '&'), '/'), options);
    }

    /**
     * Delete kamkoliv
     *
     * @param {string} url
     * @param {RequestInit} [options]
     * @return {*}  {Promise<Response>}
     * @memberof MpHttp
     */
    async delete(url: string, options?: RequestInit): Promise<Response> {
        return fetch(TRIM(TRIM(url, '&'), '/'), this._getOptions(options || {}, 'DELETE'));
    }

    /**
     * Nacte podle zadanych parametru
     *
     * @param {string} model
     * @param {*} [value]
     * @param {*} [params={}]
     * @return {*}  {Promise<Response>}
     * @memberof MpHttp
     */
    async load(model: string, value?: any, params: any = {}): Promise<Response> {
        return this.get(this.createParams(`/_/${model}` + (value ? `/${value}` : ''), params));
    }

    /**
     * Nacte podle idecek
     *
     * @param {string} model
     * @param {string[]} entityIds
     * @param {*} [params={}]
     * @param {string} [condition='$in']
     * @return {*}  {Promise<Response>}
     * @memberof MpHttp
     */
    async loadByIds(
        model: string, entityIds: string[], params: any = {}, condition: string = '$in'
    ): Promise<Response> {
        params._id = { condition: condition, value: entityIds };
        const result = this.load(model, false, params);
        delete params.categoryIds;
        return result;
    }

    /**
     * Nacte podle kategorie
     *
     * @param {string} model
     * @param {(string | string[])} categoryId
     * @param {*} [params={}]
     * @param {string} [condition='$in']
     * @return {*}  {Promise<Response>}
     * @memberof MpHttp
     */
    async loadByCategory(
        model: string,
        categoryId: string | string[],
        params: any = {},
        condition: string = '$in'
    ): Promise<Response> {
        params.categoryIds = { condition: condition, value: Array.isArray(categoryId) ? categoryId : [categoryId] };
        const result = this.load(model, false, params);
        delete params.categoryIds;
        return result;
    }

    /* =================================================================================================== */

    /**
     * Vytvori parametru napr. where, sort, ..
     *
     * @param {string} [url='']
     * @param {*} [params={}]
     * @return {*}  {string}
     * @memberof MpHttp
     */
    createParams(url: string = '', params: any = {}): string {
        url = RTRIM(url, '/');
        if (params) {
            // vygenereje where pro mongo filter
            const where = this._generateWhere(params);
            if (where.length) {
                const urlTree = GET_URL(url);
                // pokud existuje nejaky where v url, zmerguje stary a novy where
                if (urlTree.searchParams.has('where')) {
                    const whereValues = urlTree.searchParams.get('where')?.slice(1, -1);
                    urlTree.searchParams.set('where', `{${whereValues},${where}}`);
                }
                // jinak vytvori jen where
                else {
                    urlTree.searchParams.set('where', `{${where}}`);
                }
                url = urlTree.toString();
            }
            // vygeneruje jednotlive dotazy &sort=..&neco=..
            const filter = this._generateFilters(params);
            if (filter) {
                url += GET_MARK(url) + filter;
            }
            // vygeneruje strankovani pro backend
            const pagination = this._generatePagination(params);
            if (pagination) {
                url += GET_MARK(url) + pagination;
            }
        }
        return TRIM(TRIM(url, '&'), '?');
    }

    /**
     * Vytvori parametry napr. sort, projection, fakctory, ..
     *
     * @protected
     * @param {*} [params={}]
     * @return {*}  {string}
     * @memberof MpHttp
     */
    protected _generateFilters(params: any = {}): string {
        const filters: any[] = [];
        ITERATE(params, (value: any, key: string) => {
            if (IS_DEFINED(value) && IS_DEFINED(key)) {
                switch (key) {
                    case 'USE_CACHE':
                        filters.push(`${key}=${+value}`);
                        break;
                    case 'projection':
                        Object.keys(value).length && filters.push(`${key}=${STRINGIFY(value)}`);
                        break;
                }
            }
        });
        return filters.join('&');
    }

    /**
     * Vytvori strankovaci parametry
     *
     * @protected
     * @param {*} [params={}]
     * @return {*}  {string}
     * @memberof MpHttp
     */
    protected _generatePagination(params: any = {}): string {
        const filters = [];
        // je zaple strankovani, tak posle na backend dotaz s filtraci
        if (params.pagination) {
            if (params.page) {
                filters.push(`page=${params.pagination.page}`);
            }
            if (params.itemsPerPage) {
                filters.push(`max_results=${params.pagination.max}`);
            }
        }
        return filters.join('&');
    }

    /**
     * Vytvori where parametry
     *
     * @protected
     * @param {*} [params={}]
     * @return {*}  {string}
     * @memberof MpHttp
     */
    protected _generateWhere(params: any = {}): string {
        const query: any[] = [];
        ITERATE(params, (item: any, key: string) => {
            if (IS_DEFINED(item) && IS_DEFINED(key)) {
                if (item.hasOwnProperty('condition') && item.hasOwnProperty('value')) {
                    let value;
                    switch (item.condition) {
                        // {condition:$eq,value:'hodnota'}
                        case '$eq':
                            value = `"${key}":${this._getValue(item.value, item.type)}`;
                            break;
                        // {condition:$or,value:[{condition:$lt,value:50},{condition:$gte,value:10}]}
                        case '$or':
                        case '$and':
                        case '$not':
                        case '$nor':
                            value = `"${item.condition}":[{${this._generateWhere(item.value)}}]`;
                            break;
                        case '$eqnull':
                        case '$nenull':
                            value = `"${item.condition.replace('null', '')}":null`;
                            break;
                        // ostatni
                        default:
                            const optionString = item.options ? `,"$options":"${item.options}"` : '';
                            if (IS_NUMERIC(key)) {
                                value = `"${item.condition}":${this._getValue(item.value, item.type)}`;
                            } else {
                                value = `"${key}":{"${item.condition}":${this._getValue(item.value, item.type)}${optionString}}`;
                            }
                            break;
                    }
                    // nakonec hodnotu vlozi do pole
                    if (value) {
                        query.push(value);
                    }
                }
                // pokud je to pole nebo objekt, spusti rekurzi
                else if ((Array.isArray(item) && item.length) || (IS_OBJECT(item) && Object.keys(item).length)) {
                    const value = this._generateWhere(item);
                    if (value) {
                        if (IS_NUMERIC(key)) {
                            query.push(`${value}`);
                        } else {
                            query.push(`"${key}":{${value}}`);
                        }
                    }
                }
            }
        });
        return query.length ? query.filter(item => IS_DEFINED(item)).join(',') : '';
    }

    /**
     * Vrati spravnou hodnotu, tzn. pokud je to retezec vrati v uvozovkach
     *
     * @protected
     * @param {(string | number | any[])} value
     * @param {string} [type]
     * @return {*}  {(string | number)}
     * @memberof MpHttp
     */
    protected _getValue(value: string | number | any[], type?: string): string | number {
        // pokud je pole
        if (Array.isArray(value)) {
            return `["${value.join('","')}"]`;
        }
        // pokud je zadany typ a je string
        else if (type && type.toLocaleLowerCase().indexOf('string') >= 0) {
            return `"${value}"`;
        }
        // jinak vrati podle typu
        else {
            return IS_NUMERIC(value) ? `${value}` : `"${value}"`;
        }
    }

}
