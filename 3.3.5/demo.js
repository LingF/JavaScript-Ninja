function juggle(){
    var result = 0;
    for (var n = 0; n < arguments.length; n++){
        result += arguments[n];
    }
    this.result = result;
}
var ninja1 = {};
var ninja2 = {};
juggle.apply(ninja1, [1,2,3,4]);
juggle.call(ninja2, 5, 6, 7, 8);
assert(ninja1.result === 10, "juggled via apply");
assert(ninja2.result === 26, "juggled via call");

function forEach(list, callback){
        for (var n = 0; n < list.length; n++){
            callback.call(list[n], n);
        }
}
var list = ['shuriken', 'katana', 'nunchucks'];
forEach(
    list,
    function(index){
        console.log(index);
        console.log(this);
        assert(this == list[index], "Got the expected value of "+ list[index]);
    }
)