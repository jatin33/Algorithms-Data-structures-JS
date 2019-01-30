Determining this
Now, we can summarize the rules for determining this from a function call's call-site, in their order of precedence.
Ask these questions in this order, and stop when the first rule applies.

Is the function called with new (new binding)? If so, this is the newly constructed object.

var bar = new foo()

Is the function called with call or apply (explicit binding), even hidden inside a bind hard binding?
If so, this is the explicitly specified object.

var bar = foo.call( obj2 )

Is the function called with a context (implicit binding), otherwise known as an owning or containing object?
If so, this is that context object.

var bar = obj1.foo()

Otherwise, default the this (default binding). If in strict mode, pick undefined, otherwise pick the global object.

var bar = foo()

That's it. That's all it takes to understand the rules of this binding for normal function calls. Well... almost.

Binding Exceptions
As usual, there are some exceptions to the "rules".

The this-binding behavior can in some scenarios be surprising, 
where you intended a different binding but you end up with binding behavior from the default binding rule (see previous).

Ignored this
If you pass null or undefined as a this binding parameter to call, apply, or bind, 
those values are effectively ignored, and instead the default binding rule applies to the invocation.

function foo() {
	console.log( this.a );
}

var a = 2;

foo.call( null ); // 2
Why would you intentionally pass something like null for a this binding?

It's quite common to use apply(..) for spreading out arrays of values as parameters to a function call. 
Similarly, bind(..) can curry parameters (pre-set values), which can be very helpful.

function foo(a,b) {
	console.log( "a:" + a + ", b:" + b );
}

// spreading out array as parameters
foo.apply( null, [2, 3] ); // a:2, b:3

// currying with `bind(..)`
var bar = foo.bind( null, 2 );
bar( 3 ); // a:2, b:3
Both these utilities require a this binding for the first parameter.
If the functions in question don't care about this, you need a placeholder value, 
and null might seem like a reasonable choice as shown in this snippet.
