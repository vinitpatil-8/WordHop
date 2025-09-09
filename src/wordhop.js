const backBtn = document.getElementById('goBack');

backBtn.addEventListener('click', function (e) {
    e.preventDefault();
    window.location.href = 'gamemode.html';
})

let states = localStorage.getItem("state")
if (states == 'daily') {
    console.log('daily')
}else if (states == 'infinite'){
    console.log('infinite')
}

// changed border color - #878A8C
// letter not in word bg - #787C7E and border, color white
// letter in word wrong position bg - #C9B458 and border, color white
// letter in word right position bg - #6AAA64 and border, color white