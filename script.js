// Smooth Scroll for Navbar Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Interactive "Add to Cart" Button
document.getElementById("addToCart").addEventListener("click", () => {
  alert("✅ Product added to your cart!");
});

// "Shop Now" Button Scrolls to Product Section
document.getElementById("shopNow").addEventListener("click", () => {
  document.querySelector("#product").scrollIntoView({ behavior: "smooth" });
});
