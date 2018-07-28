$(document).ready(function() {
    //initial array of types of animals to pre-populate starter buttons
    var topics = ["Cat", "Dogs", "Lion", "Chicken", "Hot Chicks", "Humans", "Monkeys","Fish"];
    //function to display content to DOM using Giphy API and JSON
    function displayInfo() {
       var animal = $(this).attr("animal-name");
    //    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=10";
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=bzlDkNkWKj6XfjGcVL5FQcbusS3eB7RH&limit=10";
        //use AJAX to GET information on animal button clicked
        $.ajax({
           url: queryURL,
           method: "GET"
       }).done(function(response) {
           var results = response.data;
            for (var i = 0; i < results.length; i++) {
               var animalDiv = $("<div class='animal'>");
                var rating = results[i].rating;
               var pRate = $("<p>").text("Rating: " + rating);
                var gifURL = results[i].images.fixed_height.url;
               var gif = $("<img>").attr("src", gifURL);
                animalDiv.append(gif);
               animalDiv.append(pRate);
                $("#animals").append(animalDiv);
           }
       });
    }
    //create buttons out of array indexes
    function renderButtons() {
        //delete buttons and rerun so no repeats
        $("#animalButtons").empty();
        //loop through array
        for (var i = 0; i < topics.length; i++) {
            var animalRender = $("<button>");
            animalRender.addClass("animal");
            animalRender.attr("animal-name", topics[i]);
            animalRender.text(topics[i]);
           $("#animalButtons").append(animalRender);
       }
   }
    //on click function to add an additional animal button when submitted - push input to array.
    $("#addAnimal").on("click", function(event) {
       event.preventDefault();
       var animal = $("#animal-input").val().trim();
        //push input to original topics array and then rerun render of buttons to show newly added button.
       topics.push(animal);
       renderButtons();
   });
    //on click entire document to cover all elements named "animal" and run display function
   $(document).on("click", ".animal", displayInfo);
    //run function to display all buttons on startup
   renderButtons();





   $(document).on("click", ".animal", ()=> {
       $("#animals").empty(). displayInfo();
;   });
   //run function to display all buttons on startup
  renderButtons();
});