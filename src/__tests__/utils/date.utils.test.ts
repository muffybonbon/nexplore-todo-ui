import { getDateInfo } from '../../utils/date.utils';

describe('getDateInfo', () => {
  beforeAll(() => {
    jest.useFakeTimers().setSystemTime(new Date('2020-01-01 00:00:00'));
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should parse and format a date correctly from a Date object', () => {
    const input = new Date();
    const expectedOutput = {
      date: '1',
      month: 'January',
      year: '2020',
    };

    expect(getDateInfo(input)).toEqual(expectedOutput);
  });

  it('should parse and format a date correctly from a date string', () => {
    const input = '2020-01-01 00:00:00';
    const expectedOutput = {
      date: '1',
      month: 'January',
      year: '2020',
    };

    expect(getDateInfo(input)).toEqual(expectedOutput);
  });

  it('should handle invalid date strings gracefully', () => {
    const input = 'invalid-date-string';
    const expectedOutput = {
      date: 'NaN',
      month: undefined,
      year: 'NaN',
    };

    expect(getDateInfo(input)).toEqual(expectedOutput);
  });

  it('should correctly handle a leap year', () => {
    jest.resetAllMocks();
    const input = new Date('2024-02-29');
    const expectedOutput = {
      date: '29',
      month: 'February',
      year: '2024',
    };

    expect(getDateInfo(input)).toEqual(expectedOutput);
  });

  it('should handle non-leap year February correctly', () => {
    jest.resetAllMocks();
    const input = new Date('2023-02-28');
    const expectedOutput = {
      date: '28',
      month: 'February',
      year: '2023',
    };

    expect(getDateInfo(input)).toEqual(expectedOutput);
  });

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

  months.forEach((month, index) => {
    it(`should correctly handle the month of ${month}`, () => {
      jest.resetAllMocks();
      const input = new Date(`2020-${index + 1}-01`);
      const expectedOutput = {
        date: '1',
        month: month,
        year: '2020',
      };

      expect(getDateInfo(input)).toEqual(expectedOutput);
    });
  });
});
