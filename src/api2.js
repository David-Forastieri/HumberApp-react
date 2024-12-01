//const URL_API = 'https://www.aoepulse.com/api/v1/civ_win_rates/'

export const conexionAPi = async () => {
    try {
        const response = await fetch('/api/v1/civ_win_rates/?'); // Usa '/api' como prefijo
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        //const data = await response.json();
        console.log('Datos recibidos:', response);
    } catch (error) {
        console.error('Error al conectar con la API:', error);
    }
}