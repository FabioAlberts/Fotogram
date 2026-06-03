


const dialogRef = document.getElementById('photoDialog');

                    function openDialog(){
                        dialogRef.showModal();
                        dialogRef.classList.add('opened');
                    }

                    function closeDialog(){
                        dialogRef.close();
                        dialogRef.classList.remove('opened');
                    }