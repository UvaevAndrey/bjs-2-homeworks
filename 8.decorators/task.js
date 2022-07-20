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



function debounceDecoratorNew(func,diff) {
  let timerId;
  return function(...args) {
    if (timerId === undefined) {
        timerId = Date.now();
        func.apply(this, args);
    } else {
        let passedTime = Date.now() - timerId;
        if (passedTime >= diff) {
            timerId = Date.now();
            func.apply(this, args);
        }
    }
  }
}


function debounceDecorator2(func,diff) {
 
  let timerId;
  let time = false;

  function wrapper (...args) {
    clearTimeout(timerId);

    if(!time) {
      func(...args);
      wrapper.count ++;
      time = true;
    }

    timerId = setTimeout(() => time = false, diff);
  }
  wrapper.count = 0; 
  return wrapper;
}