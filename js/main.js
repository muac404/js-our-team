"use strict"

// Creo l’array di oggetti con le informazioni fornite.

const members = 
[
    {
        fullName : "Wayne Barnett",
        position : "Founder & CEO",
        profileImage : "wayne-barnett-founder-ceo.jpg"
    },

    {
        fullName : "Angela Caroll",
        position : "Chief Editor",
        profileImage : "angela-caroll-chief-editor.jpg"
    },

    {
        fullName : "Walter Gordon",
        position : "Office Manager",
        profileImage : "walter-gordon-office-manager.jpg"
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
            <h5>${member.position}</h5>
            <p><em>${member.profileImage}</em></p>

        </li>
    `
    team.innerHTML += liElement 
    
    console.log(member)
}



