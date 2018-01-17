// create an array of strings populated by animals
let animalArray = ["lion", "dog", "lizard", "cat", "whale"];

// for every item in the animalArray...
for (let i = 0; i < animalArray.length; i++) {
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



// // declare a constant variable queryURL where we store a Giphy API url
// const queryURL = "https://api.giphy.com/v1/gifs/search?q=cats&api_key=dc6zaTOxFJmzC&limit=10";

// // perform an asynchronous HTTP request

// $.ajax({
//     url: queryURL,
//     method: "GET",

// // After the data comes back from the request...
// }).then(function(response) {
//     console.log(response);
    
//     // store the data from the AJAX request in the results variable
//     let results = response.data;

//     // for every item in result...

//     for (let i = 0; i < results.length; i++) {
//         // dynamically create a div and store
//         let animalDiv = $("<div>");
        
//         // create a paragraph tag with the result's item rating
//         let p = $("<p>").text("Rating: " + results[i].rating);
        
//         // create and store an image tag
//         let animalImage = $("<img>");
//         // setting the src attribute of the animalImage to the url stored 
//         animalImage.attr("src", results[i].images.fixed_height.url);

//         // appending the paragraph and image tag to animalDiv
//         animalDiv.append(p);
//         animalDiv.append(animalImage);
        
//         // prepend the animalDiv to the HTML page in the #animalGifs element.
//         $("#animalGifs").prepend(animalDiv);

//     }

// });






