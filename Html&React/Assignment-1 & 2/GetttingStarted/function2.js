function $(){
    this.name= "Jquery Mock";
};
 var b = function(){
      console.log("b function of $");
}
// function b(){
//     console.log("b function of $");
// }
$.b=b;
$.b();