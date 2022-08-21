

export const logoutService = async () => {
    const url = 'http://127.0.0.1:8000/accounts/logout/'
    const response = await fetch(url)
    const logout = await response.json()
    return logout
}