

export const logoutService = async (user) => {
    console.log('user in logout service:', user)

    const url = `http://127.0.0.1:8000/accounts/logout/${user}/`

    const response = await fetch(url, 
    //     {
    //     method: 'get',
    //     headers: { 'Authorization': 'Token ' + user}
    // }
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