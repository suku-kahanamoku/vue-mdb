import View, { type ViewOptions } from "ol/View";

/**
 * Vytvori view
 *
 * @export
 * @param {ViewOptions} [options]
 * @return {*}  {View}
 */
export function CREATE_VIEW(options?: ViewOptions): View {
    options = {
        ...{
            zoom: 7,
            center: [1750000, 6500000],
            constrainResolution: true,
        },
        ...options
    }
    return new View(options);
}