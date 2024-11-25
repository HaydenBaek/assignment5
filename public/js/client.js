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



// Load content1.html when "Click me" button is clicked
document.querySelector("#snackHTML").addEventListener("click", function() {
    ajaxGET("http://localhost:8000/snack?format=html", function(data) {
        document.getElementById("snack-html").innerHTML = data;

        // Add event listener for #content1JSON button after content1.html is loaded
        const content1JSONButton = document.querySelector("#snackJSON");
        if (content1JSONButton) {
            content1JSONButton.addEventListener("click", function() {
                console.log("Review button clicked!");

                ajaxGET("http://localhost:8000/snack?format=json", function(data) {
                    try {
                        let parsedData = JSON.parse(data);
                        let str = "<ol>";
                        parsedData.forEach(item => {
                            str += `<li>${item}</li>`;
                        });
                        str += "</ol>";
                        document.getElementById("snack-json").innerHTML = str;
                    } catch (error) {
                        console.error("Error parsing JSON:", error);
                    }
                });
            });
        } 
    });
});





// Load content1.html when "Click me" button is clicked
document.querySelector("#content1HTML").addEventListener("click", function() {
    ajaxGET("http://localhost:8000/content1?format=html", function(data) {
        document.getElementById("content1-html").innerHTML = data;

        // Add event listener for #content1JSON button after content1.html is loaded
        const content1JSONButton = document.querySelector("#content1JSON");
        if (content1JSONButton) {
            content1JSONButton.addEventListener("click", function() {
                console.log("Review button clicked!");

                ajaxGET("http://localhost:8000/content1?format=json", function(data) {
                    try {
                        // Parse the JSON data
                        let parsedData = JSON.parse(data);
                
                        // Create a table with five columns: name, description, rating, date_of_rating, favorite_character
                        let str = "<table><tr><th>Name</th><th>Description</th><th>Rating</th><th>Date of Rating</th><th>Favorite Character</th></tr>";
                        for (let i = 0; i < parsedData.length; i++) {
                            let item = parsedData[i];
                            str += "<tr><td>" + item["name"] + "</td><td>" + item["description"] + "</td><td>" + item["rating"] + "</td><td>" + item["date_of_rating"] + "</td><td>" + item["favorite_character"] + "</td></tr>";
                        }
                        str += "</table>";
                
                        // Insert the table into the DOM
                        document.getElementById("review1-json").innerHTML = str;
                    } catch (error) {
                        console.error("Error parsing JSON:", error);
                    }
                });
            });
        } 
    });
});


// Load content2.html when "Click me" button is clicked
document.querySelector("#content2HTML").addEventListener("click", function() {
    ajaxGET("http://localhost:8000/content2?format=html", function(data) {
        document.getElementById("content2-html").innerHTML = data;

        // Add event listener for #content2JSON button after content2.html is loaded
        const content1JSONButton = document.querySelector("#content2JSON");
        if (content1JSONButton) {
            content1JSONButton.addEventListener("click", function() {
                console.log("Review button clicked!");

                ajaxGET("http://localhost:8000/content2?format=json", function(data) {
                    try {
                        // Parse the JSON data
                        let parsedData = JSON.parse(data);
                
                        // Create a table with five columns: name, description, rating, date_of_rating, favorite_character
                        let str = "<table><tr><th>Name</th><th>Description</th><th>Rating</th><th>Date of Rating</th><th>Favorite Character</th></tr>";
                        for (let i = 0; i < parsedData.length; i++) {
                            let item = parsedData[i];
                            str += "<tr><td>" + item["name"] + "</td><td>" + item["description"] + "</td><td>" + item["rating"] + "</td><td>" + item["date_of_rating"] + "</td><td>" + item["favorite_character"] + "</td></tr>";
                        }
                        str += "</table>";
                
                        // Insert the table into the DOM
                        document.getElementById("review2-json").innerHTML = str;
                    } catch (error) {
                        console.error("Error parsing JSON:", error);
                    }
                });
            });
        } 
    });
});


