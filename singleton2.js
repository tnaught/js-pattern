var singleton = (function() {
    var _instance;
    function Singleton(options) {
        options = options || {};
        this.x = options.x || 10;
        this.y = options.y || 240;
    }
    var _static = {
        name: 'singletonTest',
        getInstance: function(options) {
            if(_instance == null) {
                _instance = new Singleton(options);
            }
            return _instance;
        }
    }
    return _static;
})()

var myInstance = singleton.getInstance({x:12});
console.log(myInstance.x)