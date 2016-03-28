import _ from "underscore";
import Backbone from "backbone";
import Tpl from 'tpl/cloud/webdav.html!text';

export default Backbone.View.extend({
    className: "grid-block cloud-screen__webdav",

    render: function() {
        this.$el.html(_.template(Tpl));
        return this;
    }
});
