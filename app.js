// Ensure the Zoom Apps SDK is available
if (typeof ZoomMtg == 'undefined') {
    console.error("Zoom Apps SDK not loaded correctly.");
}

// 1. Get references to DOM elements
const recordReminderModal = document.getElementById('recordReminderModal');
const closeButton = document.querySelector('.close-button');
const understoodButton = document.getElementById('understoodButton');

// Function to display the modal
function showRecordReminder() {
    recordReminderModal.style.display = 'flex'; // Use flex to center it
}

// Function to hide the modal
function hideRecordReminder() {
    recordReminderModal.style.display = 'none';
}

// Event listeners for closing the modal
closeButton.addEventListener('click', hideRecordReminder);
understoodButton.addEventListener('click', hideRecordReminder);

// Close the modal if the user clicks outside of it (optional, but good UX)
window.addEventListener('click', (event) => {
    if (event.target === recordReminderModal) {
        hideRecordReminder();
    }
});

// Initialize the Zoom Apps SDK
ZoomMtg.config({
    // Replace with your actual Client ID from the Zoom App Marketplace
    // You MUST get this from your created Zoom App under the "App Credentials" tab.
    clientId: "iCOxHE_VRKGWiAmRxlFnxw", 
    // Other configuration options can go here if needed
})
.then(() => {
    console.log("Zoom Apps SDK initialized successfully.");
    
    // Once the SDK is initialized, it means the app has loaded
    // inside a meeting or the Zoom client. This is our trigger.
    showRecordReminder();

    // You can add more sophisticated logic here if you want to check
    // if recording has actually started, but the SDK doesn't directly
    // expose that information for Zoom Apps for privacy/security reasons.
    // For a simple reminder, displaying on load is sufficient.

})
.catch((error) => {
    console.error("Zoom Apps SDK initialization failed:", error);
    // Even if SDK fails, you might still want to show a reminder
    // depending on your error handling strategy. For now, we'll
    // only show it if the SDK initializes.
});