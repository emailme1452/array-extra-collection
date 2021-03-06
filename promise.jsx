let myFirstPromise = new Promise((resolve, reject) => {
    // We call resolve(...) when what we were doing async succeeded, and reject(...) when it failed.
    // In this example, we use setTimeout(...) to simulate async code.
    // In reality, you will probably be using something like XHR or an HTML5 API.
    setTimeout(function(){
      resolve("Success!"); // Yay! Everything went well!
    }, 250);
});

myFirstPromise.then((successMessage) => {
  // successMessage is whatever we passed in the resolve(...) function above.
  // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
  console.log("Yay! " + successMessage);
});


/*

 The Promise object is used for asynchronous computations.
 A Promise represents a value which may be available now, or in the future, or never.

 */

/*

promise is a wrapper to async calls

 */
