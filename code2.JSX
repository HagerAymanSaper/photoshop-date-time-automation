// AutoIncrementCode.jsx
#target photoshop

// Choose a path to store the counter (you can change this if you want)
var counterFile = new File(Folder.myDocuments + "/ps_code_counter.txt");

// Define the prefix (J) and the starting number
var prefix = "J";
var startNumber = 2174;

// Function to read the last number
function readCounter() {
    if (counterFile.exists) {
        counterFile.open('r');
        var num = parseInt(counterFile.read(), 10);
        counterFile.close();
        if (!isNaN(num)) return num;
    }
    return startNumber;
}

// Function to save the next number
function saveCounter(num) {
    counterFile.open('w');
    counterFile.write(num.toString());
    counterFile.close();
}

// --- MAIN ---
if (app.documents.length > 0) {
    var doc = app.activeDocument;
    if (doc.activeLayer.kind == LayerKind.TEXT) {
        var currentNum = readCounter();
        var nextNum = currentNum + 1;
        doc.activeLayer.textItem.contents = prefix + nextNum.toString();
        saveCounter(nextNum);
    } else {
        alert("Please select a text layer first.");
    }
} else {
    alert("No document open.");
}
