function test(a, b, c){
	return a+b+c;
}
test(1, 2, 3);

fun EC = {
	vo: {
		a: 1,
		b: 2,
		c: 3
	}
}

function test(a, b, c){
	return a+b+c;
}
test(1, 2);

fun EC = {
	vo: {
		a: 1,
		b: 2,
		c: undefined
	}
}

function test(a, b, c, b){
	return a+b+c;
}
test(1, 2, 3);

fun EC = {
	vo: {
		a: 1,
		b: undefined,
		c: 3
	}
}


函数形参的优先级大于变量

function test(x) {
	alert(x);
	var x = 20;
}
test(10);

test EC = {
	vo: {
		arguments: Arguments Object,
		x: 10
	}
}



var x = 10;
window.y = 20;

delete window.x;
delete window.y;

alert(window.x);
alert(window.y);

eval('var z = 30');
delete window.z;
alert(window.z);


function test() {
	function inner() {

	}
}
test();

上下文，作用域链

testEC = {
	vo: testAO -> {
		inner: innerFun  //innerFun.[[scope]] == [testAO, window]
	},
	sc: [testAO, window]
}

global EC = {
	sc: [window], //作用域链
	vo: window -> {
		test: testFun // testFun.[[scope]] = [window]
	}
}



var x = 1;
var y = 2;
var z = 3;
var foo = {x: 10, y: 20};

with(foo) {
	alert(x);  // 10
	alert(y);  // 20
	alert(z);  // 3
}

// globalEC = {
// 	sc: [foo,window],
// 	vo: window -> {
// 		x: 1,
// 		y: 2,
// 		z: 3,
// 		foo: {x: 10, y: 20}
// 	}
// }



var test = {x: 10};
var temp = {
	x: 20,
	do: function() {
		alert(this.x);
	}
};

temp.do();  // 20

test.do = temp.do;
test.do();   // 10

var foo = test.do;
foo();    //1

if(true) {
	function test() {
		alert(1);
	}
} else {
	function test() {
		alert(2);
	}
}


//定义
function Rectangle(width, height) {
	this.width = width;
	this.height = height;
}
Rectangle.prototype.area = function() {
	return this.with * this.height;
}

//使用
var r = new Rectangle(10, 5);
alert(r.area());
alert(r.constructor);


function A() {}
A.prototype.x = 10;
var a1 = new A();
A.prototype = {x: 20, y: 30};
var a2 = new A();
alert(a1.x);  //10 
alert(a1.y);  //undefined
alert(a2.x);  //20
alert(a2.y);  //30








