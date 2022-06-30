import dayjs from "dayjs";

export const formatDateAndHour = "YYYY-MM-DD HH:mm:ss";

export function substractTime(dateTime1: string, dateTime2: string): number {
  const totalMinutes = dayjs(dateTime2).diff(dayjs(dateTime1), "minutes");

  return totalMinutes / 60;
}

export function tranformMinutesForHours(fullMinutes: number) {
  const fullHours = String(fullMinutes / 60);
  const hours = parseInt(fullHours);
  const minutes = (Number(fullHours) - hours) * 60;
  return `${hours}:${minutes}`;
}
