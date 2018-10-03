import outside   from '../../assets/img/scenes/outside.png'
import reception from '../../assets/img/scenes/reception.png'
import hall      from '../../assets/img/scenes/hall.png'
import course from '../../assets/img/scenes/classroom.png'

import myDil     from '../../assets/img/scenes/myDil.png'
import myDil1 from '../../assets/img/info/vrmydil.jpg'
import myDil2 from '../../assets/img/info/robotmydil.jpg'

import cafeteria from '../../assets/img/scenes/cafeteria.png'
import hallway   from '../../assets/img/scenes/hallway.png'



const scenes = {
  outside: {
    path: outside,
    title: 'Extérieur',
    infos: {
      left: {
        image: 'kbjkdfn',
        title: 'uhnfknx',
        description: 'kjbvkjbv'
      },
      right: {
        image: 'sbdvkjbv',
        title: 'skdbrejbfke',
        description: 'uhkdsuh'
      }
    }
  },
  reception: {
    path: reception,
    title: 'Réception',
    infos: {
      left: {
        image: 'kbjkdfn',
        title: 'uhnfknx',
        description: 'kjbvkjbv'
      },
      right: {
        image: 'sbdvkjbv',
        title: 'skdbrejbfke',
        description: 'uhkdsuh'
      }
    }
  },
  hall: {
    path: hall,
    title: 'Hall',
    infos: {
      left: {
        image: 'kbjkdfn',
        title: 'uhnfknx',
        description: 'kjbvkjbv'
      },
      right: {
        image: 'sbdvkjbv',
        title: 'skdbrejbfke',
        description: 'uhkdsuh'
      }
    }
  },
  myDil: {
    path: myDil,
    title: 'MyDil',
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
    title: 'Cafétéria',
    infos: {
      left: {
        image: 'azerty',
        title: 'Pour manger le midi !',
        description: ' Un espace aménagé pour la restauration du midi est disponible pour tous les étudiants. Cette espace se compose de frigo, micro-ondes et bouilloir pour vous permettre de réchauffer vos petits plats. En plus de cette zone un food truck sera toujours présent à l\'extérieur.'
      },
      right: {
        image: 'azerty',
        title: 'Pour les petites faims !',
        description: 'Le campus dispose aussi de plusieurs distributeurs pour combler vos petites faims entre plusieurs cours. Machine à café, machine à boisson ou encore machine à sandwich. Tout est aménagé dans la salle de restauration pour votre confort.'
      }
    }
  },
  hallway: {
    path: hallway,
    title: 'Couloir',
    infos: {
      left: {
        image: 'kbjkdfn',
        title: 'uhnfknx',
        description: 'kjbvkjbv'
      },
      right: {
        image: 'sbdvkjbv',
        title: 'skdbrejbfke',
        description: 'uhkdsuh'
      }
    }
  },
  course: {
    path: course,
    title: 'salledecours',
    infos: {
      left: {
        image: 'azerty',
        title: 'Le cursus EPSI',
        description: 'L’EPSI est une école d’informatique qui propose des programmes de Bac à Bac+5 et de la formation continue. Quel que soit votre profil ou votre situation, vous pouvez accéder à la formation informatique et à un des programmes EPSI en admission directe ou en admission parallèle. \n\n La formation informatique de l’EPSI se compose de deux cycles : \n\n • 1er  CYCLE : Le  programme Bachelor informatique, prépare les apprenants à un titre de niveau II (Bac +3/4) certifié par le RNCP . \n\n • 2nd CYCLE : Le programme Ingénierie  informatique  prépare les apprenants à un titre de niveau I (Bac+5) « Expert en informatique et système d’information » certifié par le RNCP. \n\n À partir de la 3ème année, les apprenants peuvent suivre leur formation informatique en initial ou par alternance.'
      },
      right: {
        image: 'sbdvkjbv',
        title: 'skdbrejbfke',
        description: 'uhkdsuh'
      }
    }
  }
}

const getScene = (scene) => scenes[scene]

export default getScene