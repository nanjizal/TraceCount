# TraceCount
Allows a particular trace statement to output only a limited number of times, this is useful to  help with debugging when you want to avoid swapping your browser with traces when the statement is within a loop, or when a tracing over a large number of elements. Tracing out a limited number of values is often enough without the browser getting into a blocked wait situation, as tracing is heavy.

## Example use
This example uses htmlHelper to trace the example to the screen, but **DivertTrace** is not need.

[TraceCount live example>](https://nanjizal.github.io/TraceCount/example.html)

Example.hx
```haxe
package;
import traceCount.TraceCount;
import htmlHelper.tools.DivertTrace;
function main(){
    var timer = new haxe.Timer(100);
    var testCount = 0;
    var divertTrace = new DivertTrace();
    timer.run = function(){
        TraceCount.trace( 'show 10 times: ' + testCount, 10 );
        testCount++;
    }
}
```

```
traceCount.TraceCount.trace ( 35 )
- (_Example.Example_Fields_:main:9) show 10 times: 0
traceCount.TraceCount.trace ( 35 )
- (_Example.Example_Fields_:main:9) show 10 times: 1
traceCount.TraceCount.trace ( 35 )
- (_Example.Example_Fields_:main:9) show 10 times: 2
traceCount.TraceCount.trace ( 35 )
- (_Example.Example_Fields_:main:9) show 10 times: 3
traceCount.TraceCount.trace ( 35 )
- (_Example.Example_Fields_:main:9) show 10 times: 4
traceCount.TraceCount.trace ( 35 )
- (_Example.Example_Fields_:main:9) show 10 times: 5
traceCount.TraceCount.trace ( 35 )
- (_Example.Example_Fields_:main:9) show 10 times: 6
traceCount.TraceCount.trace ( 35 )
- (_Example.Example_Fields_:main:9) show 10 times: 7
traceCount.TraceCount.trace ( 35 )
- (_Example.Example_Fields_:main:9) show 10 times: 8
traceCount.TraceCount.trace ( 35 )
- (_Example.Example_Fields_:main:9) show 10 times: 9
````

Try haxe standalone example
https://try.haxe.org/#6C50EF01
