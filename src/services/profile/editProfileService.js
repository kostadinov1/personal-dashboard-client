
export const editProfileService = async (profileID, profileNewData) => {
    const url = `http://127.0.0.1:8000/accounts/edit-profile/${profileID}/`;
    const response = await fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            // token: 'token HERE'
        },
        body: JSON.stringify(profileNewData)
    });
    const profileEdited = await response.json();
    
    return profileEdited;

}