/*
Check for a few notable exceptions, otherwise format names by capitalizing and cutting off after the dash.
*/
function formatName(name) {
    var formattedName;
    switch (name) {
        case "ho-oh": 
            formattedName = "Ho-oh"
            break;
        case "mr-mime": 
            formattedName= "Mr. Mime"
            break;
        case "mr-rime": 
            formattedName= "Mr. Rime"
            break;
        case "mime-jr":
            formattedName = "Mime Jr."
            break;
        case "farfetchd":
            formattedName = "Farfetch'd"
            break;
        case "porygon-z":
            formattedName = "Porygon-Z"
            break;
        case "type-null":
            formattedName = "Type: Null"
            break;
        case "wo-chien":
            formattedName = "Wo-Chien"
            break;
        case "chien-pao":
            formattedName = "Chien-Pao"
            break;
        case "ting-lu":
            formattedName = "Ting-Lu"
            break;
        case "chi-yu":
            formattedName = "Chi-Yu"
            break;
        case "roaring-moon":
            formattedName = "Roaring Moon"
            break;
        case "scream-tail":
            formattedName = "Scream Tail"
            break;
        case "brute-bonnet":
            formattedName = "Brute Bonnet"
            break;
        case "iron-valiant":
            formattedName = "Iron Valiant"
            break;
        case "walking-wake":
            formattedName = "Walking Wake"
            break;
        case "iron-leaves":
            formattedName = "Iron Leaves"
            break;
        case "gouging-fire":
            formattedName = "Gouging Fire"
            break;  
        case "raging-bolt":
            formattedName = "Raging Bolt"
            break;
        case "iron-boulder":
            formattedName = "Iron Boulder"
            break;
        case "iron-crown":
            formattedName = "Iron Crown"
            break;
        case "great-tusk":
            formattedName = "Great Tusk"
            break;
        case "iron-jugulis":
            formattedName = "Iron Jugulis"
            break;
        case "flutter-mane":
            formattedName = "Flutter Mane"
            break;
        case "iron-thorns":
            formattedName = "Iron Thorns"
            break;
        case "tapu-koko":
            formattedName = "Tapu Koko"
            break;
        case "tapu-bulu":
            formattedName = "Tapu Bulu"
            break;
        case "tapu-fini":
            formattedName = "Tapu Fini"
            break;
        case "tapu-lele":
            formattedName = "Tapu Lele"
            break;
        case "jangmo-o":
            formattedName = "Jangmo-o"
            break;
        case "hakamo-o":
            formattedName = "Hakamo-o"
            break;
        case "kommo-o":
            formattedName = "Kommo-o"
            break;
        default:
            formattedName = ((name.charAt(0).toUpperCase() + name.slice(1)).split('-')[0]);
    }
    return formattedName;
}

export default formatName;