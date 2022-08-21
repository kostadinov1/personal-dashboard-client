

export const createExercise = async (exerciseData) => {
    const url = 'http://127.0.0.1:8000/activity/create-exercise/'
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // token: token
        },
        body: JSON.stringify(exerciseData)
    })
    const exercise = await response.json()
    
    return exercise

}