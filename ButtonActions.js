function openGen1Html() {
    window.open("./gen1typechecker.html", "_self");
}

function openGen2_5Html() {
    window.open("./gen2_5typechecker.html", "_self");
}

function openResourcesHtml() {
    window.open("./resources.html", "_self");
}

function openGen6OnHtml() {
    window.open("./gen6typechecker.html", "_self");
}

function openWalkthroughRedAndBlue() {
    window.open("http://bulbapedia.bulbagarden.net/wiki/Appendix:Red_and_Blue_walkthrough");
}

function openWalkthroughYellow() {
    window.open("http://bulbapedia.bulbagarden.net/wiki/Appendix:Yellow_walkthrough");
}

function openWalkthroughGoldAndSilver() {
    window.open("http://bulbapedia.bulbagarden.net/wiki/Appendix:Gold_and_Silver_walkthrough");
}

function openWalkthroughCrystal() {
    window.open("http://bulbapedia.bulbagarden.net/wiki/Appendix:Crystal_walkthrough");
}

function openWalkthroughRubyAndSapphire() {
    window.open("http://bulbapedia.bulbagarden.net/wiki/Appendix:Ruby_and_Sapphire_walkthrough");
}

function openWalkthroughFireRedAndLeafGreen() {
    window.open("http://bulbapedia.bulbagarden.net/wiki/Appendix:FireRed_and_LeafGreen_walkthrough");
}

function openWalkthroughEmerald() {
    window.open("http://bulbapedia.bulbagarden.net/wiki/Appendix:Emerald_walkthrough");
}

function openWalkthroughDiamondAndPearl() {
    window.open("http://bulbapedia.bulbagarden.net/wiki/Appendix:Diamond_and_Pearl_walkthrough");
}

function openWalkthroughPlatinum() {
    window.open("http://bulbapedia.bulbagarden.net/wiki/Appendix:Platinum_walkthrough");
}

function openWalkthroughHGAndSS() {
    window.open("http://bulbapedia.bulbagarden.net/wiki/Appendix:HeartGold_and_SoulSilver_walkthrough");
}

function openWalkthroughBlackAndWhite() {
    window.open("http://bulbapedia.bulbagarden.net/wiki/Appendix:Black_and_White_walkthrough");
}

function openWalkthroughBlack2AndWhite2() {
    window.open("http://bulbapedia.bulbagarden.net/wiki/Appendix:Black_2_and_White_2_walkthrough");
}

function openWalkthroughXAndY() {
    window.open("http://bulbapedia.bulbagarden.net/wiki/Appendix:X_and_Y_walkthrough");
}

function openWalkthroughORAndAS() {
    window.open("http://bulbapedia.bulbagarden.net/wiki/Appendix:Omega_Ruby_and_Alpha_Sapphire_walkthrough");
}

function loadWalkthroughs() {
    document.getElementById("content-container-wrapper").innerHTML = 
    '<div id="content-container" class="container-small animated slideinup">' +
    '<div id="walkthrough-title" class="container-small">'+
        '<h3>Walkthroughs</h3>' +
    '</div>' +
        '<div class="walkthrough-link container-small">' +
            '<button id="red-blue-button" class="btn" onclick="openWalkthroughRedAndBlue()">Blue and Red</button>' + ' and '+
            '<button id="yellow-button" class="btn" onclick="openWalkthroughYellow()">Yellow</button> ' +
        '</div>' +
        '<br>' + 

        '<div class="walkthrough-link container-small">' +
            '<button id="gold-silver-button" class="btn" onclick="openWalkthroughGoldAndSilver()">Gold and Silver</button> and ' +
            '<button id="crystal-button" class="btn" onclick="openWalkthroughCrystal()">Crystal</button> ' +
        '</div>' +

        '<br>' +

        '<div class="walkthrough-link container-small" >' + 
            '<button id="ruby-sapphire-button" class="btn" onclick="openWalkthroughRubyAndSapphire()">Ruby and Sapphire</button> ' +
            '<button id="firered-leafgreen-button" class="btn" onclick="openWalkthroughFireRedAndLeafGreen()">Fire Red and Leaf Green </button> ' +
            '<button id="emerald-button" class="btn" onclick="openWalkthroughEmerald()">Emerald</button> ' +
        '</div>' +
        
        '<br>' + 

        '<div class="walkthrough-link container-small">' +
            '<button id="diamond-pearl-button" class="btn" onclick="openWalkthroughDiamondAndPearl()">Diamond and Pearl</button> and ' +
            '<button id="platinum-button" class="btn" onclick="openWalkthroughPlatinum()">Platinum</button> ' +
            '<button id="hg-ss-button" class="btn" onclick="openWalkthroughHGAndSS()">HeartGold and SoulSilver</button> ' +
        '</div>' +

        '<br>' +

        '<div class="walkthrough-link container-small">' +
            '<button id="black-white-button" class="btn" onclick="openWalkthroughBlackAndWhite()">Black and White</button> and ' +
            '<button id="black2-white2-button" class="btn" onclick="openWalkthroughBlack2AndWhite2()">Black 2 and White 2</button> ' +
        '</div>' +

        '<br>' +

        '<div class="walkthrough-link container-small">' +
            '<button id="x-y-button" class="btn" onclick="openWalkthroughXAndY()">X and Y</button> ' +
            '<button id="or-as-button" class="btn" onclick="openWalkthroughORAndAS()">Omega Ruby and Alpha Sapphire</button>' +
        '</div>' +
    '</div>'
    '</div>';
}

