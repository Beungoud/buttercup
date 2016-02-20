"use strict";

// Import Deps
import _ from 'underscore';
import Backbone from 'backbone';
import IntroScreen from 'app/views/intro-screen';
import Layout from 'app/views/layout';
import 'app/helpers';

// Create Instances
window.Buttercup = window.Buttercup || {};
Buttercup.Events = _.extend({}, Backbone.Events);

// Hide loading image
$("#loading").hide();

// Load the correct window
const id = window.windowID || "main";

switch (id) {
    case "intro":
        Buttercup.IntroScreen = new IntroScreen();
        break;
    case "main":
        Buttercup.Layout = new Layout();
        break;
    case "cloud":
        console.log("DAMN");
        break;
}

// Start histroy process
Backbone.history.start();
