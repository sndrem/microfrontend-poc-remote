1. Oppdater vite.config.ts med korrekt config
2. Installer `vite-plugin-css-injected-by-js` via `npm i vite-plugin-css-injected-by-js --save` https://github.com/Marco-Prontera/vite-plugin-css-injected-by-js
3. Oppdater container-app med import-map for react og react-dom

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





## Tanker
- Hvordan hindre at container-app krasjer hvis microfrontend er nede? - Wrappe lasting i ErrorBundary
  - Test ved å kjøre opp begge lokalt og så skru av microfrontend-hostingen. Da krasjer container-appen.
- Hva skjer om vi har forskjellige React-versjoner
- Utforske forskjellige versjoner av designsystem osv.
- Utforske routing - Hvordan håndterer vi det?
- Kommunikasjon frontend -> backend
- Hvordan confe opp i ulike miljøer?
  - Se på hvordan det gjøres her https://github.com/navikt/tms-min-side/blob/main/src/mikrofrontend/Utkast.tsx med manifest