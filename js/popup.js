/**
 * Need to store the checkbox data in the chrome storage then retrieve it to ensure the pop up shows it 
 */
async function main() {

    // Getting the Values of the checkboxes and updated them 
    document.getElementById('instagramCheckbox').checked = await new Promise((resolve, reject) =>{
        chrome.storage.sync.get('INSTAGRAM_CHECKBOX', function(result) {
            resolve(result.INSTAGRAM_CHECKBOX);
        });
    });
    document.getElementById('linkedInCheckbox').checked = await new Promise((resolve, reject) =>{
        chrome.storage.sync.get('LINKED_IN_CHECKBOX', function(result) {
            resolve(result.LINKED_IN_CHECKBOX);
        });
    });
    document.getElementById('youtubeCheckbox').checked = await new Promise((resolve, reject) =>{
        chrome.storage.sync.get('YOUTUBE_CHECKBOX', function(result) {
            resolve(result.YOUTUBE_CHECKBOX);
        });
    });
    document.getElementById('bumbleCheckbox').checked = await new Promise((resolve, reject) =>{
        chrome.storage.sync.get('BUMBLE_CHECKBOX', function(result) {
            resolve(result.BUMBLE_CHECKBOX);
        });
    });

    // Everytime the button is clicked we will store the latest info 
    document.getElementById('submitInfoButton').onclick = function() {
        const isInstagramChecked = document.getElementById('instagramCheckbox').checked; 
        const isLinkedInChecked = document.getElementById('linkedInCheckbox').checked;
        const isYoutubeChecked = document.getElementById('youtubeCheckbox').checked;
        const isBumbleChecked = document.getElementById('bumbleCheckbox').checked; 

        chrome.storage.sync.set({ 'INSTAGRAM_CHECKBOX': isInstagramChecked});
        chrome.storage.sync.set({ 'LINKED_IN_CHECKBOX': isLinkedInChecked});
        chrome.storage.sync.set({ 'YOUTUBE_CHECKBOX': isYoutubeChecked});
        chrome.storage.sync.set({ 'BUMBLE_CHECKBOX': isBumbleChecked});

        alert('User Info Updated');

    }

}

main();