var quotes = [
  {
    author: " Oscar Wilde",
    quote: "Be yourself; everyone else is already taken.",
  },
  {
    author: "Albert Einstein",
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
  },
  { author: "Frank Sinatra", quote: "The best revenge is massive success." },
  {
    author: "Wayne Gretzy",
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
  },
  {
    author: "Nelson Mandela",
    quote:
      "Resentment is like drinking poison and waiting for your enemies to die.",
  },
  {
    author: "Dr. Seuss",
    quote:
      "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
  },
  {
    author: "Mark Twain",
    quote: "If you tell the truth, you don't have to remember anything.",
  },
];

function randomQuote() {
  const random = Number.parseInt(Math.random() * quotes.length + 1);
  document.getElementById(
    "quoteOutput"
  ).innerHTML = `"${quotes[random].quote}"`;
  document.getElementById(
    "authorOutput"
  ).innerHTML = `-${quotes[random].author}`;
}
