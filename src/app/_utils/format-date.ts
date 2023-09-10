const getYearValue = (dateTime: Date) => dateTime.getFullYear();
const getMonthValue = (dateTime: Date) => dateTime.getMonth() + 1;
const getDateValue = (dateTime: Date) => dateTime.getDate();
const getHoursValue = (dateTime: Date) => dateTime.getHours();
const getMinutesValue = (dateTime: Date) => dateTime.getMinutes();

export const formatWithCommaSeparatedDates = (dateTime: string) => {
  const newDate = new Date(dateTime);
  const year = getYearValue(newDate);
  const month = getMonthValue(newDate).toString().padStart(2, '0');
  const date = getDateValue(newDate).toString().padStart(2, '0');

  return `${year}.${month}.${date}`;
};

export const formatDateTimeInKanjiSeparator = (dateTime: string) => {
  const newDate = new Date(dateTime);
  const year = getYearValue(newDate);
  const month = getMonthValue(newDate);
  const date = getDateValue(newDate);
  const hours = getHoursValue(newDate);
  const minutes = getMinutesValue(newDate).toString().padStart(2, '0');

  return `${year}年${month}月${date}日 ${hours}:${minutes}`;
};
