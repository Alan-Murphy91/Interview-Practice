/* You are given an n x n 2D matrix that represents an image. Rotate the image by 90 degrees (clockwise). */

function rotateImage(a) {
    let b = [];
    for(let i=0; i<a.length; i++){
        b.push([]);
    }

    for(let i=0; i<a[0].length; i++){
        for(let j=0; j<a[0].length; j++){
            b[j].unshift(a[i][j]);
        }
    }
    return b;
}


/* use the j value first instead of i to iterate through the nested array and add arr[i][j] to the front */