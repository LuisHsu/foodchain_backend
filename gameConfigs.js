export const employees = {
    E01: {
        title: 'Waitress',
        image: '/img/employee/01.svg',
        begin: true,
        limited: false,
        salary: false,
        amount: 12,
        category: 'misc',
        description: 'Get $3 cash.\nWin ties against\nrestaurant with\nfewer waitresses',
    },
    E02: {
        title: 'Management Trainee',
        image: '/img/employee/02.svg',
        promotion: ['E09', 'E10', 'E11'],
        begin: true,
        limited: false,
        salary: false,
        amount: 18,
        category: 'management',
        description: '2',
    },
    E03: {
        title: 'Pricing Manager',
        image: '/img/employee/03.svg',
        begin: true,
        limited: false,
        salary: false,
        amount: 12,
        category: 'pricing',
        description: 'Price -$1',
    },
    E04: {
        title: 'Recruiting Girl',
        image: '/img/employee/04.svg',
        begin: true,
        limited: false,
        salary: false,
        amount: 12,
        category: 'hr',
        description: 'Hire 1 person',
    },
    E05: {
        title: 'Trainer',
        image: '/img/employee/05.svg',
        begin: true,
        limited: false,
        salary: false,
        amount: 12,
        category: 'hr',
        description: 'Train 1 person',
    },
    E06: {
        title: 'Errand Boy',
        image: '/img/employee/06.svg',
        promotion: ['E12'],
        begin: true,
        limited: false,
        salary: false,
        amount: 12,
        category: 'drink',
        description: 'Get 1 drink of any type',
    },
    E07: {
        title: 'Marketing Trainee',
        image: '/img/employee/07.svg',
        promotion: ['E13'],
        begin: true,
        limited: false,
        salary: false,
        distanceType: 'walk',
        distance: 2,
        amount: 12,
        category: 'marketing',
        description: 'Place billboard,\nman duration 2',
    },
    E08: {
        title: 'Kitchen Trainee',
        image: '/img/employee/08.svg',
        promotion: ['E14', 'E15'],
        begin: true,
        limited: false,
        salary: false,
        amount: 12,
        category: 'food',
        description: 'Produce 1 burger\nor 1 pizza',
    },
    E09: {
        title: 'New Business Developer',
        image: '/img/employee/09.svg',
        begin: false,
        limited: false,
        salary: true,
        amount: 6,
        category: 'misc',
        description: 'Place house\nor garden',
    },
    E10: {
        title: 'Junior Vice President',
        image: '/img/employee/10.svg',
        promotion: ['E16', 'E17', 'E18', 'E19', 'E20'],
        begin: false,
        limited: false,
        salary: true,
        amount: 12,
        category: 'management',
        description: '3',
    },
    E11: {
        title: 'Luxuries Manager',
        image: '/img/employee/11.svg',
        begin: false,
        limited: true,
        salary: true,
        amount: 3,
        category: 'pricing',
        description: 'Price +$10',
    },
    E12: {
        title: 'Cart Operator',
        image: '/img/employee/12.svg',
        promotion: ['E21'],
        begin: false,
        limited: false,
        salary: true,
        distanceType: 'walk',
        distance: 2,
        amount: 6,
        category: 'drink',
        description: 'Get 2 drinks from\neach source on route',
    },
    E13: {
        title: 'Campaign Manager',
        image: '/img/employee/13.svg',
        promotion: ['E22'],
        begin: false,
        limited: false,
        salary: true,
        distanceType: 'walk',
        distance: 3,
        amount: 6,
        category: 'marketing',
        description: 'Place mailbox or\nlower, max duration 3',
    },
    E14: {
        title: 'Burger Cook',
        image: '/img/employee/14.svg',
        promotion: ['E23'],
        begin: false,
        limited: false,
        salary: true,
        amount: 6,
        category: 'food',
        description: 'Produce 3 burgers',
    },
    E15: {
        title: 'Pizza Cook',
        image: '/img/employee/15.svg',
        promotion: ['E24'],
        begin: false,
        limited: false,
        salary: true,
        amount: 6,
        category: 'food',
        description: 'Produce 3 pizzas',
    },
    E16: {
        title: 'Local Manager',
        image: '/img/employee/16.svg',
        begin: false,
        limited: false,
        salary: true,
        distanceType: 'walk',
        distance: 3,
        amount: 6,
        category: 'restaurant',
        description: 'Place new restaurant,\n"COMING SOON".\nDrive-in available',
    },
    E17: {
        title: 'Vice President',
        image: '/img/employee/17.svg',
        promotion: ['E25', 'E26', 'E27'],
        begin: false,
        limited: false,
        salary: true,
        amount: 6,
        category: 'management',
        description: '4',
    },
    E18: {
        title: 'Discount Manager',
        image: '/img/employee/18.svg',
        begin: false,
        limited: false,
        salary: true,
        amount: 6,
        category: 'pricing',
        description: 'Price -$3',
    },
    E19: {
        title: 'Recruiting Manager',
        image: '/img/employee/19.svg',
        begin: false,
        limited: false,
        salary: true,
        amount: 6,
        category: 'hr',
        description: 'Hire 1 person\nor $5 less salary',
        descriptionLabel: '2x:',
    },
    E20: {
        title: 'Coach',
        image: '/img/employee/20.svg',
        begin: false,
        limited: false,
        salary: true,
        amount: 6,
        category: 'hr',
        description: '2 training slots.\nMay train the same person two steps',
    },
    E21: {
        title: 'Truck Driver',
        image: '/img/employee/21.svg',
        promotion: ['E28'],
        begin: false,
        limited: false,
        salary: true,
        distanceType: 'walk',
        distance: 3,
        amount: 6,
        category: 'drink',
        description: 'Get 3 drinks from each source on route',
    },
    E22: {
        title: 'Brand  Manager',
        image: '/img/employee/22.svg',
        promotion: ['E29'],
        begin: false,
        limited: false,
        salary: true,
        distanceType: 'fly',
        distance: Infinity,
        amount: 6,
        category: 'marketing',
        description: 'Place airplane or\nlower, max duration 4',
    },
    E23: {
        title: 'Burger Chef',
        image: '/img/employee/23.svg',
        begin: false,
        limited: true,
        salary: true,
        amount: 3,
        category: 'food',
        description: 'Produce 8 burgers',
    },
    E24: {
        title: 'Pizza Chef',
        image: '/img/employee/24.svg',
        begin: false,
        limited: true,
        salary: true,
        amount: 3,
        category: 'food',
        description: 'Produce 8 pizzas',
    },
    E25: {
        title: 'Regional Manager',
        image: '/img/employee/25.svg',
        begin: false,
        limited: true,
        salary: true,
        distanceType: 'fly',
        distance: Infinity,
        amount: 3,
        category: 'restaurant',
        description: 'Place or move\nrestaurant, opens\nimmediately.\nDrive-in available',
    },
    E26: {
        title: 'Senior Vice President',
        image: '/img/employee/26.svg',
        promotion: ['E30', 'E31', 'E32'],
        begin: false,
        limited: false,
        salary: true,
        amount: 6,
        category: 'management',
        description: '5',
    },
    E27: {
        title: 'Guru',
        image: '/img/employee/27.svg',
        begin: true,
        limited: false,
        salary: true,
        amount: 3,
        category: 'hr',
        description: '3 training slots.\nMay train the same\nperson up to three steps',
    },
    E28: {
        title: 'Zeppelin Pilot',
        image: '/img/employee/28.svg',
        begin: false,
        limited: true,
        salary: true,
        distanceType: 'fly',
        distance: 4,
        amount: 3,
        category: 'drink',
        description: 'Get 2 drinks from\neach source on route,\nignore roads',
    },
    E29: {
        title: 'Brand Director',
        image: '/img/employee/29.svg',
        begin: false,
        limited: true,
        salary: true,
        distanceType: 'fly',
        distance: Infinity,
        amount: 3,
        category: 'marketing',
        description: 'Place radio or\nlower, max duration 5',
    },
    E30: {
        title: 'CFO',
        image: '/img/employee/30.svg',
        begin: false,
        limited: true,
        salary: true,
        amount: 3,
        category: 'misc',
        description: 'Add +50% to cash\nearned this round',
    },
    E31: {
        title: 'Executive Vice President',
        image: '/img/employee/31.svg',
        begin: false,
        limited: true,
        salary: true,
        amount: 3,
        category: 'management',
        description: '10',
    },
    E32: {
        title: 'HR Director',
        image: '/img/employee/32.svg',
        begin: false,
        limited: true,
        salary: true,
        amount: 3,
        category: 'hr',
        description: 'Hire 1 person or $5 less salary',
        descriptionLabel: '4x:',
    },
};

