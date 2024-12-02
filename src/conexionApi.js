const URL_API = '/api/v1/civ_win_rates/'

export const conexionAPi = async () => {
    try {
        const response = await fetch( URL_API, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        })
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`)
        }
        const data = await response.json()
        return data.civs_list
    } catch (error) {
        console.error('Error al conectar con la API:', error)
        return []
    }
}
