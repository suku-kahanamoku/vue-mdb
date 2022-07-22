import type { Feature } from "ol";
import type { Geometry } from "ol/geom";
import type { Options as TileOptions } from "ol/layer/BaseTile";
import type { Options as VectorOptions } from "ol/layer/BaseVector";

import TileLayer from 'ol/layer/Tile';
import VectorLayer from "ol/layer/Vector";
import OSM from 'ol/source/OSM'
import VectorSource from "ol/source/Vector";
import Stroke from "ol/style/Stroke";
import Style from "ol/style/Style";

import { SET_FEATURES_STYLES } from "./feature";

/**
 * Vytvori layer z GeoJson
 *
 * @export
 * @param {Feature<Geometry>[]} features
 * @param {Options<VectorSource<Geometry>>} [options]
 * @return {*}  {VectorLayer<VectorSource>}
 */
export function CREATE_LAYER(features: Feature<Geometry>[], options?: VectorOptions<VectorSource<Geometry>>): VectorLayer<VectorSource> {
    options = {
        ...{
            source: new VectorSource({
                features: SET_FEATURES_STYLES(features),
            }),
            style: new Style({
                stroke: new Stroke({
                    color: '#808080'
                })
            })
        },
        ...options
    }
    return new VectorLayer(options);
}

/**
 * Vytvori bitmapovou mapu
 *
 * @export
 * @return {*}  {TileLayer<any>}
 */
export function CREATE_TILE_LAYER(options?: TileOptions<OSM>): TileLayer<any> {
    options = {
        ...{
            source: new OSM(),
            visible: true
        },
        ...options
    }
    return new TileLayer(options);
}