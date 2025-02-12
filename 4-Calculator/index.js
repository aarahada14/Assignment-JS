
let one = document.getElementById("one").onclick = oning
let two = document.getElementById("two").onclick = twoing
let three = document.getElementById("three")
let four = document.getElementById("four")
let plus = document.getElementById("plus").onclick = plusing

let display = document.getElementById("display")
let equal = document.getElementById("equal").onclick = equaling

let erase = document.getElementById("erase").onclick = function(){
    display.innerHTML = ''
}



  function oning(){
    display.innerHTML += 1
}


function twoing(){
    display.innerHTML += 2
}

let first;
function plusing(){
     first = display.textContent;
     display.innerHTML = ""

}

function equaling(){
  let second = display.textContent;


  display.innerHTML = Number(first)+Number(second);
}