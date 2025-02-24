module.exports = {

  // Insert values here

schools : [
    {
        schoolURN: "123456789",
        schoolName: "Folkestone Academy",
        schoolLocation: "Cambridge",
        schoolPartOf: "Turner Schools",
        schoolConditionTag: "Satisfactory",
        schoolConditionDate: "CDC2: May 2023",
        schoolPriorities: [{ priority1: "Lorem ipsum", priority2: "Lorem ipsum" }]
    },
    {
        schoolURN: "223456789",
        schoolName: "Aspen 2",
        schoolLocation: "Dover",
        schoolPartOf: "Turner Schools",
        schoolConditionTag: "[School condition tag]",
        schoolConditionDate: "CDC2: May 2023",
        schoolPriorities: [{ priority1: "Lorem ipsum", priority2: "Lorem ipsum" }]
    },
    {
        schoolURN: "323456789",
        schoolName: "Dover Christ Church Academy",
        schoolLocation: "Dover",
        schoolPartOf: "Turner Schools",
        schoolConditionTag: "[School condition tag]",
        schoolConditionDate: "CDC2: May 2023",
        schoolPriorities: [{ priority1: "Lorem ipsum", priority2: "Lorem ipsum" }]
    },
    {
        schoolURN: "423456789",
        schoolName: "Folkestone Primary",
        schoolLocation: "Folkstone",
        schoolPartOf: "Turner Schools",
        schoolConditionTag: "[School condition tag]",
        schoolConditionDate: "CDC2: May 2023",
        schoolPriorities: [{ priority1: "Lorem ipsum", priority2: "Lorem ipsum" }]
    },
    {
        schoolURN: "523456789",
        schoolName: "Turner Free School",
        schoolLocation: "[School location]",
        schoolPartOf: "Turner Schools",
        schoolConditionTag: "[School condition tag]",
        schoolConditionDate: "CDC2: May 2023",
        schoolPriorities: [{ priority1: "Lorem ipsum", priority2: "Lorem ipsum" }]
    },
    {
        schoolURN: "623456789",
        schoolName: "Morehall Primary School",
        schoolLocation: "[School location]",
        schoolPartOf: "Turner Schools",
        schoolConditionTag: "[School condition tag]",
        schoolConditionDate: "CDC2: May 2023",
        schoolPriorities: [{ priority1: "Lorem ipsum", priority2: "Lorem ipsum" }]
    },
    {
        schoolURN: "723456789",
        schoolName: "Martello Primary",
        schoolLocation: "[School location]",
        schoolPartOf: "Turner Schools",
        schoolConditionTag: "[School condition tag]",
        schoolConditionDate: "CDC2: May 2023",
        schoolPriorities: [{ priority1: "Lorem ipsum", priority2: "Lorem ipsum" }]
    }
]}

// 2. Find a School by schoolURN

function findSchoolByURN(urn) {
  return schools.find(school => school.schoolURN === urn);
}

// Example usage:
console.log(findSchoolByURN("123456789")); // Folkestone Academy

// Find Schools by Location
function findSchoolsByLocation(location) {
  return schools.filter(school => school.schoolLocation === location);
}

// Example usage:
console.log(findSchoolsByLocation("Dover")); // Aspen 2, Dover Christ Church Academy



document.addEventListener("DOMContentLoaded", function () {
    const schools = [
        { schoolURN: "123456789", schoolName: "Folkestone Academy", schoolLocation: "Cambridge", schoolPartOf: "Turner Schools", schoolConditionTag: "Satisfactory", schoolConditionDate: "CDC2: May 2023" },
        { schoolURN: "223456789", schoolName: "Aspen 2", schoolLocation: "Dover", schoolPartOf: "Turner Schools", schoolConditionTag: "[School condition tag]", schoolConditionDate: "CDC2: May 2023" },
        { schoolURN: "323456789", schoolName: "Dover Christ Church Academy", schoolLocation: "Dover", schoolPartOf: "Turner Schools", schoolConditionTag: "[School condition tag]", schoolConditionDate: "CDC2: May 2023" },
        { schoolURN: "423456789", schoolName: "Folkestone Primary", schoolLocation: "Folkstone", schoolPartOf: "Turner Schools", schoolConditionTag: "[School condition tag]", schoolConditionDate: "CDC2: May 2023" },
        { schoolURN: "523456789", schoolName: "Turner Free School", schoolLocation: "[School location]", schoolPartOf: "Turner Schools", schoolConditionTag: "[School condition tag]", schoolConditionDate: "CDC2: May 2023" },
        { schoolURN: "623456789", schoolName: "Morehall Primary School", schoolLocation: "[School location]", schoolPartOf: "Turner Schools", schoolConditionTag: "[School condition tag]", schoolConditionDate: "CDC2: May 2023" },
        { schoolURN: "723456789", schoolName: "Martello Primary", schoolLocation: "[School location]", schoolPartOf: "Turner Schools", schoolConditionTag: "[School condition tag]", schoolConditionDate: "CDC2: May 2023" }
    ];

    const tableBody = document.getElementById("schoolTableBody");
    
    if (tableBody) {
        schools.forEach(school => {
            const row = `
                <tr>
                    <td>${school.schoolName}</td>
                    <td>${school.schoolLocation}</td>
                    <td>${school.schoolPartOf}</td>
                    <td>${school.schoolConditionTag}</td>
                    <td>${school.schoolConditionDate}</td>
                </tr>
            `;
            tableBody.innerHTML += row;
        });
    }
});
