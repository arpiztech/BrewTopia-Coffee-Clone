
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from reloading the page

        let searchInput = document.querySelector(".form-control").value.toLowerCase().trim();
        let sections = {
            "home": "#",
            "about": "#about",
            "menu": "#menu",
            "product": "#product",
            "gallery": "#gallery",
            "blogs": "#blogs"
        };

        if (sections[searchInput]) {
            window.location.href = sections[searchInput]; // Redirect to the section
        } else {
            alert("Section not found! Please search for Home, About, Menu, Product, Gallery, or Blogs.");
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Navbar toggle for mobile view
    document.querySelector(".navbar-toggler").addEventListener("click", function () {
        document.getElementById("navbarSupportedContent").classList.toggle("show");
    });

    // Shopping cart system
    let cart = [];
    document.querySelectorAll(".fa-cart-shopping").forEach(button => {
        button.addEventListener("click", function () {
            let product = this.closest(".card").querySelector("h3").textContent;
            let price = this.closest(".card").querySelector("p").textContent.match(/\d+/)[0];
            cart.push({ product, price });
            updateCart();
        });
    });

    function updateCart() {
        let cartDisplay = document.getElementById("cart-items");
        if (!cartDisplay) {
            cartDisplay = document.createElement("div");
            cartDisplay.id = "cart-items";
            cartDisplay.style.position = "fixed";
            cartDisplay.style.top = "10px";
            cartDisplay.style.right = "10px";
            cartDisplay.style.background = "white";
            cartDisplay.style.padding = "10px";
            cartDisplay.style.border = "1px solid black";
            document.body.appendChild(cartDisplay);
        }
        cartDisplay.innerHTML = `<h5>Cart Items:</h5> ${cart.map(item => `<p>${item.product} - $${item.price}</p>`).join('')}`;
    }

    // Responsive adjustments
    window.addEventListener("resize", function () {
        let navbar = document.getElementById("navbar");
        if (window.innerWidth < 768) {
            navbar.classList.add("bg-dark");
        } else {
            navbar.classList.remove("bg-dark");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Responsive Navbar Toggle
    const navToggle = document.querySelector(".navbar-toggler");
    const navMenu = document.querySelector(".navbar-collapse");
    
    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });

    // Contact Form Validation & Submission
    document.getElementById("contact-btn").addEventListener("click", function () {
        let name = document.querySelector("input[placeholder='Name']").value;
        let email = document.querySelector("input[placeholder='Email']").value;
        let phone = document.querySelector("input[placeholder='Phone']").value;

        if (name === "" || email === "" || phone === "") {
            alert("Please fill in all fields.");
            return;
        }

        alert("Message Sent Successfully!");
    });

    // Image Gallery Lightbox
    const galleryImages = document.querySelectorAll("#gallery img");
    galleryImages.forEach(img => {
        img.addEventListener("click", function () {
            let lightbox = document.createElement("div");
            lightbox.id = "lightbox";
            document.body.appendChild(lightbox);

            let imgElement = document.createElement("img");
            imgElement.src = this.src;
            lightbox.appendChild(imgElement);

            lightbox.addEventListener("click", function () {
                lightbox.remove();
            });
        });
    });
    
    document.addEventListener("DOMContentLoaded", function () {
        document.querySelectorAll(".btn").forEach(function (button) {
            button.addEventListener("click", function (event) {
                event.preventDefault();
                
                let cardBody = this.parentElement;
                let paragraph = cardBody.querySelector("p");
                
                if (this.textContent === "Read More") {
                    paragraph.style.whiteSpace = "normal";
                    paragraph.style.overflow = "visible";
                    this.textContent = "Read Less";
                } else {
                    paragraph.style.whiteSpace = "nowrap";
                    paragraph.style.overflow = "hidden";
                    paragraph.style.textOverflow = "ellipsis";
                    this.textContent = "Read More";
                }
            });
        });
    });
    















    // Back to Top Button
    const backToTop = document.querySelector(".arrow");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", function (event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});









































































