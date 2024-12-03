async function getBluetickDogs() {
    const bluetickResponse  = await fetch("https://dog.ceo/api/breed/bluetick/images");

    const bluetickData = await bluetickResponse.json();

    return bluetickData;
}

async function makeDogImages() {
    const dogsRef = document.querySelector(".dogs");

    const allDogs = await getBluetickDogs();

    for (let i = 0; i < allDogs.message.length; i++) {
        const dogImage = allDogs.message[i];
        dogsRef.innerHTML += `<img src="${dogImage}" height="100" />`;
        
    }

    console.log(allDogs);
}

makeDogImages();