/*
Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]*/

function groupAnagrams(strs) {
  //1. create a hashmap
  const hashTable = {}
  //2. iterate over the object
  for(let str of strs){
  //3. separate and sort each character
    const sortedStr = str.split("").sort().join()
  //4. if the sortedString isn´t in hashtable add it in an array
    if(!hashTable[sortedStr]){
      hashTable[sortedStr] = []
    }//if it is push the str into the array
    hashTable[sortedStr].push(str)
  }//return the hashtable
  return Object.values(hashTable)
}
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))