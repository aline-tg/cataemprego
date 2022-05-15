// const container = document.querySelector(".container")
// const coffees = [
//   { name: "Perspiciatis", image: "images/coffee1.jpg" },
//   { name: "Voluptatem", image: "images/coffee2.jpg" },
//   { name: "Explicabo", image: "images/coffee3.jpg" },
//   { name: "Rchitecto", image: "images/coffee4.jpg" },
//   { name: " Beatae", image: "images/coffee5.jpg" },
//   { name: " Vitae", image: "images/coffee6.jpg" },
//   { name: "Inventore", image: "images/coffee7.jpg" },
//   { name: "Veritatis", image: "images/coffee8.jpg" },
//   { name: "Accusantium", image: "images/coffee9.jpg" },
// ]

// const showCoffees = () => {
//     let output = ""
//     coffees.forEach(
//       ({ name, image }) =>
//         (output += `
//                 <div class="card">
//                   <img class="card--avatar" src=${image} />
//                   <h1 class="card--title">${name}</h1>
//                   <a class="card--link" href="#">Taste</a>
//                 </div>
//                 `)
//     )
//     container.innerHTML = output
//   }
  
//   document.addEventListener("DOMContentLoaded", showCoffees)

var myDiv = document.createElement("div");
//myDiv.classList("button--container")
myDiv.setAttribute('style', 'text-align:center;');

var button1 = document.createElement("button");
button1.classList.add("button--actions")
button1.innerText = "Quero um emprego!";
//document.body.appendChild(button1);

var button2 = document.createElement("button");
button2.classList.add("button--actions");
button2.innerText = "Quero contratar!";
///document.body.appendChild(button2);

myDiv.appendChild(button1);
myDiv.append(button2);
document.body.appendChild(myDiv);