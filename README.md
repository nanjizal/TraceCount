# TraceCount
Provides a simple way to trace a value a limited number of times, for instance if debugging a line of code that runs lots of times you don't want the overhead of visual trace for every occurance, just enough to check it's running and a value.

```haxe
import traceCount.TraceCount;
class Test {
  static function main() {
    new Test();
  }
  var testCount = 0;
  public function new(){
  	var timer = new haxe.Timer(100);
    timer.run = test;
  }
  public function test(){
		TraceCount.trace( 'show 10 times: ' + testCount, 10 );
    TraceCount.trace( 'show 5 times: ' + testCount, 5 );
    testCount++;
  }
}
```
