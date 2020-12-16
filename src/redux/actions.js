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

export const resetPage = () => {
    return {
        type: 'RESET_PAGE'
    }
}

export const updateScore = (newScore) => {
    console.log(newScore)
    return {
        type: 'UPDATE_SCORE',
        newScore
    }
}

export const resetScore = () => {
    return {
        type: 'RESET_SCORE'
    }
}