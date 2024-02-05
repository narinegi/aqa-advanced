//Function declaration

function calculateRectangleArea (width1, height1) {
    //console.log(sumOfWidthHeight)
    const rectangleArea = width1 * height1
    return rectangleArea
}
const areaOfRectangle = calculateRectangleArea (100,450)

console.log(areaOfRectangle)



//Function Expression

const calculateRectangleArea2 = function (width2, height2) {
    const rectangleArea2 = width2 * height2
    return rectangleArea2
}
console.log(calculateRectangleArea2(234, 389))




//Arrow function


const calculateRectangleArea3 = (width3, height3) => {
    const rectangleArea3 = width3 * height3
    return rectangleArea3
}
console.log(calculateRectangleArea3(776, 1000))
