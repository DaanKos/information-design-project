# Information Design Project - Datavisualisatie: de zorginstellingen van Nederland doorzoekbaar op een aantrekkelijke manier


Dit is mijn repository voor het Information Design Project. Ik heb dit project gevolgd van 9-12-2019 t/m 23-01-2020. Het Project is een onderdeel van Information Design in jaar 3 van CMD aan de Hogeschool van Amsterdam.

![Afbeelding huidige uitwerking concept](https://i.imgur.com/5Jc4iti.png)

## Inhoud
* [Link naar de applicatie](#link-naar-de-applicatie)
* [Lokale installatie](#lokale-installatie)
* [Leerdoelen](#leerdoelen)
* [Introductie](#introductie)
* [Doelgroep](#doelgroep)
* [Het concept](#het-concept)
* [Features](#features)
* [Gebruikte data & verwerken data](#gebruikte-data--verwerken-data)
* [Credits](#credits)

## Link naar de applicatie
[Klik hier om de applicatie te gebruiken/bekijken.](https://jolly-liskov-eadef5.netlify.com/)

## Bekende bugs
* De html/css/js code is nog erg messy
* De data wordt nog niet opgeschoond voordat deze wordt gebruikt in de applicatie
* Wanneer je scrollt op de detailpagina, scrollt de overzichtspagina ook mee

## Lokale installatie
### Installatie
Om de applicatie lokaal te installeren, moet je een ```git clone``` uitvoeren.

Voordat je de clone uitvoert:
* Installeer node.js
* Installeer een code editor (zoals bijv. Visual Studio Code)
* Installeer een CLI (command line interface)

Gebruikte bronnen/packages:
* NPM
* Rollup.js
* d3.js

**Doorloop dit proces:**

Clone deze repository
```
git clone https://github.com/DaanKos/information-design-project.git
```

Ga naar de juiste folder
```
cd information-design-project
```

Installeer de gebruikte bronnen/packages met NPM
```
npm install
```

### Gebruik
Start de applicatie
```
npm run start
```

Om de code klaar te maken voor deployment
```
npm run build
```

### Up to date blijven
Als ik nog actief aan dit project werk is het slim om af en toe een ```git pull``` uit te voeren om er zeker van te zijn dat je de meest recente versie gebruikt.

## Leerdoelen
- [x] Meer ervaring opdoen met d3.js

## Introductie
Voor het vak Functional Programming heb ik de opdracht gekregen om aan de slag te gaan met de database van het NMVW (Nationaal Musea van Wereldkunde).

Het NMVW heeft een ontzettend grote collectie, en maar een deel hiervan wordt tentoongesteld in de musea die bij het NMVW horen. 
Deze grote collectie is online te bekijken, maar hier komen maar weinig mensen op af.

Aan mij de taak om de data die in de database beschikbaar is te verwerken in een datavisualisatie die mensen dichter bij de collectie kan brengen op een informatieve en overzichtelijke manier.

## Doelgroep
Dit concept is vooral passend voor een online omgeving. In een volledig uitgewerkte datavisualisatie wil ik de gebruiker de mogelijkheid geven om in te zoomen op de wereldkaart, zo kan de gebruiker ook de details zien van de landen met een kleinere omvang.

Verder denk ik dat mijn concept eigenlijk meerdere doelgroepen kent. Het is een simpel te begrijpen visualisatie, dus mensen die weinig over de collectie weten kunnen er makkelijk mee aan de slag. Toch is het ook interessant voor mensen die wat bekender zijn met de collectie omdat de visualistie nieuwe inzichten brengt die eerder niet bekend waren.

## Features
* Ontdek welke categorie het vaakst voorkomt in ieder land op een wereldkaart en leer meer over wat de verschillende landen op de wereld hebben bijgedragen aan de collectie.

## Gebruikte data & verwerken data
In de applicatie wordt data opgehaald uit de collectie database van het NMVW. Hiervoor gebruik ik een SPARQL query die objecten ophaalt die aan vooraf opgestelde voorwaarden voldoen. Meer hierover in de wiki op de [SPARQL query](https://github.com/DaanKos/functional-programming/wiki/SPARQL-query) pagina. De opgehaalde data heb ik opgeschoond en getransformeerd met JavaScript, hoe ik dit heb gedaan is te lezen op de  [data ophalen en verwerken](https://github.com/DaanKos/functional-programming/wiki/Data-ophalen-en-verwerken) pagina in de wiki.

## Credits
* In de code wordt in comments gerefereerd naar de bron, mocht deze code niet zelfgeschreven zijn
