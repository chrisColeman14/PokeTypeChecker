db  = {
    "Attack": [
        {"key":"Normal", "values": ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0.5", "0", "1"]},
        {"key":"Fire", "values": ["1", "0.5", "0.5", "1", "2", "2", "1", "1", "1", "1", "1", "2", "0.5", "1", "0.5"]},
        {"key":"none", "Water": ["1", "2", "0.5", "1", "0.5", "1", "1", "1", "2", "1", "1", "1", "2", "1", "0.5"]},
        {"key":"none","Electric": ["1", "1", "2", "0.5", "0.5", "1", "1", "1", "0", "2", "1", "1", "1", "1", "0.5"]},
        {"key":"none","Grass": ["1", "0.5", "2", "1", "0.5", "1", "1", "0.5", "2", "0.5", "1", "0.5", "2", "1", "0.5"]},
        {"key":"none","Ice": ["1", "1", "0.5", "1", "2", "0.5", "1", "1", "2", "2", "1", "1", "1", "1", "2"]},
        {"key":"none","Fighting": ["2", "1", "1", "1", "1", "2", "1", "0.5", "1", "0.5", "0.5", "0.5", "2", "0", "1"]},
        {"key":"none","Poison": ["1", "1", "1", "1", "2", "1", "1", "0.5", "0.5", "1", "1", "2", "0.5", "0.5", "1"]},
        {"key":"Ground", "values": ["1", "2", "1", "2", "0.5", "1", "1", "2", "1", "0", "1", "0.5", "2", "1", "1"]},
        {"key":"none","Flying": ["1", "1", "1", "0.5", "2", "1", "2", "1", "1", "1", "1", "2", "0.5", "1", "1"]},
        {"key":"none","Psychic": ["1", "1", "1", "1", "1", "1", "2", "2", "1", "1", "0.5", "1", "1", "1", "1"]},
        {"key":"none","Bug": ["1", "0.5", "1", "1", "2", "1", "0.5", "2", "1", "0.5", "2", "1", "1", "0.5", "1"]},
        {"key":"none","Rock": ["1", "2", "1", "1", "1", "2", "0.5", "1", "0.5", "2", "1", "2", "1", "1", "1"]},
        {"key":"none", "Ghost": ["0", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0", "1", "1", "2", "1"]}
    ]
}

function findDb(code) {
    var dbList = [];
    var supers = [];
    var half = [];
    switch(code) {
        case "Normal":
            dbList = db.Attack[0].values;
            break;
        case "Fire":
            dbList = db.Attack[1].values;
            break;
        case "Ground":
            dbList = db.Attack[8].values;
            break;

    }
    supers = findEffect(dbList, "2");
    half = findEffect(dbList, "0.5");
    noEffect = findEffect(dbList, "0");

    document.getElementById("super-content-container").style.height = 'fit-content';
    document.getElementById("half-content-container").style.height = 'fit-content';

    document.getElementById("effect-break").innerHTML = "";
    document.getElementById("super-content-container").innerHTML = "";
    document.getElementById("half-content-container").innerHTML = "";
    document.getElementById("no-effect-content-container").innerHTML = "";

    document.getElementById("effect-break").innerHTML += "<br>";
    document.getElementById("super-content-container").innerHTML += '<h5>Super Effective<h5>';
    for(var i in supers) {
        console.log(supers[i]);
        document.getElementById("super-content-container").innerHTML+=
        '<div id="' + supers[i] + '-text">' + supers[i] + '</div><br>';
    }
    document.getElementById("half-content-container").innerHTML += '<h5>Half Effective<h5>';
    for(var i in half) {
        console.log(half[i]);
        document.getElementById("half-content-container").innerHTML+=
        '<div id="' + half[i] + '-text">' + half[i] + '</div><br>';
    }

    if(noEffect.length > 0) {
        document.getElementById("no-effect-content-container").innerHTML += '<h5>No Effect<h5>';
        for(var i in noEffect) {
            document.getElementById("no-effect-content-container").innerHTML+=
            '<div id="' + noEffect[i] + '-text">' + noEffect[i] + '</div><br>';
        }
    }

    equalHeightsUpperContent();
    
}



function findEffect(list, damage) {
    var supers = [];
    for(var i in list) {
        if(list[i] == damage) {
            supers.push(numberToString(i));
        }
    }
    return supers;
}

function equalHeightsUpperContent() {
    var superHeight = 0;
    var halfHeight = 0;

    superHeight = document.getElementById("super-content-container").clientHeight;
    halfHeight = document.getElementById("half-content-container").clientHeight;
    console.log('super: '+superHeight+' half: '+halfHeight)
    if(superHeight != halfHeight) {
        if(superHeight > halfHeight)
            document.getElementById("half-content-container").style.height = superHeight;
        else 
            document.getElementById("super-content-container").style.height = halfHeight;
    }   
}

function numberToString(key) {
    switch(key) {
        case "0":
            return "Normal";
            break; 
        case "1": 
            return "Fire";
            break;
        case "2":
            return "Water";
            break;
        case "3":
            return "Electric";
            break;
        case "4":
            return "Grass";
            break;
        case "5":
            return "Ice";
            break;
        case "6":
            return "Fighting";
            break;
        case "7":
            return "Poison";
            break;
        case "8":
            return "Ground";
            break;
        case "9":
            return "Flying";
            break;
        case "10":
            return "Psychic";
            break;
        case "11":
            return "Bug";
            break;
        case "12":
            return "Rock";
            break;
        case "13":
            return "Ghost";
            break;
        case "14":
            return "Dragon";
        case "15":
            return "Dark";
            break;
        case "16":
            return "Steel";
            break;
        case "17":
            return "Fairy";
            break;
        default: 
            return "empty"
            break;
    }
}