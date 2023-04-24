export const changeDateFormat = (date?: Date, split?: string) => {
  date = date || new Date();
  split = split || '';
  return (
    '' +
    date.getFullYear() +
    fillZero(date.getMonth() + 1, 2) +
    fillZero(date.getDate(), 2)
  );
};

export const fillZero = (number: number, len: number) => {
  return '0'.repeat(len - number.toString().length) + number;
};

export const dbTimeToDateFormat = (date: string, split?: string) => {
  split = split || '';

  return (
    date.substring(0, 4) +
    split +
    date.substring(5, 7) +
    split +
    date.substring(8, 10)
  );
};

export const yyyymmddChangeDateFormat = (date: string, split?: string) => {
  split = split || '';

  return (
    date.substring(0, 4) +
    split +
    date.substring(4, 6) +
    split +
    date.substring(6, 8)
  );
};
