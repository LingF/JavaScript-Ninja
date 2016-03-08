function merge(root){
    for (var i = 1; i < arguments.length; i++){
        for (var key in arguments[i]){
            root[key] = arguments[i][key];
        }
    }
    return root;
}

var merged = merge(
    {name: "Batou"},
    {city: "Niihama"});

assert(merged.name == "Batou", "The original name is intact.");
assert(merged.city == "Niihama", "And the city has been copied over.");

function multiMax(multi){
    return multi * Math.max.apply(Math,
        Array.prototype.slice.call(arguments, 1));
}

assert(multiMax(3,1,2,3) == 9, "3*3=9 (First arg, by largest.)");


function addMethod(object, name, fn){
    var old = object[name];
    object[name] = function(){
        if (fn.length == arguments.length)
            return fn.apply(this, arguments)
        else if (typeof old == 'function')
            return old.apply(this, arguments);
    }
}
var ninjas = {
    values: ["Dean Edwards", "Sam Stephenson", "Alex Russell"]
}

addMethod(ninjas, "find", function(){
    return this.values;
})

addMethod(ninjas, "find", function(name){
    var ret = [];
    for (var i = 0; i < this.values.length; i++)
        if (this.values[i].indexOf(name) == 0)
            ret.push(this.values[i]);
    return ret;
})

addMethod(ninjas, "find", function(first, last){
    var ret = [];
    for(var i = 0; i < this.values.length; i++)
        if (this.values[i] == (first + " " + last))
            ret.push(this.values[i]);
    return ret;
})

assert(ninjas.find().length == 3, "Found all ninjas");
assert(ninjas.find("Sam").length == 1, "Found ninja by first name");
assert(ninjas.find("Dean", "Edwards").length == 1, "Found ninja by first and last name");
assert (ninjas.find("Alex", "X", "Russell") == null, "Found nothing");