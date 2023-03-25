const arr = [2, 4, 0, 100, 4, 11, 2602, 36]

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
    }

    if (odds === 1) {
        for (i = 0; i < arr.length; i++) {
            if (arr[i] % 2 !== 0) {
                return arr[i]
            }
        }
    }
}

console.log(checkForOutlier(arr))