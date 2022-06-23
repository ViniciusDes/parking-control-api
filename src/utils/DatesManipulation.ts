import { subHours, subMinutes, subSeconds } from "date-fns";
import sub from "date-fns/sub";
import getHours from "date-fns/getHours";
import getMinutes from "date-fns/getMinutes";
import getSeconds from "date-fns/getSeconds";
import getYear from "date-fns/getYear";
import getMonth from "date-fns/getMonth";
import getWeek from "date-fns/getWeek";
import getDay from "date-fns/getDate";

export function substractDate(date1: Date, date2: Date) {
  console.log("kkk");
  // console.log(
  //   getYear(date1),
  //   getMonth(date1),
  //   getWeek(date1),
  //   getDay(date1),
  //   getHours(date1),
  //   getMinutes(date1),
  //   getSeconds(date1)
  // );

  // const date = sub(date2, {
  //   years: getYear(date1),
  //   months: getMonth(date1),
  //   weeks: getWeek(date1),
  //   days: getDay(date1),
  //   hours: getHours(date1),
  //   minutes: getMinutes(date1),
  //   seconds: getSeconds(date1),
  // });
  // console.log("horas ini", getHours(date1));
  let date = subHours(date2, getHours(date1));
  // let date = subMinutes(date2, getMinutes(date1));
  // date = subSeconds(date2, getSeconds(date1));

  return date;
}
