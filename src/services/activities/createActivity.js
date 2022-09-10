

export const createActivity = async (userID, token, activityData) => {
    const url = 'http://127.0.0.1:8000/activity/create-activity/';
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': ' Token ' + token.slice(1, 41)        },
        body: JSON.stringify(activityData)
    })
    const activity = await response.json();
    if (response.ok) {
        return activity;
    } else {
        throw activity;
    }

}