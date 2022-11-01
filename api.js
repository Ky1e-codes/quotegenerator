async function getQuote() {
    try {
        const auth = document.getElementById('author');
        const quote = document.getElementById('quote');
        let quoteArray = await fetch('https://type.fit/api/quotes');
        quoteArray = await quoteArray.json();
        const randNum = Math.floor(Math.random() * 1643);
        const randQuote = quoteArray[randNum];
        quote.innerText = randQuote.text;
        auth.innerText = randQuote.author;    
    } catch(err) {
        console.log(err.message);
    }
}

const btn = document.getElementById("btn");
btn.addEventListener('click', getQuote);
onload = getQuote;