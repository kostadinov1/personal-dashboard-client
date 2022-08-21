

export const getAllExercises = async () => {
    
    const url = 'http://127.0.0.1:8000/activity/list-exercises/'
    const response = await fetch(url)
    const exercises = await response.json()

    return exercises
}   