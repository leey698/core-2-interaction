// Select your container element.
var containerElement = document.querySelector('main');

// Define the insert function with a parameter.
function insertNote(note) {
    if (note['type'] == 'image') {
        // image html
        containerElement.innerHTML += `
            <div class="Note" data-filter="${ note['tag'] }" data-type="${ note['type'] }">
                <details>
                    <summary>${ note['title'] }</summary>
                    <p><br>${ note['text'] }</p>
                    <img src="media/${ note['image'] }">
                </details>
				<div class="Note-tag">${ note['tag'] }</div>
                <div class="Note-date">${ note['date'] }</div>
            </div>
        `;
    } else if (note['type'] == 'text') {
        // text html
        containerElement.innerHTML += `
            <div class="Note" data-filter="${ note['tag'] }" data-type="${ note['type'] }">
                <details>
                    <summary>${ note['title'] }</summary>
                    <p class="Note-content"><br>${ note['text'] }</p>
                </details>
                <div class="Note-tag">${ note['tag'] }</div>
                <div class="Note-date">${ note['date'] }</div>
            </div>
        `;
    }

    // Iterate through each note in the notes array
    notes.forEach(note => {
        // Select all .Note elements with the current note's tag
        document.querySelectorAll(`.Note[data-filter="${note.tag}"] details`).forEach(detail => {
            // Add event listener to the details element
            detail.addEventListener('toggle', function() {
                // Toggle the open-details class on the closest .Note element when details are toggled
                if (this.open) {
                    this.closest('.Note').classList.add('open-details');
                } else {
                    this.closest('.Note').classList.remove('open-details');
                }
            });
        });
    });
}

// insert notes function definition
function insertNotes(notes) {
    // empty the container element
    containerElement.innerHTML = '';

    // for each note...
    notes.forEach((note) => {
        //insert note
        insertNote(note);
    });
}

// Insert all notes into the DOM
insertNotes(notes);



//---------------------------------------------
// TABLE SORTING, CODE HELP FROM CHATGPT

let sortedNotes = [...notes]; // Create a copy of notes array for sorting

let ascendingOrder = true; // Variable to track sorting order

function sortAndInsertNotes(sortBy) {
    ascendingOrder = !ascendingOrder;
    sortedNotes.sort((a, b) => {
        if (a[sortBy] < b[sortBy]) {
            return ascendingOrder ? -1 : 1;
        } else if (a[sortBy] > b[sortBy]) {
            return ascendingOrder ? 1 : -1;
        } else {
            return 0;
        }
    });
    // Insert sorted and filtered notes into the DOM
    insertFilteredNotes();
}

document.querySelector('input[value="title"]').addEventListener('click', () => {
    sortAndInsertNotes('title');
});

document.querySelector('input[value="date"]').addEventListener('click', () => {
    sortAndInsertNotes('date');
});

document.querySelector('input[value="tag"]').addEventListener('click', () => {
    sortAndInsertNotes('tag');
});

// FILTERING
// Define function to generate tag filtering buttons
function generateTagFilters() {
    let uniqueTags = [...new Set(notes.map(note => note.tag))];
    uniqueTags.sort(); // Sort the unique tags alphabetically
    const tagFiltersContainer = document.querySelector('.tagFilters');
    tagFiltersContainer.innerHTML = ''; // Clear previous filters

    
	// Define background colors for each tag
    const tagColors = {
        'dreams that made me feel a certain way': '#82D8D5',
        'thoughts on the L train': '#B8C7C4',
        'grocery list': '#FFE800',
		'giving recommendations to friends': '#FF48B0',
		'iphone photo cutouts': '#F6A04D',
        'i don’t remember writing this': '#9D7AD2',
        'notes that contain only one word': '#AC936E',
        'notes that end mid-sentence': '#ABFFAF',
        'obsessive fitness journal': '#62A8E5',
        'chronicles of my life': '#F2CDCF',
        'quotes i didn’t want to forget': '#F984CA',
        'learning my nth language': '#00838A',

    };

	// Define text colors for specific tags
    const tagTextColors = {
        'thoughts on the L train': '#', 
        'giving recommendations to friends': '#FFFFFF', 
        'i don’t remember writing this': '#FFFFFF',
        'learning my nth language': '#FFFFFF',
    };

    // Create a button for each unique tag
    uniqueTags.forEach(tag => {
        const button = document.createElement('button');
        button.textContent = tag;
        button.style.backgroundColor = tagColors[tag]; // Set background color based on tag

	// Check if a specific text color is defined for this tag
    if (tagTextColors.hasOwnProperty(tag)) {
        button.style.color = tagTextColors[tag]; // Set text color based on tag
    }

        button.addEventListener('click', () => {
            toggleTagFilter(tag);
            updateButtonOpacity(); // Update button opacity after filter toggle
        });
        tagFiltersContainer.appendChild(button);
    });
}

// Sort notes in ascending order of title initially
const notesSortedByTitle = notes.slice().sort((a, b) => {
    if (a.title < b.title) {
        return -1;
    } else if (a.title > b.title) {
        return 1;
    } else {
        return 0;
    }
});

// Insert all notes into the DOM
insertNotes(notesSortedByTitle);

// Generate tag filtering buttons
generateTagFilters();

// Add event listener for hover effect on tag filter buttons
document.querySelector('.tagFilters').addEventListener('mouseover', function(event) {
    if (event.target.tagName === 'BUTTON') {
        event.target.style.opacity = '1';
    }
});

document.querySelector('.tagFilters').addEventListener('mouseout', function(event) {
    if (event.target.tagName === 'BUTTON') {
        const tag = event.target.textContent;
        event.target.style.opacity = selectedTags.length === 0 || selectedTags.includes(tag) ? '1' : '0.5';
    }
});



// Array to store selected tags
const selectedTags = [];

// Toggle tag filtering
function toggleTagFilter(tag) {
    // Check if the tag is already selected
    const index = selectedTags.indexOf(tag);
    if (index === -1) {
        // Tag not selected, add it to selectedTags array
        selectedTags.push(tag);
    } else {
        // Tag already selected, remove it from selectedTags array
        selectedTags.splice(index, 1);
    }
    // Reinsert notes based on selected tags
    insertFilteredNotes();
}

// Insert filtered notes based on selected tags
function insertFilteredNotes() {
    // Filter sorted notes based on selected tags
    const filteredNotes = selectedTags.length === 0 ?
        sortedNotes : // If no tag is selected, show all notes
        sortedNotes.filter(note => selectedTags.includes(note.tag));

    // Empty the container element
    containerElement.innerHTML = '';

    // Insert filtered notes into the DOM
    filteredNotes.forEach(note => {
        insertNote(note);
    });
}

// Update button opacity based on selected tags
function updateButtonOpacity() {
    const buttons = document.querySelectorAll('.tagFilters button');
    buttons.forEach(button => {
        const tag = button.textContent;
        button.style.opacity = selectedTags.length === 0 || selectedTags.includes(tag) ? 1 : 0.5;
    });
}

// Generate tag filtering buttons
generateTagFilters();

// Add event listener for hover effect on tag filter buttons
document.querySelector('.tagFilters').addEventListener('mouseover', function(event) {
    if (event.target.tagName === 'BUTTON') {
        event.target.style.opacity = '1';
    }
});

document.querySelector('.tagFilters').addEventListener('mouseout', function(event) {
    if (event.target.tagName === 'BUTTON') {
        const tag = event.target.textContent;
        event.target.style.opacity = selectedTags.length === 0 || selectedTags.includes(tag) ? '1' : '0.5';
    }
});
