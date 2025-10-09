// array of quotes

const quotes = [
  "“Be yourself; everyone else is already taken”.<br/> <span  class='author'>— Oscar Wilde</span> ",
  "“Always forgive your enemies; nothing annoys them so much.”.<br> <span class='author'>― Oscar Wilde</span>",
  "“Be the change that you wish to see in the world”.<br> <span class='author'>— Mahatma Gandhi</span>",
  "“If you tell the truth, you don't have to remember anything”.<br> <span class='author'> — Mark Twain</span>"
];


const quoteElement = document.getElementById("quotes");
const button = document.getElementById("new-quote");

button.addEventListener("click", function() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.innerHTML = quotes[randomIndex];
});