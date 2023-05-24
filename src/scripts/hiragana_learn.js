const hiragana =
{"あ": "a", "い": "i", "う": "u", "え": "e", "お": "o", "ん": "n",
"か":	"ka","き":	"ki","く":	"ku","け":	"ke","こ": "ko"
,"さ":	"sa","し":	"shi","す":	"su","せ":	"se","そ": "so"
,"た":	"ta","ち":	"chi","つ":	"tsu","て":	"te","と": "to"
,"な":	"na","に":	"ni","ぬ":	"nu","ね":	"ne","の": "no"
,"は":	"ha","ひ":	"hi","ふ":	"fu","へ":	"he","ほ": "ho"
,"ま":	"ma","み":	"mi","む":	"mu","め":	"me","も": "mo"
,"や":	"ya","ゆ":	"yu","よ": "yo"
,"ら":	"ra","り":	"ri","る":	"ru","れ":	"re","ろ": "ro"
,"わ":	"wa","ゐ":	"vi","ゑ":	"we","を": "wo"
}
const singular_vowels = 
{"あ": "a", "い": "i", "う": "u", "え": "e", "お": "o", "ん": "n"};
const consonant_vowel_unions = 
{"か":	"ka","き":	"ki","く":	"ku","け":	"ke","こ": "ko"
,"さ":	"sa","し":	"shi","す":	"su","せ":	"se","そ": "so"
,"た":	"ta","ち":	"chi","つ":	"tsu","て":	"te","と": "to"
,"な":	"na","に":	"ni","ぬ":	"nu","ね":	"ne","の": "no"
,"は":	"ha","ひ":	"hi","ふ":	"fu","へ":	"he","ほ": "ho"
,"ま":	"ma","み":	"mi","む":	"mu","め":	"me","も": "mo"
,"や":	"ya","ゆ":	"yu","よ": "yo"
,"ら":	"ra","り":	"ri","る":	"ru","れ":	"re","ろ": "ro"
,"わ":	"wa","ゐ":	"vi","ゑ":	"we","を": "wo"}

const k_vowel_unions = {"か":	"ka","き":	"ki","く":	"ku","け":	"ke","こ": "ko"};
const s_vowel_unions = {"さ":	"sa","し":	"shi","す":	"su","せ":	"se","そ": "so"};
const t_vowel_unions = {"た":	"ta","ち":	"chi","つ":	"tsu","て":	"te","と": "to"};
const n_vowel_unions = {"な":	"na","に":	"ni","ぬ":	"nu","ね":	"ne","の": "no"};
const h_vowel_unions = {"は":	"ha","ひ":	"hi","ふ":	"fu","へ":	"he","ほ": "ho"};
const m_vowel_unions = {"ま":	"ma","み":	"mi","む":	"mu","め":	"me","も": "mo"};
const y_vowel_unions = {"や":	"ya","ゆ":	"yu","よ": "yo"};
const r_vowel_unions = {"ら":	"ra","り":	"ri","る":	"ru","れ":	"re","ろ": "ro"};
const w_vowel_unions = {"わ":	"wa","ゐ":	"vi","ゑ":	"we","を": "wo"};
const characters = new Map();
const body = document.getElementsByTagName('html');
const character = document.getElementById('character');
var now_type = "a";
var prew_character = "あ"
// singular_vowels.forEach((value, key) => {
//     console.log(`${key} = ${value}`);
//   });

console.log(character);

function getRandom(info, name) {
    // Get an array of all the keys
    let keys = Array.from(Object.keys(info));

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
    const translation = document.getElementById("translation");
    translation.textContent = info[randomKey];
    now_type = name;
}
const random_hiragana = document.getElementById('random_hiragana');
random_hiragana.onclick = () => {
    getRandom(hiragana, "any");  
};

const random_singular_vowel = document.getElementById('random_singular_vowel');
random_singular_vowel.onclick = () => {
    getRandom(singular_vowels, "a");  
};

const random_vowel_unions = document.getElementById('random_vowel_unions');
random_vowel_unions.onclick = () => {
    
    getRandom(consonant_vowel_unions, "b");
};

const random_k_unions = document.getElementById('random_k_unions');
random_k_unions.onclick = () => {
    getRandom(k_vowel_unions, "k");
};
const random_s_unions = document.getElementById('random_s_unions');
random_s_unions.onclick = () => {
    
    getRandom(s_vowel_unions, "s");
};
const random_t_unions = document.getElementById('random_t_unions');
random_t_unions.onclick = () => {
    
    getRandom(t_vowel_unions, "t");
};
const random_n_unions = document.getElementById('random_n_unions');
random_n_unions.onclick = () => {
    
    getRandom(n_vowel_unions, "n");
};
const random_h_unions = document.getElementById('random_h_unions');
random_h_unions.onclick = () => {
    
    getRandom(h_vowel_unions, "h");
};
const random_m_unions = document.getElementById('random_m_unions');
random_m_unions.onclick = () => {
    
    getRandom(m_vowel_unions, "m");
};
const random_y_unions = document.getElementById('random_y_unions');
random_y_unions.onclick = () => {
    
    getRandom(y_vowel_unions, "y");
};
const random_r_unions = document.getElementById('random_r_unions');
random_r_unions.onclick = () => {
    
    getRandom(r_vowel_unions, "r");
};
const random_w_unions = document.getElementById('random_w_unions');
random_w_unions.onclick = () => {
    getRandom(w_vowel_unions, "w");
};

const next_btn =  document.getElementById('next_btn');
next_btn.onclick = () => {
    switch (now_type) {
        case "a":
            getRandom(singular_vowels, "a");
            break;
        case "b":
            getRandom(consonant_vowel_unions, "b");
            break;
        case "any":  
            getRandom(hiragana, "any");
            break;
        case "k":
            getRandom(k_vowel_unions, "k");
            break;
        case "s":
            getRandom(s_vowel_unions, "s");
            break;
        case "t":
            getRandom(t_vowel_unions, "t");
            break;
        case "n":
            getRandom(n_vowel_unions, "n");
            break;
        case "h":
            getRandom(h_vowel_unions, "h");
            break;
        case "m":
            getRandom(m_vowel_unions, "m");
            break;
        case "y":
            getRandom(y_vowel_unions, "y");
            break;
        case "r":
            getRandom(r_vowel_unions, "r");
            break;
        case "w":
            getRandom(w_vowel_unions, "w");
            break;
        default:
            break;
    }
};

