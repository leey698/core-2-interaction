// Select your container element.
var containerElement = document.querySelector('main');

// Define the insert function with a parameter.
function insertNote(note) {

	if (note['type'] == 'image') {

		// image html
		containerElement.innerHTML += `
			<div class="Note" data-filter="${ note['filter'] }" data-type="${ note['type'] }">
				<details>
					<summary>
				${ note['title'] }
				</summary>
				<p><br>${ note['text'] }</p>
				<img src="media/${ note['image'] }">
				</details>
				<div class="Note-date">
					${ note['date'] }
				</div>
			</div>
		`;

	} else 
	
	if (note['type'] == 'text') {

		// text html
		containerElement.innerHTML += `
			
			<div class="Note" data-filter="${ note['filter'] }" data-type="${ note['type'] }">
				<details>
					<summary>
				${ note['title'] }
				</summary>
				<p><br>${ note['text'] }</p>
				</details>
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



