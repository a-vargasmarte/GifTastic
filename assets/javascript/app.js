// create an array of strings populated by animals
let animalArray = ["lion", "dog", "lizard", "cat", "whale"];

// declare an empty object results which will eventually hold the responses to our ajax request and their properties

let results = {};
let stillURL = {};
let originalURL = {};

// FUNCTIONS

// we declare a function that dynamically creates html elements based on the animalArray
function createElements() {

    // for every item in the animalArray...
    for (let i = 0; i < animalArray.length; i++) {
        // we empty our #animalButtonDiv
        // $("#animalButtonDiv").empty();
        // dynamically create and store buttons and add attributes
        let animalButton = $("<button>");
        
        // specifically add id, class, and data attributes
        animalButton.attr("id", "animalButton" + i);
        animalButton.attr("data-animal", animalArray[i]);
        animalButton.attr("class", "animalButt");

        // add text to the button
        animalButton.text(animalArray[i]);

        // append each button to animalButtonDiv
        $("#animalButtonDiv").append(animalButton);
    }
}

createElements();

// declare a function that adds data attributes to html elements

function addAttributesToGifs(animalDiv, p, animalImage) {

    // for every item in result...

    for (let i = 0; i < results.length; i++) {
        // declare variables to store the still and original url
        let stillURL = results[i].images.original_still.url;
        let originalURL = results[i].url;
 
        

        // dynamically create a div and store
        animalDiv = $("<div>");
        
        animalDiv.attr("data-stillURL", stillURL);        
        animalDiv.attr("data-originalURL", originalURL);

        // create a paragraph tag with the result's item rating
        p = $("<p>").text("Rating: " + results[i].rating);

        // create and store an image tag
        animalImage = $("<img>");

        // set attributes to images    
        animalImage.attr("id", "gif" + i);
        animalImage.attr("src", stillURL);
        // animalImage.attr("id", "gif" + i);

        // appending the paragraph and image tag to animalDiv
        animalDiv.append(p);
        animalDiv.append(animalImage);

        // prepend the animalDiv to the HTML page in the #animalGifs element.
        $("#animalGifs").prepend(animalDiv);
    }
}



// add a click event listener to all animal buttons

$(".animalButt").on("click", function() {

    // we empty the #animalButtonDiv
    $("#animalButtonDiv").empty();

    // and we invoke createElements again
    createElements();
    
    // grab the data-animal property from "this" button and store in a variable animal
    let animal = $(this).attr("data-animal"); 

    // declare a variable queryURL where we store a Giphy API url
    let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=10";

    // perform an asynchronous HTTP request
    $.ajax({
        url: queryURL,
        method: "GET",

    // After the data comes back from the request...
    }).then(function(response) {
        console.log(response);
        
        // store the data from the AJAX request in the results variable
        results = response.data;
        console.log(results);

        // addAttributesToGifs
        addAttributesToGifs();

    });
});

console.log(results);









