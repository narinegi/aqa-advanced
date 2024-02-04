//const  a = 18;
//const b = a>=18;
//console.log(b);

//console.log(true || false);
//console.log(false || true);

//const averageGrade = 89;
//let x = 10;
//let y = 5;
//if (averageGrade > 80) {
    //console.log("Well Done");
    //if (averageGrade > 95) {
        //console.log("Well well done ");
   // } else {
        //console.log("Redo");
   // }
//} else {
    //console.log("Redo");
//}
//console.log(typeof NaN);
//console.log(0/0);
//console.log(1 || NaN);

//console.log(true && false);
//console.log(0 && 1);
//const isMarried = true;
//const hasChildren = false;
//const bonus =isMarried || hasChildren;
//console.log("bonus", bonus);

//const isMarried = true;
//const hasChildren = false;
//const bonus =isMarried && hasChildren;
//console.log("bonus", bonus);

//const hasChildren = false;
//const personAge = 22;
//const experience = 0.6;
//const bonus =isMarried && hasChildren && personAge >21 &&experience>1;
//console.log("shouldHaveBonus", bonus);

//const isMarried = true;
//const hasChildren = false;
//const personAge = 22;
//const experience = 0.6;
//const bonus =isMarried && hasChildren || personAge >21 &&experience>1;
//console.log("shouldHaveBonus", bonus);

//console.log(!false);
//console.log(!1);
//console.log(!undefined);
//console.log(!!1000);
//console.log(1 ?? 0)


//const isMarried  = true;
//console.log( isMarried? "Married" : "single" );

//const isMarried  = false;
//console.log( isMarried? "Married" : "single" );

//const experience = 3;
//const isSenior = experience>5;
//const salary = experience>3 ?3000 : 2000;
//console.log(salary);

//const something = 1 + "10";
//console.log(something);
//console.log("111" + true);
//console.log(typeof "111" -"1");
//console.log("111" * true);

//const something = (1 + Number("111"))

//console.log(something)

//console.log(1+ Number.parseInt("111a"));
//console.log(1 + + "111");

//console.log(1 + String(true));

//const isMarried = false;
//if (isMarried){
    //console.log("Person is married")
//}
//console.log("NOT MARRIED")

//const isMarried = false;
//if (isMarried){
   // console.log("Person is married")
//}
//else {console.log("Person is not married")}

//const userAge = 12;
//let accessType

//if (userAge>=18) {
    //accessType = "Full Access";
//} else if (userAge>=14) {
   // accessType = "Limited";
//}
//else {
    //accessType = "No Access"
//}
//console.log(accessType)



//const averageGrade = 91;
//let gradeRate;
//if (averageGrade <60)
//{gradeRate = "Unsatisfactory"
//} else if (averageGrade <=70) {
  //  gradeRate = "Satisfactory"
//} else if (averageGrade <=80)
//{gradeRate = "Good"
//} else if (averageGrade <=90)
//{
    //gradeRate = "Very Good"
//} else if (averageGrade <=100)
//{
    //gradeRate = "Excellent"
//}
//console.log(gradeRate)



//const userAge = 11;
//const name = "Peter"
//if (userAge >= 18){
   // if (name.length>3)
   // {console.log("Adult with a long name")
   // }
   //else {console.log("Adult with a short name")}
//}
//else {console.log("Not an Adult")}

//const  userAge = 12;
//switch (userAge) {
   // case 10:
      //  console.log("ten years")
      //  break
  //  case 11:
      //  console.log("11 years")
     //   break
   // case 12:
      //  console.log(12)
     //   break
    //default: console.log("Unhandled age")
//}

//const averageGrade = 91;
//let rate
//switch (true) {
    //case averageGrade<60:
   //     rate ="Unsatisfactory"
    //    break
   // case averageGrade<=70:
    //    rate = "Satisfactory";
    //case averageGrade<=80:
    //    rate = "Good";
    //    break
   // case averageGrade<=90:
   //   rate = "Very Good";
    //    break
  //  case averageGrade<=100:
   //    rate = "Excellent";
     //   break

//}
//console.log("Based on your average grade your rate is", rate);


//const isMarried = true;
// yearsInCompany = 1;
//switch (true){
    //case isMarried && yearsInCompany >5:
    //console.log("Congrats and 1000$")
     //   break
    //case isMarried && yearsInCompany >2:
     //   console.log("Congrats and 200$")
      //  break
   // default:
     //   console.log("Good luck")
//}

//for (let i = 1; i <= 10; i+=2){
  //  console.log(`Index ${i}`)
//}
//console.log("Finish")


//for (let i = 1; i<=10; i++)
//{
   // if (i %2 !==0){
   //     continue
   // }
    //console.log(`Index ${i}`)
//}
//console.log("Finish")


//for (let i = 1; i<=10; i++)
//{
//if (i %2 ===0){
 //   continue
//}
//if (i===5){
 //   break
//}
//console.log(`Index ${i}`)
//}
//console.log("Finish")

//let index = 0;
//while(index<10)
//{
   // console.log(index)
   // index++
//}

//const number = 5;

//for (let i = 1; i <= 10; i++)
//{
 //console.log(`${number} * ${i}= ${number*i}`)
//}
//console.log("Here are the results")


//const number = 5;
//let index = 1;
//while (index <=10){
 //console.log(`${number} * ${index}= ${number * index}`)
 //index ++
//
//console.log("Here are the results")
for (let i = 0; i<10; i++)
{ for (let j = 0;i<10; i++ )
{console.log(`${i}.${j}`)
}

}

