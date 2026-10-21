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

//Öffnen des dritten Dialogs über showModal() und hinzufügen der Klasse opened
const dialogRef3 = document.getElementById('photoDialog3')
    function openDialog3(){
        dialogRef3.showModal();
        dialogRef3.classList.add('opened');
    }
// Schließen des dritten Dialogs über close() und entfernen der Klasse opened
    function closeDialog3(){
        dialogRef3.close();
        dialogRef3.classList.remove('opened');
    }

//Öffnen des vierten Dialogs über showModal() und hinzufügen der Klasse opened
const dialogRef4 = document.getElementById('photoDialog4')
    function openDialog4(){
        dialogRef4.showModal();
        dialogRef4.classList.add('opened');
    }
// Schließen des vierten Dialogs über close() und entfernen der Klasse opened
    function closeDialog4(){
        dialogRef4.close();
        dialogRef4.classList.remove('opened');
    }

//Öffnen des fünften Dialogs über showModal() und hinzufügen der Klasse opened
const dialogRef5 = document.getElementById('photoDialog5')
    function openDialog5(){
        dialogRef5.showModal();
        dialogRef5.classList.add('opened');
    }
// Schließen des fünften Dialogs über close() und entfernen der Klasse opened
    function closeDialog5(){
        dialogRef5.close();
        dialogRef5.classList.remove('opened');
    }

//Öffnen des sechsten Dialogs über showModal() und hinzufügen der Klasse opened
const dialogRef6 = document.getElementById('photoDialog6')
    function openDialog6(){
        dialogRef6.showModal();
        dialogRef6.classList.add('opened');
    }
// Schließen des sechsten Dialogs über close() und entfernen der Klasse opened
    function closeDialog6(){
        dialogRef6.close();
        dialogRef6.classList.remove('opened');
    }

//Öffnen des siebten Dialogs über showModal() und hinzufügen der Klasse opened
const dialogRef7 = document.getElementById('photoDialog7')
    function openDialog7(){
        dialogRef7.showModal();
        dialogRef7.classList.add('opened');
    }
// Schließen des siebten Dialogs über close() und entfernen der Klasse opened
    function closeDialog7(){
        dialogRef7.close();
        dialogRef7.classList.remove('opened');
    }

//Öffnen des achten Dialogs über showModal() und hinzufügen der Klasse opened
const dialogRef8 = document.getElementById('photoDialog8')
    function openDialog8(){
        dialogRef8.showModal();
        dialogRef8.classList.add('opened');
    }
// Schließen des achten Dialogs über close() und entfernen der Klasse opened
    function closeDialog8(){
        dialogRef8.close();
        dialogRef8.classList.remove('opened');
    }

//Öffnen des neunten Dialogs über showModal() und hinzufügen der Klasse opened
const dialogRef9 = document.getElementById('photoDialog9')
    function openDialog9(){
        dialogRef9.showModal();
        dialogRef9.classList.add('opened');
    }
// Schließen des neunten Dialogs über close() und entfernen der Klasse opened
    function closeDialog9(){
        dialogRef9.close();
        dialogRef9.classList.remove('opened');
    }

//Öffnen des zehnten Dialogs über showModal() und hinzufügen der Klasse opened
const dialogRef10 = document.getElementById('photoDialog10')
    function openDialog10(){
        dialogRef10.showModal();
        dialogRef10.classList.add('opened');
    }
// Schließen des zehnten Dialogs über close() und entfernen der Klasse opened
    function closeDialog10(){
        dialogRef10.close();
        dialogRef10.classList.remove('opened');
    }

//Öffnen des elften Dialogs über showModal() und hinzufügen der Klasse opened
const dialogRef11 = document.getElementById('photoDialog11')
    function openDialog11(){
        dialogRef11.showModal();
        dialogRef11.classList.add('opened');
    }
// Schließen des elften Dialogs über close() und entfernen der Klasse opened
    function closeDialog11(){
        dialogRef11.close();
        dialogRef11.classList.remove('opened');
    }

//Öffnen des zwölften Dialogs über showModal() und hinzufügen der Klasse opened
const dialogRef12 = document.getElementById('photoDialog12')
    function openDialog12(){
        dialogRef12.showModal();
        dialogRef12.classList.add('opened');
    }
// Schließen des zwölften Dialogs über close() und entfernen der Klasse opened
    function closeDialog12(){
        dialogRef12.close();
        dialogRef12.classList.remove('opened');
    }

// Funktion zum Wechseln der Dialoge
let currentDialogIndex = 1;

for (let i = 1; i <= 12; i++) {
    const dialog = document.getElementsByClassName(`mySlides`)[i - 1];
    const prevButton = dialog.querySelector('.prev');
    const nextButton = dialog.querySelector('.next');
    }