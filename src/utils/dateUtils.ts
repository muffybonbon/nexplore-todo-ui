export const getDateInfo = (
  date: Date | string
): {
  date: string;
  month: string;
  year: string;
} => {
  const parsedDate = new Date(date);

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return {
    date: parsedDate.getDate().toString(),
    month: months[parsedDate.getMonth()],
    year: parsedDate.getFullYear().toString(),
  };
};
