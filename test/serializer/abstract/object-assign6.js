var obj = global.__abstract && global.__makePartial && global.__makeSimple ? __makeSimple(__makePartial(__abstract({}, "({foo:1})"))) : {foo:1};

var copyOfObj = {};
Object.assign(copyOfObj, obj);
copyOfObj.x = 10;

inspect = function() {  
  return JSON.stringify(copyOfObj);
}
