8
1846



// {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}



// your name is alejandro and you like purple
// your name is melissa and you like green
// your name is undefined and you like green




maya
marisa
chi




// Raindrops on roses
// whiskers on kittens
// ["Bright copper kettles",
// "warm woolen mittens",
// "Brown paper packages tied up with strings"]




[10, 30, 20]




var obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
const {a,b} = obj.numbers





var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;


[arr[0], arr[1]] = [arr[1], arr[0]]






const raceResilts = ([first, second, third, ...rest]) => ({first, second, third, rest})