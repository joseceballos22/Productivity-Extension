console.log('Modal js Called');

$('#myModal').modal('show');

// Removes  the iframe when the modal is closed
$('#myModal').on('hidden.bs.modal', function(e) {
    // Passing a Message to the chrome tabs to tell the content script to disable the modal
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {type: 'removeModal'});
    });
});
