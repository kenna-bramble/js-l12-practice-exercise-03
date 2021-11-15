const notRegistered = document.querySelector(".not-registered"); // selects the 'not-registered' ul in the html doc

const getRegistrationData = async function () { 
    const request = await fetch ("https://gist.githubusercontent.com/skillcrush-curriculum/4bfa96d3762f86d2327d389063b3ea8d/raw/86e50e48e98c662ead6d9bd191ef7db381e9f4b4/fieldtrip.json"); // gets info from the API
    const data = await request.json (); //data from the link above so it is usable in code
    
    displayContactList(data); // runs the function expression once the API data can be used as code
};

const displayContactList = function (data) {
    for (const student of data) { // loops through each element in the data array
        if (student.registered === "no") { // for each student (each item in the array), if the value of registered is no... -->
            const li = document.createElement("li"); // create a new list item -->
            li.innerText = student.name; // fill that list item with the student's (item's) name value -->
            notRegistered.append(li); // and put it in the space reserved by the not-registered ul in the html doc
        }
        
    }
};

getRegistrationData(); // runs the entire thing!