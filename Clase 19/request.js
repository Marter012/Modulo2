//Guradar la api key

const key = `5a6127ad101befd5e973448d62a347bc`;

const requestCity = async(city) => {
    const baseUrl = `https://api.openweathermap.org/data/2.5/weather`;

    const query = `?q=${city}&appid=${key}`;

    const response = await fetch(`${baseUrl}${query}`);

    const data = await response.json();    

    return data
};