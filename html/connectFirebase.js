import { app } from "./firebase.js";

import {
  getFirestore,
  collection,
  getDocs,
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
        const smallDogs = smallDogsDocs.docs[i];
        const smallDogsData = smallDogs.data();

        sectionRef.innerHTML += `
            <div>
                <h4>${smallDogsData.Name}</h4>
                <p>${smallDogsData.Size}</p>
                <div>
                    <button class="delete-button" data-smallDogs-id="${smallDogs.id}">Delete</button>
                    <button class="update-button" data-smallDogs-id="${smallDogs.id}">Update Size</button>
                </div>
            </div>
        `;
    }

    const deleteButtons = document.querySelectorAll(".delete-button");

    for (const deleteButton of deleteButtons) {
        deleteButton.onclick = deletesmallDogs;
    }

    const updateButtons = document.querySelectorAll(".update-button");

    for (const updateButton of updateButtons) {
        updateButton.onclick = updatesmallDogsSize;
    }

}

async function deletesmallDogs(e) {
    const smallDogsId = e.currentTarget.dataset.smallDogsId;
    const smallDogsCollection = collection(db, "smallDogs");
    const smallDogsDoc = doc(smallDogsCollection, smallDogsId);
    await deleteDoc(smallDogsDoc);

    getsmallDogs();
    
}

async function updatesmallDogsSize(e) {
    const smallDogsId = e.currentTarget.dataset.smallDogsId;
    const smallDogsCollection = collection(db, "smallDogs");
    const smallDogsDoc = doc(smallDogsCollection, smallDogsId);
    const newsmallDogsSize = prompt("New smallDogs Size?!");

    await updateDoc(smallDogsDoc, { Size: newsmallDogsSize });

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