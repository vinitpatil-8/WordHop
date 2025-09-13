let box00 = document.getElementById('box00');
let box01 = document.getElementById('box01');
let box02 = document.getElementById('box02');
let box03 = document.getElementById('box03');
let box04 = document.getElementById('box04');
let box10 = document.getElementById('box10');
let box11 = document.getElementById('box11');
let box12 = document.getElementById('box12');
let box13 = document.getElementById('box13');
let box14 = document.getElementById('box14');
let box20 = document.getElementById('box20');
let box21 = document.getElementById('box21');
let box22 = document.getElementById('box22');
let box23 = document.getElementById('box23');
let box24 = document.getElementById('box24');
let box30 = document.getElementById('box30');
let box31 = document.getElementById('box31');
let box32 = document.getElementById('box32');
let box33 = document.getElementById('box33');
let box34 = document.getElementById('box34');
let box40 = document.getElementById('box40');
let box41 = document.getElementById('box41');
let box42 = document.getElementById('box42');
let box43 = document.getElementById('box43');
let box44 = document.getElementById('box44');
let box50 = document.getElementById('box50');
let box51 = document.getElementById('box51');
let box52 = document.getElementById('box52');
let box53 = document.getElementById('box53');
let box54 = document.getElementById('box54');
let row0 = document.getElementById('row0');
let row1 = document.getElementById('row1');
let row2 = document.getElementById('row2');
let row3 = document.getElementById('row3');
let row4 = document.getElementById('row4');
let row5 = document.getElementById('row5');
const backBtn = document.getElementById('goBack');

// back to game mode
backBtn.addEventListener('click', function (e) {
    e.preventDefault();
    window.location.href = 'gamemode.html';
})

let temp_word = 'fives'
let currentRow = 0;
let currentCol = 0;
let grid = [
    [box00, box01, box02, box03, box04],
    [box10, box11, box12, box13, box14],
    [box20, box21, box22, box23, box24],
    [box30, box31, box32, box33, box34],
    [box40, box41, box42, box43, box44],
    [box50, box51, box52, box53, box54]
]
let answerGrid = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""]
]
let rows = [row0, row1, row2, row3, row4, row5]
// game mode
let states = localStorage.getItem("state")

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
let one = 1
function removal(zero, one, two, three, four, anim) {
    zero.classList.remove(...anim)
    one.classList.remove(...anim)
    two.classList.remove(...anim)
    three.classList.remove(...anim)
    four.classList.remove(...anim)
}

function animtemp(zero, one, two, three, four, anim, word_status) {
    zero.classList.remove(...common_removal)
    one.classList.remove(...common_removal)
    two.classList.remove(...common_removal)
    three.classList.remove(...common_removal)
    four.classList.remove(...common_removal)

    zero.classList.add(anim) || one + 1
    word_color = word_status || wrong_letter
    zero.classList.add(...word_color)
    setTimeout(() => {
        one.classList.add(anim) || one + 1
        one.classList.add(...word_color)
    }, 125);
    setTimeout(() => {
        two.classList.add(anim) || one + 1
        two.classList.add(...word_color)
    }, 250);
    setTimeout(() => {
        three.classList.add(anim) || one + 1
        three.classList.add(...word_color)
    }, 375);
    setTimeout(() => {
        four.classList.add(anim) || one + 1
        four.classList.add(...word_color)
    }, 500);
}

