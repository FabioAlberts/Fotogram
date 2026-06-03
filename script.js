


const dialogRef = document.getElementById('photoDialog');

                    function openDialog(){   //Open the dialog and add the 'opened' class to it
                        dialogRef.showModal();
                        dialogRef.classList.add('opened');
                    }

                    function closeDialog(){    //Close the dialog and remove the 'opened' class from it
                        dialogRef.close();
                        dialogRef.classList.remove('opened');
                    }