function getIndividualQuoteForTheDay(quotes, dayOfYear) {
    return quotes[(dayOfYear - 1) % quotes.length];
}

function formatQuote(dailyQuote) {
    const quoteParts = dailyQuote.split(/"(.*)"/);
    return `<div class="dailyQuotePage"><p id="quotesText" alt="quote">${quoteParts[0]}"${quoteParts[1]}"<br/><br/>${quoteParts[2]}</p></div>`;
}

async function fetchQuoteAndGenerateHtml(quotesFile) {
    try {
        const response = await fetch(quotesFile);
        const data = await response.text();
        const quotes = data.trim().split('\n');
        const currentDayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
        const dailyQuote = getIndividualQuoteForTheDay(quotes, currentDayOfYear);
        const formattedQuote = formatQuote(dailyQuote);

        // Display the formatted quote
        console.log(formattedQuote);
        // You can manipulate the DOM to display this content in a specific area if needed
        document.getElementById('quoteContainer').innerHTML = formattedQuote; // Assumes there is a container with id 'quoteContainer'
    } catch (error) {
        console.error('Error fetching quotes:', error);
    }
}


// Call the function with your quotes file path
const quotesFile = 'quote_database.txt';
fetchQuoteAndGenerateHtml(quotesFile);