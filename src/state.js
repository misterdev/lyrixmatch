const initialState = {
    authUserId: 'user5',
    scores: {
        'user0': [
            {
                score: 8,
                date: '1/1/2001',
            },
            {
                score: 9,
                date: '3/3/2003',
            }
        ],
        'user1': [
            {
                score: 2,
                date: '3/3/2003',
            }
        ],
        'user2': [
            {
                score: 7,
                date: '3/3/2003',
            },
            {
                score: 3,
                date: '3/3/2003',
            }
        ]
    },
    users: {
        'user0': {
            name: 'Elon'
        },
        'user1': {
            name: 'Mark'
        },
        'user2': {
            name: 'Steve'
        }
    }
}

export default initialState