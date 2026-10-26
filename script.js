//Bildschirm anpassen
function adjustScreen() {
    const screenWidth = window.innerWidth; // Ruft die aktuelle Breite des Browserfensters ab
    const screenHeight = window.innerHeight; // Ruft die aktuelle Höhe des Browserfensters ab

    // Anpassung der Bildschirmgröße
}

// Öffnet den Dialog anhand seiner ID
let currentDialogIndex = 0;

function openDialog(dialogId) { // Funktion zum Öffnen eines Dialogs basierend auf der übergebenen ID
    if (!isNaN(dialogId)) { // Überprüft, ob die ID eine Zahl ist
        dialogId = 'dialog' + dialogId; // Wenn ja, wird die ID in das Format 'dialogX' umgewandelt
    }

    const dialogRef = document.getElementById(dialogId); // Ruft das Dialogelement anhand der ID ab
    if (dialogRef) { // Überprüft, ob das Dialogelement existiert
        dialogRef.showModal(); // Öffnet das Dialogfenster
        dialogRef.classList.add('show'); // Macht das Fenster sichtbar
        currentDialogIndex = parseInt(dialogId.replace('dialog', '')); // Aktualisiert den aktuellen Dialogindex basierend auf der ID
    }
}

function closeDialog(dialogId) { // Funktion zum Schließen eines Dialogs basierend auf der übergebenen ID
     if (!isNaN(dialogId)) { // Überprüft, ob die ID eine Zahl ist
        dialogId = 'dialog' + dialogId; // Wenn ja, wird die ID in das Format 'dialogX' umgewandelt
    }
    const dialogRef = document.getElementById(dialogId); // Ruft das Dialogelement anhand der ID ab
    if (dialogRef) { // Überprüft, ob das Dialogelement existiert 
        dialogRef.close(); // Versteckt das Fenster wieder
        
    }
}

// Funktion fokussiert den Dialog, wenn er geöffnet wird
function focusDialog(dialogId) {
  if (!isNaN(dialogId)) {
    dialogId = 'dialog' + dialogId;
  }
  
  const dialogRef = document.getElementById(dialogId);
  
  if (dialogRef) {
    dialogRef.focus();
    
    
    if (!dialogRef.dataset.keyboardBound) {
      dialogRef.addEventListener('keydown', function(event) {
        
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();   
          
          
          console.log('Dialog geöffnet/bestätigt per Tastatur');
          
        }
      });
      
      dialogRef.dataset.keyboardBound = "true";
    }
  }
}

// Array mit den Daten für die Dialoge
const dialogData = [
    {counter: 1, title: "Hurricane", image: "./img/12019-hurricane-92968.jpg", },
    {counter: 2, title: "Turtle", image: "./img/chikilino-turtle-5568624_1920.jpg", },
    {counter: 3, title: "Lamb", image: "./img/corgaasbeek-lamb-3341618_1920.jpg", },
    {counter: 4, title: "Lake", image: "./img/kanenori-lake-7938396.jpg", },
    {counter: 5, title: "Landscape", image: "./img/kanenori-landscape-7534634.jpg", },
    {counter: 6, title: "Trail", image: "./img/kanenori-trail-8117575.jpg", },
    {counter: 7, title: "Castle", image: "./img/leolevng-castle-5476737.jpg", },
    {counter: 8, title: "Rainforest", image: "./img/kanenori-rainforest-4350845.jpg", },
    {counter: 9, title: "Dubai", image: "./img/marucha-dubai-3188864_1920.jpg", },
    {counter: 10, title: "AI-Generated", image: "./img/raniramli-ai-generated-8498983.png", },
    {counter: 11, title: "Building", image: "./img/rperucho-building-10122862_1920.jpg", },
    {counter: 12, title: "Hurricane Two", image: "./img/wikiimages-hurricane-benilde-58071.jpg", }
];

const container = document.getElementById('dialogContainer'); // Ruft das Container-Element ab, in dem die Dialoge eingefügt werden

// Variable zum Speichern des gesamten HTML-Codes für die Dialoge
let totalHTML = "";

