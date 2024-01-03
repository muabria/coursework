// <---- PROBLEM 1 ----> 
let s = " ] ] [ [";
const openers = { "(": false, "{": false, "[": false };

function balancedBrackets(string) {
    if (string.length % 2 !== 0) return false;
    
    const str = string.split("");

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "(" || str[i] === ")" || str[i] === "{" || str[i] === "}" || str[i] === "[" || str[i] === "]") {
            switch (str[i]) {
                case "(":
                    openers["("] = true;
                    break;
                case ")":
                    if (openers["("] === false) {
                        return false;
                    }
                    openers["("] = false;
                    break;
                case "{":
                    openers["{"] = true;
                    break;
                case "}":
                    if (openers["{"] === false) {
                        return false;
                    }
                    openers["{"] = false;
                    break;
                case "[":
                    openers["["] = true;
                    break;
                case "]":
                    if (openers["["] === false) {
                        return false;
                    }
                    openers["["] = false;
                    break;
            }
            return true;
        }
        else continue;
    }
}

console.log(s, balancedBrackets(s))

// <---- PROBLEM 2 ----> 

const tickets = [2,3,2];
const k = 2;
let time = 0;

tickets[k] += 0.1;

let i = 0;
while (i<tickets.length) {

    if (tickets[i] === 1.1) {
        tickets.shift();
        time++;
        break;   
    } else if (tickets[i] === 1) {
        tickets.shift();
        time++;
    } else{
        tickets[i]--;
        let hold = tickets.shift();
        tickets.push(hold);
        time++;
    }
}

console.log(time);


// <---- PROBLEM 3 ----> 

const heights = [1,1,4,2,1,3];
const target = [1,1,1,2,3,4];
let move = 0;

for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== target[i]) {
        move++;
    }
}

console.log(move);

// <---- PROBLEM 4 ----> 


function deckIncresingOrder(deck){
    // Sort the array deck in decending order using sort()
    let stack = deck.sort((a, b) => b - a);
    
    // remove first element fom array stack using shift() and initialize to queue
    let queue = [stack.shift()];
    
    // run the while loop until stack.length is greater then 0
    while (stack.length > 0) {
    
        // remove the last element from the array queue using pop() and add at first in array queue using unshift()
        queue.unshift(queue.pop());
    
        // remove the last element from the array stack using pop() and add at first in array queue using unshift()
        queue.unshift(stack.shift()); // Taking out first element of the stack and adding it the front of the queue.
    }
    
    // return the resulting array queue
    return queue;
    }
    
    const arrDeck = [17,13,11,2,3,5,7]
    
    console.log(deckIncresingOrder(arrDeck))