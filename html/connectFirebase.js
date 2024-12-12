import { app } from "./firebase.js";

import {
  getFirestore,
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const db = getFirestore(app);

const sectionRef = document.querySelector(".dogList");

async function getsmallDogs() {
    const smallDogsCollection = collection(db, "smallDogs");
    const smallDogsDocs = await getDocs(smallDogsCollection);

    sectionRef.innerHTML = "";
    for (let i = 0; i < smallDogsDocs.docs.length; i++) {
        const smallDog = smallDogsDocs.docs[i];
        const smallDogData = smallDog.data();

        sectionRef.innerHTML += `
            <div>
                <h4>${smallDogData.Name}</h4>
                <p>${smallDogData.Size}</p>
                <div>
                    <button class="delete-button" data-small-dog-id="${smallDog.id}">Delete</button>
                    <button class="update-button" data-small-dog-id="${smallDog.id}" >Update Size</button>
                </div>
            </div>
        `;
    }

    const deleteButtons = document.querySelectorAll(".delete-button");

    for (const deleteButton of deleteButtons) {
        deleteButton.onclick = deletesmallDog;
    }

    const updateButtons = document.querySelectorAll(".update-button");

    for (const updateButton of updateButtons) {
        updateButton.onclick = updatesmallDogSize;
    }

}

async function deletesmallDog(e) {
    const smallDogId = e.currentTarget.dataset.smallDogId;
    const smallDogsCollection = collection(db, "smallDogs");
    const smallDogDoc = doc(smallDogsCollection, smallDogId);
    await deleteDoc(smallDogDoc);

    getsmallDogs();
    
}

async function updatesmallDogSize(e) {
    const smallDogId = e.currentTarget.dataset.smallDogId;
    const smallDogsCollection = collection(db, "smallDogs");
    const smallDogDoc = doc(smallDogsCollection, smallDogId);
    const newsmallDogSize = prompt("New Dog Size?!");

    await updateDoc(smallDogDoc, { Size: newsmallDogSize });

    getsmallDogs();
}

async function addsmallDogs() {
    const smallDogsName = prompt("Dog Name:");
    const smallDogsSize = prompt("Size:");
  
    const smallDogsCollection = collection(db, "smallDogs");
  
    await addDoc(smallDogsCollection, { Name: smallDogsName, Size: smallDogsSize });
    
  
    getsmallDogs();
    
  }
  
  document.querySelector("#addsmallDogsButton").onclick = addsmallDogs;

getsmallDogs();