// Select your container element.
var containerElement = document.querySelector('main');

// Define the insert function with a parameter.
function insertNote(note) {

	if (note['type'] == 'image') {

		// image html
		containerElement.innerHTML += `
			<div class="Note" data-filter="${ note['filter'] }" data-type="${ note['type'] }">
				<img src="media/${ note['image'] }">
				<div class="Note-date">
					${ note['date'] }
				</div>
			</div>
		`;

	} else if (note['type'] == 'text') {
		
		// text html
		containerElement.innerHTML += `
			<div class="Note" data-filter="${ note['filter'] }" data-type="${ note['type'] }">
				<div class="Note-title">
				${ note['title'] }
				</div>
				<p>${ note['text'] }</p>
				<div class="Note-filter">
					${ note['filter'] }
				</div>
				<div class="Note-date">
					${ note['date'] }
				</div>
			</div>
		`;

	}

}

// Run the insert function for every element in the collection array
notes.forEach((note) => {
	insertNote(note);
});