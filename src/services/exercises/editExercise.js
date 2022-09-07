export const editExercise = async (userID, token, exerciseData) => {
    console.log(userID, token, exerciseData);
    const url = `http://127.0.0.1:8000/activity/edit-exercise/${userID}/`
    const response = await fetch(url, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': ' Token ' + token.slice(1, 41)        },
        body: JSON.stringify(exerciseData)
    })
    const exercise = await response.json()
    
    return exercise

}