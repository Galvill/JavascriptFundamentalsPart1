//hello world
/*
let js = 'amazing';
console.log(40 + 8 + 23 -10);

console.log('oren');
console.log(8);
let firstName = 'oren';


console.log(firstName);
console.log(firstName);
console.log(firstName);

// variable name conventions
let OrenAndNoa = 'on';
let $function = 8;
let person = 'oren'
let PI = 3.1415;
let MyFirstJob = 'coder';
let MyCurrentJob = 'Teacher';
let job1 = 'programmer';
let job2 = 'teacher';

console.log(MyFirstJob);
*/

/*
let javascriptIsFun = true;
console.log(javascriptIsFun);
// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 8);
// console.log(typeof 'oren');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 2012;
console.log(typeof year);

console.log(typeof null);
*/

//let const and var
/*
let age = 8;
age = 9;

// const BirthYear = 2012;
// BirthYear = 2021

var job = 'programmer';
job = 'teacher';

let LastName = 'vilaret';
console.log(LastName);
*/

//basic operators
/*
    //Math operators
    const Now = 2021;
    const AgeOren = Now - 2012;
    const AgeNoa = Now - 2015;
    console.log('oren:',AgeOren, 'noa:', AgeNoa);

    console.log(AgeOren * 2, AgeOren / 2);

    const FirstName = 'oren';
    const LastName = 'villaret';
    console.log(FirstName + ' ' + LastName);

    //Assignment operators
    let x = 10 + 5;
    x += 10;
    x *= 4;
    x++;
    x--;
    x--;
    console.log(x);

    //Comparison operators
    console.log(AgeOren > AgeNoa);
    console.log(AgeNoa >= 5);

    const IsFulAge = AgeNoa >= 5;

    console.log(Now - 2012 > Now - 2015);
 */

//Operator Precedence
/*
    const Now = 2021;
    const AgeOren = Now - 2012;
    const AgeNoa = Now - 2015;

    console.log(Now - 2012 > Now - 2015);

    let x, y;
    x = y = 25 - 10 -5;
    console.log(y, x);

    const Age = (AgeOren + AgeNoa) / 2;
    console.log(Age, AgeNoa, AgeOren);

*/

//Coding Challenge #1
/*
    const MassOren = 25;
    const HeightOren = 1.35
    const MassNoa = 18;
    const HeightNoa = 1.10;

    const BMIOren = MassOren / HeightOren ** 2;
    const BMINoa = MassNoa / (HeightNoa * HeightNoa);
    const OrenHigherBMI = BMIOren > BMINoa;
    console.log(BMINoa, BMIOren, OrenHigherBMI);
 */

//Strings and Template Literals
/*
    const  FirstName = 'oren';
    const  job = 'student';
    const BirthYear = 2012;
    const Year = 2021;

    const Oren = "I'm " + FirstName + ', a ' + (Year - BirthYear) + ' years old ' + job + '!';
    console.log(Oren);

    const NewOren = `i'm ${FirstName}, a ${Year - BirthYear} year old ${job}!`;
    console.log(NewOren);

    console.log(`just a regular string... `);

    console.log('string with \n\ multiple \n\ lines');
     */

//Taking Decisions: if / else Statements
/*
    const age = 8;

    if(age >= 7){
        console.log('oren');
    }else{
        console.log('noa');
    }
    let century
    const BirthYear = 2012;
    if (BirthYear <= 2000){
         century = 20;
    }else{
         century = 21;
    }
    console.log(century);
 */

//Coding Challenge #2
/*
     const MassOren = 25;
     const HeightOren = 1.35
     const MassNoa = 18;
     const HeightNoa = 1.10;

     const BMIOren = MassOren / HeightOren ** 2;
     const BMINoa = MassNoa / (HeightNoa * HeightNoa);
     console.log(BMIOren, BMINoa);

     if(BMINoa > BMIOren){
         console.log(`Noa's BMI (${BMINoa}) is higher than oren's (${BMIOren})`);
     }else{
         console.log(`oren's BMI (${BMIOren}) is higher than Noa's (${BMINoa})`);
     }
 */

//Type Conversion and coercion
/*
    const InputYear = '2012';
    console.log(Number(InputYear), InputYear);
    console.log(Number(InputYear) + 8);

    console.log(Number('jonas'));
    console.log(typeof NaN);

    console.log(String(8), 8);

    console.log('i am ' + 8 + ' years old');
    console.log(('23' + '10' + 3));
    console.log('23' / '2');
    console.log('23' > '18');

    let n = '1' + 1;
    n = n -1;
    console.log(n);
     */

