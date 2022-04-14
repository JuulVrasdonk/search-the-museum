<!-- Add a nice poster image here at the end of the week, showing off your shiny frontend 📸 -->
# Search the Museum
![alt text](https://github.com/JuulVrasdonk/search-the-museum/blob/main/assets/readme-assets/Rijksbanner.png)

<!-- ☝️ replace this description with a description of your own work -->
De Search the Museum app zorgt ervoor dat je thuis op bank, onderweg naar je werk of tijdens een wandeling in het bos, nog steeds kan genieten van de kunst
uit het Rijksmuseum. Door middel van de [RijksData API](https://data.rijksmuseum.nl/object-metadata/api/) kan het grootste deel van de kunst opgehaald worden. Je kan zelfs kunststukken bekijken die niet in het museum tentoongesteld worden.

__[Bekijk hier mijn Wiki](https://github.com/JuulVrasdonk/search-the-museum/wiki)__

<!-- Maybe a table of contents here? 📚 -->
## Table of contents
- [Installation](#Installation)
- [Activity Diagram](#Activity-Diagram)
- [Features](#Features)
- [Externe data bron](#Externe-data-bron)

<!-- How about a section that describes how to install this project? 🤓 -->
## Installation

```git clone https://github.com/JuulVrasdonk/functional-programming```

## Activity Diagram
![alt text](https://github.com/JuulVrasdonk/search-the-museum/blob/main/assets/wiki/Activity-Diagram.jpg)

## Features
1. ✅ Zoek in de collectie van het Rijks, denk aan:
  * Kunstenaar
  * Kleur
  * Naam van het werk
  * Thema van het werk (wat is er te zien?)
2. ✅ Bekijk 10 werken die bij deze zoekterm passen. 
3. ✅ Lees meer over een werk op de detailpagina. 

<!-- What external data source is featured in your project and what are its properties 🌠 -->
## Externe data bron
Om de data over de collectie van het Rijksmusuem op te halen heb gebruik gemaakt van de [RijksData API](https://data.rijksmuseum.nl/object-metadata/api/). 
Om de API te kunnen gebruiken heb je key nodig. Vervolgens kan je data van deze API ophalen. Zo kan je bijvoorbeeld data ophalen over de maker van een kunstwerk of de technique waar het kunstwerk mee is gemaakt. Deze data kan opgezocht worden door in de URL aan te geven wat ```q``` is. Met de API property kan je namelijk in de API zoeken. De API geeft vervolgens kunstwerken terug die beste bij deze zoekterm passen. 
