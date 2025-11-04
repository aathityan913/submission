// get button
const btn = document.getElementById("timeBtn");

// arrow function to update time
const updateTime = () => {
    const now = new Date();
    btn.textContent = now.toLocaleString(); // date + time
    setTimeout(updateTime, 1000); // update every 2 secs
};

// start
updateTime();

