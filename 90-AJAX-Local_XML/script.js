const personList = document.getElementById("person-list");
const btnUpdatePersonList = document.getElementById("btn-update-person-list");

btnUpdatePersonList.addEventListener("click", getPersonList);

function getPersonList() {

    const xhtpp = new XMLHttpRequest();

    xhtpp.open("GET", "persons.xml");
    xhtpp.send();

    xhtpp.onreadystatechange = function() {
        if (this.readyState === 4) {
            if (this.status === 200) {
                const xmlPersons = xhtpp.responseXML;
                const persons = xmlPersons.getElementsByTagName("PERSON");
                for (let i = 0; i < persons.length; i++) {
                    let identityNumber = persons[i].getElementsByTagName("IDENTITYNUMBER")[0].childNodes[0].nodeValue;
                    let name = persons[i].getElementsByTagName("NAME")[0].childNodes[0].nodeValue;
                    let surname = persons[i].getElementsByTagName("SURNAME")[0].childNodes[0].nodeValue;

                    personList.innerHTML += `
                        <tr>
                            <td>${identityNumber}</td>
                            <td>${name}</td>
                            <td>${surname}</td>
                        </tr>`;
                }
            }
        }
    }

}