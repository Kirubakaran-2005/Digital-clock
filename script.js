function update_24()
{
    let now = new Date();

    let date = now.getDate().toString().padStart(2,0);
    let year = now.getFullYear().toString().padStart(2,0);
    let month = (now.getMonth()+1).toString().padStart(2,0);
    let day = now.getDay();

    switch(day)
    {
        case 0: day = "Sunday"; break;
        case 1: day = "Monday"; break;
        case 2: day = "Tuesday"; break;
        case 3: day = "Wednesday"; break;
        case 4: day = "Thursday"; break;
        case 5: day = "Friday"; break;
        case 6: day = "Saturday"; break;
    }

    let hours = now.getHours().toString().padStart(2,0);
    let minutes = now.getMinutes().toString().padStart(2,0);
    let seconds = now.getSeconds().toString().padStart(2,0);

    const time = `${hours} : ${minutes} : ${seconds}`;
    const ddmmyy = `${date}/${month}/${year}`;
    document.getElementById("time").textContent = time;
    document.getElementById("ddmmyy").textContent = ddmmyy;
    document.getElementById("day").textContent = day;
}

function update_12()
{
    let now = new Date();

    let date = now.getDate().toString().padStart(2,0);
    let year = now.getFullYear().toString().padStart(2,0);
    let month = (now.getMonth()+1).toString().padStart(2,0);

    let day = now.getDay();

    switch(day)
    {
        case 0: day = "Sunday"; break;
        case 1: day = "Monday"; break;
        case 2: day = "Tuesday"; break;
        case 3: day = "Wednesday"; break;
        case 4: day = "Thursday"; break;
        case 5: day = "Friday"; break;
        case 6: day = "Saturday"; break;
    }

    let hours = now.getHours();
    let meridian = hours>=12? "PM":"AM";
    hours = hours%12 || 12;
    hours = hours.toString().padStart(2,0);
    let minutes = now.getMinutes().toString().padStart(2,0);
    let seconds = now.getSeconds().toString().padStart(2,0);

    const time = `${hours} : ${minutes} : ${seconds} ${meridian}`;
    const ddmmyy = `${date}/${month}/${year}`;
    document.getElementById("time").textContent = time;
    document.getElementById("ddmmyy").textContent = ddmmyy;
    document.getElementById("day").textContent = day;

}

let currentinterval = setInterval(update_24,1000);

document.getElementById("12hr").onclick = ()=>
{
    clearInterval(currentinterval);
    currentinterval = setInterval(update_12,1000);
}
document.getElementById("24hr").onclick = ()=>
{
    clearInterval(currentinterval);
    currentinterval = setInterval(update_24,1000);
}