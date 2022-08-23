
export const loginService = async (email, password) => {

    const url = 'http://127.0.0.1:8000/accounts/login/'
    const response = await fetch(url,{
        method: 'post',
        headers: { 'Content-Type': 'application/json' ,
    },
        body: JSON.stringify({username: email, password})
        })
    const log = await response.json();  

    if (response.ok) {        
        return log;
    } else {
        throw log;
    }
}