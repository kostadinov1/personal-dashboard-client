

export const loginService = async (email, password) => {
    
    const url = 'http://127.0.0.1:8000/accounts/login/'
    const response = await fetch(url,{
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({username: email, password})

        })

    const log = await response.json();   
    console.log(email, password)
    if (response.ok) {
        return log;
        
    } else {
        console.log(response)
        throw log.non_field_errors;

    }
}