const arrayanalysis = (arr) => {
    arr.sort();

    const len = arr.length;
    const min = arr[0];
    const max = arr[len - 1];
    const avg = arr.reduce((a,b) => a + b, 0) / arr.length;

    let object = {};

    object.average = avg;
    object.min = min;
    object.max= max;
    object.length = len;
    
    return object;
}

export{arrayanalysis}