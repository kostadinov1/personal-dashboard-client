


export const getAllActivities = async () => {
    const url = 'http://127.0.0.1:8000/activity/list-activities/';
    const response = await fetch(url);
    const activities = await response.json();

    return activities;
}