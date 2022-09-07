

export const logoutService = async (userID, token) => {
    console.log('user in logout service:', userID, token)

    const url = `http://127.0.0.1:8000/accounts/logout/`

    const response = await fetch(url, 
        {
        method: 'get',
        headers: { 'Authorization': 'Token ' + token.slice(1,41)}
    }
    )
    const logout = await response.json()

    if (response.ok) {
        console.log(logout, 'logout success in logoutService.js')
        return logout
    } else {
        console.log(logout, 'logout error in logoutService.js')
        throw logout
    }
}