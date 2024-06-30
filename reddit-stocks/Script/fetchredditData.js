const axios = require('axios');
const Stock = require('../models/Stock');
const sequelize = require('../db');

async function fetchData() {
  // Fetch data from Reddit API
  const response = await axios.get('https://www.reddit.com/r/wallstreetbets/top/.json?limit=10');
  const posts = response.data.data.children;

  // Process and store data
  for (let post of posts) {
    const { title, created_utc } = post.data;
    const symbol = extractStockSymbol(title);  // Function to extract stock symbol
    const mentions = 1;  // Example data
    const sentiment = calculateSentiment(title);  // Function to calculate sentiment

    await Stock.create({
      symbol,
      mentions,
      sentiment,
      date: new Date(created_utc * 1000)
    });
  }
}

async function main() {
  await sequelize.sync();
  await fetchData();
}

main();