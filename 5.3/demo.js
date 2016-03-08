// var elem, tick, timer;

var button = {
    clicked: false,
    click: function() {
        this.clicked = true;
        assert(button.clicked, 'The button has been clicked');
    }
}

var elem = document.getElementById('box');
// elem.addEventListener('click', button.click, false);

// function bind(context, name) {
//     return function() {
//         return context[name].apply(context, arguments);
//     }
// }

Function.prototype.bd = function() {
    var fn = this,
        args = Array.prototype.slice.call(arguments),
        object = args.shift();
    console.log('out:', arguments, args);
    return function() {
        console.log('in:', arguments, args);
        return fn.apply(object, args.concat(Array.prototype.concat.call(arguments)));
    }
}

// elem.addEventListener('click', bind(button, 'click'), false);
// elem.addEventListener('click', button.click.apply(button), false); //bind
elem.addEventListener('click', button.click.bd(button), false);
