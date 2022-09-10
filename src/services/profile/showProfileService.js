
export const showProfileService = async (userID, token) => {
    const url = `http://127.0.0.1:8000/accounts/show-profile/${userID}/`;
    const response = await fetch(url, {
        method: 'get',
        headers: {'Content-Type': 'application/json','Authorization': ' Token ' + token.slice(1, 41)}
    });
    const profile = await response.json();
    
    if (response.ok) {
        return profile;
    } else {
        console.log(profile)
        throw profile;
    }

}