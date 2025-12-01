
<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h3 align="center">Test technique Frontend</h3>

  <p align="center">
    Projet technique sur Angular
    <br />
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template">Voir le prototype FIGMA</a>
    &middot;
    <a href="https://github.com/othneildrew/Best-README-Template">Voir la démo</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Sommaire</summary>
  <ol>
    <li>
      <a href="#a-propos-du+projet">A propos du projet</a>
      <ul>
        <li><a href="#built-with">Prérequis</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Démarrer le projet</a>
      <ul>
        <li><a href="#prerequisites">Installation</a></li>
        <li><a href="#installation">Lancer l'application</a></li>
      </ul>
    </li>
    <li><a href="#usage">Documentation</a></li>
    <li><a href="#usage">Utilisation</a></li>
    <li><a href="#roadmap">Futures évolutions</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Ressources externes
</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## 🖥️ A propos du projet

![image](./src/assets/documentation/banniere.png)

Ce projet est une application Angular développée pour un test technique frontend.
Elle met en œuvre plusieurs fonctionnalités :

- Recherche de régions via API
- Sélection dynamique des départements
- Affichage des communes dans un composant tableau personnalisé
- Intégration de composants Angular + PrimeNG
- Mise en place d’un design conforme au prototype (typographies, mises en page, vidéo de fond…)

Le but est de démontrer :

✔️ la maîtrise d’Angular
<br>
✔️ l’intégration et personnalisation UI / UX
<br>
✔️ l’architecture standalone et signals
<br>
✔️ l’usage cohérent de composants réutilisables

<p align="right">(<a href="#readme-top">Retour</a>)</p>



### Prérequis

1. **Node.js** (version recommandée : LTS)  
  👉 https://nodejs.org/

2. **NPM** (installé automatiquement avec Node)

3. **Angular CLI** (version 20)
> npm install -g @angular/cli

### API 

- Récupérer le nom des régions pour l’autocomplétion:

> https://geo.api.gouv.fr/regions?nom=nomDeLaRegion

- Récupérer la liste des départements d’une région :

> https://geo.api.gouv.fr/regions/{code région}/departements

- Récupérer la liste des communes d’un départements :

> https://geo.api.gouv.fr/departements/{code departement}/communes

<p align="right">(<a href="#readme-top">Retour</a>)</p>



<!-- GETTING STARTED -->
## 🎯 Démarrer le projet

Pour lancer le projet :

### Installation

1. Cloner le repository
   ```sh
   git clone https://github.com/PaulCollas/test_technique_front.git
   ```
2. Installer les NPM packages
   ```sh
   npm install
   ```

### Lancer l'application

1. Lancer l'application Angular :
   ```sh
   ng serve
   ```

2. Lancer la documentation : 
   ```sh
   ng serve
   ```

### Lancer les tests

1. Lancer StoryBook :
   ```sh
   npm run storybook
   ```

2. Ouvrir dans le navigateur : 
   ```sh
   http://localhost:6006/
   ```


3. Lancer Jasmine :
   ```sh
   npm run test
   ```

4. Ouvrir dans le navigateur : 
   ```sh
   http://localhost:9876/?id=2369937
   ```



<p align="right">(<a href="#readme-top">Retour</a>)</p>

<!-- USAGE EXAMPLES -->
## 📚 Documentation

Pour ce projet, j'ai rédigé et utilisé la documentation de la manière suivante : 

1. **Figma** (version recommandée : LTS)  
- *Lien d'accès au Figma* : 
> [Lien du fichier Figma avec les maquettes, composants, assets etc](https://www.figma.com/design/6BJfLEXFWWNtcXFXLR78io/Test-Technique-Front--PrimeNG-?node-id=2670-9556&t=FdNonksW8DeH1mJi-1)

- *Prototype* : 
> [Lien du prototype](https://www.figma.com/proto/6BJfLEXFWWNtcXFXLR78io/Test-Technique-Front--PrimeNG-?node-id=2670-9556&t=FdNonksW8DeH1mJi-1)

2. **StoryBook** (version recommandée : LTS)  
- *Lancer le storybook* : 
> npm run storybook

- *Accès au storybook* : 
> http://localhost:6006/

3. **Campodoc** (Documentation technique)  
- *Lancer le campodoc* : 
>  npm run compodoc
- *Accès au campodoc* : 
Ouvrir l'idex.html dans "documentation" à la racine de ce projet


<!-- USAGE EXAMPLES -->
## 🚀 Utilisation

Une fois lancé, le projet permet :

* de rechercher une région via autocomplétion
* d’afficher les départements associés
* d’accéder à la liste de leurs communes
* d’utiliser un tableau custom PrimeNG enrichi
* de naviguer entre les pages grâce au routing Angular

<p align="right">(<a href="#readme-top">Retour</a>)</p>



<!-- ROADMAP -->
## 🗺️ Futures évolutions

- [] Ajouter Changelog
- [] Finaliser l'intégration StoryBooks
- [] Ajouter le Multi-language

<p align="right">(<a href="#readme-top">Retour</a>)</p>



<!-- CONTRIBUTING -->
## 🤝 Contribuer

Les contributions sont les bienvenues !

1. Forker le projet
2. Créer une branche (git checkout -b feature/NouvelleFeature)
3. Commit (git commit -m 'Ajout nouvelle fonctionnalité')
4. Push (git push origin feature/NouvelleFeature)
5. Ouvrir une Pull Request



<!-- LICENSE -->
## 📄 License

Projet distribué sous licence Unlicense.
Voir le fichier LICENSE.txt pour plus d’informations.

<p align="right">(<a href="#readme-top">Retour</a>)</p>



<!-- CONTACT -->
## Contact

Paul Collas - [Github](https://github.com/PaulCollas) - paulcollas@studio210.fr

Lien du projet: [Repository](https://github.com/PaulCollas/test_technique_front)

<p align="right">(<a href="#readme-top">Retour</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Ressources externes

Quelques ressources utiles :

* https://angular.io
* https://primeng.org
* https://rxjs.dev
* https://developer.mozilla.org
* https://fonts.google.com
* https://shields.io

<p align="right">(<a href="#readme-top">Retour</a>)</p>
