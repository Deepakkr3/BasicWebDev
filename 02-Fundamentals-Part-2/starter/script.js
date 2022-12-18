'use strict';
// let drivLicence=false;
// const pass=true;
// if(pass)  drivLicence=true;
// if(drivLicence) console.log("ya you can drive")
// function juice(apple,orange)
// {    console.log(apple,orange);
//     const mix=`prepared juce with ${apple} apple and ${orange} orange`;
//     return mix;
// }
// const r=juice(2,3);
// console.log(r);/
//Arrow function

// const Age1=function(Byear)
// {
//     return 2031-Byear;
// }
// console.log(Age1(1992));
// const Age2=Byear=>2031-Byear;
// console.log(Age2(1992))
// //RetirmentAge
// const RetirmentAge=BirthYear=>{
//     const age3=2031-BirthYear;
//     const Retirment =60-age3;
//     return ` Date of birth is ${BirthYear} and that age is ${age3} and thair retirment age remain ${Retirment}`;
// }
// console.log(RetirmentAge(1991))
//      FROUT PROCESSOR(ONE FUNCTION CALL OTHER)
// function froutCut(frout)
// {
//     return frout*4;
// }
// function froutProcessor(Apple,Orange)
// {
//     const Applecut=froutCut(Apple);
//     const OrangeCut=froutCut(Orange);
//     const juce=`juce mixed of ${Aconst Applecut=froutCut(Applecut} and ${OrangeCut} `;
//     return juce;
// }
// console.log(froutProcessor(2,5));
// const a=(fun1 ,fun2) =>fun1+fun2;
// console.log(a(1,2));
//ARRAY
// const Age1=function(Byear)
// {
//     return 2031-Byear;
// }
// const friend1='manish';
// const friend2='jbjbjv';
// const friend3='mohit';
// const friends=['manish','jbjbjv','mohit'];
// console.log(friends);
// const jonas =new Array(12,13,14,15,16,20);
// console.log(jonas);
// const michael=['raju','babu','friend1','friends'];
// console.log(michael)
// const jonas1=jonas[0];
// const jonas2=jonas[1];
// const jonas3=jonas[2];
// const jonas4=jonas[3];
// const jonas5=jonas[4];
// const jonasL=jonas[jonas.length-1];
// console.log(jonas1,jonas2,jonas3,jonas4,jonasL);
// const jonasAge=[Age1(jonas1),Age1(jonas2),Age1(jonas3),Age1(jonas5)];
// console.log(jonasAge);
// const jonas={
//     firstName:'jonas',
//     dateOfBirth:1991,
//     lastName:'kumar',
//     drivLic:undefined,
//     job:'teacher',
//     friends:['mical','alex','smeth'],
//     calcAge:function()
//     { 
//         return 2031-this.dateOfBirth;
//     }
// }
// console.log(jonas);
// console.log(jonas.dateOfBirth)
// console.log(jonas['Name'])
// const nameKey='Name';
// console.log(jonas['first'+nameKey]);
// console.log(jonas['last'+nameKey]);
// // const interestesAboutJonas=prompt("what do you want to know about jonas");
// // if(jonas[interestesAboutJonas]);
// // {
// //     console.log(jonas[interestesAboutJonas]);
    
// // } 
// jonas['location']='putrgal';
// jonas.eamil='@gmail.com';
// console.log(jonas);
// console.log(`${jonas.firstName} has ${jonas.friends.length} and among them ${jonas.friends[0]} is the best friend`);
// console.log(jonas.calcAge());
// console.log(jonas["calcAge"]());
// const aboJonoas=function()
// {
//     return `${jonas.firstName} is a ${jonas['calcAge']()} year old ${jonas['job']} and he ${(jonas.drivLic)?"have driver licence ":"have no licence"} `;
// }
// console.log(aboJonoas());
//BMI CHALENGE
// const miller={
//     fullName:'miller',
//     hightInFit:5.5,
//     massInKg:72,
//     BMI:function()
//     {
//         return this.massInKg/(this.hightInFit*this.hightInFit);
//     }
// }
// const john={
//     fullName:'john',
//     hightInFit:6.2,
//     massInKg:79,
//     BMI:function()
//     {
//         return this.massInKg/(this.hightInFit*this.hightInFit);
//     }
// }
// const compare=function()
// {
//     if(miller['BMI']()>john['BMI']())
//     {
//         console.log(`the BMI of ${miller.fullName} is ${miller.BMI()} that is gratter than ${john.BMI()} that is ${john.fullName} bmi`);
//     }
//     else
//     {
//         console.log(`john bmi is gratter than miller`);
//     }
// }
// compare();
//FOR LOOP
// for(let rep=1;rep<=10;rep++)
// {
//     console.log('lift the weight go on ' + rep);
// }
//const friends=['manish','jbjbjv',52,'mohit',12];
// for(let x=0;x<friends.length;x++)
// {
//     console.log(friends[x]);
// }
// const year=[1991,1992,1993,1994,1995];
// const age=[];
// for(let i=0;i<year.length;i++)
// {
//     age.push(2037-year[i]);
// }
// console.log(age);
// //--        CONTINUE-----
// for(let i=0;i<friends.length;i++)
// {
//     if(typeof friends[i] !='string')
//        continue;

//     console.log(friends[i],typeof friends[i]);
// }
// for(let i=0;i<friends.length;i++)
// {
//     if(typeof friends[i] =='number')
//        break;

//     console.log(friends[i],typeof friends[i]);
// }
// console.log("lkhiug");
// for(let x=1;x<=5;x++)
// {
//     console.log(`---hello exersise no ${x}---`)
//     for(let y=1;y<=10;y++)
//     {
//         console.log(`now exersise is ${x} and rapitation ${y} is going on`)
//     }
// }
// let rep=1;
// while(rep<=10)
// {
//     console.log(rep)

// rep++;
// }
// 
/* ----CHALANGE---*/
const price=[22,295,176,440,37,105,10,1100,86,52];
const firstTip=[];
const secondTip=[];
for(let i=0;i<price.length-1;i++)
{
    if(0<price[i] && price[i]<=150)
    {
       firstTip.push(price[i]*0.15);
    }
    else{
        secondTip.push(price[i]*0.20)
    }

    
}
console.log(firstTip)
console.log(secondTip);
const avrage =function(arr)
{
    let sum=0;
    for(let i=0;i<arr.length;i++)
    {
        sum+=arr[i];
    }
    return sum/arr.length;
}
console.log(avrage([2,3,6]))



