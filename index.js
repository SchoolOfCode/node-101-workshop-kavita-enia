import myCollection from "./collection.js"
import chalk from 'chalk';


function describeItem(item) {
    for(let i = 0; i < myCollection.length; i++){
        if (item === myCollection[i].name){
            let count1 = myCollection[i].count
            let like = myCollection[i].whatILike
            if (count1 > 1){
            console.log(`I have ${chalk.yellow(count1)} ${chalk.cyan(item)}s. Here's what I like about them: ${chalk.green(like)}`)
            }
            else {
                console.log(`I have a ${chalk.cyan(item)}. Here's what I like about it: ${chalk.green(like)}`)
            }
        }
    }
};

// describeItem("School of Code hat")


function describeCollection (array) {
    for (let i=0; i<array.length; i++) {
        describeItem(myCollection[i].name)
    }
}

describeCollection(myCollection)

// part 3

