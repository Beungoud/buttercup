"use strict";

// Import Deps
import _ from 'underscore';
import Backbone from 'backbone';
import IntroScreen from 'app/views/intro-screen';
import CloudRouter from 'app/views/cloud/router';
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
        window.Cloud = new CloudRouter();
        break;
}

// Start histroy process
Backbone.history.start();
