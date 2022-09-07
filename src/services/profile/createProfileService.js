

export const createProfileService = async (token, user.user_id) => {
    const url = 'http://127.0.0.1:8000/accounts/create-profile/';
    const response = await fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': ' Token ' + token.slice(1, 41)
        },
        body: JSON.stringify(profileData)
    });
    const profileCreated = await response.json();
    
    return profileCreated;

}