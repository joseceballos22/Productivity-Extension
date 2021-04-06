console.log('content-script.js Running');
console.log('Current Window: ', window.location.href);

const windowURL = window.location.href;
const instagramURL = 'https://www.instagram.com/';
const linkedInURL = 'https://www.linkedin.com/';
const youtubeURL = 'https://www.youtube.com/';
const bumbleURL = 'https://bumble.com/';

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.type === 'removeModal') {
        document.body.classList.remove('stop-scrolling'); // Enables Scrolling
        document.getElementById('be-productive-iframe-id').remove();
    }
});


// Code which will create a Modal 
function createModal() {
    document.body.classList.add('stop-scrolling'); // Stops the scrolling
    const iframe = document.createElement('iframe');
    iframe.classList.add('be-productive-iframe');
    iframe.src = chrome.extension.getURL('modal.html');
    iframe.frameBorder = 0;
    iframe.allowtransparency = true;
    iframe.id = 'be-productive-iframe-id';
    iframe.allow = 'clipboard-write';

    iframe.width = document.documentElement.scrollWidth;
    iframe.height = document.documentElement.scrollHeight;

    document.body.append(iframe);
    console.log('Creating Modal')
// if (request.type === 'removeModal') {
//     document.getElementById('calculate-diff-iframe-id').remove();
// }
}
 
async function main() {
    /**
     * Getting the checkboxes and determining which ones to display a modal on 
     */
    const isInstagramChecked = await new Promise((resolve, reject) =>{
        chrome.storage.sync.get('INSTAGRAM_CHECKBOX', function(result) {
            resolve(result.INSTAGRAM_CHECKBOX);
        });
    });
    const isLinkedInChecked = await new Promise((resolve, reject) =>{
        chrome.storage.sync.get('LINKED_IN_CHECKBOX', function(result) {
            resolve(result.LINKED_IN_CHECKBOX);
        });
    });
    const isYoutubeChecked = await new Promise((resolve, reject) =>{
        chrome.storage.sync.get('YOUTUBE_CHECKBOX', function(result) {
            resolve(result.YOUTUBE_CHECKBOX);
        });
    });
    const isBumbleChecked = await new Promise((resolve, reject) =>{
        chrome.storage.sync.get('BUMBLE_CHECKBOX', function(result) {
            resolve(result.BUMBLE_CHECKBOX);
        });
    });

    // Creating a Modal If Instagram Checked 
    if(isInstagramChecked && windowURL.startsWith(instagramURL)) {
        createModal()
    }
    // Creating a Modal If LinkedIn Checked
    if(isLinkedInChecked && windowURL.startsWith(linkedInURL)) {
        console.log('Creating Linked In Modal');
        createModal()
    }
    // Creating a Modal If Youtube Checked
    if(isYoutubeChecked && windowURL.startsWith(youtubeURL)) {
        console.log('Creating Youtube Modal');
        createModal()
    }
    // Creating a Modal If Bumble Is Checked
    if(isBumbleChecked && windowURL.startsWith(bumbleURL)) {
        createModal()
    }
}
main();
