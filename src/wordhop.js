const backBtn = document.getElementById('goBack');

// back to game mode
backBtn.addEventListener('click', function (e) {
    e.preventDefault();
    window.location.href = 'gamemode.html';
})

let temp_word = 'fives'

// game mode
let states = localStorage.getItem("state")
// letters
let keys = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// classes lists :-

// new letter classes
let new_letter_add = ['border-[#878A8C]', 'animate-shake']
let new_letter_remove = 'border-[#D3D6DA]'

//common removal
let common_removal = ['bg-white', 'border-[#878A8C]']

// wrong letter :-
let wrong_letter = ['bg-[#787C7E]', 'border-[#787C7E]', 'text-white']

// correct letter wrong position :-
let correct_letter_wrong_pos = ['bg-[#C9B458]', 'border-[#C9B458]', 'text-white']

// correct letter correct position :-
let correct_letter = ['bg-[#6AAA64]', 'border-[#6AAA64]', 'text-white']

// animations :-
let general_anim = 'animate-shake'
let enter_anim = 'animate-rotate'
let wrong_anim = 'animate-vibrate'
let correct_anim = 'animate-bouncy'



if (states == 'daily') {
    console.log('daily')
}else if (states == 'infinite'){
    console.log('infinite')
}

// changed border color - #878A8C animate-shake 0.2s
// hit enter - rotate anim 0.5s
// wrong answer at the end or not a word - animate-vibrate 0.5s
// correct guess - animate-bouncy 0.5s

// letter not in word bg - #787C7E and border, color white
// letter in word wrong position bg - #C9B458 and border, color white
// letter in word right position bg - #6AAA64 and border, color white