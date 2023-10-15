// [12456897]

const calculateRange = (index, arr) => {
    // for start index we subtract the vision from the current index. If it's not greater than 0 we default to 0.
// 3 - 5
    const startIndex = index - arr[index] > 0 ? index - arr[index] : 0

    // for end index we add the vision to the current index. If it's greater than the array length we default to the
    // array lengths.
//3 + 5= 7
    const endIndex = parseInt(index + arr[index] < arr.length ? index + arr[index] : arr.length)
    const range = arr.slice(startIndex, endIndex + 1)

    //the vision sum is the total sum of all the elements in the array after subtracting the current element.
    const sum = range.reduce((acc, number) => acc + parseInt(number), 0) - arr[index]
    return sum
}

export function isOneWithLowestVision (number) {
    let minSum = Infinity
    const numbers = number.toString().split("")
    for (let i = 0; i < numbers.length; i++) {
        const sum = calculateRange(i, numbers)
        // we calculate the vision sum for each member and if it's lower than the minimum we set it as the minimum.
        if (sum < minSum) {
            minSum = sum
        }
        console.log(sum)

    }
    // we iterate over the numbers again and check if any of the 1s have the minimum vision sum.
    for (let i = 0; i < numbers.length; i++) {
        const currentNumber = numbers[i]
        if (currentNumber == 1) {
            const sum = calculateRange(i, numbers)
            if (sum <= minSum) {
                console.log("trueee")
                return true
            }
        }
    }
    // if not we return false
    return false

}



console.log(isOneWithLowestVision(123456789))