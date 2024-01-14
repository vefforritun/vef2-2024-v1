# Vefforritun 2 2024, verkefni 1

## Markmið

- Upprifjun og notkun á verkfærum og tólum úr vefforritun 1.
- Ósamstillt forritun með Node.js og notkun á módúlum.
- Útbúa test með Jest og setja upp keyrslu á testum með GitHub Actions.
- Setja upp vef á Netlify með tengingu við GitHub.

## Verkefnið

Gefin eru gögn fyrir leiki í einhversskonar boltaíþróttadeild. Þessi gögn eru á JSON formi og í nokkrum mismunandi skrám þar sem hver skrá er einn leikdagur.

Skrifa skal allan kóða, ekki skal nota forritasöfn frá t.d. NPM.

### Lestur gagna

Undir möppunni `data/` eru JSON skrár með leikdögum sem heita allar `gameday-X.json` þar sem `X` er eitthvert gildi (alveg handahófskennt), formið er:

- `date`, dagsetning leikja á ISO 8601 formi
- `games`, fylki af leikjum
  - `time`, tími leiks á ISO 8601 formi
  - `home`, heimalið
  - `away`, útilið

Þar sem `home` og `away` eru hlutir með eftirfarandi gildum:

- `name`, nafn liðs
- `score`, skor liðs í leik

Einnig er skrá `teams.json` sem inniheldur öll lögleg lið í deildinni.

Skrifa skal forrit sem les inn þessi gögn og varpar yfir í HTML skrár sem birta gögnin.

Ekki á að breyta skrám heldur nota þær nákvæmlega eins og þær eru.

Athugið að gögnin eru ekki fullkomin, þau geta innihaldið villur. Ef villa er til staðar í gögnum (þ.e.a.s. gögn uppfylla ekki það sem skilgreint er að ofan) eða ef liðið er ekki skráð sem löglegt lið skal ekki birta þau gögn.

### Birting gagna

Eftir lestur skal útbúa HTML skrár sem birta gögnin. Þær skulu vera í möppunni `dist/` og vera:

- `index.html`, forsíða sem hefur einhvern lýsingartexta (í versta falli `lorem ipsum` texta).
- `leikir.html`, síða sem birtir alla leiki í deildinni, raðaða eftir dagsetningu leiks (elsta dagsetning efst).
- `stada.html`, tafla með stöðu í deildinni, raðað eftir stöðu (flest stig efst) þar sem stig eru gefin:
  - 3 stig fyrir sigur
  - 1 stig fyrir jafntefli
  - 0 stig fyrir tap

Þar sem gögn innan `dist/` möppu eru _afleidd_ frá því sem er í `data/` möppu skal **ekki** setja þær inn í Git og hunsa þær með `.gitignore` skrá (sem gefin er).

### Test

Í verkefni skal skrifa test með [Jest](https://jestjs.io/) sem athugar hvort forritið virki eins og er skilgreint er að ofan.

Allar skrár með kóða skulu hafa test og line coverage skal vera a.m.k. 50% í heildina. Þetta á við node.js kóða, ekki þarf að telja með þann kóða sem keyrður er úr CLI/gegnum `build` scriptu. Ekki er krafa um að skrifa test fyrir kóða á framenda.

Þar sem coverage gögn eru skrifuð í `coverage/` möppu skal hunsa þær með `.gitignore` skrá.

Test skulu keyra með:

```bash
> npm test
# eða ef yarn er notað
> yarn test
# og ef beðið er um coverage
> npm test -- --coverage
# eða ef yarn er notað
> yarn test --coverage
```

Setja skal upp keyrslu á testum með [GitHub Actions](https://docs.github.com/en/actions) þannig að þau keyra sjálfkrafa þegar commitað er á GitHub á `main` branch, eða í pull requestum.

Gefin er skrá til að vinna með skrár og próf fyrir það, gefið er vinnuflæði fyrir GitHub til að keyra lint og test með hverju commit.

### Útlit og virkni á vef

Setja skal upp _einfalt_ útlit á vefnum með flexbox eða grid. Takmarka heildarstærð og vera _responsive_.

Forritið skal útbúa merkingarfræðilegt og aðgengilegt HTML með _sniðmátum_ (sjá nánar í fyrirlestrum 2 og 3).

### Tæki og tól

Nota skal node 20.

Nota skal NPM eða Yarn til að sækja og keyra tól.

Aðeins skal nota ECMAScript modules (ESM) og ekki CommonJS.

Uppsett er `package.json` skrá með `eslint` og `stylelint` uppsett.

Breyta má út frá reglum sem eru settar upp í `eslint` og `stylelint` með því að breyta stillingar (`rc` skrám) en það er ekki leyfilegt að slökkva á reglum í kóða.

### GitHub & Netlify

Setja skal upp vefinn með niðurstöðum á Netlify tengt við GitHub.

## Mat

- 25% – Lestur gagna
- 25% – Birting gagna
- 20% – Test og lint
- 20% – Útlit á vef
- 10% – GitHub & Netlify

## Sett fyrir

Verkefni sett fyrir í fyrirlestri miðvikudaginn 17. janúar 2023.

## Skil

Skila skal í Canvas í seinasta lagi fyrir lok dags fimmtudaginn 1. febrúar 2024.

Skil skulu innihalda:

- Slóð á verkefni keyrandi á Netlify
- Slóð á GitHub repo fyrir verkefni. Dæmatímakennurum skal hafa verið boðið í repo. Notendanöfn þeirra eru:
  - `osk`
  - `polarparsnip`
  - `sturla-freyr`

## Einkunn

Leyfilegt er að ræða, og vinna saman að verkefni en **skrifið ykkar eigin lausn**. Ef tvær eða fleiri lausnir eru mjög líkar þarf að færa rök fyrir því, annars munu allir hlutaðeigandi hugsanlega fá 0 fyrir verkefnið.

Ef stórt mállíkan (LLM, „gervigreind“, t.d. ChatGTP) er notað til að skrifa part af lausn skal taka það fram. [Sjá nánar á upplýsingasíða um gervigreind hjá HÍ](https://gervigreind.hi.is/).

Sett verða fyrir ([sjá nánar í kynningu á áfanga](https://github.com/vefforritun/vef2-2024/blob/main/namsefni/01.kynning/1.kynning.md)):

- fimm minni verkefni þar sem átta bestu gilda 10% hvert, samtals 50% af lokaeinkunn.
- tvö hópverkefni þar sem hvort um sig gildir 10%, samtals 20% af lokaeinkunn.
- einstaklingsverkefni sem gildir 10–20% af lokaeinkunn.

---

> Útgáfa 0.1

| Útgáfa | Breyting      |
| ------ | ------------- |
| 0.1    | Fyrsta útgáfa |
