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

<<<<<<< HEAD
// describeItem("School of Code hat")


function describeCollection (array) {
    for (let i=0; i<array.length; i++) {
        describeItem(myCollection[i].name)
    }
}

describeCollection(myCollection)

// part 3

=======
//describeItem("School of Code hat")

function describeCollection(array) {
  for(let i = 0; i < array.length; i++){
    //console.log(array[i])
    describeItem(array[i].name)
  }
}

describeCollection(myCollection)
>>>>>>> 1e084a0aa3c9a7ed2d1c181fc6ac7ae1b9912490
