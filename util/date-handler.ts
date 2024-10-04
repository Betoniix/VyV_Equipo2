import { DateObjectUnits, DateTime, DurationLike } from "luxon";

function Today() {
  return DateTime.now().toUTC().setZone("America/Mexico_City").toJSDate();
}

function SetTime(date: Date, time: DateObjectUnits) {
  return DateTime.fromJSDate(date).toUTC().set(time).toJSDate();
}

function TimeDiff(date1: Date, date2: Date) {
  const dateTime1 = DateTime.fromJSDate(date1);
  const dateTime2 = DateTime.fromJSDate(date2);

  return dateTime1
    .diff(dateTime2, ["hours", "minutes", "seconds"])
    .as("milliseconds");
}

function AddTime(date: Date, duration: DurationLike) {
  return DateTime.fromJSDate(date).toUTC().plus(duration).toJSDate();
}

export const DateHandler = { Today, SetTime, TimeDiff, AddTime };
