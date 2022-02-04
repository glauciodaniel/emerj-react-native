import axios from "axios";
//axios para requisição HTTP.

//# No caso de API sendo acessada na mesma máquina.
//Emulador Android Studio
// http://10.0.2.2:3000

//Emulador para iOS
//http://localhost:3000

const api = axios.create({
  baseURL: "http://20.120.7.70/",
});

export default api;
