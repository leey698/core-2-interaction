// Select your container element.
var containerElement = document.querySelector('.container');

// Define the insert function with a parameter.
function insertNote(note) {
    // Generate random size and position for each note div
    var randomSize = Math.floor(Math.random() * (300 - 100) + 100); // Random width/height between 100px and 300px
    var randomX = Math.floor(Math.random() * (containerElement.clientWidth - randomSize)); // Random X position
    var randomY = Math.floor(Math.random() * (containerElement.clientHeight - randomSize)); // Random Y position

    var noteElement = document.createElement('div');
    noteElement.className = 'Note';
    noteElement.dataset.filter = note['tag'];
    noteElement.dataset.type = note['type'];
    noteElement.style.width = randomSize + 'px';
    noteElement.style.height = randomSize + 'px';
    noteElement.style.left = randomX + 'px';
    noteElement.style.top = randomY + 'px';

    var innerHTML = '';
    if (note['type'] == 'image') {
        innerHTML += `
            <details>
                <summary>${note['title']}</summary>
                <p><br>${note['text']}</p>
                <img src="media/${note['image']}">
            </details>
        `;
    } else if (note['type'] == 'text') {
        innerHTML += `
            <details>
                <summary>${note['title']}</summary>
                <p class="Note-content"><br>${note['text']}</p>
            </details>
        `;
    }

    innerHTML += `
        <div class="Note-tag">${note['tag']}</div>
        <div class="Note-date">${note['date']}</div>
    `;

    noteElement.innerHTML = innerHTML;
    containerElement.appendChild(noteElement);
}

// Function to insert notes into the DOM
function insertNotes(notes) {
    // Empty the container element
    containerElement.innerHTML = '';

    // Insert each note
    notes.forEach(note => {
        insertNote(note);
    });
}

// Insert all notes into the DOM
insertNotes(notes);
