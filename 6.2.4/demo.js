function User(first, last) {
  this.name = first + ' ' + last;
}

var user = User('Ichigo', 'Kurosaki');

assert(user, 'User instantiated');
try {
  assert(user.name == 'Ichigo Kurosaki', 'User name correctly assigned');
} catch (er) {
  console.log(er);
}


function Player(first, last) {
  this.pname = first + ' ' + last;
}

var pname = 'Rukia';

var player = Player('Ichigo', 'Kurosaki');
assert(pname == 'Rukia', 'Name was set to Rukia.');

function Test() {
  return this instanceof arguments.callee;
}

assert(!Test(), "We didn't instantiate, so it returns false.");
assert(new Test(), 'We did instantiate, returning true.');

function Client(first, last) {
  if (!(this instanceof arguments.callee)) {
    return new Client(first, last);
  }
  this.cname = first + ' ' + last;
}
var cname = 'Rukia';

var client = Client('Ichigo', 'Kurosaki');

assert(cname == 'Rukia', 'Cname was set to Rukia.');
assert(client instanceof Client, 'Client instantiated');
assert(client.cname == 'Ichigo Kurosaki', 'Client cname correctly assigned');
