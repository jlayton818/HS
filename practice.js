// function ready() {
//     console.log("Page ready");
    
//     today.innerHTML = "Ok Boomer";

//     let elem = document.createElement('div');
//     elem.innerHTML = "<p>Hi <strong> There</strong></p>";
//     elem.className = "special important";

//     today.prepend(elem);
//     today.append(elem);

//     today.style.color = "purple";
//     today.style.textAlign = "center";
//     today.classList.add("highlighted");
//     today.classList.remove("normal");
    

// }

function ready() {
    console.log("Page Ready")
    let favs = document.forms.favs;  // favs is the name of the form
    let colorEl = favs.elements.color;  // color is one of the input in the favs form

    colorEl.onchange = function() {
        let el = document.createElement('p')
        el.innerHTML = "You Typed " + colorEl.value;

        today.append(el);   // today is a div outside of the form
    };

    // make a button respond to a click
    go.onclick = function() {  // go is a button on the page
        alert("Please don't go!"); 
    }
    go2.onclick = function() {
        alert("It's the weekend");
    }

}

document.addEventListener("DOMContentLoaded", ready);



// cs.innerHTML = "Changed";
// console.log("Script Loaded");
// cs.innerHTML = "<p> now a paragraph </p>";

// cs.append("Now")

// setTimeout(() => {
//     cs.append("What's up dawg. ");
// }, 4000);

// let x = 0;

//  setInterval(() => {
//      empty.innerHTML = x + " seconds";
//      x++;
//      if (x > 5) {
//          cs.innerHTML = "Done Counting";        
//      } else {
//         cs.innerHTML = "Not Done Counting"
//      }
//  }, 1000);

// let say = function(word) {
//     cs.append(" Saying " + word);
// };

// say("hi. ");
// say("greeting. ");
// say("hello. ");
// say("up dawg. ");

// let list = [1, 2, 3];

// let i = 0
// while (i < list.length) {
//     console.log("Logging " + list[i]);
//     i++;
// }