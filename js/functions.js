const getRandom = () => {
    return Math.floor(Math.random() * 6) + 1;
}

let rollCount = 0;
let rollCountString =

document.getElementById('dice').addEventListener('click', () => {
    const side = getRandom();
    const sideString = side.toString();
    const rollNumberElement = document.getElementById('rollNumber');

    rollCount += 1;
    document.querySelector('#dice img').src = "./" + sideString + ".png";
    rollNumberElement.textContent = `Arvottujen noppien määrä: ${rollCount}`;  
})
