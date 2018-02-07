const getGeoLocation =  (options)  =>
   new Promise( (resolve, reject) =>
    navigator.geolocation.getCurrentPosition(resolve, reject, options))

export {  getGeoLocation } 