# HappyDesk

## Installation

Pre-Downloads vor erstmaliger Ausführung des Codes:

https://nodejs.org/en/
https://code.visualstudio.com/
https://git-scm.com/downloads

## erstmalige Ausführung der Website

$ npm install          -- (downloaded alle Pakete)
$ ng serve              -- (startet lokalen Webserver)

## Demo Env für QA

Webserver lokal starten
$ ng serve --host 0.0.0.0 --disable-host-check
localtunnel erzeugen und URL aus dem Log lesen
$ npx localtunnel --port 4200


## Deploy Angular App to Github Pages
(Installation nur einmal nötig) npm i angular-cli-ghpages --save-dev

ng build --prod --base-href https://schwarztrinker.github.io/hackathon-happydesk/
npx angular-cli-ghpages --dir=dist/happy-desk
