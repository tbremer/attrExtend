(function ( $ ) {

  $.fn.extend({
    attrAddProp: function ( attr, prop ) {
        var $_this = this;
        var hasAttr = $_this.hasAttr(attr);

        if (hasAttr) {
            var modProp = ' ' + prop + ' ';
            var properties = $_this.attr(attr);
            var newProperties = $.trim(properties + modProp);
            $_this.attr(attr, newProperties);

            return this;
        }

        $_this.attr(attr, prop);
        return this;
    },

    attrHasProp: function ( attr, prop ) {
        var $_this = this;
        var hasAttr = $_this.hasAttr(attr);

        if (hasAttr === false) {
            return false;
        }

        var properties = $_this.attr(attr).split(' ');
        var i = 0;
        var l = properties.length;

        for (; i<l; i++) {
            var curProp = properties[i];
            if (curProp == prop) {
                return true;
            }
        }

        return false;
    },

    attrRemoveProp: function ( attr, prop ) {
        var $_this = this;
        var hasAttr = $_this.hasAttr(attr);
        var hasProp = $_this.attrHasProp(attr, prop);

        if (hasAttr && hasProp) {
            var properties = $_this.attr(attr);
            var newProperties = $.trim(properties.replace(prop, ''));
            $_this.attr(attr, newProperties);
        }

        return this;
    },

    hasAttr: function (attr) {
        var $_this = this;
        var i = 0;
        var l = $_this.length;

        for (; i<l; i++) {
            var ai = 0;
            var al = $_this[i].attributes.length;
            for (; ai<al; ai++) {
                var thisAttribute = $_this[i].attributes[ai].name;
                if (thisAttribute === attr) {
                    return true;
                }
            }
        }

        return false;
    }
  });

})(jQuery);
