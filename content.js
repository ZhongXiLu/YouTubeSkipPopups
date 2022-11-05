

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

    const dismissButton = document.querySelectorAll('[aria-label="Accept the use of cookies and other data for the purposes described"]')[0];
    if (dismissButton) {

        // Up quality to 1080p
        document.getElementsByClassName("ytp-settings-button")[0].click();
        for (const menuItem of document.getElementsByClassName("ytp-panel-menu")[0].getElementsByClassName("ytp-menuitem")) {
            if (menuItem.getElementsByClassName("ytp-menuitem-label")[0].innerHTML === "Quality") {
                menuItem.click();
                for (const qualityItem of document.getElementsByClassName("ytp-quality-menu")[0].getElementsByClassName("ytp-menuitem")) {
                    const quality = qualityItem.getElementsByTagName("span")[0].innerHTML;

                    // Skip certain high res qualities
                    if (quality.startsWith("1440p") || quality.startsWith("2160p") || quality.startsWith("4320p")) {
                        continue;
                    }

                    // Pick the first option (i.e. the highest)
                    console.log("Setting quality to " + quality);
                    qualityItem.click();
                    break;
                }
                break;
            }
        }

        // Also disable autoplay
        document.getElementsByClassName("ytp-autonav-toggle-button")[0].click();

        // Accept cookies
        setTimeout(() => dismissButton.click(), 800);
        
        clearInterval(checkPopup);
    }
}, 200);
setTimeout(() => { clearInterval(checkPopup) }, 10000);
