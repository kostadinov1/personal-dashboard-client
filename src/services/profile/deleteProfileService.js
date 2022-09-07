

export const deleteProfileService = async (userID, token) => {
    userID = Number(userID)
    const url = `http://127.0.0.1:8000/accounts/delete-profile/${userID}/`
    console.log(url, userID);
    const response = await fetch(url , {
        method: 'delete',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': ' Token ' + token.slice(1, 41),
        },
    })
    const profileDeleted = await response.json()
    if (response.ok) {
        return profileDeleted
    } else {
        throw profileDeleted
    }
}