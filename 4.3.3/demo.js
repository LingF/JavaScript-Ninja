var elems = {
    length: 0,
    add: function(elem){
        Array.prototype.push.call(this, elem);
    },
    find: function(id){
        this.add(document.getElementById(id));
    }
}

elems.find("first");
assert(elems.length == 1 && elems[0].nodeType, "Verify that we have an element in our stash");

elems.find("second");
assert(elems.length == 2 && elems[1].nodeType, "Verify the other insertion");