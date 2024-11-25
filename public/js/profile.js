// AJAX GET function
function ajaxGET(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.onload = function() {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            callback(this.responseText);
        } else {
            console.log("AJAX request error:", this.status);
        }
    };
    xhr.open("GET", url);
    xhr.send();
}

// Add event listener to Clear buttons
document.querySelectorAll(".clear").forEach(function (currentElement, currentIndex, listObj) {

    //console.log(currentElement, currentIndex, listObj);
    currentElement.addEventListener("click", function (e) {
        //console.log(e);
        for (let i = 0; i < this.parentNode.childNodes.length; i++) {
            if (this.parentNode.childNodes[i].nodeType == Node.ELEMENT_NODE) {
                if (this.parentNode.childNodes[i].getAttribute("class") == "ajax-stuff") {
                    this.parentNode.childNodes[i].innerHTML = "";
                    break;
                }
            }
        }
    });
});

  document.querySelector("#profileHTML").addEventListener("click", function (e) {

    ajaxGET("/assignment6-database", function (data) {
        // console.log(data);
        document.getElementById("reviewShow").innerHTML = data; 
    })
});

  