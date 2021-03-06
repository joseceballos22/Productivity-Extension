console.log('Modal js Called');
$("#myModal").modal({"backdrop": "static"});

$('#myModal').modal('show');



// // Removes  the iframe when the modal is closed
// $('#myModal').on('hidden.bs.modal', function(e) {
//     // Passing a Message to the chrome tabs to tell the content script to disable the modal
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//         chrome.tabs.sendMessage(tabs[0].id, {type: 'removeModal'});
//     });
// });
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
    const spacePicResponse = await fetch('https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=6b6890b9d5e32d1f7dc990bab3935422&per_page=500&page=1&format=json&nojsoncallback=1&gallery_id=72157719034500913');
    const spacePics = await spacePicResponse.json();

    if(_.isArray(spacePics['photos']['photo'])) {
        console.log('Called')
        const randomQuoteIndex = getRandomInt(spacePics['photos']['photo'].length);
        const spacePic = spacePics['photos']['photo'][randomQuoteIndex];
        const spacePicSrc = 'https://farm'+spacePic.farm+'.staticflickr.com/'+spacePic.server+'/'+spacePic.id+'_'+spacePic.secret+'.jpg';
        console.log('Space Pic Src', spacePicSrc)
        document.getElementById('motivationImage').src = spacePicSrc;
    }


}
main(); 


