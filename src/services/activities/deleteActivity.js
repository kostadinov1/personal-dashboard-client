
export const deleteActivity = async (activityId) => {
    const url = `http://127.0.0.1:8000/activity/delete-activity/${activityId}/`
    console.log(url, activityId);
    const response = await fetch(url , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const del = await response.json()
    return del
}