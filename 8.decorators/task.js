function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
      const hash =  args.join(','); 
      let objectInCache = cache.find((item) => item === hash);
      if (objectInCache) { 
          objectInCache = func.call(this, ...args);
          console.log("Из кэша: " + objectInCache); 
          return "Из кэша: " + objectInCache;
      }

      let result = func(...args); 
      cache.push(hash) ; 
      if (cache.length > 5) { 
        cache.shift  
      }
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;  
  }
  return wrapper;
}



function debounceDecorator2(func) {
  // Ваш код
}
    

 




function debounceDecorator2(func) {
  // Ваш код
}
