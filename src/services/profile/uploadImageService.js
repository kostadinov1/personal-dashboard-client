export const uploadImageService = async (imageData) => {


    console.log('in request', imageData)
    const url = `http://127.0.0.1:8000/accounts/upload-profile-image/`;

    const response = await fetch(url, {
        method: 'put',
        headers: {
            'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundaryqTqJIxvkWFYqvP5s',
            // 'Content-Disposition': 'attachment; filename=upload.jpg'
            // token: 'token HERE'
        },
        body: imageData
    });
    const profileEdited = await response.json();
    
    if (profileEdited.ok) {
        return profileEdited
    } else {
        throw profileEdited
    }
    
}


// BLOB EXAMPLE

// fetch('https://upload.wikimedia.org/wikipedia/commons/7/77/Delete_key1.jpg')
//   .then(res => res.blob()) // Gets the response and returns it as a blob
//   .then(blob => {
//     // Here's where you get access to the blob
//     // And you can use it for whatever you want
//     // Like calling ref().put(blob)

//     // Here, I use it to make an image appear on the page
//     let objectURL = URL.createObjectURL(blob);
//     let myImage = new Image();
//     myImage.src = objectURL;
//     document.getElementById('myImg').appendChild(myImage)
// });