export const mapTiles = {
    M01: {
        houseTiles: [
            {
                tileId: 'H02',
                positions: [[0, 3], [0, 4], [1, 3], [1, 4]],
            },
        ],
        image: 'img/map/Tile-1.svg',
        roads: [[2, 0], [2, 1], [0, 2], [1, 2], [2, 2], [3, 2], [4, 2], [2, 3], [2, 4]],
    },
    M02: {
        image: 'img/map/Tile-2.svg',
        roads: [[2, 0], [2, 1], [0, 2], [1, 2], [2, 2], [3, 2], [4, 2], [2, 3], [2, 4]],
        houseTiles: [
            {
                tileId: 'H04',
                positions: [[3, 0], [4, 0], [3, 1], [4, 1]],
            },
        ],
    },
    M03: {
        houseTiles: [
            {
                tileId: 'H05',
                positions: [[1, 2], [1, 3], [2, 2], [2, 3]],
            },
        ],
        image: 'img/map/Tile-3.svg',
        roads: [
            [0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [0, 1], [4, 1], [0, 2],
            [4, 2], [0, 3], [4, 3], [0, 4], [1, 4], [2, 4], [3, 4], [4, 4],
        ],
    },
    M04: {
        image: 'img/map/Tile-4.svg',
        roads: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [0, 1], [4, 1], [0, 2], [4, 2]],
        houseTiles: [
            {
                tileId: 'H07',
                positions: [[1, 1], [2, 1], [2, 1], [2, 2]],
            },
        ],
    },
    M05: {
        image: 'img/map/Tile-5.svg',
        roads: [[0, 0], [1, 0], [2, 0], [0, 1], [0, 2], [4, 2], [4, 3], [4, 4]],
        houseTiles: [
            {
                tileId: 'H08',
                positions: [[2, 2], [3, 2], [2, 3], [3, 3]],
            },
        ],
        drinks: [
            { type: 'beer', position: [1, 1] },
        ],
    },
    M06: {
        image: 'img/map/Tile-6.svg',
        roads: [[2, 0], [2, 1], [0, 2], [1, 2], [2, 2], [3, 2], [4, 2]],
        houseTiles: [
            {
                tileId: 'H10',
                positions: [[0, 0], [1, 0], [0, 1], [1, 1]],
            },
        ],
    },
    M07: {
        image: 'img/map/Tile-7.svg',
        roads: [[2, 0], [2, 1], [2, 2], [2, 3], [2, 4]],
        crossing: [[0, 2], [1, 2], [2, 2], [3, 2], [4, 2]],
        houseTiles: [
            {
                tileId: 'H12',
                positions: [[0, 0], [1, 0], [0, 1], [1, 1]],
            },
        ],
    },
    M08: {
        image: 'img/map/Tile-8.svg',
        roads: [[2, 0], [2, 1], [0, 2], [1, 2], [2, 2], [3, 2], [4, 2]],
        houseTiles: [
            {
                tileId: 'H13',
                positions: [[1, 3], [2, 3], [1, 4], [2, 4]],
            },
        ],
    },
    M09: {
        image: 'img/map/Tile-9.svg',
        roads: [[2, 0], [2, 1], [0, 2], [1, 2], [2, 2], [3, 2], [4, 2]],
        houseTiles: [
            {
                tileId: 'H15',
                positions: [[3, 3], [3, 4], [4, 3], [4, 4]],
            },
        ],
    },
    M10: {
        image: 'img/map/Tile-10.svg',
        roads: [[2, 0], [3, 0], [4, 0], [4, 1], [0, 2], [4, 2], [0, 3], [0, 4], [1, 4], [2, 4]],
        houseTiles: [
            {
                tileId: 'H16',
                positions: [[1, 1], [2, 1], [1, 2], [2, 2]],
            },
        ],
    },
    M11: {
        image: 'img/map/Tile-11.svg',
        roads: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [0, 1], [4, 1], [0, 2], [4, 2]],
        houseTiles: [
            {
                tileId: 'H18',
                positions: [[2, 1], [3, 1], [2, 2], [3, 2]],
            },
        ],
    },
    M12: {
        image: 'img/map/Tile-12.svg',
        roads: [[2, 0], [2, 1], [0, 2], [1, 2], [2, 2], [3, 2], [4, 2]],
        drinks: [
            { type: 'lemonade', position: [3, 3] },
        ],
    },
    M13: {
        image: 'img/map/Tile-13.svg',
        roads: [[2, 0], [3, 0], [4, 0], [4, 1], [0, 2], [4, 2], [0, 3], [0, 4], [1, 4], [2, 4]],
        drinks: [
            { type: 'lemonade', position: [3, 1] },
            { type: 'coke', position: [1, 3] },
        ],
    },
    M14: {
        image: 'img/map/Tile-14.svg',
        roads: [[2, 0], [2, 1], [0, 2], [1, 2], [2, 2], [3, 2], [4, 2]],
        drinks: [
            { type: 'beer', position: [1, 1] },
        ],

    },
    M15: {
        image: 'img/map/Tile-15.svg',
        roads: [[2, 0], [2, 1], [0, 2], [1, 2], [2, 2], [3, 2], [4, 2], [2, 3], [2, 4]],
        drinks: [
            { type: 'beer', position: [1, 0] },
        ],
    },
    M16: {
        image: 'img/map/Tile-16.svg',
        roads: [[2, 0], [2, 1], [2, 2], [2, 3], [2, 4]],
        crossing: [[0, 2], [1, 2], [2, 2], [3, 2], [4, 2]],
        drinks: [
            { type: 'lemonade', position: [0, 1] },
            { type: 'beer', position: [3, 4] },
        ],
    },
    M17: {
        image: 'img/map/Tile-17.svg',
        roads: [[2, 0], [2, 1], [0, 2], [1, 2], [2, 2], [3, 2], [4, 2]],
        drinks: [
            { type: 'coke', position: [1, 3] },
        ],
    },
    M18: {
        image: 'img/map/Tile-18.svg',
        roads: [[2, 0], [2, 1], [0, 2], [1, 2], [2, 2], [3, 2], [4, 2], [2, 3], [2, 4]],
        drinks: [
            { type: 'coke', position: [1, 1] },
        ],
    },
    M19: {
        image: 'img/map/Tile-19.svg',
        roads: [[2, 0], [2, 1], [0, 2], [1, 2], [2, 2], [3, 2], [4, 2], [2, 3], [2, 4]],
        drinks: [
            { type: 'coke', position: [3, 0] },
            { type: 'beer', position: [0, 3] },
        ],
    },
    M20: {
        image: 'img/map/Tile-20.svg',
        roads: [[2, 0], [2, 1], [0, 2], [1, 2], [2, 2], [3, 2], [4, 2], [2, 3], [2, 4]],
        drinks: [
            { type: 'lemonade', position: [1, 1] },
        ],
    },
};

