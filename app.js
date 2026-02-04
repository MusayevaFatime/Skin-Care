function toggleMenu() {
  document.getElementById('navbar').classList.toggle('active');
}

let answers = {
  skinType: "",
  skinProblem: "",
  budget: ""
};

document.querySelector(".start-btn").addEventListener("click", function() {
  document.querySelector(".questionnaire").style.display = "block";
  this.style.display = "none";
  showQuestion(0); 
});

let currentQuestion = 0;
const questions = document.querySelectorAll(".question");

const results = {
  "Oily-Acne-High": "Perfect cream for oily skin, acne problem, and high budget.",
  "Oily-Acne-Medium": "Dermatological product for oily skin, acne problem, and medium budget.",
  "Oily-Wrinkles-High": "Anti-aging product for oily skin, wrinkles, and high budget.",
  "Oily-Wrinkles-Medium": "Restorative cream for oily skin, wrinkles, and medium budget.",
  "Oily-Irregular tone-High": "Cream for restoring skin tone for oily skin with irregular tone and high budget.",
  "Oily-Irregular tone-Medium": "Suitable dermatological product for oily skin with irregular tone and medium budget.",
  "Dry-Acne-High": "Suitable treatment for dry skin with acne and high budget.",
  "Dry-Acne-Medium": "Cleansing cream for dry skin with acne and medium budget.",
  "Dry-Wrinkles-High": "Restorative cream for dry skin with wrinkles and high budget.",
  "Dry-Wrinkles-Medium": "Wrinkle prevention product for dry skin with wrinkles and medium budget.",
  "Dry-Irregular tone-High": "Dermatological product for dry skin with irregular tone and high budget.",
  "Dry-Irregular tone-Medium": "Tone-evening cream for dry skin with irregular tone and medium budget.",
  "Combination-Acne-High": "Perfect face cream for combination skin, acne problem, and high budget.",
  "Combination-Acne-Medium": "Cleansing cream for combination skin with acne and medium budget.",
  "Combination-Wrinkles-High": "Anti-aging cream for combination skin, wrinkles, and high budget.",
  "Combination-Wrinkles-Medium": "Anti-aging product for combination skin, wrinkles, and medium budget.",
  "Combination-Irregular tone-High": "Tone-evening cream suitable for combination skin with irregular tone and high budget.",
  "Combination-Irregular tone-Medium": "Cleansing cream for combination skin with irregular tone and medium budget."
};

function showQuestion(index) {
  if (index < questions.length) {
      questions[index].style.display = "block";
  } else {
      showResult();
  }
}

function setAnswer(question, answer) {
  answers[question] = answer;
  currentQuestion++;
  document.querySelectorAll(".question")[currentQuestion - 1].style.display = "none";

  if (currentQuestion < 3) {
      showQuestion(currentQuestion);
  } else {
      showResult();
  }
}

function showResult() {
  const resultText = generateResultText();
  document.querySelector(".result").style.display = "block";
  document.querySelector("#resultText").textContent = resultText;
}

function generateResultText() {
  const combination = `${answers.skinType}-${answers.skinProblem}-${answers.budget}`;
  return results[combination] || "No suitable product found. Please try again.";
}

document.getElementById('option1').addEventListener('click', () => setAnswer('skinType', 'Oily'));
document.getElementById('option2').addEventListener('click', () => setAnswer('skinType', 'Dry'));
document.getElementById('option3').addEventListener('click', () => setAnswer('skinType', 'Combination'));
document.getElementById('option4').addEventListener('click', () => setAnswer('skinProblem', 'Acne'));
document.getElementById('option5').addEventListener('click', () => setAnswer('skinProblem', 'Wrinkles'));
document.getElementById('option6').addEventListener('click', () => setAnswer('skinProblem', 'Irregular tone'));
document.getElementById('option7').addEventListener('click', () => setAnswer('budget', 'Low'));
document.getElementById('option8').addEventListener('click', () => setAnswer('budget', 'Medium'));
document.getElementById('option9').addEventListener('click', () => setAnswer('budget', 'High'));

// Burger Menu
const burger = document.getElementById('burger');
const navbar = document.getElementById('navbar');

burger.addEventListener('click', () => {
  navbar.classList.toggle('active');
  burger.classList.toggle('toggle');
});

// Testimonials
const testimonials = document.querySelectorAll('.testimonial');
let currentTestimonial = 0;

document.getElementById('next').addEventListener('click', () => {
  testimonials[currentTestimonial].classList.remove('active');
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  testimonials[currentTestimonial].classList.add('active');
});

document.getElementById('prev').addEventListener('click', () => {
  testimonials[currentTestimonial].classList.remove('active');
  currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
  testimonials[currentTestimonial].classList.add('active');
});

// Auto slide
setInterval(() => {
  testimonials[currentTestimonial].classList.remove('active');
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  testimonials[currentTestimonial].classList.add('active');
}, 5000);

// FAQ
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  question.addEventListener('click', () => {
    item.classList.toggle('active');
    faqItems.forEach(other => {
      if(other !== item) {
        other.classList.remove('active');
      }
    });
  });
});

// Product Customization
const productImg = document.getElementById("customProduct");
const colorButtons = document.querySelectorAll(".color-btn");
const scentButtons = document.querySelectorAll(".scent-btn");
const selectionResult = document.getElementById("selectionResult");

let selectedColor = "#ffaeab";
let selectedScent = "Lavender";

colorButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    selectedColor = btn.dataset.color;
    productImg.style.backgroundColor = selectedColor;
    updateResult();
  });
});

scentButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    selectedScent = btn.dataset.scent;
    updateResult();
  });
});

function updateResult() {
  selectionResult.textContent = `Selection: Color - ${selectedColor}, Scent - ${selectedScent}`;
}

// Products & Cart
const productsData = [
  {id:1, name:"Hydrating Face Cream", price:25, image:"./foto-skincare/product2.png"},
  {id:2, name:"Vitamin C Serum", price:30, image:"./foto-skincare/product1.jpg"},
  {id:3, name:"Anti-Aging Night Cream", price:45, image:"./foto-skincare/product3.jpg"},
  {id:4, name:"Daily Cleanser Gel", price:20, image:"./foto-skincare/product4.jpg"},
  {id:5, name:"SPF Moisturizer", price:35, image:"./foto-skincare/product5.jpg"},
  {id:6, name:"Refreshing Toner", price:18, image:"./foto-skincare/product6.jpg"},
  {id:7, name:"Eye Gel", price:22, image:"./foto-skincare/product7.jpg"},
  {id:8, name:"Lip Balm Pack", price:12, image:"./foto-skincare/product8.jpg"},
  {id:9, name:"Exfoliating Scrub", price:27, image:"./foto-skincare/product9.jpg"},
  {id:10, name:"Face Mask", price:28, image:"./foto-skincare/product10.jpg"}
];

let cart = [];

const productsContainer = document.querySelector(".products-container");
const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");
const cartList = document.getElementById("cart-list");

function displayProducts(){
  productsContainer.innerHTML = "";
  productsData.forEach(product => {
    let card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h4>${product.name}</h4>
      <p>$${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productsContainer.appendChild(card);
  });
}

function addToCart(id){
  const product = productsData.find(p => p.id === id);
  cart.push(product);
  updateCart();
}

function updateCart(){
  cartCount.textContent = cart.length;
  let total = cart.reduce((sum, item) => sum + item.price, 0);
  cartTotal.textContent = total;

  cartList.innerHTML = "";
  cart.forEach(item => {
    cartList.innerHTML += `<li>${item.name} - $${item.price}</li>`;
  });
}

displayProducts();
