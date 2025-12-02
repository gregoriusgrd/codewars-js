// filter

/*
1. Filtering an Array of Primitive Values

const allItems = ['apple', 'banana', 'mango', 'orange', 'grape'];
const itemsToKeep = ['apple', 'grape', 'cherry'];

Filter for items that ARE present in itemsToKeep
const filteredItems = allItems.filter(item => itemsToKeep.includes(item));

console.log(filteredItems);
Output: ['apple', 'grape']

non

const unnecessaryWords = ['a', 'the', 'is'];
const storyWords = ['The', 'story', 'is', 'about', 'a', 'cat'];

const betterWords = storyWords.filter(word => !unnecessaryWords.includes(word.toLowerCase()));

console.log(betterWords);
// Output: ['story', 'about', 'cat']
*/

