const dateHolder = document.getElementById("dateHolder");

const d = new Date();
let monthnum = d.getMonth();
let monthlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let month = monthlist[monthnum]
let day = d.getDate();
let year = d.getFullYear();
let fullDate = `${month} ${day}, ${year}`
dateHolder.innerHTML = fullDate