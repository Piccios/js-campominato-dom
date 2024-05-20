Consegna
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
Attenzione: **nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
BONUS:
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
Consigli del giorno: :party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio: Di cosa ho bisogno per generare i numeri? Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.


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