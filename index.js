$(document).ready(() => {
  /* SIMPLE SHOW AND HIDE CLICK FUCTIONS */
  //for mobile nav bar
  $(".menu").click(() => {
    $(".mobile-nav").css("left", "0");
    $(".mobile-list").addClass("showlist");
  });
  $(".nav-close").click(() => {
    $(".mobile-nav").css("left", "-300px");
    $(".mobile-list").removeClass("showlist");
  });
  //for pop up
  $(".cart").click(() => {
    $(".pop-up").toggleClass("show");
  });
//for overlay
  $(".product").click(() => {
    $("header").addClass("blur");
    $("section").addClass("blur");
    $(".overlay").addClass("show");
  });
  $(".close-overlay").click(() => {
    $("header").removeClass("blur");
    $("section").removeClass("blur");
    $(".overlay").removeClass("show");
  });

  /*QUANTIY OF ITEM AND SOME LOGIC TO UPDATE THE UI*/
  let count = 0;
  let cart = $(".finalise");
  let checkout = $(".checkout");
  let del = $(".delete");

  if (count === 0) {
    $(".finalise").remove();
    $(".checkout").remove();
    $(".pop-up").append('<p class="text-align">Your cart is empty</p>');
  }
  $("#minus").prop("disabled", true);
  $(".item-quantity").css("display", "none");
  $("#plus").click(() => {
    count++;
    $("#minus").prop("disabled", false);
    $(".text-quantity").text(`${count}`);
  });
  $("#minus").click(() => {
    count--;
    if (count === 0) {
      $("#minus").prop("disabled", true);
    }
    $(".text-quantity").text(`${count}`);
    if (count != 0) {
      $(".item-quantity").text(`${count}`);
    }
  });
  /*ADD TO CART RULES */
  $(".button").click(() => {
    if (count != 0) {
      $(".finalise").css("display", "flex");
      $(".checkout").css("display", "initial");
      $(".item-quantity").css("display", "flex");
      $(".item-quantity").text(`${count}`);
      $(".pop-up").append(cart);
      $(".pop-up").append(checkout);
      $(".pop-up").find("p").remove();
      $(".output").text(`${count}`);
      $(".total").text(`$${count * 125}.00`);
    }
    count = 0;
    $(".text-quantity").text(`${count}`);
    $("#minus").prop("disabled", true);
  });
  /*DELETE FROM CART */
  $(del).click(() => {
    $(".finalise").css("display", "none");
    $(".checkout").css("display", "none");
    $(".item-quantity").text("");
    $(".item-quantity").css("display", "none");
    $(".pop-up").append('<p class="text-align">Your cart is empty</p>');
  });

  /*NEXT AND PREVIOUS LOGIC */
  //I personally think i wrote too much code here to achive going to the next and previous picture🙁
  const products = [
    '<img src="images/image-product-1.jpg" alt="product" height="350px" class="img-radius">',
    '<img src="images/image-product-2.jpg" alt="product" height="350px" class="img-radius">',
    '<img src="images/image-product-3.jpg" alt="product" height="350px" class="img-radius">',
    '<img src="images/image-product-4.jpg" alt="product" height="350px" class="img-radius">',
  ];

  $(".index-0").click(() => {
    $(".thumbnail").removeClass("active");
    $(".thumb-0").parent().addClass("active");
    $(".product").html(`${products[0]}`);
  });

  $(".index-1").click(() => {
    $(".thumbnail").removeClass("active");
    $(".thumb-1").parent().addClass("active");

    $(".product").html(`${products[1]}`);
  });
  $(".index-2").click(() => {
    $(".thumbnail").removeClass("active");
    $(".thumb-2").parent().addClass("active");
    $(".product").html(`${products[2]}`);
  });
  $(".index-3").click(() => {
    $(".thumbnail").removeClass("active");
    $(".thumb-3").parent().addClass("active");
    $(".product").html(`${products[3]}`);
  });

  let index = products.indexOf($(".index").children()[0].outerHTML);
  $(".next").click(() => {
    index++;
    if (index >= products.length) {
      index = 0;
    }
    $(".thumbnail").removeClass("active");
    $(`.thumb-${index}`).parent().addClass("active");
    $(".product").html(`${products[index]}`);
  });
  $(".previous").click(() => {
    index--;
    console.log(products.length - 1);
    if (index < 0) {
      index = products.length - 1;
    }
    $(".thumbnail").removeClass("active");
    $(`.thumb-${index}`).parent().addClass("active");
    $(".product").html(`${products[index]}`);
  });
});
