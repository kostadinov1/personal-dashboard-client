
export const showProfileService = async (profileId) => {
    const url = `http://127.0.0.1:8000/accounts/show-profile/${profileId}/`;
    const response = await fetch(url);
    const profile = await response.json();
    
    if (response.ok) {
        return profile;
    } else {
        throw profile;
    }

}