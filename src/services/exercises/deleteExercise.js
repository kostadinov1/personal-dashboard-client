

export const deleteExercise = async (exerciseId) => {
    const url = `http://127.0.0.1:8000/activity/delete-exercise/${exerciseId}/`
    const response = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const del = await response.json()
    return del
}