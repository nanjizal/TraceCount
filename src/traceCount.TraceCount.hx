package traceCount;
@:structInit
class CodeLocation{
	public var fileName: String;
  public var lineNumber: Int;
	public var count: Int;
  public function new( fileName: String, lineNumber: Int
                      , count: Int ){
	this.fileName   = fileName;
    this.lineNumber = lineNumber;
    this.count      = count;
  }
}
class TraceCount{
  public static var arr = new Array<CodeLocation>();
  public static function trace( d: Dynamic, counting: Int
                              , ?pos:haxe.PosInfos ) {
		var exists = false;
    var v: CodeLocation;
    if( arr.length == 0 ){
      arr[ 0 ] = { fileName: pos.fileName
                 , lineNumber: pos.lineNumber
                 , count: 0
                 }
    }
    for( i in 0...arr.length ){
			v = arr[i];
      if( v.fileName == pos.fileName 
         && v.lineNumber == pos.lineNumber )
      {
					exists = true;
        	if( v.count < counting ){
	            var methodName = pos.methodName;
                var lineNumber = pos.lineNumber;
                var className  = pos.className;	
                trace( '($className:$methodName:$lineNumber) $d' );
                v.count++;
          } else {
						
          }
        break;
      }
      if( !exists ){
        arr[ arr.length ] = { fileName: pos.fileName
                            , lineNumber: pos.lineNumber
                            , count: 0
                            }
      }
    }
  }
}
