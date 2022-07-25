let salaries = {John: 100,Ann: 160,Pete: 130}

let total = 0;
for(let i in salaries){
    total += salaries[i];
}

console.log("Problem 1 : " + total);



function multiplyNumeric(obj) {
    for (let key in obj) {
      if (typeof obj[key] == 'number') {
        obj[key] *= 2;
      }
    }
  }
 let menu = {width: 200,height: 300,title: "My menu"};
 
multiplyNumeric(menu);
 for(let i in menu){
    console.log(menu[i]);
 }



 function truncate(str, maxlength) {
     let ellipsis ="...";
     length = str.length
    if(str.length > maxlength){
        return str.substring(0, length - ellipsis.length) + ellipsis;
    }
    return str;
 }

 console.log(truncate('We are beginner ',10));

 let styles = ["James", "Brennie"];
 console.log(styles);

styles.push("Robert");
console.log(styles);

styles[Math.floor((styles.length - 1) / 2)] = "CAlvin";
console.log(styles);
styles.shift();
console.log(styles);
styles.unshift("Rose", "Regal");
console.log(styles);
