

export const createMacroCycle = async (macroCycleData) => {
    const url = 'http://127.0.0.1:8000/periodization/create-macro-cycle/'
    const response = await fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',

        },
        body: JSON.stringify(macroCycleData)
    })
    const macroCycle = await response.json()
    return macroCycle
}


export const getAllMacroCycles = async () => {
    const url = 'http://127.0.0.1:8000/periodization/all-macro-cycles/'
    const response = await fetch(url)
    const macroCycles = await response.json()
    return macroCycles
}



export const editMacroCycle = async (cycleId, cycleData) => {
    const url = `http://127.0.0.1:8000/periodization/edit-macro-cycle/${cycleId}/`
    const res = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(cycleData)
    })
    const response = await res.json()
    return response
    
}
    
export const deleteMacroCycle = async (cycleId) => {
    const url = `http://127.0.0.1:8000/periodization/delete-macro-cycle/${cycleId}/`
    const res = await fetch(url, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
    })    
    const response = await res.json()
    return response
}