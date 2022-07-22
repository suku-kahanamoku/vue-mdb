<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue';
import type { FeatureCollection } from '@turf/turf';
import type { Feature } from "ol";
import type { Geometry } from "ol/geom";
import Map from 'ol/Map';
import 'ol/ol.css';

import * as data from '@/assets/airspaces.json';
import { CREATE_LAYER, CREATE_TILE_LAYER } from '@/plugins/ol-utils/layer';
import { CREATE_VIEW } from '@/plugins/ol-utils/view';
import { CREATE_FEATURES_FROM_GEO_JSON } from '@/plugins/ol-utils/feature';

const map: Ref<Map | undefined> = ref();
const features: Ref<Feature<Geometry>[] | undefined> = ref();

onMounted(() => {
    map.value = new Map({
        target: 'map',
        layers: [CREATE_TILE_LAYER()],
        view: CREATE_VIEW(),
    });
    // bude load na json data
    features.value = CREATE_FEATURES_FROM_GEO_JSON(data as FeatureCollection);
    map.value.addLayer(CREATE_LAYER(features.value));
    map.value.on('click', event => {
        map.value?.forEachFeatureAtPixel(event.pixel, feature => console.log(feature.getProperties()))
    })
});
</script>

<template>
    <div id="map" style="width: 100%; height: 100%">
    </div>
</template>