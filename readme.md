
<!-- Parte 1 -->
1. creare un contenitore tramite JS, nel main
    - il contenitore conterra' le caselle

2. suddividere il contenitore in una griglia da 100 caselle
    - le caselle saranno suddivise in 10 * 10
    - ogni casella conterra' un numero progressivo da 1 a 100

3. affidare ale caselle un colore unico
    - affidare alle caselle un event listener:
        - l'event listener dovrà cambiare il colore della casella cliccata
        - l'event listener dovrà stampare in console il numero della casella cliccata

4. creare un header:
    1. all'interno dell'header posizionare logo a sinistra
    2. centralmente scrivere il nome del gioco
    3. a destra creare un bottone:
        - aggiungere una funzionalita' al bottone:
        - quando l'utente clicca sul bottone, il gioco si resetta e le caselle tornano tutte dello stesso colore


<!-- BONUS -->

5. creare una nuova griglia che sostituira' la griglia da 100 caselle
    - la nuova griglia sara' suddivisa in 81 caselle (9 * 9)
    - ogni casella conterra' un numero progressivo da 1 a 81

6. creare una nuova griglia che sostituira' la griglia precedente
    - la nuova griglia sara' suddivisa in 49 caselle (7 * 7)
    - ogni casella conterra' un numero progressivo da 1 a 49

7. creare un menu' a tendina dove sara' possibile selezionare la difficoltà di gioco
    - Facile: aprira' la griglia da 100 caselle
    - Medio: aprira' la griglia da 81 caselle
    - Difficile: aprira' la griglia da 49 caselle


<!-- Parte 2 -->

1. All'interno della griglia aggiungere 16 numeri casuali che andranno a rappresentare le bombe.
    - Le bombe saranno spartite randomicamente nella griglia
    - Quando una bomba viene cliccata:
        - tutte le bombe vengono evidenziate sulla griglia colorandosi di rosso
        - il gioco termina
    1.1. Creo un array di 16 numeri casuali e non ripetibili che andranno a rappresentare le bombe.
    1.2. Inserisco l'array all'interno della funzione che genera la griglia

2. I numeri all'interno della griglia dovranno essere selezionabili una singola volta

3. Quando clicco un numero che non è una bomba:
    - aggiungo un punto al punteggio e lo visualizzo sul fondo della pagina
    - la casella viene colorata di verde

4. Il gioco termina quando il giocatore seleziona una bomba o clicca tutte le caselle disponibili che non sono bombe:
    - quando il gioco termina, mostro il punteggio della partita con un alert()
