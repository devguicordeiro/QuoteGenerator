function generateQuote() {
  let quotes = {
    '"The only thing we have to fear is fear itself."':
      "- Franklin D. Roosevelt",
    '"The only way to do great work is to love what you do."': "- Steve Jobs",
    '"In the middle of every difficulty lies opportunity."':
      "- Albert Einstein",
    '"Be yourself; everyone else is already taken."': "- Oscar Wilde",
    '"The best revenge is massive success."': "- Frank Sinatra",
    '"Success is not final, failure is not fatal: It is the courage to continue that counts."':
      "- Winston Churchill",
    '"The future belongs to those who believe in the beauty of their dreams."':
      "- Eleanor Roosevelt",
    '"The only thing standing between you and your goal is the story you keep telling yourself as to why you can\'t achieve it."':
      "- Jordan Belfort",
  };

  let quotesString = Object.keys(quotes);

  let quote = quotesString[Math.floor(Math.random() * quotesString.length)];

  let author = quotes[quote];

  document.getElementById("quote").innerHTML = quotesString;
  document.getElementById("author").innerHTML = author;
}
