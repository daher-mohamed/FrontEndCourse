//Quest Day
const dayOfWeek = 4;
switch (dayOfWeek) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        break;
}

//Game Theme Color
const themeColor = "light";
switch (themeColor) {
    case "light":
        console.log("Light");
        break;
    case "dark":
        console.log("Dark");
        break;
    case "dungeon":
        console.log("Dungeon");
        break;
    default:
        console.log("Unsupported color theme");
        break;
}

//Quest Notification 
const questStatus = "new";
switch (questStatus) {
    case "new" || "unread" || "unopened":
        console.log("You have new quests awationg!");
        break;

    default:
        console.log("completed");
        break;
}
//Player Level
const inventoryItem = "Shield";
switch (inventoryItem) {
    case "Shield" || "Sword" || "Potion":
        console.log("Selected");
    default: 
}

//Player Score
const playerScore = 70;

switch (playerScore < 70) {
    case false : 
        switch (playerScore >= 90) {
            case true:
                console.log("Legend");
                break;
        
            default:
                console.log("Champion");
                break;
        }
        break;

    default:
        console.log("Rookie");
        break;
}

// Seasonal Quests

const questMonth = 3;
switch (questMonth) {
    case 1:
        console.log("Ice Kingdom Adventure");
        break;
    case 2:
        console.log("Valentine's Day Special");
        break;
    case 3:
        console.log("Spring Blossom Hunt");
        break;
    case 4:
        console.log("Easter Egg Hunt");
        break;
    case 5:
        console.log("Flower Festival Celebration");
        break;
    case 6:
        console.log("Summer Solstice Quest");
        break;
    case 7:
        console.log("Beach Party Bonanza");
        break;
    case 8:
        console.log("Underwater Expedition");
        break;
    case 9:
        console.log("Harvest Festival Quest");
        break;
    case 10:
        console.log("Haunted Mansion Mystery");
        break;
    case 11:
        console.log("Trkey Tort Adventure");
        break;
    case 12:
        console.log("Frosty Festivaities");
        break;
    default:
        console.log("Invalid months for quest");
        break;
}

const playerInput = "daher";
switch (typeof(playerInput)) {
    case 'string':
        console.log("string");
        break;
    case 'number':
        console.log("number");
    case 'boolean':
        console.log("boolean");
    default:
        console.log("this another type");
        break;
}

//Game Updates
const updateMonth = 4;
switch (updateMonth) {
    case 1 || 2 || 3 :
        console.log("Q1");
        break;
    case 4 || 5 || 6 :
        console.log("Q2");
        break;
    case 7 || 8 || 9 :
        console.log("Q3");
        break;
    case 10 || 11 || 12 :
        console.log("Q4");
        break;

    default:
        break;
}

