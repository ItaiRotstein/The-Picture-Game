//simple random 0-1

function getRandom() {
    return Math.random();
}


//random (min, max)

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

//random 50/50
Math.random() > 0.5 ? true : false