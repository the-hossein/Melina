import axios from "axios";

const callApi = async (url, header, body, method) => {
  axios.defaults.baseURL = "https://melinaapi.karmaagy.com/";
  let headerApi;
  if (header === false) {
    headerApi = { "Content-Type": "application/json" };
  } else {
    const ls = JSON.parse(localStorage.getItem("userToken")).token;
    headerApi = {
      "Authorization": `Bearer ${ls}`,
      "Content-Type": "application/json"
    };
  }
  let config;
  if (body === "{}") {
    config = {
      method: method,
      url: url,
      headers: headerApi
    };
  } else {
    config = {
      method: method,
      url: url,
      headers: headerApi,
      data: body
    };
  }

  try {
    const { data } = await axios(config);
    return { data: data.data, status: data.code };
  } catch (error) {
    return { status: error.response.status };
  }
};

export default callApi;
