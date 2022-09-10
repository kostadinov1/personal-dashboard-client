export const getActivityTypes = async () => {
    
    const url = 'http://127.0.0.1:8000/activity/list-activity-types/'
    const response = await fetch(url)
    const activityTypes = await response.json()

    if (response.ok) {
        return activityTypes
    } else {
        throw activityTypes
    }
}   