/*
// String - ตัวอักษร
let fname = 'John'
console.log('name',fname)
const idcard = '123'


// number
let age = 30
let height = 169.5
const pi = 3.14

fname = 'Tom'

idcard = '456'

console.log('idcard',idcard)
console.log("name",fname,"age",age)
//console.log("age",age)

*/


/**
 + บวก
 - ลบ
 * คูณ
 / หาร
 % mod หารเอาเศษ
 */


/**
 condtition statement (if,else,switch)
 == เท่ากับ
 != ไม่เท่ากับ
 > มากกว่า
 >= มากกว่าเท่ากับ
 < น้อยกว่า
 <= น้อยกว่าเท่ากับ
 */
/*
 let number1 = 5
let number2 = 5
/*
let sname = 'Warodom' //String
let lname = 'Butnamede'

let condtition1 = number1 <= number2 //Boolean (True, false)
let namex = sname  + ' ' + lname
console.log('condition is   = ',condtition1)
*/

//if - else condition

/*
if (number1 != number2){
    console.log('condition true')
} else if (number1 == number2) {
    console.log('this else if')
} else{
    console.log('this else')
}

/*
Grade
>=80 A
>=70 B
>=60 C
>=50 D
else f
*/
/*
let score = 55
if(score >= 80){ //False
    console.log('Grade = A')
}else if(score >= 70){ //False
    console.log('Grade = B')
}else if(score >= 60){ //False
    console.log('Grade = C')
}else if(score >= 50){ //True
    console.log('Grade = C')
}else{ //False
    console.log('Grade = F')
}

/*
&& และ
|| หรือ
! not ไม่
*/
/*
let number1 = 5
let number2 = 10

// T && T = T
// T || F = T
// !(T || F) = F
let condition = !(number1 >= 3 || number2 >= 11) 
console.log('result of condition = ',condition)

let number = 20
if (number %2 ==0) {
    console.log('you are event.')
}
*/


/*
for  
*/
/*
let counter = 0

while (counter <= 9){ //True
    console.log('Hi') 
    counter += 1
}
1. // counter = counter + 1
2. // counter +=1
3. // counter ++

for (let counter = 0; counter < 10; counter++){
    console.log('Hi')
}*/

/*
array
*/
/*
let age1 = 20
let age2 = 25
let age3 = 30

let ages = [50,20,25,30,35,40]
//แทนที่
/*
ages = [200,100,50]

console.log('age1 age2 age3 =',age1, age2, age3)
console.log(`age1 age2 age3 ${age1} ${age2} ${age3}`)
console.log('array =',ages)

console.log('index',ages[0],ages[1],ages[2])

// ต่อ array
ages.push(25)
console.log('array =',ages)

// ลบ array
ages.pop()
console.log('pop array',ages)
*/
/*
if (ages.includes(30)){
    console.log('มีเลข 30 อยู่ใน array')
}

ages.sort()
console.log(ages)

let name_list = ['aa','bb','cc']
name_list.push('dd')
console.log(name_list)

name_list.pop()
console.log('pop name_list',name_list)
console.log('name_list',name_list.length)

console.log('name_list',name_list[0])
console.log('name_list',name_list[1])
console.log('name_list',name_list[2])

for (let index = 0; index < name_list.length; index++){
    console.log('name_list',name_list[index])
}
*/
/*
object
*/
/*
let student = [{
    age: 30,
    name: 'aa',
    grade: 'A'
},{
    age: 35,
    name: 'bb',
    grade: 'B'
}]
/*
console.log(student)

console.log(student.age)
console.log(student.name)
console.log(student.grade)

let age1 = 30
let name1 = 'aa'
let grade1 = 'A'

let age2 = 30
let name2 = 'bb'
let grade2 = 'B'*//*
student.push({
    age: 40,
    name: 'cc',
    grade: 'C'
})

student.pop()

for (let index = 0; index < student.length; index++){
    console.log('Studen Number', (index + 1))
    console.log('age',student[index].age)
    console.log('name',student[index].name)
    console.log('grade',student[index].grade)
}*/

/*
function
*/
/*
let score1 = 55
let score2 = 65

let grade = ''

function calculat_grade (score){
   if (score>=80){
    grade = 'A'
   }else  if (score>=70){
    grade = 'B'
   }else  if (score>=60){
    grade = 'C'
   }else  if (score>=50){
    grade = 'D'
   }else{
        grade = 'F'
   }
return grade
}
 
//เรียกใช้
let grade1 = calculat_grade(score1)
console.log('Grade',grade1)


/*
array
*/
/*
let score =[20,30,40,50]
/*
let newScore = []
*//*
for (let index =0; index < score.length;index++){
    console.log('score',score[index])
    /*
    if (score[index] >= 30){
        newScore.push(score[index])
    }
}
/*
score[0] = score[0]*2
score[1] = score[1]*2
score[2] = score[2]*2
score[3] = score[3]*2
*/
/*
score = score.map((s) => {
    return s * 2
})

let newScore = score.filter((s) =>{
    /*if (s >= 30){
        return true
    }else{
        return false
    }
    return s >= 30
})

newScore.forEach((ns) =>{
    console.log('New score',ns)
})*/

/*
object function
*/

let students = [
    {
        name:'aa',
        score: 50,
        grade: 'D'
    },{
        name:'bb',
        score: 80,
        grade: 'A'
    }
]

let student = students.find((s) => {
    if (s.name = 'aa'){
        return true
    }
})
let double_score = students.map((s) =>{
    s.score = s.score * 2
    return s
})

let highScore = students.filter((s) =>{
    if(s.score >= 120)
        return true
})

console.log(student)
console.log('double_score',double_score)
console.log('highScore',highScore)