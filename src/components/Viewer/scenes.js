import outside from '../../assets/img/scenes/outside.png'
import reception from '../../assets/img/scenes/reception.png'
import hall from '../../assets/img/scenes/hall.png'
import classroom from '../../assets/img/scenes/classroom.png'

import myDil from '../../assets/img/scenes/myDil.png'
import myDil1 from '../../assets/img/info/vrmydil.jpg'
import myDil2 from '../../assets/img/info/robotmydil.jpg'

import cafeteria from '../../assets/img/scenes/cafeteria.png'
import hallway from '../../assets/img/scenes/hallway.png'

import Snow from '../../assets/img/info/exte-neige.jpg'
import Foodtruck from '../../assets/img/info/food-truc.jpg'

import Course1 from '../../assets/img/info/cours.jpg'
import Course2 from '../../assets/img/info/cours2.jpg'

import Game from '../../assets/img/info/game.jpg'
import Wei from '../../assets/img/info/wei.jpg'

import hall1 from '../../assets/img/info/hall1.jpg'
import hall2 from '../../assets/img/info/hall2.jpg'

import salon1 from '../../assets/img/info/salon.jpg'
import salon2 from '../../assets/img/info/detente-stand.jpg'

import cafet1 from '../../assets/img/info/cafet.jpg'
import cafet2 from '../../assets/img/info/cafet2.jpg'

const scenes = {
  outside: {
    path: outside,
    title: 'L\'extérieur',
    titleCard: 'L\'extérieur',
    infos: {
      left: {
        image: Foodtruck,
        title: 'Les foodtrucks',
        description: 'Foodtrucks de la semaine:\n\n ● Lundi: UNCLE STEEVE (Burger, americain,  panini)\n\n ● Mardi:  COOKOLING (Chinois)\n\n ● Mercredi:  SELTZ (Italien)\n\n ● Jeudi:   LA STATION (Pâtes fraîches)\n\n ● Vendredi:  TORO TRUCK (Burger de taureau)\n\n'
      },
      right: {
        image: Snow,
        title: 'L’hiver c’est détente',
        description: 'Et oui sur Montpellier aussi de temps en temps la neige s’invite sur notre espace détente entre un café et une ligne de code.'
      }
    }
  },
  reception: {
    path: reception,
    title: 'La réception',
    titleCard: 'La réception',
    infos: {
      left: {
        image: hall1,
        title: 'L\'accueil',
        description: 'C’est l’endroit dédié à l’aspect administratif, mais c’est aussi un lieu d’accueil ou lorsque vous êtes perdu l’équipe du secrétariat sera vous aider à trouver votre chemin.'
      },
      right: {
        image: hall2,
        title: 'L\'étage du bâtiment',
        description: 'C’est en montant les escaliers que vous accéderez au bureau relation jeune, relation entreprise et le bureau de Madame la directrice.'
      }
    }
  },
  hall: {
    path: hall,
    title: 'Le hall',
    titleCard: 'Le salon',
    infos: {
      left: {
        image: salon1,
        title: 'Tournois de jeux vidéos',
        description: 'Pendant notre événement sur le jeux vidéo notre espace détente intérieur se transforme en salon de jeux consoles des tournois sur différents jeux comme FIFA, Dragon ball Z et bien d’autres'
      },
      right: {
        image: salon2,
        title: 'Une petite crêpe ?',
        description: 'Régulièrement des ventes de crêpes sont organisées par le BDE pour offrir aux élèves un petite collation gourmande et également récolter des fonds pour organiser toujours plus d’événements.'
      }
    }
  },
  myDil: {
    path: myDil,
    titleCard: 'Le laboratoire MyDil',
    title: 'Le laboratoire MyDil',
    infos: {
      left: {
        image: myDil1,
        title: 'L’occulus Rift',
        description: 'Découvrez l’oculus rift avec sa nouvelle forme d’immersion en 3D. Essayez vous au développement d’environnement 3D et tentez de concevoir un projet innovant au cours de votre cursus. Retrouvez aussi d’autre objet connecté comme : \n\n \n\n • Les nouvelles technologies de réalité augmentée (Hololens, ...). \n\n \n\n • Les drones et leurs nouvelles applications.'
      },
      right: {
        image: myDil2,
        title: 'Nao, le robot humanoïde',
        description: 'Inventez le compagnon de demain. Découvrez un objet connecté de nouvelle génération et concevez avec son aide des instructions inédites tout au long de votre cursus. Retrouvez aussi d’autre objet connecté comme : \n\n \n\n • L’impression 3D pour le prototypage. \n\n \n\n • Les outils collaboratifs innovants comme la surface hub.\n\n \n\n • Les montres, les bracelets….'
      }
    }
  },
  cafeteria: {
    path: cafeteria,
    title: 'La Cafétéria',
    titleCard: 'La Cafétéria',
    infos: {
      left: {
        image: cafet1,
        title: 'Pour manger le midi !',
        description: ' Un espace aménagé pour la restauration du midi est disponible pour tous les étudiants. Cette espace se compose de frigo, micro-ondes et bouilloir pour vous permettre de réchauffer vos petits plats. En plus de cette zone un food truck sera toujours présent à l\'extérieur.'
      },
      right: {
        image: cafet2,
        title: 'Pour les petites faims !',
        description: 'Le campus dispose aussi de plusieurs distributeurs pour combler vos petites faims entre plusieurs cours. Machine à café, machine à boisson ou encore machine à sandwich. Tout est aménagé dans la salle de restauration pour votre confort.'
      }
    }
  },
  hallway: {
    path: hallway,
    title: 'Les couloirs',
    titleCard: 'Le BDE',
    infos: {
      left: {
        image: Game,
        title: 'Geekathlon',
        description: 'Vous êtes un gamer, un marathon de jeux vidéo dans votre campus pendant 24H ! Ça vous tente ? Participez à l’expérience avec vos ami(e)s !'
      },
      right: {
        image: Wei,
        title: 'WEI',
        description: 'L’EPSI et WIS c’est aussi un weekend d’intégration de folie avec votre BDE qui se plie en quatre vous préparer un emplois du temps de ministre rempli d’activités !'
      }
    }
  },
  classroom: {
    path: classroom,
    title: 'Les salles de cours',
    titleCard: 'Les salles de cours',
    infos: {
      left: {
        image: Course1,
        title: 'Le cursus EPSI',
        description: 'L’EPSI est une école d’informatique qui propose des programmes de Bac à Bac+5 et de la formation continue. Quel que soit votre profil ou votre situation, vous pouvez accéder à la formation informatique et à un des programmes EPSI en admission directe ou en admission parallèle. \n\n La formation informatique de l’EPSI se compose de deux cycles : \n\n • 1er  CYCLE : Le  programme Bachelor informatique, prépare les apprenants à un titre de niveau II (Bac +3/4) certifié par le RNCP . \n\n • 2nd CYCLE : Le programme Ingénierie  informatique  prépare les apprenants à un titre de niveau I (Bac+5) « Expert en informatique et système d’information » certifié par le RNCP.'
      },
      right: {
        image: Course2,
        title: 'Le cursus WIS',
        description: 'WIS (Web International School) est une école qui propose une formation web et digital business accessible après le Bac ou en admission parallèle.\n\n\n\nWIS forme les apprenants aux métiers du web (Développement web et mobile, e-commerce, communication numérique, webmarketing et management des industries numériques …) et accompagne les entreprises dans leur transformation digitale.\n\n\n\nLes formations WIS sont accessibles en initial ou en alternance.'
      }
    }
  }
}

const getScene = (scene) => scenes[scene]

export default getScene