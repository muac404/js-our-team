"use strict"

// Creo l’array di oggetti con le informazioni fornite.

const members = 
[
    {
        fullName : "Wayne Barnett",
        position : "Founder & CEO",
        profileImage : "img/wayne-barnett-founder-ceo.jpg"
    },

    {
        fullName : "Angela Caroll",
        position : "Chief Editor",
        profileImage : "img/angela-caroll-chief-editor.jpg"
    },

    {
        fullName : "Walter Gordon",
        position : "Office Manager",
        profileImage : "img/walter-gordon-office-manager.jpg"
    },

    {
        fullName : "Angela Lopez",
        position : "Social Media Manager",
        profileImage : "img/angela-lopez-social-media-manager.jpg"
    },

    {
        fullName : "Scott Estrada",
        position : "Developer",
        profileImage : "img/scott-estrada-developer.jpg"
    },

    {
        fullName : "Barbara Ramos",
        position : "Graphic Designer",
        profileImage : "img/barbara-ramos-graphic-designer.jpg"
    }
]



// Stampo su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

console.log(members)


// Stampo le stesse informazioni su DOM sottoforma di stringhe

const team = document.getElementById("members-list")

for (let i = 0; i < members.length; i++) {
    const member = members[i];
    const liElement = ` 
        <li>
            <h4>${member.fullName}</h4>
            <img src="${member.profileImage}" alt="">
            <h5><em>${member.position}</em></h5>
            
            

        </li>
    `
    team.innerHTML += liElement 
    
    
}



