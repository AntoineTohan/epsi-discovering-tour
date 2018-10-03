import outside   from '../../assets/img/scenes/outside.png'
import reception from '../../assets/img/scenes/reception.png'
import hall      from '../../assets/img/scenes/hall.png'

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
        title: 'uhnfknx',
        description: 'kjbvkjbv'
      },
      right: {
        image: myDil2,
        title: 'skngchg',
        description: 'uhkdsuhuhkds kdsuhuhkdsuhuhk dsuhuhkdsuhuhkdsuhuhkdsuhuhkdsuhuhkdsuh uhkdsuhuhkdsuhuhkdsuh uhkdsuhuhkdsuh'
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
  }
}

const getScene = (scene) => scenes[scene]

export default getScene