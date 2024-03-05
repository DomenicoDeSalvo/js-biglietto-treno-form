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
    ageGroups,
    distance

    //1.5   Acquisizione bottone "Submit".
    const submitElement = document.getElementById('submit')//Element | null

    //1.6   Acquisizione dati tramite click su buttone "Genera".
    submitElement.addEventListener('click', function () {
    
        name = inputNameElement.value // string
        surname = inputSurnameElement.value //String
        ageGroups = inputAgeGroupsElement.value //String
        distance = inputDistanceElement.value//String
             
        console.log('Name:' + name + ' Surname:' + surname + ' Age group:' + age_groups + ' Distance:' + distance)
        
        //2 Validazione dei dati: i campi nome e cognome non possono essere lasciati vuoti, la distanza da percorrere deve essere maggiore di 0 Km.
        
        if( 
            name != ('') &&
            surname != ('') &&
            distance > 0 &&
            !isNaN(distance)
            ) {
                //3 Calcolo del prezzo del biglietto.
                    //3.1 Calcolo del prezzo pieno.
                    const basePrice = distance * 0.21
                    console.log('Base Price: ' + basePrice + '€')

                    //3.2 Calcolo dello sconto.
                    let discount = 0 
                        //3.2.1 Lo sconto sarà del 20% per i minorenni e del 40% per gli over 65.
                        if(ageGroups === "young"){
                            discount = basePrice * 0.2
                        } else if (ageGroups === "senior"){
                            discount = basePrice * 0.4
                            }
                        console.log('Discount:' + discount.toFixed(2) + '€')

                    //3.3Calcolo prezzo finale.

                    const finalPrice = basePrice - discount
                    console.log('Final Price:' + finalPrice.toFixed(2) + '€')

                //4 Usare i valori ottenuti dai calcoli per sostituire i valori di default nel biglietto.
        
            }   else {
                alert('Inserire dati validi')
            }
    })



