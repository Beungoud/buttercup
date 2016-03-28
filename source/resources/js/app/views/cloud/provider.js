import _ from "underscore";
import Backbone from "backbone";
import Tpl from 'tpl/cloud/provider.html!text';

export default Backbone.View.extend({
    className: "grid-block cloud-screen__provider",

    render: function() {
        this.$el.html(_.template(Tpl));
        return this;
    }
});
