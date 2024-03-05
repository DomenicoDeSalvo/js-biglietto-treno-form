// TEST
//console.log('ciuff ciuff')


//1 Acquisizione dati.

    //1.1   Acquisizione nome e cognome utente.
        //1.1.1 Selezione dell'elemento input con ID "name".
        const inputNameElement = document.getElementById('name')//Element | null

        //1.1.2 Selezione dell'elemento input con ID "surname".
        const inputSurnameElement = document.getElementById('surname')//Element | null

    //1.2   Acquisizione fascia d'età utente.   
        //1.2.1 Selezione dell'elemento input con ID "age_groups".
        const inputAgeGroupsElement = document.getElementById('age_groups')//Element | null

    //1.3   Acquisizione distanza da percorrere.
        //1.3.1 Selezione dell'elemento input con ID "distance".
        const inputDistanceElement = document.getElementById('distance')//Element | null
    
    //1.4   Dichiarazione delle variabili.
    let name,
    surname,
    age_groups,
    distance

    //1.5   Acquisizione bottone "Submit"
    const submitElement = document.getElementById('submit')//Element | null

    //1.6   Acquisizione dati tramite click su buttone "Genera"
    submitElement.addEventListener('click', function () {
    
        name = inputNameElement.value // string
        surname = inputSurnameElement.value //String
        age_groups = inputAgeGroupsElement.value //String
        distance = inputDistanceElement.value//String
             
        console.log(name, surname, age_groups, distance)
        
        //2 Validazione dei dati: i campi nome e cognome non possono essere lasciati vuoti, la distanza da percorrere deve essere maggiore di 0 Km.
        
        if( 
            name != ('') &&
            surname != ('') &&
            age_groups != ('') &&
            distance > 0 &&
            !isNaN(distance)
            ) {
        
            }   else {
                alert('Inserire dati validi')
            }
    })



