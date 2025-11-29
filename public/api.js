export default async function getClima(opts = {}) {
  const cameras = {
    cam1: { lat: 41.607661, lon: 0.62418 }, // Lleida/España
    cam2: { lat: 12.368187, lon: -1.527094 }, // Ouagadougou/Burkina Faso
    cam3: { lat: 3.152659, lon: 101.702221 }, // Kuala Lumpur/Malasia
    cam4: { lat: -53.785441, lon: -67.916667 }, // Rio Grande/Argentina
    cam5: { lat: -43.5276, lon: 172.637 }, // Christchurch/Nueva Zelanda
  };
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${cameras[opts.camera].lat}&longitude=${cameras[opts.camera].lon}&current=temperature_2m,is_day,weather_code`;

  const res = await fetch(url);
  const data = await res.json();
  const weatherNames = {
  0: "Despejado",
  1: "Mayormente despejado",
  2: "Parcialmente nublado",
  3: "Nublado",
  45: "Niebla",
  48: "Niebla con escarcha",
  51: "Llovizna ligera",
  53: "Llovizna moderada",
  55: "Llovizna intensa",
  61: "Lluvia ligera",
  63: "Lluvia moderada",
  65: "Lluvia fuerte",
  80: "Chubascos ligeros",
  81: "Chubascos moderados",
  82: "Chubascos violentos"
};


  return {
    temperatura: data.current.temperature_2m + "°C",
    condicion: weatherNames[data.current.weather_code] || "Desconocido",
    isDay: data.current.is_day === 1 ? "Día" : "Noche"
  };
}