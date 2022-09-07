

export const uploadImageService = async (url, fileObj, token) => {
    // const url = `http://127.0.0.1:8000/accounts/upload-profile-image/${userID}/`;

    const response = await fetch(url, {
        method: 'put',
        headers: {'content-type': 'multipart/form-data; boundary=----WebKitFormBoundaryqTqJIxvkWFYqvP5s',
        'Content-Disposition': `attachment; filename=${fileObj.name}`,
        'Authorization': ' Token ' + token.slice(1, 41)},
        body: fileObj
    });
    const profileEdited = await response.json();
    
    if (profileEdited.ok) {
        return profileEdited
    } else {
        throw profileEdited
    }   
}