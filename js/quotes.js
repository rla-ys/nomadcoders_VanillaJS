const quotes = [
    {
        quote: "What does your conscience say? - 'You should become the person you are.'",
        author: "Friedrich Nietzsche",
    },
    {
        quote: "That which does not kill us makes us stronger.",
        author: "Friedrich Nietzsche",
    },
    {
        quote: "Convictions are more dangerous enemies of truth than lies.",
        author: "Friedrich Nietzsche",
    },
    {
        quote: "There are no beautiful surfaces without a terrible depth.",
        author: "Friedrich Nietzsche",
    },
    {
        quote: "He who has a why to live can bear almost any how.",
        author: "Friedrich Nietzsche",
    },
    {
        quote: "That which is done out of love always takes place beyond good and evil.",
        author: "Friedrich Nietzsche",
    },
    {
        quote: "Hold your star in the deepest place within you.",
        author: "Friedrich Nietzsche",
    },
    {
        quote: "The greatest individuals always take the greatest risks.",
        author: "Friedrich Nietzsche",
    },
    {
        quote: "If you do not change yourself, the world will not change.",
        author: "Friedrich Nietzsche",
    },
    {
        quote: "Freedom conquers fear.",
        author: "Friedrich Nietzsche",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;