//Truthy and Falsy Values
/*
    console.log(Boolean(0));
    console.log(Boolean(undefined));
    console.log(Boolean('oren'));
    console.log(Boolean({}));
    console.log(Boolean(''));

    const money = 0;
    if (money) {
        console.log("don't spend it all");
    }else{
        console.log('you should get a job!');
    }

    let height;
    if (height){
        console.log('yay height is defined')
    }else {
        console.log('height is undefined')
    }
     */

// Equality Operators: == vs. ===
/*
    const Age = 8;
    if (Age === 8){
        console.log(Age);
    }

    if (8 == Age){
        console.log(0)
    }

    const favourite =  Number(prompt("what's your favourite number"));
    console.log(typeof favourite);
 */

//Logical Operators
/*
    const HesDrivingLicense = true; // A
    const HesGoodVision = true; // B

    console.log(HesDrivingLicense && HesGoodVision);
    console.log(HesDrivingLicense || HesGoodVision);
    console.log(!HesDrivingLicense);


    // if (HesDrivingLicense && HesGoodVision){
    //     console.log('ifat is able to drive!');
    // }else{
    //     console.log('someone else should drive...')
    // }

    const IsTired = false; // C
    console.log(HesDrivingLicense && HesGoodVision && IsTired && !IsTired);

if (HesDrivingLicense && HesGoodVision){
    console.log('ifat is able to drive!');
}else{
    console.log('someone else should drive...')
}
 */

//Coding Challenge #3
/*
    //     const ScoreDolphins = (96 + 108 + 89) / 3;
    //     const ScoreKoalas = (88 + 91 + 110) / 3;
    //     console.log(ScoreDolphins, ScoreKoalas);
    //
    //     if (ScoreDolphins > ScoreKoalas){
    //         console.log('dolphins win the trophy 🏆');
    //     }else if (ScoreKoalas > ScoreDolphins){
    //         console.log('koalas win the trophy 🏆');
    //     }else if (ScoreDolphins === ScoreKoalas){
    //         console.log('both win the trophy 🏆');
    //     }

    //bonus 1
        const ScoreDolphins = (97 + 112 + 80) / 3;
        const ScoreKoalas = (109 + 95 + 50) / 3;
        console.log(ScoreDolphins, ScoreKoalas);

        if (ScoreDolphins > ScoreKoalas && ScoreDolphins >= 100){
            console.log('dolphins win the trophy 🏆');
        }else if (ScoreKoalas > ScoreDolphins && ScoreDolphins >= 100){
            console.log('koalas win the trophy 🏆');
        }else if (ScoreDolphins === ScoreKoalas && ScoreDolphins >= 100 && ScoreKoalas >= 100){
            console.log('both win the trophy 🏆');
        }else{
            console.log('no one wins the trophy😭')
        }
 */

//The switch Statement
/*
  const Day = 'wednesday';

  switch (Day){
      case "monday": //if day === 'monday'
          console.log('Plan course structure');
          console.log('go to coding meetup');
          break;
      case 'tuesday': // if day === tuesday
          console.log('prepare theory videos');
          break;
      default:
          console.log('not a valid day!')
  }
 */

//Statements and Expressions
/*
    3 + 4
    1991
    true && false && !false

    if (23 > 10){
        const str = '23 is bigger';
    }

    const me = 'oren';
    console.log(`i am ${2021 - 2012} years old ${me}`);
*/

//The Conditional (Ternary) Operator
/*
    const age = 9;
     age >= 8 ? console.log('yes') :
         console.log('no');

    const yes_or_No = age >= 8 ? 'yes' : 'no';
    console.log(yes_or_No);

    let yes_or_no_2;
    if(age >= 8){
        yes_or_no_2 = 'yes'
    }else{
        yes_or_no_2 = 'no'
    }
    console.log(yes_or_no_2);
 */

//Coding Challenge #4
/*
    const bill = 275
    const tip = bill <= 300 && bill >= 50 ? bill * 0.15 :
        bill* 0.2;
    console.log(`the bill was ${bill} the tip was ${tip}, and the total value ${bill + tip}`)
 */
//JavaScript Releases: ES5, ES6+ and ESNext


