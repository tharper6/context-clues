var accusations = 100

var FRIEND_NAME = ['Tray', 'Manny', 'Sydeny', 'Sean', 'Amy']
var LOCATION_NAME = ['Bham', 'Atl', 'Detroit', 'Chicago', 'Los Angeles', 'New York', 'Charlotte', 'Dallas', 'Seattle', 'Baltimore']
var WEAPON_NAME = ['Drumgun', 'Pickaxe', 'Laser', 'Mallet', 'Hammer', 'Golf Club', 'Spikes', 'Claws', 'Cane', 'Chemicals', 'Horseshoe', 'Bow', 'Knife', 'Rifle', 'Shotgun', 'Sniper', 'Longbow', 'Alternator', 'R-301', 'R-99']


for (var i = 1; i < accusations + 1; i++) {
    var h3 = $("<h3>Accusation " + i + "</h3>")
    $('body').append(h3)

    function alertMaker() {
        var pleaseWork = i
        return h3.click(function () {
            var alertText = "Accusation " + pleaseWork + ": I accuse " + FRIEND_NAME[pleaseWork % FRIEND_NAME.length] + " , with the " + WEAPON_NAME[pleaseWork % WEAPON_NAME.length] + " in the " + LOCATION_NAME[pleaseWork % LOCATION_NAME.length] + "!"
            alert(alertText)
            return pleaseWork;
        })
    }
    alertMaker();
}