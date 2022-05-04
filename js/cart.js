let cartButtons = document.querySelectorAll("[data-cart]");
cartButtons.forEach(function (item) {
  item.addEventListener("click", function () {
    console.log("Click On Cart");
    let card = this.closest(".card");
    let imgSrc = card.querySelector(".product-img").getAttribute("src");
    let title = card.querySelector(".item-title").innerText;
    let itemsInbox = card.querySelector("[data-items-in-box]").innerText;
    let weight = card.querySelector(".price__weight").innerText;
    let price = card.querySelector(".price__currency").innerText;
    let counter = card.querySelector("[data-counter]").innerText;
    let id = card.dataset.id;
    console.log(imgSrc, title, itemsInbox, weight, price, counter);
    let cartItemHtml = `<div class="cart-item">
                            <div class="cart-item__top">
                                <div class="cart-item__img">
                                    <img src="${imgSrc}" alt="">
                                </div>
                                <div class="cart-item__desc">
                                    <div class="cart-item__title"> ${title}</div>
                                    <div class="cart-item__weight">${itemsInbox} / ${weight}</div>
                                    <div class="cart-item__details">
                                        <div class="items items--small counter-wrapper">
                                            <div class="items__control" data-action="minus">-</div>
                                            <div class="items__current" data-counter="1">${counter}</div>
                                            <div class="items__control" data-action="plus">+</div>
                                        </div>
                                        <div class="price">
                                            <div class="price__currency">${price}</div>
                                       </div>
                                    </div>                        
                               </div>
                            </div>
                        </div>`;

    let cartWrapper = document.querySelector(".cart-wrapper");
    cartWrapper.insertAdjacentHTML("beforeend", cartItemHtml);
    document.querySelector("[data-cart-empty]").classList.add("none");
  });
});
