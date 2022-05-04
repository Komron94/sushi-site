let buttonplus = document.querySelectorAll('[data-action="plus"]');
buttonplus.forEach(function (item) {
  item.addEventListener("click", function () {
    let counterWrapper = this.closest(".counter-wrapper");

    let counter = counterWrapper.querySelector("[data-counter]");

    counter.innerText = ++counter.innerText;
  });
});
// buttonplus.addEventListener("click", function () {
//     console.log("Hey! Click");
//     let counterWrapper = buttonplus.closest('.counter-wrapper');
//     console.log(counterWrapper);
//     let counter = counterWrapper.querySelector('[data-counter]');
//     console.log(counter);
//     counter.innerText = ++counter.innerText;
//
// })
let buttonMinus = document.querySelectorAll('[data-action="minus"]');

buttonMinus.forEach(function (item) {
  item.addEventListener("click", function () {
    let counterWrapper = this.closest(".counter-wrapper");
    let counter = counterWrapper.querySelector("[data-counter]");
    if (parseInt(counter.innerText) > 1) {
      counter.innerText = --counter.innerText;
    } else {
    }
  });
});
// buttonMinus.addEventListener('click', function () {
//     let counterWrapper = this.closest('.counter-wrapper');
//     let counter = counterWrapper.querySelector('[data-counter]');
//
//     if (parseInt(counter.innerText) > 1) {
//         counter.innerText = --counter.innerText;
//     } else {
//
//     }
// })
