var MY_NS = (function() {
  
  var hello = function(w) { 
    if(w == null) return "Hello Unknown";

    return "Hello " + w; 
  };

  return { hello: hello };
})();