dialogData.forEach(data => { // Durchläuft jedes Element im dialogData-Array
    totalHTML += ` 
        <dialog class="modal" id="dialog${data.counter}" aria-labelledby="dialogTitle" aria-describedby="dialogDescription" tabindex="-1">
                <header class="dialog_header" id="dialogHeader">
                    <h3 class="dialogTitle" id="dialogTitle">${data.title}</h3>
                    <button id="closeDialog" onclick="closeDialog('dialog${data.counter}')">X</button>
                </header>
                <main class="dialog_main" id="dialogDescription">
                    <img src="${data.image}" alt="${data.title}">
                </main>
                <footer class="dialog_footer">
                    <button class="arrow-prev" onclick="changeDialog(-1)">&larr;</button>
                    <p>${data.counter}/12</p>
                    <button class="arrow-next" onclick="changeDialog(1)">&rarr;</button>
                </footer>
                
            </dialog>
    `; // Fügt den HTML-Code für jeden Dialog in die totalHTML-Variable ein
});

container.innerHTML = totalHTML; // Fügt den gesamten HTML-Code für die Dialoge in das Container-Element ein

// Erst nach der Schleife das HTML einfügen
container.innerHTML = totalHTML; // Fügt den gesamten HTML-Code für die Dialoge in das Container-Element ein

//Dialog schließen mit Escape-Taste
document.addEventListener('keydown', function(event) {// Überprüfen, ob die Escape-Taste gedrückt wurde
    if (event.key === 'Escape') {//Überprüft ob Esc gedrückt wurde, wenn ja wird der offene Dialog geschlossen
        const openDialog = document.querySelector('dialog[open]');// Sucht nach einem geöffneten Dialog
        if (openDialog) {// Überprüft, ob ein Dialog geöffnet ist
            openDialog.close();// Schließt den geöffneten Dialog
            openDialog.classList.remove('opened');// Entfernt die Klasse 'opened' vom offenen Dialog
        }
    }
});

// Funktion zum Schließen des Dialogs, wenn außerhalb des Dialogs geklickt wird
const allDialogs = document.querySelectorAll('dialog');// Alle Dialogelemente auf der Seite abrufen
allDialogs.forEach(dialog => {// Durchläuft alle Dialogelemente
    dialog.addEventListener('click', function(event) {// Fügt jedem Dialog ein Klick-Ereignis hinzu
        if (event.target === dialog) {// Überprüft, ob der Klick auf den Dialog selbst und nicht auf ein Kind-Element erfolgt ist
            dialog.close();// Schließt den Dialog, wenn außerhalb des Dialogs geklickt wurde
            dialog.classList.remove('opened');// Entfernt die Klasse 'opened' vom Dialog
        }
    });
});

// Funktion zum Wechseln der Dialoge
function changeDialog(direction) {// Funktion zum Wechseln der Dialoge basierend auf der Richtung (vorwärts oder rückwärts)
    const dialogs = document.querySelectorAll('dialog');// Alle Dialogelemente auf der Seite abrufen
    if (!dialogs.length) return; // Überprüft, ob Dialoge vorhanden sind, wenn nicht, wird die Funktion beendet

    const currentDialog = dialogs[currentDialogIndex]; // Ruft den aktuellen Dialog basierend auf dem aktuellen Index ab
    if (currentDialog && currentDialog.open) { // Überprüft, ob der aktuelle Dialog geöffnet ist
        currentDialog.close();// Schließt den aktuellen Dialog
    }

    currentDialogIndex += direction;// Ändert den aktuellen Dialogindex basierend auf der Richtung
    if (currentDialogIndex >= dialogs.length) {// Überprüft, ob der Index den Bereich überschreitet
        currentDialogIndex = 0;// Setzt den Index auf 0, um zum ersten Dialog zurückzukehren
    }
    if (currentDialogIndex < 0) {// Überprüft, ob der Index negativ ist
        currentDialogIndex = dialogs.length - 1;// Setzt den Index auf den letzten Dialog, um zum letzten Dialog zurückzukehren
    }

    dialogs[currentDialogIndex].showModal();// Öffnet den neuen Dialog basierend auf dem aktualisierten Index
}
//Es frfunktioniert und wird auch nicht mehr angefasst!!!