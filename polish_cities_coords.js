const REGIONS = {
  "Dolnośląskie": [
    {
      "name": "Olszyna",
      "lat": 51.066667,
      "lon": 15.388889
    },
    {
      "name": "Przemków",
      "lat": 51.526667,
      "lon": 15.784722
    },
    {
      "name": "Ścinawa",
      "lat": 51.411111,
      "lon": 16.423056
    },
    {
      "name": "Wiązów",
      "lat": 50.815278,
      "lon": 17.203611
    },
    {
      "name": "Żarów",
      "lat": 50.940556,
      "lon": 16.494444
    }
  ],
  "Kujawsko-pomorskie": [
    {
      "name": "Chodecz",
      "lat": 52.405278,
      "lon": 19.028333
    },
    {
      "name": "Gniewkowo",
      "lat": 52.895,
      "lon": 18.406389
    },
    {
      "name": "Górzno",
      "lat": 53.198333,
      "lon": 19.644444
    },
    {
      "name": "Jabłonowo Pomorskie",
      "lat": 53.388889,
      "lon": 19.152778
    },
    {
      "name": "Janikowo",
      "lat": 52.747778,
      "lon": 18.113056
    },
    {
      "name": "Kamień Krajeński",
      "lat": 53.533333,
      "lon": 17.519444
    },
    {
      "name": "Kowal",
      "lat": 52.5325,
      "lon": 19.145
    },
    {
      "name": "Kowalewo Pomorskie",
      "lat": 53.154722,
      "lon": 18.897222
    },
    {
      "name": "Łasin",
      "lat": 53.519444,
      "lon": 19.086667
    },
    {
      "name": "Mrocza",
      "lat": 53.244444,
      "lon": 17.606111
    },
    {
      "name": "Piotrków Kujawski",
      "lat": 52.551111,
      "lon": 18.499167
    },
    {
      "name": "Radzyń Chełmiński",
      "lat": 53.385556,
      "lon": 18.936389
    },
    {
      "name": "Skępe",
      "lat": 52.867222,
      "lon": 19.346944
    }
  ],
  "Lubelskie": [
    {
      "name": "Bełżyce",
      "lat": 51.183333,
      "lon": 22.266667
    },
    {
      "name": "Bychawa",
      "lat": 51.015833,
      "lon": 22.532778
    },
    {
      "name": "Frampol",
      "lat": 50.671389,
      "lon": 22.670556
    },
    {
      "name": "Ostrów Lubelski",
      "lat": 51.491111,
      "lon": 22.855
    },
    {
      "name": "Lubycza Królewska",
      "lat": 50.333333,
      "lon": 23.533333
    },
    {
      "name": "Łaszczów",
      "lat": 50.531667,
      "lon": 23.715278
    },
    {
      "name": "Parczew",
      "lat": 51.633333,
      "lon": 22.866667
    },
    {
      "name": "Piaski",
      "lat": 51.134167,
      "lon": 22.844722
    },
    {
      "name": "Rejowiec Fabryczny",
      "lat": 51.119444,
      "lon": 23.245
    },
    {
      "name": "Siedliszcze",
      "lat": 51.194444,
      "lon": 23.163889
    },
    {
      "name": "Teresin",
      "lat": 50.981667, 
      "lon": 23.548611
    },
    {
      "name": "Urzędów",
      "lat": 50.993056,
      "lon": 22.1425
    }
  ],
  "Lubuskie": [
    {
      "name": "Cybinka",
      "lat": 52.194444,
      "lon": 14.795833
    },
    {
      "name": "Czerwieńsk",
      "lat": 52.015556,
      "lon": 15.405
    },
    {
      "name": "Kargowa",
      "lat": 52.071944,
      "lon": 15.865278
    },
    {
      "name": "Nowe Miasteczko",
      "lat": 51.690833,
      "lon": 15.734722
    },
    {
      "name": "Nowogród Bobrzański",
      "lat": 51.798333,
      "lon": 15.253889
    },
    {
      "name": "Torzym",
      "lat": 52.312778,
      "lon": 15.077778
    }
  ],
  "Łódzkie": [
    {
      "name": "Biała Rawska",
      "lat": 51.8075,
      "lon": 20.471944
    },
    {
      "name": "Błaszki",
      "lat": 51.651944,
      "lon": 18.433333
    },
    {
      "name": "Brzeziny",
      "lat": 51.800278,
      "lon": 19.751389
    },
    {
      "name": "Kamieńsk",
      "lat": 51.204444,
      "lon": 19.496944
    }
  ],
  "Małopolskie": [
    {
      "name": "Brzeszcze",
      "lat": 49.980556,
      "lon": 19.151944
    },
    {
      "name": "Chełmek",
      "lat": 50.099722,
      "lon": 19.248611
    },
    {
      "name": "Libiąż",
      "lat": 50.103611,
      "lon": 19.315556
    },
    {
      "name": "Nowe Brzesko",
      "lat": 50.137222,
      "lon": 20.384722
    },
    {
      "name": "Proszowice",
      "lat": 50.2,
      "lon": 20.3
    },
    {
      "name": "Radłów",
      "lat": 50.083333,
      "lon": 20.85
    },
    {
      "name": "Ryglice",
      "lat": 49.878611,
      "lon": 21.137222
    },
    {
      "name": "Skała",
      "lat": 50.233333,
      "lon": 19.866667
    },
    {
      "name": "Sułkowice",
      "lat": 49.837778,
      "lon": 19.795556
    },
    {
      "name": "Świątniki Górne",
      "lat": 49.934722,
      "lon": 19.953889
    }
  ],
  "Mazowieckie": [
    {
      "name": "Bieżuń",
      "lat": 52.961389,
      "lon": 19.890833
    },
    {
      "name": "Brwinów",
      "lat": 52.1425,
      "lon": 20.7175
    },
    {
      "name": "Gąbin",
      "lat": 52.399722,
      "lon": 19.730556
    },
    {
      "name": "Glinojeck",
      "lat": 52.818056,
      "lon": 20.286111
    },
    {
      "name": "Halinów",
      "lat": 52.225833,
      "lon": 21.352778
    },
    {
      "name": "Kobyłka",
      "lat": 52.339167,
      "lon": 21.195833
    },
    {
      "name": "Łaskarzew",
      "lat": 51.79,
      "lon": 21.5925
    },
    {
      "name": "Marki",
      "lat": 52.321111,
      "lon": 21.103333
    },
    {
      "name": "Mogielnica",
      "lat": 51.693333,
      "lon": 20.724167
    },
    {
      "name": "Mordy",
      "lat": 52.211111,
      "lon": 22.515278
    },
    {
      "name": "Nasielsk",
      "lat": 52.589722,
      "lon": 20.804167
    },
    {
      "name": "Ożarów Mazowiecki",
      "lat": 52.208333,
      "lon": 20.793611
    },
    {
      "name": "Piastów",
      "lat": 52.184444,
      "lon": 20.839722
    },
    {
      "name": "Różan",
      "lat": 52.888889,
      "lon": 21.396389
    },
    {
      "name": "Skaryszew",
      "lat": 51.310556,
      "lon": 21.251944
    },
    {
      "name": "Sokołów Podlaski",
      "lat": 52.4075,
      "lon": 22.249722
    },
    {
      "name": "Tarczyn",
      "lat": 51.980278,
      "lon": 20.833611
    },
    {
      "name": "Tłuszcz",
      "lat": 52.433333,
      "lon": 21.45
    },
    {
      "name": "Warka",
      "lat": 51.783333,
      "lon": 21.186389
    },
    {
      "name": "Wyszogród",
      "lat": 52.383333,
      "lon": 20.2
    },
    {
      "name": "Wyśmierzyce",
      "lat": 51.625,
      "lon": 20.813333
    },
    {
      "name": "Ząbki",
      "lat": 52.292778,
      "lon": 21.116111
    },
    {
      "name": "Zielonka",
      "lat": 52.300833,
      "lon": 21.158611
    },
    {
      "name": "Żelechów",
      "lat": 51.809722,
      "lon": 21.895833
    }
  ],
  "Opolskie": [],
  "Podkarpackie": [
    {
      "name": "Brzostek",
      "lat": 49.882222,
      "lon": 21.407222
    },
    {
      "name": "Kołaczyce",
      "lat": 49.808333,
      "lon": 21.440278
    },
    {
      "name": "Nowa Sarzyna",
      "lat": 50.320278,
      "lon": 22.344444
    },
    {
      "name": "Oleszyce",
      "lat": 50.166944,
      "lon": 23.030833
    },
    {
      "name": "Sędziszów Małopolski",
      "lat": 50.069444,
      "lon": 21.701389
    },
    {
      "name": "Sokołów Małopolski",
      "lat": 50.2325,
      "lon": 22.120833
    }
  ],
  "Podlaskie": [
    {
      "name": "Czyżew",
      "lat": 52.795833,
      "lon": 22.329167
    },
    {
      "name": "Dąbrowa Białostocka",
      "lat": 53.653611,
      "lon": 23.348611
    },
    {
      "name": "Goniądz",
      "lat": 53.489722,
      "lon": 22.733333
    },
    {
      "name": "Kleszcze",
      "lat": 53.224444,
      "lon": 22.546667
    },
    {
      "name": "Knyszyn",
      "lat": 53.3125,
      "lon": 22.919444
    },
    {
      "name": "Kolno",
      "lat": 53.410556,
      "lon": 21.933889
    },
    {
      "name": "Krynki",
      "lat": 53.265556,
      "lon": 23.772222
    },
    {
      "name": "Michałowo",
      "lat": 53.036944,
      "lon": 23.604444
    },
    {
      "name": "Nowogród",
      "lat": 53.227778,
      "lon": 21.880556
    },
    {
      "name": "Rajgród",
      "lat": 53.733611,
      "lon": 22.700278
    },
    {
      "name": "Stawiski",
      "lat": 53.383333,
      "lon": 22.166667
    },
    {
      "name": "Suchowola",
      "lat": 53.579444,
      "lon": 23.101667
    },
    {
      "name": "Szepietowo",
      "lat": 52.869722,
      "lon": 22.546389
    },
    {
      "name": "Wasilków",
      "lat": 53.2,
      "lon": 23.204444
    },
    {
      "name": "Wysokie Mazowieckie",
      "lat": 52.916667,
      "lon": 22.514444
    },
    {
      "name": "Zabłudów",
      "lat": 53.015278,
      "lon": 23.335278
    }
  ],
  "Pomorskie": [
    {
      "name": "Brusy",
      "lat": 53.885556,
      "lon": 17.721944
    },
    {
      "name": "Debrzno",
      "lat": 53.538056,
      "lon": 17.236111
    },
    {
      "name": "Reda",
      "lat": 54.616667,
      "lon": 18.35
    }
  ],
  "Śląskie": [
    {
      "name": "Bieruń",
      "lat": 50.089722,
      "lon": 19.092778
    },
    {
      "name": "Blachownia",
      "lat": 50.777778,
      "lon": 18.975
    },
    {
      "name": "Imielin",
      "lat": 50.145278,
      "lon": 19.185833
    },
    {
      "name": "Krzanowice",
      "lat": 50.018056,
      "lon": 18.125278
    },
    {
      "name": "Lędziny",
      "lat": 50.1425,
      "lon": 19.130833
    },
    {
      "name": "Poręba",
      "lat": 50.492778,
      "lon": 19.333611
    },
    {
      "name": "Radzionków",
      "lat": 50.399722,
      "lon": 18.901667
    },
    {
      "name": "Rydułtowy",
      "lat": 50.058333,
      "lon": 18.416667
    },
    {
      "name": "Wilamowice",
      "lat": 49.916389,
      "lon": 19.151944
    },
    {
      "name": "Wojkowice",
      "lat": 50.364722,
      "lon": 19.036667
    }
  ],
  "Świętokrzyskie": [
    {
      "name": "Ćmielów",
      "lat": 50.890278,
      "lon": 21.514722
    },
    {
      "name": "Kunów",
      "lat": 50.958611,
      "lon": 21.283056
    },
    {
      "name": "Ożarów",
      "lat": 50.890833,
      "lon": 21.667778
    },
    {
      "name": "Skalbmierz",
      "lat": 50.319444,
      "lon": 20.399167
    },
    {
      "name": "Stąporków",
      "lat": 51.139167,
      "lon": 20.552778
    }
  ],
  "Warmińsko-mazurskie": [
    {
      "name": "Biała Piska",
      "lat": 53.611389,
      "lon": 22.063056
    },
    {
      "name": "Bisztynek",
      "lat": 54.085556,
      "lon": 20.9
    },
    {
      "name": "Górowo Iławeckie",
      "lat": 54.284444,
      "lon": 20.495556
    },
    {
      "name": "Jeziorany",
      "lat": 53.978611,
      "lon": 20.746389
    },
    {
      "name": "Kisielice",
      "lat": 53.606944,
      "lon": 19.259444
    },
    {
      "name": "Korsze",
      "lat": 54.171389,
      "lon": 21.141111
    },
    {
      "name": "Miłakowo",
      "lat": 54.010278,
      "lon": 20.072222
    },
    {
      "name": "Susz",
      "lat": 53.716944,
      "lon": 19.335278
    },
    {
      "name": "Zalewo",
      "lat": 53.846111,
      "lon": 19.610278
    }
  ],
  "Wielkopolskie": [
    {
      "name": "Czempiń",
      "lat": 52.142833,
      "lon": 16.75915
    },
    {
      "name": "Dąbie",
      "lat": 52.090556,
      "lon": 18.822222
    },
    {
      "name": "Golina",
      "lat": 52.242778,
      "lon": 18.092778
    },
    {
      "name": "Jarczewo",
      "lat": 51.970278,
      "lon": 17.296167
    },
    {
      "name": "Kleczew",
      "lat": 52.371111,
      "lon": 18.176389
    },
    {
      "name": "Kłecko",
      "lat": 52.631667,
      "lon": 17.430556
    },
    {
      "name": "Kobylin",
      "lat": 51.7,
      "lon": 17.233333
    },
    {
      "name": "Krobia",
      "lat": 51.775,
      "lon": 16.983333
    },
    {
      "name": "Krzywiń",
      "lat": 51.963333,
      "lon": 16.82
    },
    {
      "name": "Książ Wielkopolski",
      "lat": 52.066667,
      "lon": 17.233333
    },
    {
      "name": "Łobżenica",
      "lat": 53.266667,
      "lon": 17.25
    },
    {
      "name": "Miejska Górka",
      "lat": 51.655,
      "lon": 16.954444
    },
    {
      "name": "Nekla",
      "lat": 52.365,
      "lon": 17.413333
    },
    {
      "name": "Ostroróg",
      "lat": 52.626944,
      "lon": 16.455278
    },
    {
      "name": "Pogorzelica",
      "lat": 52.136667,
      "lon": 17.589722
    },
    {
      "name": "Poniec",
      "lat": 51.763889,
      "lon": 16.808333
    },
    {
      "name": "Przedecz",
      "lat": 52.335556,
      "lon": 18.896667
    },
    {
      "name": "Rychwał",
      "lat": 52.071111,
      "lon": 18.166944
    },
    {
      "name": "Stawiszyn",
      "lat": 51.918333,
      "lon": 18.111389
    },
    {
      "name": "Tuliszków",
      "lat": 52.076389,
      "lon": 18.293611
    },
    {
      "name": "Wysoka",
      "lat": 53.166667,
      "lon": 17.1
    },
    {
      "name": "Zagórów",
      "lat": 52.165556,
      "lon": 17.891667
    },
    {
      "name": "Żerków",
      "lat": 52.068333,
      "lon": 17.562778
    }
  ],
  "Zachodniopomorskie": [
    {
      "name": "Barwice",
      "lat": 53.744722,
      "lon": 16.355278
    },
    {
      "name": "Bobolice",
      "lat": 53.954722,
      "lon": 16.587778
    },
    {
      "name": "Dobra",
      "lat": 53.585556,
      "lon": 15.306944
    },
    {
      "name": "Dobrzany",
      "lat": 53.358611,
      "lon": 15.426111
    },
    {
      "name": "Drawno",
      "lat": 53.219722,
      "lon": 15.759167
    },
    {
      "name": "Gościno",
      "lat": 54.050833,
      "lon": 15.6525
    },
    {
      "name": "Karlino",
      "lat": 54.035278,
      "lon": 15.876944
    },
    {
      "name": "Maszewo",
      "lat": 53.483333,
      "lon": 15.066667
    },
    {
      "name": "Polanów",
      "lat": 54.119444,
      "lon": 16.688333
    },
    {
      "name": "Recz",
      "lat": 53.262222,
      "lon": 15.547222
    },
    {
      "name": "Suchań",
      "lat": 53.278611,
      "lon": 15.324722
    },
    {
      "name": "Tychowo",
      "lat": 53.928333,
      "lon": 16.258056
    }
  ]
}