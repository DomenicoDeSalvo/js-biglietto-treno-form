// TEST
//console.log('ciuff ciuff')


//1 Acquisizione dati.

    //1.1   Acquisizione nome e cognome utente.
        //1.1.1 Selezione dell'elemento input con ID "name".
        const inputNameElement = document.getElementById('name');//Element | Null

        //1.1.2 Selezione dell'elemento input con ID "surname".
        const inputSurnameElement = document.getElementById('surname');//Element | Null

    //1.2   Acquisizione fascia d'età utente.   
        //1.2.1 Selezione dell'elemento input con ID "age_groups".
        const inputAgeGroupsElement = document.getElementById('age_groups');//Element | Null

    //1.3   Acquisizione distanza da percorrere.
        //1.3.1 Selezione dell'elemento input con ID "distance".
        const inputDistanceElement = document.getElementById('distance');//Element | Null
    
    //1.4   Dichiarazione delle variabili.
    let name,
    surname,
    ageGroups,
    distance;

    //1.5   Acquisizione bottone "Submit".
    const submitElement = document.getElementById('submit');//Element | null

    //1.6   Acquisizione dati tramite click su buttone "Genera".
    submitElement.addEventListener('click', function () {
    
        name = inputNameElement.value // string
        surname = inputSurnameElement.value //String
        ageGroups = inputAgeGroupsElement.value //String
        distance = inputDistanceElement.value//Number
             
        console.log('Name:' + name + ' Surname:' + surname + ' Age group:' + ageGroups + ' Distance:' + distance);
        
        //2 Validazione dei dati: i campi nome e cognome non possono essere lasciati vuoti, la distanza da percorrere deve essere maggiore di 0 Km.
        
        if( 
            name != ('') &&
            surname != ('') &&
            distance > 0 &&
            !isNaN(distance)
            ) {
                //3 Calcolo del prezzo del biglietto.
                    //3.1 Calcolo del prezzo pieno.
                    const basePrice = distance * 0.21; //Number
                    console.log('Base Price: ' + basePrice + '€');

                    //3.2 Calcolo dello sconto.
                    let discount = 0; //Number 
                        //3.2.1 Lo sconto sarà del 20% per i minorenni e del 40% per gli over 65.
                        if(ageGroups === "Giovane"){
                            discount = basePrice * 0.2; //Number
                        } else if (ageGroups === "Senior"){
                            discount = basePrice * 0.4; //Number
                            }
                        console.log('Discount:' + discount.toFixed(2) + '€');

                    //3.3Calcolo prezzo finale.

                    const finalPrice = basePrice - discount; //Number
                    console.log('Final Price:' + finalPrice.toFixed(2) + '€');

                //4 Personalizzazione del biglietto.
                    //4.1   Acquisizione nome passeggero.        
                    const passengerNameElement = document.getElementById('passenger_name');//Element | Null
                            //4.1.1 Sostituzione valore.
                            passengerNameElement.innerHTML = name; //String

                    //4.2   Acquisizione cognome passeggero.   
                    const passengerSurnameElement = document.getElementById('passenger_surname');//Element | Null
                            //4.2.1 Sostituzione valore
                            passengerSurnameElement.innerHTML = surname; //String

                    //4.3   Acquisizione carrozza passaggero.
                    const passengerWagonElement = document.getElementById('wagon');//Element | Null
                            //4.3.1 Sostituzione valore con uno generato casualmente. Il numero è arrotondato per non avere valori decimali.
                            passengerWagonElement.innerHTML = Math.floor(Math.random() * (12 - 1 + 1) + 1); //Number

                    //4.4   Acquisizione posto a sedere passeggero.
                    const passengerSitElement = document.getElementById('sit');//Element | Null
                            //4.4.1 Sostituzione valore con uno generato casualmente. Il numero è arrotondato per non avere valori decimali.
                            passengerSitElement.innerHTML = Math.floor(Math.random() * (80 - 1 + 1) + 1); //Number

                    //4.5   Acquisizione codice biglietto passeggero.
                    const passengerTicketCodeElement = document.getElementById('ticket__code');//Element | Null
                            //4.3.1 Sostituzione valore con uno generato casualmente. Il numero è arrotondato per non avere valori decimali.
                            passengerTicketCodeElement.innerHTML = Math.floor(Math.random() * (99999 - 10000 + 1) + 1); //Number

                    //4.6   Acquisizione tariffa relativa alla fascia d'età del passeggero
                    const passengerTariffElement = document.getElementById('tariff');//Element | Null
                            //4.6.1 Sostituzione valore.
                            passengerTariffElement.innerHTML = ageGroups; //String

                    //4.7   Acquisizione prezzo finale del biglietto.
                    const passengerTicketPriceElement = document.getElementById('price');//Element | Null
                            //4.7.1 Sostituzione valore.
                            passengerTicketPriceElement.innerHTML = finalPrice + '€'; //Number

        
            }   else {
                alert('Inserire dati validi')
            }
    })



