export const formatWithCommaSeparatedDates = (dateTime: string) => {
  const newDate = new Date(dateTime);
  const year = newDate.getFullYear();
  const month = (newDate.getMonth() + 1).toString().padStart(2, '0');
  const date = newDate.getDate().toString().padStart(2, '0');

  return `${year}.${month}.${date}`;
};
