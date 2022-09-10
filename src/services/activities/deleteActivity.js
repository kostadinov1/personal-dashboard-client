
export const deleteActivity = async (activityId, token) => {
    const url = `http://127.0.0.1:8000/activity/delete-activity/${activityId}/`
    console.log(url, activityId);
    const response = await fetch(url , {
        method: 'delete',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': ' Token ' + token.slice(1, 41),
        },
    })
    const del = await response.json()
    if (response.ok) {
        return del
    } else {
        throw del
    }
}