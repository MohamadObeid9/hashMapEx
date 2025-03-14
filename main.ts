import { hashMap } from "./hashMap.ts";

const map = new hashMap();
map.set("mo", "obeid");
map.set("moo", "aboud");
map.set("apple", "red");
map.set("banana", "yellow");
map.set("carrot", "orange");
map.set("dog", "brown");
map.set("elephant", "gray");
map.set("frog", "green");
map.set("grape", "purple");
map.set("hat", "black");
map.set("ice cream", "white");
map.set("jacket", "blue");
map.set("kite", "pink");
map.set("lion", "golden");
console.log(map.get("mo"));
//obeid
console.log(map.has("mo"));
//true
console.log(map.keys());
//["1", "2", "3", "4", "5", "10", "11", "12", "13", "14", "15"];
console.log(map.length());
//11
console.log(map.values());
//["gray","obeid","orange","green","yellow","red","purple","black","brown","golden","aboud","white","blue","pink",];
console.log(map.entries());
// [
//   ["elephant", "gray"],
//   ["mo", "obeid"],
//   ["carrot", "orange"],
//   ["frog", "green"],
//   ["banana", "yellow"],
//   ["apple", "red"],
//   ["grape", "purple"],
//   ["hat", "black"],
//   ["dog", "brown"],
//   ["lion", "golden"],
//   ["moo", "aboud"],
//   ["ice cream", "white"],
//   ["jacket", "blue"],
//   ["kite", "pink"],
// ];
