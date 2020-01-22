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
* [Gebruikte data & verwerken data](#gebruikte-data)
* [Credits](#credits)

## Link naar de applicatie
[Klik hier om de applicatie te gebruiken/bekijken.](https://jolly-liskov-eadef5.netlify.com/)

## Bekende bugs
* De html/css/js code is nog erg messy
* Wanneer je scrollt op de detailpagina, scrollt de overzichtspagina ook mee
* Er is (nog) geen desktop versie beschikbaar, alles is gericht op schermen van mobiel formaat
* De sorteer feature mist
* De "ga naar willekeurig zorgstelsel" feature mist

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
Voor dit Information Desing Project kregen we de keuze uit verschillende opdrachtgevers die verschillende projecten aanboden. Hierbij heb ik voor het project van Pointer (KRO-NCRV) gekozen. Het project dat zij aanboden heeft te maken met het topic Zorgcowboys, iets waar de datajournalisten van Pointer al een langere tijd mee bezig zijn. Zorgcowboys zijn ondernemers die zorginstellingen hebben opgericht met verkeerde intenties, namelijk het maken van veel winst dat in hun eigen zakken beland, en zijn dus niet gericht op het leveren van goede zorg op maat.

Pointer is in de jaarrekeningen van alle gehandicaptenzorg, geestelijke gezondheidszorg en thuiszorg instellingen gedoken. Ze hebben al deze data verwerkt in een dataset, maar ze waren nog op zoek naar een manier om deze data inzichtelijk te maken voor de bezoekers van hun website. Met een inzichtelijke manier om de data te bekijken, krijgen mensen de mogelijkheid om hun eigen zorginstelling te checken en te zien of deze instelling een potentiele zorgcowboy is.

Aan ons als groep de taak om deze dataset makkelijk doorzoekbaar en inzichtelijk aan de lezers van Pointer aan te bieden.

## Doelgroep
Dit concept is gericht op de lezers van de Pointer website. Het is een interactieve datavisualisatie bedoeld voor een digitale omgeving. Op het moment van schrijven komen de lezers van Pointer voornamelijk vanaf mobiele apparaten op de website, en is de uitwerking vooralsnog alleen gericht op schermen van mobiel formaat.

## Features
* Gebruik de zoekbalk om een zorgstelsel te generenen op basis van de ingevoerde stad/plaats.
* Het uiterlijk van de planeten in het gegenereerde zorgstelsel zijn gebaseerd op onderliggende data, zo indiceert de kleur wat voor soort zorg deze instelling levert en is de grootte van planeet gebaseerd op het winstpercentage.
* Klik op een planeet om een detailpagina te openen. Op de detailpagina zijn simpele grafieken te zien die gebaseerd zijn op de onderliggende data.

## Gebruikte data
In de applicatie wordt data gebruikt van Pointer. Deze data wordt lokaal ingeladen, en is dus ook onderdeel van deze repository.

## Credits
* In de code wordt in comments gerefereerd naar de bron, mocht deze code niet zelfgeschreven zijn
