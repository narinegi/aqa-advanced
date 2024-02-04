function calculateRectangle (width1, height1)//function declaration
{
    //console.log(sumOfWidthHeight)
    const calculateRectangleArea = width1 * height1
    return calculateRectangleArea
}
const widthHeight = calculateRectangle (100,450)

console.log(widthHeight)



//Expression

const calculateRectangle2 = function (width2, height2)
{
    const calculateRectangleArea2 = width2 * height2
    return calculateRectangleArea2
}
console.log(calculateRectangle2(234, 389))

//Arrow function

const calculateRectangle3 = (width3, height3) =>
{
    const calculateRectangleArea3 = width3 * height3
    return calculateRectangleArea3
}
console.log(calculateRectangle3(776, 1000))