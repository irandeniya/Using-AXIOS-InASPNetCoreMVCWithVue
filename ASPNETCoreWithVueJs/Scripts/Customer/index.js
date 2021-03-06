﻿import Vue from 'vue';
import CreateComponent from './create.vue';
import IndexComponent from './index.vue';
import EditComponent from './edit.vue';
import DisplayComponent from './display.vue';

new Vue({
    el: "#app",
    components: {
        CreateComponent,
        IndexComponent,
        EditComponent,
        DisplayComponent
    }
})