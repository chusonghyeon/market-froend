export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://grab-market-server.herokuapp.com"
    : "http://15.164.49.39:8088";
