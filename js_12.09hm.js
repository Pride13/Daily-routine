//just promise
function wakeUp() {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve('Hii world! I am Waked Up')
        },500)
    });
}

function getBreakfast() {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve('I had breakfast')
        },1000)
    });
}

function collectThingsToWork(AllThings) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            let result = AllThings === true;
            if (result === true) {
                resolve('I took all my things')
            } else {
                reject('I forgot my things')
            }
        }, 1000)
    });
}

function RoadOnWork(jam) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            let result = jam === true;
            result === true ? reject('I stay in a jam') : resolve('I came to work on time')
        }, 1500)
    });
}

function Working() {
    return new Promise((resolve, reject) => {
       setTimeout(()=> {
           resolve('I was working all day')
       },3000)
    });
}

function lunch(money) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            let result = money === true;
            if (money === true){
                resolve('I ate a lot')
            } else {
                reject('I was hungry, rest of day')
            }
        }, 500)
    });
}

function Working2() {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve('I was working, rest of day')
        },2000)
    });
}

function drinkCoffe() {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve('Good coffe')
        },300)
    });
}

function RoadToHome(jam) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            let result = jam === true;
            result === true ? reject('I stay in a jam') : resolve('I came to home early')
        }, 1500)
    });
}

function goToSleep() {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve('I had a hard day')
        },600)
    });
}

wakeUp()
    .then(value => {
        console.log(value);
        return getBreakfast()
    })
    .then(value => {
        console.log(value);
        return collectThingsToWork(true)
    })
    .catch(reason => {
        console.error(reason);
    })
    .then(value => {
        console.log(value);
        return RoadOnWork()
    })
    .catch(reason => {
        console.error(reason)
    })
    .then(value => {
        console.log(value);
        return Working()
    })
    .then(value => {
        console.log(value);
        return lunch(true)
    })
    .catch(reason => {
        console.error(reason)
    })
    .then(value => {
        console.log(value);
        return Working2()
    })
    .then(value => {
        console.log(value);
        return drinkCoffe()
    })
    .then(value => {
        console.log(value);
        return RoadToHome()
    })
    .catch(reason => {
        console.error(reason)
    })
    .then(value => {
        console.log(value);
        return goToSleep()
    })
    .catch(reason => {
        console.error(reason)
    })
    .then(value => {
        console.log(value);
        return goToSleep()
    });

//async
function wakeUp() {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve('Hii world! I am Waked Up')
        },500)
    });
}

function getBreakfast() {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve('I had breakfast')
        },1000)
    });
}

function collectThingsToWork(AllThings) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            let result = AllThings === true;
            if (result === true) {
                resolve('I took all my things')
            } else {
                reject('I forgot my things')
            }
        }, 1000)
    });
}

function RoadOnWork(jam) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            let result = jam === true;
            result === true ? reject('I stay in a jam') : resolve('I came to work on time')
        }, 1500)
    });
}

function Working() {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve('I was working all day')
        },3000)
    });
}

function lunch(money) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            let result = money === true;
            if (money === true){
                resolve('I ate a lot')
            } else {
                reject('I was hungry, rest of day')
            }
        }, 500)
    });
}

function Working2() {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve('I was working, rest of day')
        },2000)
    });
}

function drinkCoffe() {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve('Good coffe')
        },300)
    });
}

function RoadToHome(jam) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            let result = jam === true;
            result === true ? reject('I stay in a jam') : resolve('I came to home early')
        }, 1500)
    });
}

function goToSleep() {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve('I had a hard day')
        },600)
    });
}

async function asaw() {
    let a = await wakeUp();
    console.log(a);
    let b = await getBreakfast();
    console.log(b);
    let c = await collectThingsToWork(true);
    console.log(c);
    let d = await RoadOnWork();
    console.log(d);
    let e = await Working();
    console.log(e);
    let r = await lunch(true);
    console.log(r);
    let t = await Working2();
    console.log(t);
    let y = await drinkCoffe();
    console.log(y);
    let u = await RoadToHome();
    console.log(u);
    let i = await goToSleep();
    console.log(i);
}
asaw();