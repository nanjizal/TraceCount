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