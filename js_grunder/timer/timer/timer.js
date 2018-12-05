window.onload = start;

function start() {
    const eKnapp = document.querySelector("#show-message");
    const eStör = document.querySelector("#cancel-message");
    let msgTimeout = null;

    eStör.addEventListener("click", stör);
    eKnapp.addEventListener("click", kör);

    function kör() {
        
        msgTimeout = setTimeout(function () {
            alert("how is it going?")
        }, 2000);
        
    }
    function stör() {
        console.log(msgTimeout);
        
        clearTimeout(msgTimeout);
    }
}