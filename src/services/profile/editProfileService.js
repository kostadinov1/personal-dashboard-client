
export const editProfileService = async (userID, token, dataObj) => {
    const url = `http://127.0.0.1:8000/accounts/edit-profile/${userID}/`;
    const configs = {
        method: 'put',
        headers: {
            'Content-Type': 'application/json; multipart/form-data; boundary=----WebKitFormBoundaryqTqJIxvkWFYqvP5s',
            'Authorization': ' Token ' + token.slice(1, 41)      
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