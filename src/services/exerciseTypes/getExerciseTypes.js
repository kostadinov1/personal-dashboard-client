
export const getExerciseTypes = async () => {
    
    const url = 'http://127.0.0.1:8000/activity/list-exercise-types/'
    const response = await fetch(url)
    const exerciseTypes = await response.json()

    if (response.ok) {
        return exerciseTypes
    } else {
        throw exerciseTypes
    }
}   