export const houseTiles = {
    H01: { fixed: false, garden: true, order: 1 },
    H02: { fixed: true, garden: false, order: 2 },
    H03: { fixed: false, garden: true, order: 3 },
    H04: { fixed: true, garden: false, order: 4 },
    H05: { fixed: true, garden: false, order: 5 },
    H06: { fixed: false, garden: true, order: 6 },
    H07: { fixed: true, garden: false, order: 7 },
    H08: { fixed: true, garden: false, order: 8 },
    H09: { fixed: false, garden: true, order: 9 },
    H10: { fixed: true, garden: false, order: 10 },
    H11: { fixed: false, garden: true, order: 11 },
    H12: { fixed: true, garden: false, order: 12 },
    H13: { fixed: true, garden: false, order: 13 },
    H14: { fixed: false, garden: true, order: 14 },
    H16: { fixed: true, garden: false, order: 15 },
    H17: { fixed: false, garden: true, order: 16 },
    H18: { fixed: true, garden: false, order: 17 },
    H19: { fixed: false, garden: true, order: 18 },
};

export const milestones = {
    Mi01: {
        image: 'img/milestone/Milestone-1.svg',
        title: 'First burger marketed',
        description: '+$5 for every burger sold',
    },
    Mi02: {
        image: 'img/milestone/Milestone-2.svg',
        title: 'First to have $20',
        description: 'May see bank reserve cards',
    },
    Mi03: {
        image: 'img/milestone/Milestone-3.svg',
        title: 'First to lower prices',
        description: 'Price -$1',
    },
    Mi04: {
        image: 'img/milestone/Milestone-4.svg',
        title: 'First to train someone',
        description: '$15 discount on salaries',
    },
    Mi05: {
        image: 'img/milestone/Milestone-5.svg',
        title: 'First to pay $20 or more in salaries',
        description: 'May use multiple trainers on the same person',
    },
    Mi06: {
        image: 'img/milestone/Milestone-6.svg',
        title: 'First pizza produced',
        description: '+1 pizza cook',
    },
    Mi07: {
        image: 'img/milestone/Milestone-7.svg',
        title: 'First burger produced',
        description: '+1 burger cook',
    },
    Mi08: {
        image: 'img/milestone/Milestone-8.svg',
        title: 'First cart operator played',
        description: 'Buyers get range +1',
    },
    Mi09: {
        image: 'img/milestone/Milestone-9.svg',
        title: 'First to have $100',
        description: 'Your CEO counts as CFO\n(+50% cash). May not have CFO',
    },
    Mi10: {
        image: 'img/milestone/Milestone-10.svg',
        title: 'First errand boy played',
        description: 'All buyers get + 1\ndrink from each source',
    },
    Mi11: {
        image: 'img/milestone/Milestone-11.svg',
        title: 'First billboard placed',
        description: 'No salaries for marketeers;\nEternal marketing',
    },
    Mi12: {
        image: 'img/milestone/Milestone-12.svg',
        title: 'First pizza marketed',
        description: '+$5 for every pizza sold',
    },
    Mi13: {
        image: 'img/milestone/Milestone-13.svg',
        title: 'First drink marketed',
        description: '+$5 for every drink sold',
    },
    Mi14: {
        image: 'img/milestone/Milestone-14.svg',
        title: 'First airplane campaign',
        description: 'Count +2 open slots when\ndetermining order of play',
    },
    Mi15: {
        image: 'img/milestone/Milestone-15.svg',
        title: 'First radio campaign',
        description: 'Your radios market 2 goods per turn instead of 1',
    },
    Mi16: {
        image: 'img/milestone/Milestone-16.svg',
        title: 'First to hire 3 people in 1 turn',
        description: '+2 Management Trainees',
    },
    Mi17: {
        image: 'img/milestone/Milestone-17.svg',
        title: 'First to throw away drink or food',
        description: 'Get a freezer that\nstores 10 items(drink/food)',
    },
    Mi18: {
        image: 'img/milestone/Milestone-18.svg',
        title: 'First waitress played',
        description: 'Each waitress +$2',
    },
};

