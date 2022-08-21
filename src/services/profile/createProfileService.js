

export const createProfileService = async (profileData) => {
    const url = 'http://127.0.0.1:8000/accounts/create-profile/';
    const response = await fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            // token: 'token HERE'
        },
        body: JSON.stringify(profileData)
    });
    const profileCreated = await response.json();
    
    return profileCreated;

}