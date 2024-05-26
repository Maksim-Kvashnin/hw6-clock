export default function getClockOptions(timeZoneValue: number) {
  const date = new Date();
  return {
    hours: ((date.getHours() + timeZoneValue) % 12) * 30,
    minutes: date.getMinutes() * 6,
    seconds: date.getSeconds() * 6,
  };
}
