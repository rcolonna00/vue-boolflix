var app = new Vue(
    {
        el: '#root',
        data: {
            films: [],
            userFilter: '',
        },
        methods: {
 
            // Funzione per Cercare i film o le serie nell' api
            filterFunction() {

                if( this.userFilter == 0 ) {
                    
                    // Se non scrive nessun titolo
                    alert("Non hai ancora cercato nulla")
                } else{

                    // Altrimenti CERCA nell' api in base al titolo
                    axios
                        .get( 'https://api.themoviedb.org/3/search/multi' , {

                            // elementi richiesti dall'api per funzionare
                            params: {

                                // key (necessari) per fare le chiamate
                                api_key: '4453624633412f63fe6e3d3d65a3a501',

                                // query (necessaria) per la ricerca dell'utente
                                query: this.userFilter,

                                // language (opzionale) lingua in cui fare la ricerca 
                                language: "it-IT"
                            }
                        })
                        
                        .then(( response ) => {
                
                        const result = response.data;                
                        // console.log( result );
                        this.films = result.results;
                        // console.log( this.films );

                        // divido il voto del film in 2 e lo arrotondo per eccesso
                        this.films.forEach(element => {
                            element.vote_average = Math.ceil(element.vote_average / 2);
                        });

                    })
                }

            }
        },
        mounted () {

        }
    }
)

            // 