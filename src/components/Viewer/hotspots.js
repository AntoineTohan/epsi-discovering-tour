const hotposts = {
  outside: [
    {
      id: 'entrance',
      pitch: -10.429402860937797,
      yaw: -1.0780267425584553,
      text: 'Entrée',
      type: 'door',
      nextScene: 'reception'
    }, {
      id: 'benches',
      pitch: -17.37947554363591,
      yaw: -88.65829388174072,
      text: 'Bancs',
      type: 'info',
      modal: {
        title: 'TITRE'
      }
    },
    {
      id: 'foodTruck',
      pitch: 2.37947554363591,
      yaw: 110.65829388174072,
      text: 'Food truck',
      type: 'info',
      modal: {
        title: 'Foodtrucks'
      }
    }
  ],
  reception: [
    {
      id: 'exit',
      pitch: -11.122438007403254,
      yaw: 176.94331405050897,
      text: 'Sortie',
      type: 'door',
      nextScene: 'outside'
    }, {
      id: 'secretaria',
      pitch: -17.94462892729827,
      yaw: -129.3478479304976,
      text: 'Secrétaria',
      type: 'info',
      modal: {
        title: 'TITRE'
      }
    }, 
    {
      id: 'visitorInfo',
      pitch: -10.94462892729827,
      yaw: -30.3478479304976,
      text: 'visitorInfo',
      type: 'info',
      modal: {
        title: 'Visitors Infos'
      }
    },{
      id: 'hall',
      pitch: -3.5219547682258354,
      yaw: -2.893240305042475,
      text: 'Hall',
      type: 'arrow',
      nextScene: 'hall'
    }
  ],
  hall: [
    {
      id: 'reception',
      pitch: -19.046037384328592,
      yaw: -179.4007460716989,
      text: 'Retourner à la reception',
      type: 'arrow',
      nextScene: 'reception'
    }, {
      id: 'firstFloor',
      pitch: 0.9646583110494298,
      yaw: -151.33764512350348,
      text: 'Premier Etage',
      type: 'info',
      modal: {
        title: 'TITRE',
        title2: 'titre2'
      }
    }, {
      id: 'myDil',
      pitch: -10.604225125899582,
      yaw: -68.4401894006285,
      text: 'Rentrer dans le labo',
      type: 'door',
      nextScene: 'myDil'
    }, {
      id: 'sofa',
      pitch: -23.14890047160464,
      yaw: -21.892100683629344,
      text: 'A DEFINIR',
      type: 'info',
      modal: {
        title: 'TITRE'
       }
    }, {
      id: 'cafeteria',
      pitch: -10.18561755685819,
      yaw: 62.20786430118433,
      text: 'Sortie',
      type: 'door',
      nextScene: 'cafeteria'
    }, {
      id: 'hallway',
      pitch: -9.178151533161737,
      yaw: 87.65400124405107,
      text: 'Sortie',
      type: 'arrow',
      nextScene: 'hallway'
    }
  ],
  myDil: [
    {
      id: 'hall',
      pitch: -17.103219683402966,
      yaw: 109.60700469042989,
      text: 'Retourner au hall',
      type: 'door',
      nextScene: 'hall'
    }, {
      id: 'IoT',
      pitch: -10.684462094625308,
      yaw: 25.29853249316374,
      text: 'Objets connectés',
      type: 'info',
      modal: {
        title: 'TITRE'
      }
    },
  ],
  cafeteria: [
    {
      id: 'hall',
      pitch: -4.938396217549862,
      yaw: 62.20786430118433,
      text: 'Retourner au hall',
      type: 'door',
      nextScene: 'hall'
    }, {
      id: 'machines',
      pitch: -5.3829353601004675,
      yaw: 83.04545620617901,
      text: 'Distributeur à boissons/café/friandises',
      type: 'info',
      modal: {
        title: 'TITRE'
      }
    }, {
      id: 'babyfoot',
      pitch: -26.056916722804253,
      yaw: 74.60407101469336,
      text: 'Babyfoot',
      type: 'info',
      modal: {
        title: 'TITRE'
      }
    }, {
      id: 'hallway',
      pitch: -4.467100678146831,
      yaw: -35.143580946888775,
      text: 'Retourner dans le couloir',
      type: 'door',
      nextScene: 'hallway'
    }, {
      id: 'fridges',
      pitch: -15.52920015615953,
      yaw: -77.95540742165102,
      text: 'Frigots / Micro-ondes',
      type: 'info',
      modal: {
        title: 'TITRE',
      }
    }
  ],
  hallway: [
    {
      id: 'course',
      pitch: -15.541255449345375,
      yaw: -45.668550751941765,
      text: 'Salle de cours',
      type: 'door',
      nextScene: 'course'
    }, {
      id: 'cafeteria',
      pitch: -14.636699298091361,
      yaw: -171.90264643617593,
      text: 'Retourner au hall',
      type: 'door',
      nextScene: 'cafeteria'
    }, {
      id: 'hall',
      pitch: -8.296978473870931,
      yaw: 141.26868853903505,
      text: 'Retourner au hall',
      type: 'arrow',
      nextScene: 'hall'
    }
  ],
  course: [
    {
      id: 'hallway',
      pitch: -10.541255449345375,
      yaw: 30.668550751941765,
      text: 'Retourner au hall',
      type: 'door',
      nextScene: 'hallway'
    }, {
      id: 'coursesDescription',
      pitch: 0.541255449345375,
      yaw:  3.668550751941765,
      text: 'description des cours',
      type: 'info',
      modal: {
        title: 'TITRE',
      }
    }
  ]
}

const getHotSpots = (scene) => hotposts[scene]

export default getHotSpots