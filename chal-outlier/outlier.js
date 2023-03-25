const arr = [160, 3, 1719, 19, 11, 13, -21]

function checkForOutlier(arr) {
    evens = 0
    odds = 0
    for (i = 0; i < arr.length; i++){
        if (arr[i] % 2 === 0) {
            evens++
        } else {
            odds++
        }
    }

    if (evens === 1) {
        for (i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                return arr[i]
            }
        }
    } else {
        for (i = 0; i < arr.length; i++) {
            if (arr[i] % 2 !== 0) {
                return arr[i]
            }
        }
    }
}

console.log(checkForOutlier(arr))