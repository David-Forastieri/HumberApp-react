import axios from 'axios';

const URL_API = '/api/v1/civ_win_rates/';

export const GetApi = async () => {
  try {
    const response = await axios.get(URL_API, {
      headers: {
        Accept: 'application/json',  // Asegúrate de que el servidor reciba que esperas JSON
        "Content-Type": 'application.json'
      },
    });
    console.log('Datos de la API:', response.data);
  } catch (error) {
    console.log('Error al obtener datos:', error);
  }
};
