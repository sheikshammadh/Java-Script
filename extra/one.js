function even_and_odd(min,max) {
    let evenNum = Math.floor(Math.random()*((20 - 10) / 2 + 1)) * 2 + 10;
    let oddNum = evenNum + 1;
    if (oddNum > max) {
        oddNum = evenNum - 1;
    }
    console.log(evenNum);
    console.log(oddNum);
}

even_and_odd(10, 20);
