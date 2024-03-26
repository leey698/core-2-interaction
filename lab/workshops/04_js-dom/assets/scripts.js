// console.log('costumes: ', costumes);

// console.log("costumes[0]['title']: ", costumes[0]['title']);

// console.log("costumes[0]['title']: ", costumes[0].title);

// CONSOLE AND DOCUMENT OBJECTS
// -------------------------------------

// log the console object
// console.log(console);

// console.log(document);

// console.log(document.documentElement);

// EDITING THE DOCUMENT ELEMENT
// -------------------------------------

// edit directly
// document.documentElement.style.background = 'pink';

// define a new function
function setBackgroundColor(color) {
    document.documentElement.style.background = color;
}

// run the function
setBackgroundColor('pink');

// SELECTING ANY HTML ELEMENT
// -------------------------------------

// set main element varible
var mainElement = document.querySelector('.Main');

// UPDATING ANY HTML ELEMENT
// -------------------------------------

// // edit directly
// mainEllement.innerHTML = 'Hello World!'

// edit with object property
// mainElement.innerHTML = costumes[0]['title']

// edit with function
function insertCostumeData (costume) {
    // mainElement.innerHTML += costume['title'];

    // add template string
    // mainElement.innerHTML += `<div>${ costume['title'] }</div>`;

    // insert advanced HTML
    mainElement.innerHTML += `
    <article class="Kirby">
        <h2>${ costume['title'] }</h2>
        <img src="./media/${ costume['image'] }" />
        <p>${ costume['powers']}</p>
    </article>
    `;
}
insertCostumeData(costumes[0]);
insertCostumeData(costumes[1]);
insertCostumeData(costumes[2]);
insertCostumeData(costumes[3]);
