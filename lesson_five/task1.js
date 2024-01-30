
const averageGrade = 91;
let gradeRate;
if (averageGrade <60)
{gradeRate = "Unsatisfactory"
} else if (averageGrade <=70) {
    gradeRate = "Satisfactory"
} else if (averageGrade <=80)
{gradeRate = "Good"
} else if (averageGrade <=90)
{
    gradeRate = "Very Good"
} else if (averageGrade <=100)
{
    gradeRate = "Excellent"
}
console.log(gradeRate)
