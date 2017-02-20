$(function() {
  $("#favoriteThings").submit(function(event) {
    event.preventDefault();
    var favoriteAnimal = $("input#favoriteAnimal").val();
    var favoriteColor = $("input#favoriteColor").val();
    var favoriteIcecream = $("input#favoriteIcecream").val();
    var array = [favoriteAnimal, favoriteColor, favoriteIcecream];
    var array2 = [array[1], array[0], array[2]];
    document.getElementById("listItem1").innerHTML = (array2[0]);
    document.getElementById("listItem2").innerHTML = (array2[1]);
    document.getElementById("listItem3").innerHTML = (array2[2]);
    $("#unorderedList").show();
  });
});
