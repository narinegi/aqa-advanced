const averageGrade = 91;
let rate
switch (true) {
    case averageGrade<60:
        rate ="Unsatisfactory"
        break
    case averageGrade<=70:
        rate = "Satisfactory";
    case averageGrade<=80:
        rate = "Good";
        break
    case averageGrade<=90:
        rate = "Very Good";
        break
    case averageGrade<=100:
        rate = "Excellent";
        break


}
console.log("Based on your average grade your rate is", rate);
