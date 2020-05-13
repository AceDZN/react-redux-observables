import {  share} from 'rxjs/operators'

var Memoizer = (function(){
  //Private data
 var cache = {};

 //named functions are awesome!
 function catcher(func){
    return function(...args){
      var key = JSON.stringify(arguments);
      if(cache[key]){
        console.log(`cache[key] exist ${key}`);
        console.table([cache[key]]);

        return cache[key];
      }
      else{
        let val = func(...args).pipe(share());
        cache[key] = val;
        return val;
    }
  }
}    
  //Public data
 return{
   memo: function(func){
     return catcher(func);
   }
 }
})()

export default Memoizer;


