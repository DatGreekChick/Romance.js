const chaosIsALadder = "Varys: A thousand blades, taken from the hands of Aegon's fallen enemies, forged in the fiery breath of Balerion the dread. Littlefinger: There aren't a thousand blades. There aren't even two hundred! I've counted. Varys: Huh, I'm sure you have. Ugly, old thing. Littlefinger: Yet, it has a certain appeal. Varys: The Lisa Arryn of chairs. Shame you had to settle for your second choice. Littlefinger: Early days, my friend. It is flattering, really, you feeling such dread at the prospect of me getting what I want. Varys: Thwarting you has never been my primary ambition, I promise you. Although, who doesn't like to see their friends fail now and then? Littlefinger: You're so right. For instance, when I thwarted your plan to give Sansa Stark to the Tyrells, if I'm going to be honest, I did feel an unmistakeable sense of enjoyment there. But your confidante, the one who fed you information about my plans, the one you swore to protect, you didn't bring her any enjoyment. And she didn't bring me any enjoyment. She was a bad investment on my part. Luckily, I have a friend who wanted to try something new. Something daring. And he was so grateful to me for providing this new, fresh experience. Varys: I did what I did for the good of the realm. Littlefinger: The realm. Do you know what the realm is? It's the thousand blades of Aegon's enemies. A story we agreed to tell each other over and over 'till we forget that it's a lie. Varys: But what do we have left once we abandon the lie? Chaos. A gaping pit waiting to swallow us all. Littlefinger: Chaos isn't a pit. Chaos is a ladder. Many who try to climb it fail and never get to try again. The fall breaks them. And some, if given a chance to climb, but they refuse. They cling to the realm. For the gods, for love. Illusions. Only the ladder is real. The climb is all there is.";

const parseWords = (text) => {
    return text.toLowerCase().replace(/[^a-z\d\s]+/gi,'').split(' ');
};

const generateWordPairs = (arr) => {
    let wordPairs = {};

    for (let i = 0; i < arr.length - 1; i++) {
        if (wordPairs[arr[i]] === undefined) {
            wordPairs[arr[i]] = [arr[i + 1]];
        } else {
            wordPairs[arr[i]] = wordPairs[arr[i]].concat([arr[i + 1]]);
        }
    }

    return wordPairs;
};

const writeLine = (obj, numWords) => {
    let line = [];

    while (line.length !== numWords) {
        line.push(randomWord(obj));
    }

    return line.toString().replace(/\,/g,' ');
};

const randomWord = (someObj) => {
    let objLength = Object.keys(someObj).length;
    let randKey = Math.floor(Math.random()*objLength);

    let vals = Object.values(someObj);

    return vals[randKey][(Math.floor(Math.random()*vals[randKey].length))];
};

const generatePoem = (wordCorpus, numOfWords, numLines) => {
    const chaosArr = parseWords(wordCorpus);
    const markovChain = generateWordPairs(chaosArr);

    let poem = [];

    while (numLines >= 1) {
        poem.push(writeLine(markovChain, numOfWords));
        numLines--;
    }

    return poem.forEach((elem) => {
        console.log(elem);
    });
};
generatePoem(chaosIsALadder, Math.ceil(Math.random()*10), 6);