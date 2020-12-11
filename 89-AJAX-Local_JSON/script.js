const personList = document.getElementById("person-list");
const btnUpdatePersonList = document.getElementById("btn-update-person-list");

btnUpdatePersonList.addEventListener("click", getPersonList);

function getPersonList() {

    const xhtpp = new XMLHttpRequest();

    xhtpp.open("GET", "persons.json");
    xhtpp.send();

    xhtpp.onreadystatechange = function() {
        if (this.readyState === 4) {
            if (this.status === 200) {
                const persons = JSON.parse(this.responseText);
                persons.forEach(function(person) {
                    personList.innerHTML += `
                    <tr>
                        <td>${person.identityNumber}</td>
                        <td>${person.name}</td>
                        <td>${person.surname}</td>
                    </tr>
                    `;
                });
            }
        }
    }

}