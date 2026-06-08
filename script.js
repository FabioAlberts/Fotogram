let randomTitles = [
    "kanenori-lake-7938396.jpg",
    "kanenori-trail-8117575.jpg",
    "leolevng-castle-5476737.jpg",
    "raniramli-ai-generated-8498983.png",
    "12019-hurricane-92968.jpg",
    "chikilino-turtle-5568624_1920.jpg",
    "corgaasbeek-lamb-3341618_1920.jpg",
    "marucha-dubai-3188864_1920.jpg",
    "rperucho-building-10122862_1920.jpg",
    "kanenori-landscape-7534634.jpg",
    "wikiimages-hurricane-benilde-58071.jpg",
    "kanenori-rainforest-4350845.jpg"
];

let randomImages = [
    "img/kanenori-lake-7938396_1280.jpg",
    "img/kanenori-trail-8117575_1280.jpg",
    "img/leolevng-castle-5476737_1280.jpg",
    "img/raniramli-ai-generated-8498983_1280.png",
    "img/12019-hurricane-92968_1280.jpg",
    "img/chikilino-turtle-5568624_1280.jpg",
    "img/corgaasbeek-lamb-3341618_1280.jpg",
    "img/marucha-dubai-3188864_1280.jpg",
    "img/rperucho-building-10122862_1280.jpg",
    "img/kanenori-landscape-7534634_1280.jpg",
    "img/wikiimages-hurricane-benilde-58071_1280.jpg",
    "img/kanenori-rainforest-4350845_1280.jpg"
];

function render(){
    let content = document.getElementById("content");
    for(let i = 0; i < randomTitles.length; i++){
        let img = document.createElement("img");
        img.src = randomImages[i];
        img.alt = randomTitles[i];
        content.appendChild(img);
        contentRef.innerHTML += 
                                `<div id="content">
                                <img src="${randomImages[i]}" 
                                alt="${randomTitles[i]}">
                                </div>`;
    }
}



const dialogRef = document.getElementById('photoDialog');

                    function openDialog(){   //Open the dialog and add the 'opened' class to it
                        dialogRef.showModal();
                        dialogRef.classList.add('opened');
                    }

                    function closeDialog(){    //Close the dialog and remove the 'opened' class from it
                        dialogRef.close();
                        dialogRef.classList.remove('opened');
                    }