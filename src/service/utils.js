function secondsToMinutes(seconds){
    return new Date(1000*seconds).toISOString().slice(14 ,-5)
}
export{secondsToMinutes}