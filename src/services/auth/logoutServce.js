

export const logoutService = async (userId) => {
    const url = `http://127.0.0.1:8000/accounts/logout/2/`
    const response = await fetch(url)
    const logout = await response.json()
    console.log(logout, 'logout in logoutService.js')
    if (response.ok) {
        return logout
    } else {
        throw logout
    }
}