1. Installer nødvendige avhengigheter for vite-config

```
npm i -D vite-plugin-css-injected-by-js vite-plugin-environment rollup-plugin-import-map @rollup/plugin-terser
```
2. Oppdater vite.config.ts med korrekt config

3. Oppdater remote-app og container-app med import-map for react og react-dom. Se vite.config.ts

Opprett filen importmaps.json på rot i prosjektet
```
  <script type="importmap">
    {
      "imports": {
        "react": "https://esm.sh/react",
        "react-dom": "https://esm.sh/react-dom"
      }
    }
  </script>
```

Legg til bruk av `rollup-plugin-import-map` i plugins-arrayet til vite.config.ts slik:

```
{
      ...rollupImportMapPlugin([importmap]),
      enforce: "pre",
      apply: "build",
},

```

4. Kjør opp prosjektet med `npm run dev`.
5. Når man skal deploye så kjører man `npm run build` for å bygge korrekt bundle som så blir dratt inn i container-appen.




## Tanker
- Hvordan hindre at container-app krasjer hvis microfrontend er nede? - Wrappe lasting i ErrorBundary
  - Test ved å kjøre opp begge lokalt og så skru av microfrontend-hostingen. Da krasjer container-appen.
- Hva skjer om vi har forskjellige React-versjoner - Det bør vi ikke ha. Da kan ting krasje. Det er det importmap skal hjelpe med.
- Utforske forskjellige versjoner av designsystem osv. - La oss prøve å ikke ha forskjellige versjoner i starten...
- Utforske routing - Hvordan håndterer vi det? - Vi bør ikke nødvendigvis strebe etter routing pga. mye ekstra overhead og kompleksitet.
- Kommunikasjon frontend -> backend - TBD
- Hvordan confe opp i ulike miljøer? - Bruk manifest-fil
  - Se på hvordan det gjøres her https://github.com/navikt/tms-min-side/blob/main/src/mikrofrontend/Utkast.tsx med manifest