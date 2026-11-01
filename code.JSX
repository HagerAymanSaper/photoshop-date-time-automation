// Create a text layer with today's date
var doc = app.activeDocument;

// Get today’s date
var now = new Date();
var year = now.getFullYear();
var month = ("0" + (now.getMonth() + 1)).slice(-2);
var day = ("0" + now.getDate()).slice(-2);

// Format: YYYY-MM-DD (you can change this)
var dateString = year + "-" + month + "-" + day;

// Make a new text layer
var textLayer = doc.artLayers.add();
textLayer.kind = LayerKind.TEXT;
textLayer.textItem.contents = dateString;

// Set some text options
textLayer.textItem.position = [100, 100]; // X,Y position in pixels
textLayer.textItem.size = 48;             // Font size
textLayer.textItem.font = "ArialMT";      // Font name
