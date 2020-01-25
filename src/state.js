const initialState = {
    authId: null,
    scores: {
        'elon': [
            {
                score: 8,
                date: '1/1/2001',
            },
            {
                score: 9,
                date: '3/3/2003',
            }
        ],
        'mark': [
            {
                score: 2,
                date: '3/3/2003',
            }
        ],
        'steve': [
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
        'elon': {
            name: 'Elon'
        },
        'mark': {
            name: 'Mark'
        },
        'steve': {
            name: 'Steve'
        }
    }
}

export default initialState