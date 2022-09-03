
export const editProfileService = async (profileID, dataObj) => {
    console.log('profileData in edit service', dataObj)
    const url = `http://127.0.0.1:8000/accounts/edit-profile/${profileID}/`;
    const configs = {
        method: 'put',
        headers: {
            'Content-Type': 'application/json; multipart/form-data; boundary=----WebKitFormBoundaryqTqJIxvkWFYqvP5s'
            // token: 'token HERE'
        },
        body: JSON.stringify(dataObj)
    }
    
    const response = await fetch(url, configs );
    const profileEdited = await response.json();
    
    if (response.ok) {
        return profileEdited
    } else {
        throw profileEdited
    }

}