function generateQuote() {
  let quotes = {
    "-Franklin D. Roosevelt":
      '"The only thing we have to fear is fear itself."',
    "-Robert Frost":
      '"In three words I can sum up everything I\'ve learned about life: it goes on."',
    "-Socrates": '"The only true wisdom is in knowing you know nothing."',
    "-Nelson Mandela":
      '"The greatest glory in living lies not in never falling, but in rising every time we fall."',
    "-Eleanor Roosevelt":
      '"The future belongs to those who believe in the beauty of their dreams."',
    "-Wayne Gretzky": '"You miss 100% of the shots you don\'t take."',
    "-Confucius":
      '"It does not matter how slowly you go as long as you do not stop."',
    "-Walt Disney":
      '"The way to get started is to quit talking and begin doing."',
    "-Frank Sinatra": '"The best revenge is massive success."',
    "-Jordan Belfort":
      '"The only thing standing between you and your goal is the story you keep telling yourself as to why you can\'t achieve it."',
    "-Unknown":
      '"The harder you work for something, the greater you\'ll feel when you achieve it."',
    "-Franklin D. Roosevelt":
      '"The only limit to our realization of tomorrow will be our doubts of today."',
    "-Yoda": '"The greatest teacher, failure is."',
    "-Peter Drucker": '"The best way to predict the future is to create it."',
    "-Nelson Mandela": '"It always seems impossible until it is done."',
    "-Winston Churchill":
      '"Success is walking from failure to failure with no loss of enthusiasm."',
    "-Plato": '"The greatest wealth is to live content with little."',
    "-Toni Morrison":
      '"If you want to fly, you have to give up the things that weigh you down."',
    "-Joel Brown":
      '"The only thing that stands between you and your dream is the will to try and the belief that it is actually possible."',
    "-Winston Churchill":
      '"Success is not final, failure is not fatal: It is the courage to continue that counts."',
    "-Thomas Edison":
      "\"I have not failed. I've just found 10,000 ways that won't work.\"",
    "-Marcus Aurelius":
      '"The best revenge is to be unlike him who performed the injury."',
    "-Steve Jobs": '"The only way to do great work is to love what you do."',
    "-Zig Ziglar": '"The more you give away, the more you will have."',
    "-Chinese Proverb":
      '"The best time to plant a tree was 20 years ago. The second best time is now."',
  };
  let authors = Object.keys(quotes);

  let author = authors[Math.floor(Math.random() * authors.length)];

  let quote = quotes[author];

  document.getElementById("quote").innerHTML = quote;

  document.getElementById("author").innerHTML = author;
}
