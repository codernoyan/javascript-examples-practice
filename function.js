// function declaration
function startFan() {
    console.log('Stand up');
    console.log('Walk towards the switch');
    console.log('Press the switch');
}

// startFan();
// console.log('Walking up in the morning');
// startFan();
// console.log('Eating lunch');
// console.log('Watching JS Tutorial');
// startFan();

// advance
// call / invoke a function inside a loop
for (let i = 0; i < 10; i++){
    startFan();
    console.log(i);
}

// run a loop inside a function
function startLoop() {
    for (let i = 1; i <= 39; i++){
        console.log('আজকে আমার মন ভালো নেই।');
        console.log(i);
    }
}

// startLoop();