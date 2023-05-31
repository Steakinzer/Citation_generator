const authorText = document.querySelector("#author");
const quoteText = quote;
const newQuoteButton = new_quote;
const twitterButton = twitter;
const loader = document.getElementById("loader");
const quoteContainer = quote_container;
let apiQuotes = [];

const loading = () => {
  loader.style.display = "block";
  quoteContainer.hidden = true;
};

const complete = () => {
  quoteContainer.hidden = false;
  loader.style.display = "none";
};

async function getQuotes() {
  loading();
  const apiUrl = "https://dummyjson.com/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    getOneQuote();
    complete();
  } catch (error) {
    alert(error);
  }
}

getQuotes();

const getOneQuote = () => {
  loading();
  const quote =
    apiQuotes.quotes[Math.floor(Math.random() * apiQuotes.quotes.length)];
  authorText.textContent = quote.author;
  quoteText.textContent = quote.quote;
  setTimeout(complete, 1000);
  console.log(quote);
};

const tweetQuote = () => {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
};

newQuoteButton.addEventListener("click", getOneQuote);
twitterButton.addEventListener("click", tweetQuote);
