

export const deleteProfileService = async (profileId) => {
    profileId = Number(profileId)
    const url = `http://127.0.0.1:8000/accounts/delete-profile/${profileId}/`
    console.log(url, profileId);
    const response = await fetch(url , {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    console.log(response)


    const profileDeleted = await response.json()
    return profileDeleted;
}