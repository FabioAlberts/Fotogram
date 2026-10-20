//Öffnen des ersten Dialogs über showModal() und hinzufügen der Klasse opened
const dialogRef = document.getElementById('photoDialog')

    function openDialog(){
        dialogRef.showModal();
        dialogRef.classList.add('opened');
    }

// Schließen des ersten Dialogs über close() und entfernen der Klasse opened
    function closeDialog(){
        dialogRef.close();
        dialogRef.classList.remove('opened');
    }
//Bisher keine mir bekannte Möglichkeit diese finktion auf alle Dialoge anzuwenden, daher wird die Funktion für jeden Dialog einzeln aufgerufen.

//Öffnen des zweiten Dialogs über showModal() und hinzufügen der Klasse opened
const dialogRef2 = document.getElementById('photoDialog2')

    function openDialog2(){
        dialogRef2.showModal();
        dialogRef2.classList.add('opened');
    }

// Schließen des zweiten Dialogs über close() und entfernen der Klasse opened
    function closeDialog2(){
        dialogRef2.close();
        dialogRef2.classList.remove('opened');
    }