export const marketingTiles = {
    Mk01: {
        type: 'radio',
        size: [1, 1],
        image: 'img/marketing/Marketing_Tile-1.svg',
        order: 1,
    },
    Mk02: {
        type: 'radio',
        size: [1, 1],
        image: 'img/marketing/Marketing_Tile-2.svg',
        order: 2,
    },
    Mk03: {
        type: 'radio',
        size: [1, 1],
        image: 'img/marketing/Marketing_Tile-3.svg',
        order: 3,
    },
    Mk04: {
        type: 'airplane',
        size: [1, 2],
        image: 'img/marketing/Marketing_Tile-4.svg',
        order: 4,
    },
    Mk05: {
        type: 'airplane',
        size: [3, 2],
        image: 'img/marketing/Marketing_Tile-5.svg',
        order: 5,
    },
    Mk06: {
        type: 'airplane',
        size: [5, 2],
        image: 'img/marketing/Marketing_Tile-16.svg',
        order: 6,
    },
    Mk07: {
        type: 'mailbox',
        size: [2, 2],
        image: 'img/marketing/Marketing_Tile-8.svg',
        order: 7,
    },
    Mk08: {
        type: 'mailbox',
        size: [2, 2],
        image: 'img/marketing/Marketing_Tile-9.svg',
        order: 8,
    },
    Mk09: {
        type: 'mailbox',
        size: [1, 1],
        image: 'img/marketing/Marketing_Tile-6.svg',
        order: 9,
    },
    Mk10: {
        type: 'mailbox',
        size: [1, 1],
        image: 'img/marketing/Marketing_Tile-7.svg',
        order: 10,
    },
    Mk11: {
        type: 'billboard',
        size: [3, 2],
        image: 'img/marketing/Marketing_Tile-12.svg',
        order: 11,
    },
    Mk12: {
        type: 'billboard',
        size: [2, 2],
        image: 'img/marketing/Marketing_Tile-13.svg',
        order: 12,
    },
    Mk13: {
        type: 'billboard',
        size: [1, 3],
        image: 'img/marketing/Marketing_Tile-11.svg',
        order: 13,
    },
    Mk14: {
        type: 'billboard',
        size: [2, 1],
        image: 'img/marketing/Marketing_Tile-10.svg',
        order: 14,
    },
    Mk15: {
        type: 'billboard',
        size: [1, 1],
        image: 'img/marketing/Marketing_Tile-14.svg',
        order: 15,
    },
    Mk16: {
        type: 'billboard',
        size: [1, 1],
        image: 'img/marketing/Marketing_Tile-15.svg',
        order: 16,
    },

};
