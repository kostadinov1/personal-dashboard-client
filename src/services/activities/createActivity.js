

export const createActivity = async (activityData) => {
    const url = 'http://127.0.0.1:8000/activity/create-activity/';
    const response = await fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            // token: 'token HERE'
        },
        body: JSON.stringify(activityData)
    });
    const exercise = await response.json();
    
    return exercise;

}