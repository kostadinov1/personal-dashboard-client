
import React from 'react'
import { uploadImageService } from '../../services/profile/uploadImageService';
const userID = localStorage.getItem('userID')

function CustomImageForm() {

    const submitHandler = (e) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const image = formData.get('imageLocal')
        // formData.append("filename", image.value)

        let reader = new FileReader();
            reader.onload = function(event) {
                let dataUri = event.target.result,
                    img = document.createElement("img");

                img.src = dataUri;
                document.body.appendChild(img);
            };

            reader.onerror = function(event) {
                console.error("File could not be read! Code " + event.target.error.code);
            };

            const result = reader.readAsDataURL(image);


        console.log('image name', typeof(image));    
        uploadImageService(formData)
        .then((res) => {
            console.log('res success curstom form', res);
        })
        .catch((res) => {
            console.log('res error curstom form', res);
        })
    }
    


  return (
    <form onSubmit={submitHandler} method='put' encType='multipart/form-data'>
        <input name='imageLocal' type={'file'}></input>
        <button type={'submit'}>Upload Image</button>
    </form>
  )
}

export default CustomImageForm
