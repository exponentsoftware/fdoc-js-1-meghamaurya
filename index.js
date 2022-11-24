// 1.a

function countWords(paragraph, word1, word2) {
    var count1 = 0;
    var count2 = 0;
    var paraSplit = paragraph.split(/[\s.]+/) //split paragragh
    for (let i = 0; i <= paraSplit.length; i++) {
        if (paraSplit[i] == word1) count1++;  //checking occurence of word1
        if (paraSplit[i] === word2) count2++; //checking occurence of word2
    }
    if (count1 > count2) {  //check the condition which word occure more times
        return (word1 + " occures: " + count1);
    } else if (count2 > count1) {
        return (word2 + " occures: " + count2);
    }
    else {
        return "both words are eqully occured";
    }
}


const paragraph = "I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love."

console.log(countWords(paragraph, "love", "you"));



// 1.b

function cleanText(sentence) {
    let cleanText = '';
    // return (sentence.replace(/[^a-zA-Z0-9 :]/g, ''))
    for (let i = 0; i < sentence.length; i++) {
        let char = sentence.charAt(i);
        if (char != "%" && char != "$" && char != "@" && char != "&" && char != "#" && char != ";" && char != "!") {
            cleanText += char;
        }
    }
    return cleanText;
}


const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

console.log(cleanText(sentence));



// 1.c

function countWords2(sentence2) {
    let totalWord = 0;
    let splitSentence = sentence2.split(" ");
    for (let i = 0; i < splitSentence.length; i++) {
        if (splitSentence[i].length > 1) {
            totalWord++;
        }
    }
    return totalWord;
}

const sentence2 = `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`

console.log(countWords2(sentence2));



//1.d

function varietyOfWords(sentence2) {
    let totalWords = 0, unique = [];
    let splitSentence3 = sentence2.split(" ");
    for (let i = 0; i < splitSentence3.length; i++) {
        if (unique.indexOf(splitSentence3[i]) === -1) {
            unique.push(splitSentence3[i]);
            totalWords++;
        }
    }
    return totalWords;
}

console.log(varietyOfWords(sentence2));



// 2.a

let n = 7;
let str = "";
for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
        str += "#";
    }
    str += '\n';
}
console.log(str);


//2.b

function sevenRandomNumbers() {
    let randomNumber = new Set();
    while (randomNumber.size !== 7) {
        randomNumber.add(Math.floor(Math.random() * 10) + 0);
    }
    return [...randomNumber]
}
console.log(sevenRandomNumbers());


// 2.c

function reverseArray(arr) {
    let newArr = [];
    while (arr.length) {
        newArr.push(arr.pop());
    }
    return newArr;
}

const arr = ["A", "B", "C"];
console.log(reverseArray(arr));


// 2.d

function checkUniqueness(arr) {
    let isUnique = true;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i !== j) {
                if (arr[i] === arr[j]) {
                    isUnique = false;
                    break;
                }
            }
            if (isUnique) break;
        }
    }
    if (isUnique) {
        return true;
    } else {
        return false;
    }
}

const arrOne = [1, 4, 6, 2, 1];
console.log(checkUniqueness(arrOne));

const arrTwo = [1, 4, 6, 2, 3]
console.log(checkUniqueness(arrTwo));