// Load content3.html when "Click me" button is clicked
document.querySelector("#content3HTML").addEventListener("click", function() {
    ajaxGET("http://localhost:8000/content3?format=html", function(data) {
        document.getElementById("content3-html").innerHTML = data;

        // Add event listener for #content3JSON button after content3.html is loaded
        const content3JSONButton = document.querySelector("#content3JSON");
        if (content3JSONButton) {
            content3JSONButton.addEventListener("click", function() {
                console.log("Review button clicked!");

                ajaxGET("http://localhost:8000/content3?format=json", function(data) {
                    try {
                        // Parse the JSON data
                        let parsedData = JSON.parse(data);
                
                        // Create a table with five columns: name, description, rating, date_of_rating, favorite_character
                        let str = "<table><tr><th>Name</th><th>Description</th><th>Rating</th><th>Date of Rating</th><th>Favorite Character</th></tr>";
                        for (let i = 0; i < parsedData.length; i++) {
                            let item = parsedData[i];
                            str += "<tr><td>" + item["name"] + "</td><td>" + item["description"] + "</td><td>" + item["rating"] + "</td><td>" + item["date_of_rating"] + "</td><td>" + item["favorite_character"] + "</td></tr>";
                        }
                        str += "</table>";
                
                        // Insert the table into the DOM
                        document.getElementById("review3-json").innerHTML = str;
                    } catch (error) {
                        console.error("Error parsing JSON:", error);
                    }
                });
            });
        } 
    });
});



// Load content4.html when "Click me" button is clicked
document.querySelector("#content4HTML").addEventListener("click", function() {
    ajaxGET("http://localhost:8000/content4?format=html", function(data) {
        document.getElementById("content4-html").innerHTML = data;

        // Add event listener for #content4JSON button after content4.html is loaded
        const content4JSONButton = document.querySelector("#content4JSON");
        if (content4JSONButton) {
            content4JSONButton.addEventListener("click", function() {
                console.log("Review button clicked!");

                ajaxGET("http://localhost:8000/content4?format=json", function(data) {
                    try {
                        // Parse the JSON data
                        let parsedData = JSON.parse(data);
                
                        // Create a table with five columns: name, description, rating, date_of_rating, favorite_character
                        let str = "<table><tr><th>Name</th><th>Description</th><th>Rating</th><th>Date of Rating</th><th>Favorite Character</th></tr>";
                        for (let i = 0; i < parsedData.length; i++) {
                            let item = parsedData[i];
                            str += "<tr><td>" + item["name"] + "</td><td>" + item["description"] + "</td><td>" + item["rating"] + "</td><td>" + item["date_of_rating"] + "</td><td>" + item["favorite_character"] + "</td></tr>";
                        }
                        str += "</table>";
                
                        // Insert the table into the DOM
                        document.getElementById("review4-json").innerHTML = str;
                    } catch (error) {
                        console.error("Error parsing JSON:", error);
                    }
                });
            });
        } 
    });
});


// Load content1.html when "Click me" button is clicked
document.querySelector("#rizzyHTML").addEventListener("click", function() {
    ajaxGET("http://localhost:8000/rizzy?format=html", function(data) {
        document.getElementById("rizzy-html").innerHTML = data;

        // Add event listener for #content1JSON button after content1.html is loaded
        const content1JSONButton = document.querySelector("#snackJSON");
        if (content1JSONButton) {
            content1JSONButton.addEventListener("click", function() {
                console.log("Review button clicked!");

                ajaxGET("http://localhost:8000/snack?format=json", function(data) {
                    try {
                        // Parse the JSON data
                        let parsedData = JSON.parse(data);
                
                        // Create a table with only title and description columns
                        let str = "<table>";
                        for (let i = 0; i < parsedData.length; i++) {
                            let item = parsedData[i];
                            str += "<tr><td>" + item["title"] + "</td><td>" + item["description"] + "</td></tr>";
                        }
                        str += "</table>";
                
                        // Insert the table into the DOM
                        document.getElementById("snack-json").innerHTML = str;
                    } catch (error) {
                        console.error("Error parsing JSON:", error);
                    }
                });
            });
        } 
    });
});
























