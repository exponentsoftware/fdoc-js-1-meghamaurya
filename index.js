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

