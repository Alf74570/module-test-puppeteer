Tests avec puppeteer
====================

Repo cloned from https://github.com/le-campus-numerique/module-test-puppeteer - Based on the work done by Philippe Le Van

[![Build Status](https://travis-ci.org/Alf74570/module-test-puppeteer.svg?branch=master)](https://travis-ci.org/Alf74570/module-test-puppeteer)

Quick start
-----------

```bash
# installer puppeteer à partir du package.json
npm install

# lancer les tests (de façon séquentielle)
npm test -- --runInBand
```

Ce qu'il faut regarder
----------------------

Les premiers fichiers à regarder sont dans l'ordre :

* tests/basic.test.js
* tests/shorten.test.js

Principe
--------

Ces tests utilisent 2 outils :

* Jest : c'est l'outil de tests utilisé principalement par React (un framework JS, comme VueJS)
* Puppeteer : un outil qui permet de contrôler le navigateur chrome à distance
