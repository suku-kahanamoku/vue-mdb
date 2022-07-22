import { type FeatureCollection, featureCollection } from "@turf/turf";
import type { Feature } from "ol";
import type { Geometry } from "ol/geom";

import GeoJSON from 'ol/format/GeoJSON';
import Fill from "ol/style/Fill";
import Stroke from "ol/style/Stroke";
import Style from "ol/style/Style";


/**
 * Vytvori features z GeoJson
 *
 * @export
 * @param {FeatureCollection} collection
 * @return {*}  {Feature<Geometry>[]}
 */
export function CREATE_FEATURES_FROM_GEO_JSON(collection: FeatureCollection): Feature<Geometry>[] {
    return new GeoJSON().readFeatures(
        featureCollection(collection.features),
        {
            // this is required since GeoJSON uses latitude/longitude,
            // but the map is rendered using “Web Mercator”
            featureProjection: 'EPSG:3857'
        }
    );
}

/**
 * Nastavi styly jednolivym feature
 *
 * @export
 * @param {Feature<Geometry>[]} features
 * @return {*}  {Feature<Geometry>[]}
 */
export function SET_FEATURES_STYLES(features: Feature<Geometry>[]): Feature<Geometry>[] {
    features.forEach((feature, index) => {
        /* feature.setId(`id_${index}`) */
        // todo - jednotlivym featuram doplnit styly, ktere se vemou z DB
        if (feature.getProperties().name === 'NAMEST') {
            const style = new Style({
                fill: new Fill({
                    color: 'rgba(255,0,0,0.5)'
                }),
                stroke: new Stroke({
                    color: '#808080',
                    width: 4,
                    lineDash: [8, 12],
                })
            });
            feature.setStyle(style);
        }
    });
    return features;
}