function loadNatures() {
    document.getElementById("content-container-wrapper").innerHTML = 
    '<div id="content-container" class="container-small animated slideinup">' +
        '<div id="walkthrough-title" class="container-small">' +
            '<h3>Natures</h3>' +
        '</div>' + 
        '<div id="nature-container" class="container-small">' +
            '<table id="nature-table" class="table borderless">' + 
                '<tr class="borderless">' +
                    '<td></td>' +
                    '<td class="attack-td">-Attack</td>' +
                    '<td class="defense-td">-Defense</td>' +
                    '<td class="spattack-td">-Sp. Attack</td>' +
                    '<td class="spdefense-td">-Sp. Defense</td>' +
                    '<td class="speed-td">-Speed</td>' +
                '</tr>' +
                
                '<tr>' +
                    '<td class="attack-td">+Attack</td>' +
                    '<td class="neutral-nature-td">Hardy</td>' +
                    '<td class="nature-td">Lonely</td>' +
                    '<td class="nature-td">Adamant</td>' +
                    '<td class="nature-td">Naughty</td>' +
                    '<td class="nature-td">Brave</td>' +
                '</tr>' +

                '<tr>' +
                    '<td class="defense-td">+Defense</td>' +
                    '<td class="nature-td">Bold</td>' +
                    '<td class="neutral-nature-td">Docile</td>' +
                    '<td class="nature-td">Impish</td>' +
                    '<td class="nature-td">Lax</td>' +
                    '<td class="nature-td">Relaxed</td>' +
                '</tr>' +

                '<tr>' +
                    '<td class="spattack-td">+Sp. Attack</td>' +
                    '<td class="nature-td">Modest</td>' +
                    '<td class="nature-td">Mild</td>' +
                    '<td class="neutral-nature-td">Bashful</td>' +
                    '<td class="nature-td">Rash</td>' +
                    '<td class="nature-td">Quiet</td>' +
                '</tr>' +

                '<tr>' +
                    '<td class="spdefense-td">+Sp. Defense</td>' +
                    '<td class="nature-td">Calm</td>' +
                    '<td class="nature-td">Gentle</td>' +
                    '<td class="nature-td">Careful</td>' +
                    '<td class="neutral-nature-td">Quirky</td>' +
                    '<td class="nature-td">Sassy</td>' +
                '</tr>' +

                '<tr>' +
                    '<td class="speed-td">+Speed</td>' +
                    '<td class="nature-td">Timid</td>' +
                    '<td class="nature-td">Hasty</td>' +
                    '<td class="nature-td">Jolly</td>' +
                    '<td class="nature-td">Naive</td>' +
                    '<td class="neutral-nature-td">Serious</td>' +
                '</tr>' +
            '</table>' +
        '</div>' +
    '</div>';
}

function loadPhysicalSpecial() {
    document.getElementById("content-container-wrapper").innerHTML = 
    '<div id="content-container" class="container-small animated slideinup">' +
        '<div id="walkthrough-title" class="container-small">' +
            '<h3>Physical/Special Before Split</h3>' +
        '</div>' + 
        '<div id="PhySpec-container" class="container-small">' +
            '<table id="PhySpec-table" class="table borderless">' + 
                '<tr class="borderless">' +
                    '<td id="phy-spc" class="phy-spc-td">Physical</td>' +
                    '<td id="phy-spc" class="phy-spc-td">Special</td>' +
                '</tr>' +
    
                '<tr>' +
                    '<td id="normal-td" class="phy-spc-td">Normal</td>' +
                    '<td id="fire-td" class="phy-spc-td">Fire</td>' +
                '</tr>' +

                '<tr>' +
                    '<td id="fighting-td" class="phy-spc-td">Fighting</td>' +
                    '<td id="water-td" class="phy-spc-td">Water</td>' +
                '</tr>' +

                '<tr>' +
                    '<td id="flying-td" class="phy-spc-td">Flying</td>' +
                    '<td id="grass-td" class="phy-spc-td">Grass</td>' +
                '</tr>' +

                '<tr>' +
                    '<td id="poison-td" class="phy-spc-td">Poison</td>' +
                    '<td id="electric-td" class="phy-spc-td">Electric</td>' +
                '</tr>' +

                '<tr>' +
                    '<td id="ground-td" class="phy-spc-td">Ground</td>' +
                    '<td id="psychic-td" class="phy-spc-td">Psychic</td>' +
                '</tr>' +

                '<tr>' +
                    '<td id="rock-td" class="phy-spc-td">rock</td>' +
                    '<td id="ice-td" class="phy-spc-td">Ice</td>' +
                '</tr>' +

                '<tr>' +
                    '<td id="bug-td" class="phy-spc-td">Bug</td>' +
                    '<td id="dragon-td" class="phy-spc-td">Dragon</td>' +
                '</tr>' +

                '<tr>' +
                    '<td id="ghost-td" class="phy-spc-td">Ghost</td>' +
                    '<td id="dark-td" class="phy-spc-td">Dark</td>' +
                '</tr>' +

                '<tr>' +
                    '<td id="steel-td" class="phy-spc-td">Steel</td>' +
                '</tr>' +
                
            '</table>' +
        '</div>' +
    '</div>';
}