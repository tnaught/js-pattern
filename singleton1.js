//singleton
var mySingleton = (function() {
    var instance;

    function init() {
        function privateMethod() {
            console.log('i am private');
        }
        var privateVariable = 'im also private';
        var privateRandomNumber = Math.random();
        return {
            publicMethod: function() {
                console.log('the public can see me');
            },
            publicProperty: 'i am also public',
            getRandomNumber: function() {
                return privateRandomNumber
            }
        };
    };
    return {
        getInstance: function() {
            if(!instance) {
                instance = init();
            }
            return instance;
        }
    }
})();

var aSingle = mySingleton.getInstance().getRandomNumber();
var bSingle = mySingleton.getInstance().getRandomNumber();
console.log(aSingle == bSingle)