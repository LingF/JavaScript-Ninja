(function() {
  var initializing = false,
      //1.检测函数是否可序列化(目的是判断函数是否包含字符串_super)
      superPattern = /xyz/.test(function() { xyz; }) ? /\b_super\b/ : /.*/;
  //2-1.给Object添加一个subClass()方法，接收一个参数：期望添加到子类的属性集。
  Object.subClass = function(properties) {
    var _super = this.prototype;

    //3-1.创建一个超类的实例作为一个原型
    initializing = true;
    var proto = new this(); //this 当前调用subClass的对象
    initializing = false;

    //3-2.将传入的属性合并到 proto 对象（一个原型的原型）中
    for (var name in properties) {
      proto[name] = typeof properties[name] == 'function' && typeof _super[name] == 'function' &&  superPattern.test(properties[name]) ?
      (function(name, fn) {
        return function() {
          // 不管_super是否存在，我们保存他
          var tmp = this._super;

          // 创建新的_super方法，只是引用父类原型中已经存在的方法
          this._super = _super[name];

          // this 引用的是当前的子类实例，而不是父类实例
          // fn 子类方法
          var ret = fn.apply(this, arguments);
          // 复原_super
          this._super = tmp;

          return ret;
        };
      })(name, properties[name]) : properties[name];
    }
    function Class() {
      //2-2.创建一个仿真类构造器，跳过init()
      if (!initializing && this.init) {
        this.init.apply(this, arguments);
      }
    }
    //设置类的原型
    Class.prototype = proto;

    //重构构造器引用
    Class.constructor = Class;

    //让类继续可扩展
    Class.subClass = arguments.callee;

    return Class;
  };
})();

var Person = Object.subClass({
  init: function(isDancing) {
    this.dancing = isDancing;
  },
  dance: function() {
    return this.dancing;
  }
});

var Ninja = Person.subClass({
  init: function() {
    this._super(false);
  },
  dance: function() {
    return this._super();
  },
  swingSword: function() {
    return true;
  }
});

var person = new Person(true);
assert(person.dance(), 'The person is dancing.');

var ninja = new Ninja();
assert(ninja.swingSword(), 'The sword is swinging.');
assert(!ninja.dance(), 'The ninja is not dancing.');
assert(person instanceof Person, 'Person is a Person.');
assert(ninja instanceof Ninja && ninja instanceof Person, 'Ninja is Ninja and a Person.');