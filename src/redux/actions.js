export const nextPage = () => {
    return {
        type: 'NEXT_PAGE'
    }
}

export const prevPage = () => {
    return {
        type: 'PREV_PAGE'
    }
}

export const updateScore = (newScore) => {
    return {
        type: 'UPDATE_SCORE',
        newScore
    }
}