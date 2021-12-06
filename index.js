let myCollection = [
    {
      name: "School of Code mug",
      count: 1,
      whatILike: "It has my cute pixel character on it!"
    },
    {
      name: "School of Code hat",
      count: 2,
      whatILike: "An often overlooked fashion accessory"
    },
    {
      name: "School of Code pillow",
      count: 1,
      whatILike: "Eat. Sleep. Code. Repeat :)"
    }
  ];

// console.log(myCollection[0].name)


function describeItem(item) {
    for(let i = 0; i < myCollection.length; i++){
        if (item === myCollection[i].name){
            let count1 = myCollection[i].count
            let like = myCollection[i].whatILike
            if (count1 > 1){
            console.log(`I have ${count1} ${item}s. Here's what I like about them: ${like}`)
            }
            else {
                console.log(`I have a ${item}. Here's what I like about it: ${like}`)
            }
        }
    }
};

describeItem("School of Code hat")
