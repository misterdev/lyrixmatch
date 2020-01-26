const setItem = (key, value) => 
    localStorage.setItem(key, JSON.stringify(value))

const getItem = (key) =>
    JSON.parse(localStorage.getItem(key))

const init = (scores, users) => {
    if (!getItem('scores')) {
        setItem('scores', (scores))
    }
    if (!getItem('users')) {
        setItem('users', users)
    }
}

const setAuthId = (authId) =>
    setItem('authId', authId)

const getAuthId = () => 
    getItem('authId')

const addUser = (authId, name) => {
    let users = getItem('users')
    users[authId] = { name }
    setItem('users', users)
    return users[authId]
}

const getUser = (authId) => {
    let users = getItem('users')
    let user
    if (users) user = users[authId]
    return user
}

const getScores = () => getItem('scores')
const addScore = (userId, score) => {
    const scores = getItem('scores')
    const newScore = {userId, score}
    setItem('scores', [...scores, newScore])
}
const getScoresByUser = (authId) => {
    const scores = getItem('scores')
    // Won't scale well. It would be better to have
    // an additional mapping userId -> scores
    return scores.filter(({userId, _}) => userId === authId )
}

export {
    init,
    setAuthId,
    getAuthId,
    addUser,
    getUser,
    getScores,
    addScore,
    getScoresByUser
}