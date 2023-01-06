



let email = document.querySelector(".email");
let email2 = document.querySelector(".email");
let bod = document.querySelector("body");


bod.addEventListener("click", () => {
  var val = email.value.split("");
  var arrL = val.length;
  if (
    val[arrL - 4] == "." &&
    val[arrL - 3] == "c" &&
    val[arrL - 2] == "o" &&
    val[arrL - 1] == "m" &&
    val.includes("@")
  ) {
    console.log("yaxshi");
    email.classList.add("email2");
  } else {
    console.log("yomon");
    email.classList.remove("email2");
  }
});

let pas = document.querySelector(".pass");
pas.addEventListener('click',()=>{
    email.classList.add('aabb')
})
bod.addEventListener("click", () => {
  let sl = pas.value;
  let aee = sl.split("");

  aee.forEach((e, i) => {
    if (
      isNaN(e) == false &&
      pas.value.includes(".") &&
      pas.value.includes(".")
    ) {
      pas.classList.add("yash");
    } else if (isNaN(e) == true) {
      pas.classList.remove("yash");
    }
  });

  aee.forEach((e, i) => {
    if (isNaN(e) == false) {
      pas.classList.add("bort");
    } else if (isNaN(e) == true) {
      pas.classList.remove("bort");
    }
  });

  if (pas.value.includes(".")) {
    pas.classList.add("kkk");
  } else {
    pas.classList.remove("kkk");
  }
});
