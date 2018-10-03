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
  }
}

const getScene = (scene) => scenes[scene]

export default getScene