# Photoshop Automation Tools

A collection of JavaScript (JSX) scripts designed to automate repetitive tasks in Adobe Photoshop.

## Available Scripts

### 1. Code.jsx – Automatic Date Generator

Automatically creates a new text layer containing the current date.

**Features:**
- Retrieves the current date from the computer.
- Formats the date as `YYYY-MM-DD`.
- Creates a new editable text layer.
- Sets the text position to X: 100px, Y: 100px.
- Sets font size to 48px.
- Uses Arial font.

### 2. Code2.jsx – Automatic Code Incrementer

Automatically generates and increments codes inside Photoshop.

**Features:**
- Uses `J` as the code prefix.
- Starts from `J2174`.
- Automatically increments the previous number.
- Updates the currently selected text layer.
- Saves the last generated number in a counter file in the Documents folder.
- Preserves the numbering sequence between sessions.

## Installation

**Step 1 – Copy the scripts**

Copy both `.jsx` files into the following Photoshop Scripts directory:

```text
C:\Program Files\Adobe\Adobe Photoshop 2025\Presets\Scripts
```

**Step 2 – Restart Photoshop**

Restart Photoshop to make the scripts available.

**Step 3 – Create Photoshop Actions**

For each script:

1. Open Photoshop.
2. Go to Window → Actions.
3. Create a new Action and name it.
4. Click Record.
5. Go to File → Scripts.
6. Select the script you want to automate.
7. Stop recording.

**Step 4 – Run your Actions**

Your scripts are now accessible through your recorded Photoshop Actions.

## Requirements

- Adobe Photoshop 2025.
- Windows operating system.
- No additional software required.

## Notes

- Code.jsx creates a new date text layer every time it runs.
- Code2.jsx requires an existing document and a selected text layer.
- Code2.jsx stores its numbering counter in your Documents folder.
- Keep the JSX files installed because the recorded Actions execute these external scripts.

## License

Free to use and modify for personal and educational purposes.
