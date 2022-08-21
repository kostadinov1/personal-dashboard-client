export const createMesoCycle = async (mesoCycleData) => {
    const url = 'http://127.0.0.1:8000/periodization/create-meso-cycle/'
    const response = await fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',

        },
        body: JSON.stringify(mesoCycleData)
    })
    const mesoCycle = await response.json()
    return mesoCycle
}


export const getAllMesoCycles = async () => {
    const url = 'http://127.0.0.1:8000/periodization/all-meso-cycles/'
    const response = await fetch(url)
    const mesoCycles = await response.json()
    return mesoCycles
}



export const editMesoCycle = async (cycleId, cycleData) => {
    const url = `http://127.0.0.1:8000/periodization/edit-meso-cycle/${cycleId}/`
    const res = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(cycleData)
    })
    const response = await res.json()
    return response
    
}
    
export const deleteMesoCycle = async (cycleId) => {
    const url = `http://127.0.0.1:8000/periodization/delete-meso-cycle/${cycleId}/`
    const res = await fetch(url, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
    })    
    const response = await res.json()
    return response
}