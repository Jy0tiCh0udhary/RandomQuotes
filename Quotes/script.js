// Collection Of Quote
const quotes = [{
    quote: `The Best Way To Get Started Is To Quit Talking And Begin Doing.`,
    author: `- Walt Disney`
}, {
    quote: `The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.`,
    author: `- Winston Churchill`
}, {
    quote: `Don’t Let Yesterday Take Up Too Much Of Today.`,
    author: `- Will Rogers`
}, {
    quote: `Truth can only be found in one place: that's within`,
    author: `- Robert C`
}, {
    quote: `You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.`,
    author: `- Muhammad Waseem`
}, {
    quote: `How you look at it is pretty much how you'll see it`,
    author: `- Steve Jobs`
}, {
    quote: `It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.`,
    author: `- Vince Lombardi`
}, {
    quote: `People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.`,
    author: `- Rob Siltanen`
}, {
    quote: `Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.`,
    author: `- Og Mandino`
}, {
    quote: `We May Encounter Many Defeats But We Must Not Be Defeated.`,
    author: `- Maya Angelou`
}, ]
// New Quote Button
const quoteBtn = document.getElementById('quote-btn');
// Get Quote and author Section
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
// Event Handler
quoteBtn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random].quote;
    author.innerHTML = quotes[random].author;
})