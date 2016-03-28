import _ from "underscore";
import Backbone from "backbone";
import CloudScreen from "app/views/cloud/index";
import ProviderView from "app/views/cloud/provider"
import WebDAVView from "app/views/cloud/webdav"

export default Backbone.Router.extend({
    routes: {
        "": "indexAction",
        "webdav": "webdavAction"
    },

    initialize: function() {
        this.cloudScreen = new CloudScreen();
    },

    indexAction: function() {
        this.cloudScreen.renderPage(new ProviderView);
    },

    webdavAction: function() {
        this.cloudScreen.renderPage(new WebDAVView);
    }
});
