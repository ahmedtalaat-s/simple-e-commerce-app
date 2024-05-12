const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");
const container = document.getElementById("container");
const products = [
  {
    title: "Blue yellow shirt",
    img: "assets/products/f1.jpg",
  },
  {
    title: "Green White shirt",
    img: "assets/products/f2.jpg",
  },
  {
    title: "Red yellow shirt",
    img: "assets/products/f3.jpg",
  },
  {
    title: "Red White shirt",
    img: "assets/products/f4.jpg",
  },
  {
    title: "Indigo shirt",
    img: "assets/products/f5.jpg",
  },
  {
    title: "Blue orange T-shirt",
    img: "assets/products/f6.jpg",
  },
  {
    title: "Beige Trouser",
    img: "assets/products/f7.jpg",
  },
  {
    title: "bluza ",
    img: "assets/products/f8.jpg",
  },
  {
    title: "Baby blue shirt",
    img: "assets/products/n1.jpg",
  },
  {
    title: "Gray shirt",
    img: "assets/products/n2.jpg",
  },
  {
    title: "White shirt",
    img: "assets/products/n3.jpg",
  },
  {
    title: "Olive shirt",
    img: "assets/products/n4.jpg",
  },
  {
    title: "Blue shirt",
    img: "assets/products/n5.jpg",
  },
  {
    title: "Shorts",
    img: "assets/products/n6.jpg",
  },
  {
    title: "Brown shirt",
    img: "assets/products/n7.jpg",
  },
  {
    title: "Black shirt",
    img: "assets/products/n8.jpg",
  },
];

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("activ");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("activ");
  });
}

function search(value) {
  console.log(value);
}

function searchproducts(title) {
  container.innerHTML = "";
  let cartona = "";
  let product = "";
  products.forEach((el) => {
    if (el.title.toLocaleLowerCase().includes(title.toLocaleLowerCase())) {
      product = `<div class="card">
                <img src="${el.img}" alt="">
                <div class="description">
                    <span>adidas</span>
                    <h5>${el.title}</h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h4>$78</h4>
                    <a href=""><i class="fa-solid fa-shopping-cart cart"></i></a>
                </div>
            </div>`;
      cartona += product;
    }
  });
  container.innerHTML = cartona;
}
searchproducts("");

// slider

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
