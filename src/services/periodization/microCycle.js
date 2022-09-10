

export const createMicroCycle = async (microCycleData) => {
    const url = 'http://127.0.0.1:8000/periodization/create-micro-cycle/'
    const response = await fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',

        },
        body: JSON.stringify(microCycleData)
    })
    const microCycle = await response.json()
    if (response.ok) {
        return microCycle
    } else {
        throw microCycle
    }
}


export const getAllMicroCycles = async () => {
    const url = 'http://127.0.0.1:8000/periodization/all-micro-cycles/'
    const response = await fetch(url)
    const microCycles = await response.json()
    if (response.ok) {
        return microCycles
    } else {
        throw microCycles
    }
}



export const editMicroCycle = async (cycleId, cycleData) => {
    const url = `http://127.0.0.1:8000/periodization/edit-micro-cycle/${cycleId}/`
    const response = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(cycleData)
    })
    const microCycle = await response.json()
    if (response.ok) {
        return microCycle
    } else {
        throw microCycle
    }
}
    
export const deleteMicroCycle = async (cycleId) => {
    const url = `http://127.0.0.1:8000/periodization/delete-micro-cycle/${cycleId}/`
    const response = await fetch(url, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
    })    
    const microCycle = await response.json()
    if (response.ok) {
        return microCycle
    } else {
        throw microCycle
    }
}