if (states == 'daily') {
    console.log('daily')
} else if (states == 'infinite') {
    console.log('infinite')
}
function mainFunction(e) {
    let pressedKey = e.key;
    let isLetter = /^[a-zA-Z]$/.test(pressedKey);
    if (isLetter) {
        let activeBox = grid[currentRow][currentCol]
        if (currentCol < 5) {
            answerGrid[currentRow][currentCol] = pressedKey
            activeBox.innerHTML = pressedKey.toUpperCase();
            activeBox.classList.add(...new_letter_add)
            activeBox.classList.remove(new_letter_remove)
            setTimeout(() => {
                activeBox.classList.remove(general_anim)
            }, 200);
            currentCol++
        } else {
            // the whole row
            let activeRow = rows[currentRow]
            activeRow.classList.add(wrong_anim)
            setTimeout(() => {
                activeRow.classList.remove(wrong_anim)
            }, 500);
        }

    } else if (pressedKey === 'Enter') {
        if (currentCol == 5) {
            // check if word is right
            // the elements in row
            let activeRow = grid[currentRow]
            let flip0 = activeRow[0]
            let flip1 = activeRow[1]
            let flip2 = activeRow[2]
            let flip3 = activeRow[3]
            let flip4 = activeRow[4]

            // input word
            let gen_word = answerGrid[currentRow].toString().split(',').join('')
            //correct guess
            if (gen_word === temp_word) {
                flip0.classList.remove(...common_removal)
                flip1.classList.remove(...common_removal)
                flip2.classList.remove(...common_removal)
                flip3.classList.remove(...common_removal)
                flip4.classList.remove(...common_removal)

                flip0.classList.add(enter_anim)
                flip0.classList.add(...correct_letter)
                setTimeout(() => {
                    flip1.classList.add(enter_anim)
                    flip1.classList.add(...correct_letter)
                }, 125);
                setTimeout(() => {
                    flip2.classList.add(enter_anim)
                    flip2.classList.add(...correct_letter)
                }, 250);
                setTimeout(() => {
                    flip3.classList.add(enter_anim)
                    flip3.classList.add(...correct_letter)
                }, 375);
                setTimeout(() => {
                    flip4.classList.add(enter_anim)
                    flip4.classList.add(...correct_letter)
                }, 500);
                setTimeout(() => {
                    activeRow[0].classList.remove(enter_anim)
                    activeRow[1].classList.remove(enter_anim)
                    activeRow[2].classList.remove(enter_anim)
                    activeRow[3].classList.remove(enter_anim)
                    activeRow[4].classList.remove(enter_anim)
                    flip0.classList.add(correct_anim)
                    setTimeout(() => {
                        flip1.classList.add(correct_anim)
                    }, 125);
                    setTimeout(() => {
                        flip2.classList.add(correct_anim)
                    }, 250);
                    setTimeout(() => {
                        flip3.classList.add(correct_anim)
                    }, 375);
                    setTimeout(() => {
                        flip4.classList.add(correct_anim)
                    }, 500);
                }, 1000);

                // correct guess
                e.currentTarget.removeEventListener('keypress', mainFunction)
            } else {
                let temp_word_list = temp_word.split('')
                let gen_word_list = gen_word.split('')
                let samePosition = [];
                let diffPosition = [];
                let notCommon = [];

                // Make a frequency map of letters in secret word
                let freq = {};
                for (let ch of temp_word_list) {
                    freq[ch] = (freq[ch] || 0) + 1;
                }

                // ---- Pass 1: Exact matches ----
                for (let i = 0; i < gen_word_list.length; i++) {
                    if (gen_word_list[i] === temp_word_list[i]) {
                        samePosition.push(gen_word_list[i]);
                        freq[gen_word_list[i]]--; // use up one occurrence
                    } else {
                        samePosition.push(null); // keep index for clarity (optional)
                    }
                }

                // ---- Pass 2: Partial matches / not common ----
                for (let i = 0; i < gen_word_list.length; i++) {
                    if (gen_word_list[i] !== temp_word_list[i]) {
                        let letter = gen_word_list[i];
                        if (freq[letter] > 0) {
                            diffPosition.push(letter);
                            freq[letter]--; // use up one occurrence
                        } else {
                            notCommon.push(letter);
                        }
                    }
                }

                console.log("Same position:", samePosition.filter(Boolean));
                console.log("Different position:", diffPosition);
                console.log("Not common:", notCommon);
                // wrong guess
                animtemp(flip0, flip1, flip2, flip3, flip4, enter_anim)
            }
            currentRow++
            currentCol = 0
        } else {
            // shake the row to tell user it isnt 5 letters yet
            let activeRow = rows[currentRow]
            activeRow.classList.add(wrong_anim)
            setTimeout(() => {
                activeRow.classList.remove(wrong_anim)
            }, 500);
        }
    } else {
        // do nothing
    }
}
document.addEventListener('keypress', mainFunction);

// changed border color - #878A8C animate-shake 0.2s
// hit enter - rotate anim 0.5s
// wrong answer at the end or not a word - animate-vibrate 0.5s
// correct guess - animate-bouncy 0.5s

// letter not in word bg - #787C7E and border, color white
// letter in word wrong position bg - #C9B458 and border, color white
// letter in word right position bg - #6AAA64 and border, color white