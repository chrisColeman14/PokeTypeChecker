db  = {
    "Attack": [
        {"key":"Normal", "values": ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0.5", "0", "1"]},
        {"key":"Fire", "values": ["1", "0.5", "0.5", "1", "2", "2", "1", "1", "1", "1", "1", "2", "0.5", "1", "0.5"]},
        {"key":"Water", "values": ["1", "2", "0.5", "1", "0.5", "1", "1", "1", "2", "1", "1", "1", "2", "1", "0.5"]},
        {"key":"Electric","values": ["1", "1", "2", "0.5", "0.5", "1", "1", "1", "0", "2", "1", "1", "1", "1", "0.5"]},
        {"key":"Grass","values": ["1", "0.5", "2", "1", "0.5", "1", "1", "0.5", "2", "0.5", "1", "0.5", "2", "1", "0.5"]},
        {"key":"Ice","values": ["1", "1", "0.5", "1", "2", "0.5", "1", "1", "2", "2", "1", "1", "1", "1", "2"]},
        {"key":"Fighting","values": ["2", "1", "1", "1", "1", "2", "1", "0.5", "1", "0.5", "0.5", "0.5", "2", "0", "1"]},
        {"key":"Poison","values": ["1", "1", "1", "1", "2", "1", "1", "0.5", "0.5", "1", "1", "2", "0.5", "0.5", "1"]},
        {"key":"Ground", "values": ["1", "2", "1", "2", "0.5", "1", "1", "2", "1", "0", "1", "0.5", "2", "1", "1"]},
        {"key":"Flying","values": ["1", "1", "1", "0.5", "2", "1", "2", "1", "1", "1", "1", "2", "0.5", "1", "1"]},
        {"key":"Psychic","values": ["1", "1", "1", "1", "1", "1", "2", "2", "1", "1", "0.5", "1", "1", "1", "1"]},
        {"key":"Bug","values": ["1", "0.5", "1", "1", "2", "1", "0.5", "2", "1", "0.5", "2", "1", "1", "0.5", "1"]},
        {"key":"Rock","values": ["1", "2", "1", "1", "1", "2", "0.5", "1", "0.5", "2", "1", "2", "1", "1", "1"]},
        {"key":"Ghost", "values": ["0", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0", "1", "1", "2", "1"]},
        {"key":"Dragon", "values": ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "2"]}
    ],

    "Defense": [
        {"key":"Normal", "values": ["1", "1", "1", "1", "1", "1", "2", "1", "1", "1", "1", "1", "1", "0", "1"]},
        {"key":"Fire", "values": ["1", "0.5", "2", "1", "0.5", "1", "1", "1", "2", "1", "1", "0.5", "2", "1", "1"]},
        {"key":"Water", "values": ["1", "0.5", "0.5", "2", "2", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"]},
        {"key":"Electric","values": ["1", "1", "1", "0.5", "1", "1", "1", "1", "2", "0.5", "1", "1", "1", "1", "1"]},
        {"key":"Grass","values": ["1", "2", "0.5", "0.5", "0.5", "2", "1", "2", "0.5", "2", "1", "2", "1", "1", "1"]},
        {"key":"Ice","values": ["1", "2", "1", "1", "1", "0.5", "2", "1", "1", "1", "1", "1", "2", "1", "1"]},
        {"key":"Fighting","values": ["1", "1", "1", "1", "1", "1", "1", "1", "1", "2", "2", "0.5", "0.5", "1", "1"]},
        {"key":"Poison","values": ["1", "1", "1", "1", "0.5", "1", "0.5", "0.5", "1", "1", "2", "2", "2", "1", "1"]},
        {"key":"Ground", "values": ["1", "1", "2", "0", "2", "2", "1", "0.5", "1", "1", "1", "1", "0.5", "1", "1"]},
        {"key":"Flying","values": ["1", "1", "1", "1", "1", "2", "0.5", "1", "0", "1", "1", "0.5", "2", "1", "1"]},
        {"key":"Psychic","values": ["1", "1", "1", "1", "1", "1", "0.5", "1", "1", "1", "0.5", "2", "1", "0", "1"]},
        {"key":"Bug","values": ["1", "2", "1", "1", "0.5", "1", "0.5", "2", "0.5", "2", "1", "1", "2", "1", "1"]},
        {"key":"Rock","values": ["0.5", "0.5", "2", "1", "2", "1", "2", "0.5", "2", "0.5", "1", "1", "1", "1", "1"]},
        {"key":"Ghost", "values": ["0", "1", "1", "1", "1", "1", "0", "0.5", "1", "1", "1", "0.5", "1", "2", "1"]},
        {"key":"Dragon", "values": ["1", "0.5", "0.5", "0.5", "0.5", "2", "1", "1", "1", "1", "1", "1", "1", "1", "2"]}
    ]
}

function findDb(code) {
    var attackList = [];
    var defenseList = [];

    var supers = [];
    var half = [];
    var weak = [];
    var resist = [];
    var noEffect = [];
    var immune = [];

    for(var i in db["Attack"]) {
        if(db["Attack"][i].key == code)
            attackList = db["Attack"][i].values;
    }
    for(var i in db["Defense"]) {
        if(db["Defense"][i].key == code)
            defenseList = db["Defense"][i].values;
    }

    supers = findEffect(attackList, "2");
    half = findEffect(attackList, "0.5");
    noEffect = findEffect(attackList, "0");

    weak = findEffect(defenseList, "2");
    resist = findEffect(defenseList, "0.5");
    immune = findEffect(defenseList, "0");

    resetHtml();

    document.getElementById("effect-break").innerHTML += "<br>";
    if(supers.length > 0) {
        document.getElementById("super-content-container").innerHTML += '<h6 style="color: rgb(204, 255, 204);">Super Effective<h6>';
        for(var i in supers) {
            document.getElementById("super-content-container").innerHTML+=
            '<div id="' + supers[i] + '-text">' + supers[i] + '</div><br>';
        }
    } else {
        document.getElementById("half-content-container").style.width = "100%";
        document.getElementById("super-content-container").style.width = "0%";
    }

    if(half.length > 0) {
        document.getElementById("half-content-container").innerHTML += '<h6 style="color: rgb(255, 204, 204);">Half Effective<h6>';
        for(var i in half) {
            document.getElementById("half-content-container").innerHTML+=
            '<div id="' + half[i] + '-text">' + half[i] + '</div><br>';
        }
    } else {
        document.getElementById("half-content-container").style.width = "0%";
        document.getElementById("super-content-container").style.width = "100%";
    }
    equalHeightsUpperContent();

    if(resist.length > 0) {
        document.getElementById("resist-content-container").innerHTML += "<br>";
        document.getElementById("resist-content-container").innerHTML += '<h6 style="color: rgb(204, 255, 204);">Resists<h6>';
        for(var i in resist) {
            document.getElementById("resist-content-container").innerHTML+=
            '<div id="' + resist[i] + '-text">' + resist[i] + '</div><br>';
        }
    } else {
        document.getElementById("resist-content-container").style.width = "0%";
        document.getElementById("weak-content-container").style.width = "100%";
    }

    if(weak.length > 0) {
        document.getElementById("weak-content-container").innerHTML += "<br>";
        document.getElementById("weak-content-container").innerHTML += '<h6 style="color: rgb(255, 204, 204);">Weak Against<h6>';
        for(var i in weak) {
            document.getElementById("weak-content-container").innerHTML+=
            '<div id="' + weak[i] + '-text">' + weak[i] + '</div><br>';
        }
    } else {
        document.getElementById("resist-content-container").style.width = "100%";
        document.getElementById("weak-content-container").style.width = "0%";
    }
    adjustHeightMidContent();

    if(noEffect.length > 0) {
        document.getElementById("no-effect-content-container").innerHTML += '<br><h6 style="color: rgb(255, 204, 204);">No Effect Against<h6>';
        for(var i in noEffect) {
            document.getElementById("no-effect-content-container").innerHTML+=
            '<div id="' + noEffect[i] + '-text">' + noEffect[i] + '</div><br>';
        }
    } else {
        document.getElementById("no-effect-content-container").style.height = "0%";
        document.getElementById("immune-content-container").style.height = "100%";
    }
    if(immune.length > 0) {
        document.getElementById("immune-content-container").innerHTML += "<br>";
        document.getElementById("immune-content-container").innerHTML += '<h6 style="color: rgb(204, 255, 204);">Immune To<h6>';
        for(var i in immune) {
            document.getElementById("immune-content-container").innerHTML+=
            '<div id="' + immune[i] + '-text">' + immune[i] + '</div><br>';
        }
    } else {
        document.getElementById("no-effect-content-container").style.width = "100%";
        document.getElementById("immune-content-container").style.width = "0%";
    }
    adjustHeightBottomContent();

    document.getElementById("line-break").innerHTML += "<br>";
    document.getElementById("body-wrapper").style.backgroundColor = "#999999";

    document.getElementById("effect-content-upper-wrapper").style.height = document.getElementById("upper-content-wrapper").clientHeight;
    document.getElementById("effect-content-middle-wrapper").style.height = document.getElementById("middle-content-wrapper").clientHeight;
    document.getElementById("effect-content-bottom-wrapper").style.height = document.getElementById("bottom-content-wrapper").clientHeight;
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

    if(superHeight != halfHeight) {
        if(superHeight > halfHeight) {
            document.getElementById("half-content-container").style.height = superHeight;
            document.getElementById("effect-content-upper-wrapper").style.height = superHeight;
            document.getElementById("upper-content-wrapper").style.height = superHeight;
        }
        else {
            document.getElementById("super-content-container").style.height = halfHeight;
            document.getElementById("effect-content-upper-wrapper").style.height = halfHeight;
            document.getElementById("upper-content-wrapper").style.height = halfHeight;
        }
    }   
    else {
        document.getElementById("half-content-container").style.height = superHeight;
        document.getElementById("effect-content-upper-wrapper").style.height = superHeight;
        document.getElementById("upper-content-wrapper").style.height = superHeight;
    }
}

function adjustHeightMidContent() {
    var resistHeight = 0;
    var weakHeight = 0;

    resistHeight = document.getElementById("resist-content-container").clientHeight;
    weakHeight = document.getElementById("weak-content-container").clientHeight;

    if(resistHeight != weakHeight) {
        if(resistHeight > weakHeight) {
            document.getElementById("weak-content-container").style.height = resistHeight;
            document.getElementById("effect-content-middle-wrapper").style.height = resistHeight;
            document.getElementById("middle-content-wrapper").style.height = resistHeight;
        }
        else {
            document.getElementById("resist-content-container").style.height = weakHeight;
            document.getElementById("effect-content-middle-wrapper").style.height = weakHeight;
            document.getElementById("middle-content-wrapper").style.height = weakHeight;
        }
    }   
    else {
        document.getElementById("weak-content-container").style.height = resistHeight;
        document.getElementById("effect-content-middle-wrapper").style.height = resistHeight;
        document.getElementById("middle-content-wrapper").style.height = resistHeight;
    }
}

function adjustHeightBottomContent() {
    var resistHeight = 0;
    var weakHeight = 0;

    resistHeight = document.getElementById("no-effect-content-container").clientHeight;
    weakHeight = document.getElementById("immune-content-container").clientHeight;

    if(resistHeight != weakHeight) {
        if(resistHeight > weakHeight) {
            document.getElementById("immune-content-container").style.height = resistHeight;
            document.getElementById("effect-content-bottom-wrapper").style.height = resistHeight;
            document.getElementById("bottom-content-wrapper").style.height = resistHeight;
        }
        else {
            document.getElementById("no-effect-content-container").style.height = weakHeight;
            document.getElementById("effect-content-bottom-wrapper").style.height = weakHeight;
            document.getElementById("bottom-content-wrapper").style.height = weakHeight;
        }
    }   
    else {
        document.getElementById("immune-content-container").style.height = resistHeight;
        document.getElementById("effect-content-bottom-wrapper").style.height = resistHeight;
        document.getElementById("bottom-content-wrapper").style.height = resistHeight;
    }
}

function resetHtml() {
    document.getElementById("half-content-container").style.width = "50%";
    document.getElementById("super-content-container").style.width = "50%";
    document.getElementById("resist-content-container").style.width = "50%";
    document.getElementById("weak-content-container").style.width = "50%";
    document.getElementById("no-effect-content-container").style.width = "50%";
    document.getElementById("immune-content-container").style.width = "50%";


    document.getElementById("super-content-container").style.height = 'fit-content';
    document.getElementById("half-content-container").style.height = 'fit-content';
    document.getElementById("effect-content-bottom-wrapper").style.height = 'fit-content';
    document.getElementById("resist-content-container").style.height = 'fit-content';
    document.getElementById("weak-content-container").style.height = 'fit-content';
    document.getElementById("no-effect-content-container").style.height = "fit-content";
    document.getElementById("immune-content-container").style.height = "fit-content";

    document.getElementById("effect-break").innerHTML = "";
    document.getElementById("super-content-container").innerHTML = "";
    document.getElementById("half-content-container").innerHTML = "";
    document.getElementById("no-effect-content-container").innerHTML = "";
    document.getElementById("resist-content-container").innerHTML = "";
    document.getElementById("weak-content-container").innerHTML = "";
    document.getElementById("no-effect-content-container").innerHTML = "";
    document.getElementById("immune-content-container").innerHTML = "";

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