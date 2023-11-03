export const getFormattedDay = () => {
  const timeZone = "Asia/Jakarta";
  const options = { timeZone, weekday: "long" };
  const hariIni = new Date().toLocaleDateString("id-ID", options);
  return hariIni;
};
