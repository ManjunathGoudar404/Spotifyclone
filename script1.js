async function displayAlbums() {
    console.log("displaying albums")
    let a = await fetch(`https://github.com/ManjunathGoudar404/Spotifyclone/songs/`)
    let response = await a.text();
    console.log(response);
}
displayAlbums();