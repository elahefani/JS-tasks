const clock = document.getElementsByClassName('clock')[0];

const time = () => {
    const currentDate = new Date();
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();
    const am_pm = 'AM';
    if (hour>12) {
        hour=hour - 12;
        am_pm = 'PM';
    }

    clock.textContent = ("0" + hour).substr(-2) + ":" + ("0" + minute).substr(-2) + ":" + ("0" + second).substr(-2) + am_pm;
};


const position = () => {
    const topRandom = Math.random() * (50 - 0) + 0;
    const leftRandom = Math.random() * (100 - 0) + 0;
    console.log(topRandom);
    clock.style.top = topRandom+'rem';
    clock.style.left = leftRandom+'rem';
}


setInterval(time, 1000);
setInterval(position, 5000);
