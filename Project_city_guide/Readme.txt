App project: City-Guide
-----------------------

Wat doet de app?
De app geeft allerlei informatie  over de stad Sint-Niklaas. 
Doelgroep van de app zijn personen die Sint-Niklaas bezoeken 
en die zo op een eenvoudige manier over allerlei informatie 
kunnen beschikken van de stad. 
Naast algemene info over de stad zelf is er ook informatie 
terug te vinden over toeristische bezienswaardigheden en 
shopping mogelijkheden.

Eerste fase van het ontwerp van de app.

1. Technische opbouw.

De app wordt een multi-page applicatie.
Elke page heeft een header, content en een footer.
In de footer verschijnen op alle schermen een aantal kleine 
icoontjes die aanklikbaar zijn en waarmee men kan navigeren 
tussen de verschillende pages.
De informatie die getoond wordt zal in dit eerste ontwerp 
opgelagen worden in afzonderlijke html bestanden en de data 
van de bezienswaardigheden en de winkels worden als 
twee “JSON” array’s  opgenomen in de toepassing 
(in het "data_lijsten.js' bestand in JSON formaat).
De app maakt gebruik van jQuery, jQuery Mobile en 
Telerik componenten.
De app kan op Android en IOS geïnstalleerd en gebruikt worden.

1. Loading scherm.
Na het aanklikken van de app op de desktop word tijdens het laden 
van de app een scherm met daarop de tekst “Loading… please wait” getoond.

2. Beginscherm.
Nadat de app volledig geladen en klaar is, wordt een "menu"-scherm getoond 
met daarop zes buttons zoals hieronder terug te vinden is:
- Info over de stad
- Waar ben je...
- Bezienswaardigheden
- Winkelen
- Help
- Stop

3. Info over de stad scherm.
Dit scherm toont allerlei informatie over de stad in tekstvorm.  
De tekst bevat meerdere hoofdstukken/paragrafen en kan volledig gelezen 
worden door omlaag te scrollen (tekstvak met verticale scrolbar?).
De info bevindt zich in de "general.html" file.

4. Waar ben je … scherm.

Dit scherm toont een map met daarop de huidige positie van de gebruiker 
(volgens de gelezen GPS posities van de ingebouwde gps ontvanger van 
het toestel). De gebruikte map is op basis van Openstreet Maps en 
de Kendo Maps UI component wordt daarvoor gebruikt.
 
5. Bezienswaardigheden.

Het scherm toont een lijst van bezienswaardigheden waarop kan geklikt worden 
om dan naar een page te gaan met meer detail informatie van de aangeklikte 
bezienswaardigheid. 
De data komt uit een JSON array en deze wordt via een jQuery Mobile ViewList
component als een lijst getoond.
Op dit lijst scherm komt er ook een button "Toon op kaart" waarmee men de locatie van alle 
bezienswaardigheden op een kaart kan zien.

6. Winkelen scherm.

Het scherm toont een lijst van interessante winkels voor bezoekers van de stad.
Er kan geklikt worden op een item uit de lijst om dan naar een page te gaan 
met meer detail informatie van de aangeklikte winkel.
De data komt uit een JSON array en deze wordt via een jQuery Mobile ViewList
component als een lijst getoond.
Op dit lijst scherm komt er ook een button "Toon op kaart" waarmee men de locatie van alle 
winkels op een kaart kan zien.

7. Help scherm.
Dit scherm toont allerlei help informatie in tekstvorm.  De tekst bevat meerdere 
hoofdstukken/paragrafen en kan volledig gelezen worden door omlaag te scrollen 
(tekstvak met verticale scrolbar).

8. Stop button.
Op een android toestel zal dit de app direct afsluiten.



