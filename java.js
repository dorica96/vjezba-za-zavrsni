
    var submitBtn = document.getElementById('submitBtn'); //dohvacam elemente gumbic, form i lista
    var albumForm = document.getElementById('albumForm');
    var albumList = document.getElementById('albumList');

    submitBtn.addEventListener('click', function() { //na gumbic dodajem eventL da kad kliknem se dogada funkcija,
        var naziv = document.getElementById('naziv').value; //dohvacam naziv(tako mi je id inputa) i dajem value koji unesem
        var ocjena = document.getElementById('ocjena').value; //isto kao naziv, id je ocjena

        if (naziv === '' || ocjena === '' || ocjena < 1 || ocjena > 10) { // ako naziv nije tekst i ako ocjena nije broj i od 1 do 10, nisam uspjesno popunila obrazac
            alert('Niste ispravno popunili obrazac.'); //ovo mi vraca
            return;
        }

        var date = new Date();
        var datumVrijeme = date.toLocaleDateString() + ' ' + date.toLocaleTimeString(); //tocan datum i vrijeme

        var newItem = document.createElement('li'); //kreiramo nove li koji sadrze: naziv, ocjena, datum i vrijeme
        newItem.innerHTML = `${naziv}, Ocjena ${ocjena}, Datum i vrijeme pohrane: ${datumVrijeme} 
        <button class="favBtn">označi me kao favorita</button> 
        <button class="deleteBtn">izbriši me s ove liste</button>`;
        albumList.appendChild(newItem); //svaki novi li je dijete liste

        // prazan input kad kliknem na submit
        albumForm.reset();
    });

    // oznacavanje kao favorite i brisanje gumbovi, dodajem eventListener kako bi stvarno nesto radili
    albumList.addEventListener('click', function(event) {
        if (event.target.classList.contains('favBtn')) {
            event.target.parentNode.classList.toggle('favorite');//ako kliknem na oznaci kao favorite, dogada se ono sto je def u css-u
        }

        if (event.target.classList.contains('deleteBtn')) {
            event.target.parentNode.remove();//ako kliknem na ovaj briše se
        }
    });

