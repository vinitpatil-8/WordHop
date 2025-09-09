const dailyBtn = document.getElementById("dailybtn");
const infiniteBtn = document.getElementById("infinitebtn");


// Daily And Infinite Button Logic

dailyBtn.addEventListener("click", function (e) {
    e.preventDefault();
    localStorage.setItem("state", "daily");
    window.location.href = 'wordhop.html';
});
infiniteBtn.addEventListener("click", function (e) {
    e.preventDefault();
    localStorage.setItem("state", "infinite");
    window.location.href = 'wordhop.html';
});
