console.log('Modal js Called');

$('#myModal').modal('show');

// Removes  the iframe when the modal is closed
$('#myModal').on('hidden.bs.modal', function(e) {
    // Passing a Message to the chrome tabs to tell the content script to disable the modal
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {type: 'removeModal'});
    });
});
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

async function main() {
    // Using the type.fit API to get the motivational quotes
    const quoteResponse = await fetch('https://type.fit/api/quotes'); 

    const quotes = await quoteResponse.json(); 

    if(_.isArray(quotes)) {

        // Picking a random quote from the response 
        const randomQuoteIndex = getRandomInt(quotes.length);

        const quoteJSON = quotes[randomQuoteIndex];

        document.getElementById('quote').innerHTML = quoteJSON.text; 
        document.getElementById('author').innerHTML = ' - ' + quoteJSON.author; 

    }


    // Getting an Awesome Image of Space using the flicker API 

    //Displaying the Quote and Image
}
main(); 


