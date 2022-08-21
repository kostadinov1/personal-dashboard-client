export const deleteProfileService = async (profileId) => {
    const url = `http://127.0.0.1:8000/accounts/delete-profile/${profileId}/`
    console.log(url, profileId);
    const response = await fetch(url , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const profileDeleted = await response.json()
    return profileDeleted;
}