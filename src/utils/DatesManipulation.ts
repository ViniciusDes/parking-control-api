import dayjs from "dayjs";

export function substractDate(date1: string, date2: string) {
  let date;

  date1 = dayjs(date1).format(formatDateAndHour);
  date2 = dayjs(date2).format(formatDateAndHour);

  const hours = dayjs(date1).hour();
  date = dayjs(date2).subtract(hours, "hour").format(formatDateAndHour);

  console.log("substr", date);
  return date;
}

export const formatDateAndHour = "DD/MM/YYYY HH:mm:ss";
