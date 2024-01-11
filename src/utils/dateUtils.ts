export const getTodayData = (): {
  date: string;
  month: string;
  year: string;
  day: string;
} => {
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
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
  const today = new Date();
  return {
    date: today.getDate().toString(),
    month: months[today.getMonth()],
    year: today.getFullYear().toString(),
    day: weekdays[today.getDay()],
  };
};
