// Define the make_album function
function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Calling three functions and creating three variables with different values
var album1 = make_album("Hafsa", "Album title 1");
var album2 = make_album("Ali", "Album title 2");
// Calling a Make_Album function with third parameter 
var album3 = make_album("Saad", "Album title 3", 10);
// Print the variables
console.log(album1);
console.log(album2);
console.log(album3);
