// Öffnet den Dialog anhand seiner ID
function openDialog(dialogId) { // Funktion zum Öffnen eines Dialogs basierend auf seiner ID
    const dialogRef = document.getElementById(dialogId); // Ruft das Dialogelement anhand der übergebenen ID ab
    dialogRef.showModal(); // Öffnet den Dialog im Modal-Modus
    dialogRef.classList.add('opened'); // Fügt dem Dialog die Klasse 'opened' hinzu, um anzuzeigen, dass er geöffnet ist
}

// Schließt den Dialog anhand seiner ID
function closeDialog(dialogId) { // Funktion zum Schließen eines Dialogs basierend auf seiner ID
    const dialogRef = document.getElementById(dialogId); // Ruft das Dialogelement anhand der übergebenen ID ab
    dialogRef.close(); // Schließt den Dialog
    dialogRef.classList.remove('opened'); // Entfernt die Klasse 'opened' vom Dialog, um anzuzeigen, dass er geschlossen ist
}

//Dialog schließen mit Escape-Taste
document.addEventListener('keydown', function(event) {// Überprüfen, ob die Escape-Taste gedrückt wurde
    if (event.key === 'Escape') {//Überprüft ob Esc gedrückt wurde, wenn ja wird der offene Dialog geschlossen
        const openDialog = document.querySelector('dialog[open]');// Sucht nach einem geöffneten Dialog
        if (openDialog) {// Überprüft, ob ein Dialog geöffnet ist
            openDialog.close();// Schließt den geöffneten Dialog
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

let currentDialogIndex = 0;// Variable zum Speichern des aktuellen Dialogindex

function changeDialog(direction) {// Funktion zum Wechseln der Dialoge basierend auf der Richtung (vorwärts oder rückwärts)
    const dialogs = document.querySelectorAll('dialog');// Alle Dialogelemente auf der Seite abrufen
    dialogs[currentDialogIndex].close();// Schließt den aktuellen Dialog
    currentDialogIndex += direction;// Ändert den aktuellen Dialogindex basierend auf der Richtung
    if (currentDialogIndex >= dialogs.length) {// Überprüft, ob der Index den Bereich überschreitet
        currentDialogIndex = 0;// Setzt den Index auf 0, um zum ersten Dialog zurückzukehren
    }
    if (currentDialogIndex < 0) {// Überprüft, ob der Index negativ ist
        currentDialogIndex = dialogs.length - 1;// Setzt den Index auf den letzten Dialog, um zum letzten Dialog zurückzukehren
    }
    dialogs[currentDialogIndex].showModal();// Öffnet den neuen Dialog basierend auf dem aktualisierten Index
}
//Es frunktioniert und wird auch nicht mehr angefasst!!!