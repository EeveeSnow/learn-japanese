// map of all katakana characters
// const katakana = {"ア": "a", "イ": "i", "ウ": "u", "ェ": "e", "ォ": "o", "ャ": "ya", "ュ": "yu", "ョ": "yo",  "ッ": "tsu",   "ヮ": "wi", "ヰ": "wa", "ヱ": "wo", "ハ": "ha", "ヒ": "hi", "フ": "fu", "ヘ": "he", "ホ": "ho", "チ": "cha", "ヂ": "chi", "ヅ": "cu", "デ": "de", "ド": "do", "ラ": "ra", "レ": "ri", "ロ": "ru", "ル": "re", "ヱ": "ro",  "ヤ": "ya", "ユ": "yu", "ョ": "yo", "ャ": "ya", "ュ": "yu", "ョ": "yo", "ッ": "tsu", "ヮ": "wi",  "ヰ": "wa", "ヱ": "wo", "ハ": "ha", "ヒ": "hi", "フ": "fu", "ヘ": "he", "ホ": "ho", "チ": "cha", "ヂ": "chi"}
// const katakana =  {"ア": "a", "イ": "i", "ウ": "u", "ェ": "e", "ォ": "o", "ャ": "ya", "ュ": "yu", "ョ": "yo", "ッ": "tsu"


const singular_vowels = 
{"ア": "a", "イ": "i", "ウ": "u", "ェ": "e", "ォ": "o", "ン": "n"};
// const core_syllabograms = {"カ": "ka", "キ": "ki", "ケ": "ku", "ケ":"ke", "コ": "ko",
// "サ": "sa", "シ": "shi", "セ": "su", "タ":"se", "ソ": "so",
// }

const body = document.getElementsByTagName('html');
const score = document.getElementById('score');
var score_n = 0;
var score_w = 0;
var prew_character = "ア";
const character = document.getElementById('character');

function getRandom(info, name) {
    // Get an array of all the keys
    let keys = Array.from(Object.keys(info));

    // Pick a random index from 0 to keys.length - 1
    while (true)
    {
        let randomIndex = Math.floor(Math.random() * keys.length);

        // Get the key at that index
        var randomKey = keys[randomIndex];
        if (randomKey != prew_character) 
        {
            prew_character = randomKey;
            break;
        }
    }
    

    // Print the random key and its value
    // console.log(randomKey, info[randomKey]);
    character.textContent = randomKey;
    const translations = document.getElementById("translations");
    while (translations.firstChild) {
        translations.removeChild(translations.lastChild);
    }
    let mapEntries = Object.values(info);

    for (let entry of mapEntries) {
        const translation = document.createElement("translation");
        translation.className = name;
        translation.textContent = entry;
        if (entry == info[randomKey])
        {
            translation.id = "answer";
        }
        translations.appendChild(translation);
    }
}

const random_singular_vowel = document.getElementById('random_singular_vowel');
random_singular_vowel.onclick = () => {
    getRandom(singular_vowels, "a");  
};

var translations_btn = document.getElementsByTagName("translation");
console.log(translations_btn);
document.addEventListener('click', async (e) => {
    // Get the event listener target
    const target = e?.target || window?.event?.target || e?.srcElement;
    // Make sure the target is valid
    if (!target) {
        console.error('Target cannot be null!');
        return;
    }

    //Handle the TRANSLATION nodes (?)
    if (target.tagName === "TRANSLATION")
    {
        score_w += 1;
        if (target === translations_btn["answer"]) {
            console.log("AYAYA");
            switch (target.className) {
                case "a":
                    score_n += 1;
                    getRandom(singular_vowels, "a");
                    break;
                case "b":
                    score_n += 4;
                    getRandom(consonant_vowel_unions, "b");
                    break;
                case "any":
                    score_n += 5;
                    getRandom(consonant_vowel_unions, "b");
                    break;
                case "k":
                    score_n += 1;
                    getRandom(k_vowel_unions, "k");
                    break;
                case "s":
                    score_n += 1;
                    getRandom(s_vowel_unions, "s");
                    break;
                case "t":
                    score_n += 1;
                    getRandom(t_vowel_unions, "t");
                    break;
                case "n":
                    score_n += 1;
                    getRandom(n_vowel_unions, "n");
                    break;
                case "h":
                    score_n += 1;
                    getRandom(h_vowel_unions, "h");
                    break;
                case "m":
                    score_n += 1;
                    getRandom(m_vowel_unions, "m");
                    break;
                case "y":
                    score_n += 1;
                    getRandom(y_vowel_unions, "y");
                    break;
                case "r":
                    score_n += 1;
                    getRandom(r_vowel_unions, "r");
                    break;
                case "w":
                    score_n += 1;
                    getRandom(w_vowel_unions, "w");
                    break;
                default:
                    break;
            }
            score.textContent = `${score_n} of ${score_w}`;
            return;
        }

        else {
            console.log("not AYAYA");
            score_n -= 1;
            score.textContent = `${score_n} of ${score_w}`;
            return;
        }
    }

});    

