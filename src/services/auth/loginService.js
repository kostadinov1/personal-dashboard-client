

export const loginService = async (email, password) => {
    const data = {username:email, password}
    console.log(data,typeof(email), '-email,', typeof(password), '-password')
    const url = 'http://127.0.0.1:8000/accounts/login/'
    const response = await fetch(url,{
        method: 'post',
        headers: { 'Content-Type': 'application/json' ,
    },
        body: JSON.stringify({username: email, password})
        })
    const log = await response.json();   
    
    if (response.ok) {
        console.log(email, password, 'response ok', response)
        
        return log;
        
    } else {
        console.log(email, password, 'response error', response)
        throw log;

    }
}