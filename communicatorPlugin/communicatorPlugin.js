(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['communicatorModularAMD'], factory(root));
    } else if (typeof exports === 'object') {
        module.exports = factory(require('communicatorModularAMD'));
    } else {
        root.communicatorPlugin = factory(root.communicatorModularAMD);
    }
})(typeof global !== 'undefined' ? global : this.window || this.global, function (lodash) {
    var communicatorPlugin = {}; 

    communicatorPlugin.extendcommunicatorModularAMD = function(communicatorModularAMD) {
        communicatorModularAMD.goodbye = function () {
            return "<h1>Goodbye!</h1>";
        };
    };

    return communicatorPlugin;

});