// code your solution here
// function razzle() {
//     console.log("You've been razzled!");
//   }
//   razzle();

//   function razzle(lawyer = "Billy", target = "'em") {
//     console.log(`${lawyer} razzle-dazzles ${target}!`);
// }
// razzle(); 
// razzle("Methuselah", "T'challah");
// // 

function saturdayFun() {
    console.log("This Saturday, I want to ....")
}

function saturdayFun(defaultActivity = "roller-skate"){
    return `This Saturday, I want to ${defaultActivity}!`
}

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  }
  function wrapAdjective(wrapper = '*'){
    return function (emphatic = 'special'){
        return`You are ${wrapper}${emphatic}${wrapper}!`
    }
}