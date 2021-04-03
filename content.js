
// Check consent form
const forms = document.getElementsByTagName("form");
if (forms.length > 0) {
    const consentForm = forms[0];
    if (consentForm && consentForm.getAttribute("action").includes("consent")) {
        consentForm.submit();
    }   
}

// Wait until login popup shows up (there is usually a small delay)
var checkPopup = setInterval(() => {
    const dismissButton = document.getElementById("dismiss-button");
    if (dismissButton) {
        dismissButton.click();
        document.getElementById("movie_player").click();    // resume player
        clearInterval(checkPopup);
    }
}, 200);
setTimeout(() => { clearInterval(checkPopup) }, 10000);
