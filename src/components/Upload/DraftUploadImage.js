import { Button, Form, Row } from "antd";
import React, { useState } from "react";
import { editProfileService } from "../../services/profile/editProfileService";
const userID = localStorage.getItem('userID')


const CreateMyModel = () => {

    const [imageData, setImageData] = useState({
        image_local: "",
    });
    const [errors, setErrors] = useState({
        image_local: "",
    });


    const handleChange = ({ input }) => {
        let newData = { ...imageData };
        newData[input.name] = input.value;
        setImageData(newData);
    };

    const handleImageChange = (e) => {
        let newData = { ...imageData };
        newData["image_url"] = e.target.files[0];
        setImageData(newData);
    };

    const doSubmit = async (e) => {
        e.preventDefault();
        editProfileService(userID)
        .then((res) => {
            console.log('res in Success ', res);
        })
        .catch((res) => {
            console.log('res in Error ', res);
        })
    };

    return (

        <Form>
            <Row>
                <Form.Group className="mb-3" controlId="titleInput">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        name="title"
                        value={imageData.title}
                        isInvalid={errors.title}
                        onChange={(e) => {
                            handleChange(e);
                        }}
                        maxLength={80}
                    />
                    {errors.title && (
                        <Form.Text className="alert-danger" tooltip>
                            {errors.title}
                        </Form.Text>
                    )}
                </Form.Group>
            </Row>
            <Row>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>My Image</Form.Label>
                    <Form.Control
                        type="file"
                        name="image_local"
                        accept="image/jpeg,image/png,image/gif"
                        onChange={(e) => {
                            handleImageChange(e);
                        }}
                    />
                    {errors.image_url && (
                        <Form.Text className="alert-danger" tooltip>
                            {errors.image_url}
                        </Form.Text>
                    )}
                </Form.Group>
            </Row>

            <Button>
                variant="primary"
                type="submit"
                onClick={(e) => doSubmit(e)}
            </Button>
        </Form>
    );
};

export default CreateMyModel;
