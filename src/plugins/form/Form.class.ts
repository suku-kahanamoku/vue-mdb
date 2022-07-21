import { inject } from "vue";

import type { HttpService } from "@/plugins/service/http.service";

export class Form {

    constructor(protected _http: HttpService | undefined = inject('HttpService')) {
        console.log(this._http)
    }

}