import { prettyFormat } from "@testing-library/react";


export const deleteProfileService = async (profileId) => {
    profileId = Number(profileId)
    const url = `http://127.0.0.1:8000/accounts/delete-profile/${profileId}/`
    console.log(url, profileId);
    const response = await fetch(url , {
        method: 'delete',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const profileDeleted = await response.json()
    if (response.ok) {
        return profileDeleted
    } else {
        throw profileDeleted
    }
}