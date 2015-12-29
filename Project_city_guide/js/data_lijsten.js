/*
 * Deze javascript library bevat de data lijsten voor bezienswaardigheden
 * en winkels in JSON formaat
 */
var places = [{
    "id": 0,
        "name": "Sint-Nicolaaskerk",
        "address": "Markt 1, 9100 Sint-Niklaas",
		"website": "https://nl.wikipedia.org/wiki/Sint-Nicolaaskerk_(Sint-Niklaas)",
		"email": "sint-nicolaaskerk@sint-niklaas.be",
        "phone": "+32 (477) 111-111",
		"latlng": "[51.090301, 4.084301]",
		"place-type": "kerk"
}, {
    "id": 1,
        "name": "Onze-Lieve-Vrouwekerk",
        "address": "Markt 1, 9100 Sint-Niklaas",
		"website": "https://nl.wikipedia.org/wiki/Sint-Nicolaaskerk_(Sint-Niklaas)",
		"email": "sint-nicolaaskerk@sint-niklaas.be",
        "phone": "+32 (477) 111-111",
		"latlng": "[51.100301, 4.094301]",
		"place-type": "kerk"
}, {
    "id": 2,
        "name": "Sint-Jozef-Klein-Seminarie",
        "address": "Markt 1, 9100 Sint-Niklaas",
		"website": "https://nl.wikipedia.org/wiki/Sint-Nicolaaskerk_(Sint-Niklaas)",
		"email": "sint-nicolaaskerk@sint-niklaas.be",
        "phone": "+32 (477) 111-111",
		"latlng": "[51.110301, 4.104301]",
		"place-type": "school"
}, {
    "id": 3,
        "name": "Sint-Nicolaaskerk",
        "address": "Markt 1, 9100 Sint-Niklaas",
		"website": "https://nl.wikipedia.org/wiki/Sint-Nicolaaskerk_(Sint-Niklaas)",
		"email": "sint-nicolaaskerk@sint-niklaas.be",
        "phone": "+32 (477) 111-111",
		"latlng": "[51.120301, 4.114301]",
		"place-type": "kerk"
}, {
    "id": 4,
        "name": "Onze-Lieve-Vrouwekerk",
        "address": "Markt 1, 9100 Sint-Niklaas",
		"website": "https://nl.wikipedia.org/wiki/Sint-Nicolaaskerk_(Sint-Niklaas)",
		"email": "sint-nicolaaskerk@sint-niklaas.be",
        "phone": "+32 (477) 111-111",
		"latlng": "[51.130301, 4.124301]",
		"place-type": "kerk"
}, {
    "id": 5,
        "name": "Sint-Jozef-Klein-Seminarie",
        "address": "Markt 1, 9100 Sint-Niklaas",
		"website": "https://nl.wikipedia.org/wiki/Sint-Nicolaaskerk_(Sint-Niklaas)",
		"email": "sint-nicolaaskerk@sint-niklaas.be",
        "phone": "+32 (477) 111-111",
		"latlng": "[51.140301, 4.134301]",
		"place-type": "school"
}, {
    "id": 6,
        "name": "Sint-Nicolaaskerk",
        "address": "Markt 1, 9100 Sint-Niklaas",
		"website": "https://nl.wikipedia.org/wiki/Sint-Nicolaaskerk_(Sint-Niklaas)",
		"email": "sint-nicolaaskerk@sint-niklaas.be",
        "phone": "+32 (477) 111-111",
		"latlng": "[51.150301, 4.144301]",
		"place-type": "kerk"
}, {
    "id": 7,
        "name": "Onze-Lieve-Vrouwekerk",
        "address": "Markt 1, 9100 Sint-Niklaas",
		"website": "https://nl.wikipedia.org/wiki/Sint-Nicolaaskerk_(Sint-Niklaas)",
		"email": "sint-nicolaaskerk@sint-niklaas.be",
        "phone": "+32 (477) 111-111",
		"latlng": "[51.160301, 4.154301]",
		"place-type": "kerk"
}, {
    "id": 8,
        "age": 34,
        "name": "Sint-Jozef-Klein-Seminarie",
        "address": "Markt 1, 9100 Sint-Niklaas",
		"website": "https://nl.wikipedia.org/wiki/Sint-Nicolaaskerk_(Sint-Niklaas)",
		"email": "sint-nicolaaskerk@sint-niklaas.be",
        "phone": "+32 (477) 111-111",
		"latlng": "[51.170301, 4.164301]",
		"place-type": "school"
}];
var shops = [{
    "id": 0,
        "name": "Chocolaterie Guylian nv",
        "address": "Markt 1, 9100 Sint-Niklaas",
		"website": "https://nl.wikipedia.org/wiki/Sint-Nicolaaskerk_(Sint-Niklaas)",
		"email": "sint-nicolaaskerk@sint-niklaas.be",
        "phone": "+32 (477) 111-111",
		"latlng": "[51.090301, 4.084301]",
		"place-type": "Chocolade-Pralines"
}, {
    "id": 1,
        "name": "Chocolade-Atelier Vyverman",
        "address": "Markt 1, 9100 Sint-Niklaas",
		"website": "https://nl.wikipedia.org/wiki/Sint-Nicolaaskerk_(Sint-Niklaas)",
		"email": "sint-nicolaaskerk@sint-niklaas.be",
        "phone": "+32 (477) 111-111",
		"latlng": "[51.100301, 4.094301]",
		"place-type": "Chocolade-Pralines"
}, {
    "id": 2,
        "name": "Chocolatier Wauters",
        "address": "Markt 1, 9100 Sint-Niklaas",
		"website": "https://nl.wikipedia.org/wiki/Sint-Nicolaaskerk_(Sint-Niklaas)",
		"email": "sint-nicolaaskerk@sint-niklaas.be",
        "phone": "+32 (477) 111-111",
		"latlng": "[51.110301, 4.104301]",
		"place-type": "Chocolade-Pralines"
}, {
    "id": 3,
        "name": "Foubert - Cremerie & Chocoladebar",
        "address": "Markt 1, 9100 Sint-Niklaas",
		"website": "https://nl.wikipedia.org/wiki/Sint-Nicolaaskerk_(Sint-Niklaas)",
		"email": "sint-nicolaaskerk@sint-niklaas.be",
        "phone": "+32 (477) 111-111",
		"latlng": "[51.090301, 4.084301]",
		"place-type": "Chocolade-Pralines"
}, {
    "id": 4,
        "name": "Waasland Shopping Centrum",
        "address": "Markt 1, 9100 Sint-Niklaas",
		"website": "https://nl.wikipedia.org/wiki/Sint-Nicolaaskerk_(Sint-Niklaas)",
		"email": "sint-nicolaaskerk@sint-niklaas.be",
        "phone": "+32 (477) 111-111",
		"latlng": "[51.100301, 4.094301]",
		"place-type": "Winkelcentra"
}, {
    "id": 5,
        "name": "Reynaerd Galerij",
        "address": "Markt 1, 9100 Sint-Niklaas",
		"website": "https://nl.wikipedia.org/wiki/Sint-Nicolaaskerk_(Sint-Niklaas)",
		"email": "sint-nicolaaskerk@sint-niklaas.be",
        "phone": "+32 (477) 111-111",
		"latlng": "[51.110301, 4.104301]",
		"place-type": "Winkelcentra"
}, {
    "id": 6,
        "name": "Stationstraat",
        "address": "Markt 1, 9100 Sint-Niklaas",
		"website": "https://nl.wikipedia.org/wiki/Sint-Nicolaaskerk_(Sint-Niklaas)",
		"email": "sint-nicolaaskerk@sint-niklaas.be",
        "phone": "+32 (477) 111-111",
		"latlng": "[51.090301, 4.084301]",
		"place-type": "Winkelcentra"
}, {
    "id": 7,
        "name": "Ankerstraat",
        "address": "Markt 1, 9100 Sint-Niklaas",
		"website": "https://nl.wikipedia.org/wiki/Sint-Nicolaaskerk_(Sint-Niklaas)",
		"email": "sint-nicolaaskerk@sint-niklaas.be",
        "phone": "+32 (477) 111-111",
		"latlng": "[51.100301, 4.094301]",
		"place-type": "Winkelcentra"
}, {
    "id": 8,
        "age": 34,
        "name": "Nieuwstraat",
        "address": "Markt 1, 9100 Sint-Niklaas",
		"website": "https://nl.wikipedia.org/wiki/Sint-Nicolaaskerk_(Sint-Niklaas)",
		"email": "sint-nicolaaskerk@sint-niklaas.be",
        "phone": "+32 (477) 111-111",
		"latlng": "[51.110301, 4.104301]",
		"place-type": "Winkelcentra"
}];