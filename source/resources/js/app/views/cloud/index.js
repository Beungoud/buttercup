"use strict";

// Import Deps
import _ from 'underscore';
import Backbone from 'backbone';
import Tpl from 'tpl/cloud/index.html!text';

// Electron
const electron = require('electron');
const remote = electron.remote;
const ipc = electron.ipcRenderer;
const dialog = remote.dialog;

// Export View
export default Backbone.View.extend({
    el: '.window',

    events: {

    },

    initialize: function () {
        // Instances
        this.template = _.template(Tpl);

        // Render
        this.render();
    },

    render: function () {
        this.$el.html(this.template());
    },

    renderPage: function(view) {
        if (this.view) {
            this.view.remove();
        }
        this.view = view;
        this.$(".cloud-screen").html(this.view.render().el);
    }
});
