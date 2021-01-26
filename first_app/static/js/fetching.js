console.log("hello from the js file!");

function makeCall(id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => res.json())
        .then(res => {
            console.log(res.name);
            document.getElementById("pkmnName").innerHTML = res.name;
        })
        .catch(err => console.log(err));
}


function getPokemon(){
    let this_id = document.getElementById("idBox").value;
    makeCall(this_id);
    console.log(`You request pokemone number ${this_is}`);
}