let add = document.getElementById('addnote');
let container = document.getElementById('Note_container');
let main = document.querySelector('main');

let meow = new Audio('assets/meow/Meow.mp3');

const notes = [];

function addfunction() {
    if (notes.length === 5) {
        add.innerHTML = 'max notes reached';
        return;
    } else {
        let note = document.createElement('div');
        let input = document.createElement('input');
        let textarea = document.createElement('textarea');
        let options = document.createElement('div');
        let deletebtn = document.createElement('button');

        note.className = 'note';
        deletebtn.id = 'delete';
        note.id = 'Note';

        deletebtn.innerHTML = '<i class="bi bi-trash3-fill"></i>';

        container.appendChild(note);
        note.appendChild(input);
        note.appendChild(textarea);
        note.appendChild(options);
        options.appendChild(deletebtn);

        input.setAttribute('placeholder', 'Title');
        textarea.setAttribute('placeholder', 'Your daily activity here.. :)');

        notes.push(note);

        deletebtn.addEventListener('click', function () {
            let container_areyousure = document.createElement('div');
            let areyousure = document.createElement('div');
            let image = document.createElement('img');
            let warning = document.createElement('p');
            let agree = document.createElement('button');
            let disagree = document.createElement('button');

            main.appendChild(container_areyousure);
            container_areyousure.appendChild(areyousure);
            areyousure.appendChild(image);
            areyousure.appendChild(warning);
            areyousure.appendChild(agree);
            areyousure.appendChild(disagree);

            container_areyousure.classList.add('Are_you_sure');
            agree.classList.add('Option', 'agree');
            disagree.classList.add('Option', 'disagree');

            image.setAttribute('src', 'assets/img/Silly_cat.png');

            warning.innerHTML = 'are you sure you wanna delete?';
            agree.innerHTML = 'Yes, i wish to delete this note';
            disagree.innerHTML = 'No, i dont wish to delete this note';

            agree.addEventListener('click', function () {
                note.remove();
                container_areyousure.remove();
                meow.play();
                notes.pop(); // free the note slot
                add.innerHTML = '+'; // reset button text
            });

            disagree.addEventListener('click', function () {
                container_areyousure.remove();
            });
        });
    } // ← this was missing
}

add.addEventListener('click', addfunction);
