
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

        // Up quality to 1080p
        document.getElementsByClassName("ytp-settings-button")[0].click();
        for (const menuItem of document.getElementsByClassName("ytp-panel-menu")[0].getElementsByClassName("ytp-menuitem")) {
            if (menuItem.getElementsByClassName("ytp-menuitem-label")[0].innerHTML === "Quality") {
                menuItem.click();
                for (const qualityItem of document.getElementsByClassName("ytp-quality-menu")[0].getElementsByClassName("ytp-menuitem")) {
                    if (qualityItem.getElementsByTagName("span")[0].innerHTML.startsWith("1080p")) {
                        qualityItem.click();
                        break;
                    }
                }
                break;
            }
        }
        
        clearInterval(checkPopup);
    }
}, 200);
setTimeout(() => { clearInterval(checkPopup) }, 10000);
