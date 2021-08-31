// Generated by Haxe 4.3.0-rc.1+5f599ba
(function ($global) { "use strict";
function Example_main() {
	var timer = new haxe_Timer(100);
	var testCount = 0;
	var divertTrace = new htmlHelper_tools_DivertTrace();
	timer.run = function() {
		traceCount_TraceCount.trace("show 10 times: " + testCount,10,{ fileName : "Example.hx", lineNumber : 9, className : "_Example.Example_Fields_", methodName : "main"});
		testCount += 1;
	};
}
Math.__name__ = true;
var Std = function() { };
Std.__name__ = true;
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
var haxe_Log = function() { };
haxe_Log.__name__ = true;
haxe_Log.formatOutput = function(v,infos) {
	var str = Std.string(v);
	if(infos == null) {
		return str;
	}
	var pstr = infos.fileName + ":" + infos.lineNumber;
	if(infos.customParams != null) {
		var _g = 0;
		var _g1 = infos.customParams;
		while(_g < _g1.length) {
			var v = _g1[_g];
			++_g;
			str += ", " + Std.string(v);
		}
	}
	return pstr + ": " + str;
};
haxe_Log.trace = function(v,infos) {
	var str = haxe_Log.formatOutput(v,infos);
	if(typeof(console) != "undefined" && console.log != null) {
		console.log(str);
	}
};
var haxe_Timer = function(time_ms) {
	var me = this;
	this.id = setInterval(function() {
		me.run();
	},time_ms);
};
haxe_Timer.__name__ = true;
haxe_Timer.prototype = {
	run: function() {
	}
};
var haxe_iterators_ArrayIterator = function(array) {
	this.current = 0;
	this.array = array;
};
haxe_iterators_ArrayIterator.__name__ = true;
haxe_iterators_ArrayIterator.prototype = {
	hasNext: function() {
		return this.current < this.array.length;
	}
	,next: function() {
		return this.array[this.current++];
	}
};
var htmlHelper_tools_DivertTrace = function(left,d) {
	if(left == null) {
		left = 610;
	}
	this.textStyle1 = "<span style=\"font-size:14px; color:Grey\">";
	this.textStyle0 = "<span style=\"font-size:12px; color:Silver\">";
	this.traceString = "";
	this.divertTrace(left,d);
};
htmlHelper_tools_DivertTrace.__name__ = true;
htmlHelper_tools_DivertTrace.prototype = {
	divertTrace: function(left,d) {
		if(d == null) {
			var doc = window.document;
			this.traceDiv = doc.createElement("div");
			doc.body.appendChild(this.traceDiv);
			var dom = this.traceDiv;
			var style = dom.style;
			style.position = "absolute";
			style.top = "0px";
			style.left = (left == null ? "null" : "" + left) + "px";
			style.height = "500px";
			style.width = "500px";
			style.zIndex = "99";
			style.overflow = "auto";
		} else {
			this.traceDiv = d;
		}
		haxe_Log.trace = $bind(this,this.myTrace);
	}
	,myTrace: function(v,inf) {
		if(Std.string(v) == "") {
			return;
		}
		this.traceString += this.textStyle0 + inf.className + "." + inf.methodName + " ( " + (inf.lineNumber == null ? "null" : "" + inf.lineNumber) + " )" + "</span>" + "<br> - " + this.textStyle1 + Std.string(v) + "</span>" + "<br>";
		this.traceDiv.innerHTML = this.traceString;
	}
};
var js_Boot = function() { };
js_Boot.__name__ = true;
js_Boot.__string_rec = function(o,s) {
	if(o == null) {
		return "null";
	}
	if(s.length >= 5) {
		return "<...>";
	}
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) {
		t = "object";
	}
	switch(t) {
	case "function":
		return "<function>";
	case "object":
		if(((o) instanceof Array)) {
			var str = "[";
			s += "\t";
			var _g = 0;
			var _g1 = o.length;
			while(_g < _g1) {
				var i = _g++;
				str += (i > 0 ? "," : "") + js_Boot.__string_rec(o[i],s);
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( _g ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") {
				return s2;
			}
		}
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		var k = null;
		for( k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) {
			str += ", \n";
		}
		str += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "string":
		return o;
	default:
		return String(o);
	}
};
var traceCount_CodeLocation = function(fileName,lineNumber,count) {
	this.fileName = fileName;
	this.lineNumber = lineNumber;
	this.count = count;
};
traceCount_CodeLocation.__name__ = true;
var traceCount_TraceCount = function() { };
traceCount_TraceCount.__name__ = true;
traceCount_TraceCount.trace = function(d,counting,pos) {
	var exists = false;
	var v;
	if(traceCount_TraceCount.arr.length == 0) {
		traceCount_TraceCount.arr[0] = new traceCount_CodeLocation(pos.fileName,pos.lineNumber,0);
	}
	var _g = 0;
	var _g1 = traceCount_TraceCount.arr.length;
	while(_g < _g1) {
		var i = _g++;
		v = traceCount_TraceCount.arr[i];
		if(v.fileName == pos.fileName && v.lineNumber == pos.lineNumber) {
			exists = true;
			if(v.count < counting) {
				var methodName = pos.methodName;
				var lineNumber = pos.lineNumber;
				var className = pos.className;
				haxe_Log.trace("(" + className + ":" + methodName + ":" + lineNumber + ") " + Std.string(d),{ fileName : "src/traceCount/TraceCount.hx", lineNumber : 35, className : "traceCount.TraceCount", methodName : "trace"});
				v.count++;
			}
		}
		break;
	}
	if(!exists) {
		traceCount_TraceCount.arr[traceCount_TraceCount.arr.length] = new traceCount_CodeLocation(pos.fileName,pos.lineNumber,0);
	}
};
var $_;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $global.$haxeUID++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = m.bind(o); o.hx__closures__[m.__id__] = f; } return f; }
$global.$haxeUID |= 0;
String.__name__ = true;
Array.__name__ = true;
js_Boot.__toStr = ({ }).toString;
traceCount_TraceCount.arr = [];
Example_main();
})(typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this);