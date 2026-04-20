const EN_GREGORIAN_LOCALE = 'en-GB-u-ca-gregory';

const dateFormatter = new Intl.DateTimeFormat(EN_GREGORIAN_LOCALE, {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
});

const dateTimeFormatter = new Intl.DateTimeFormat(EN_GREGORIAN_LOCALE, {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
});

function toDate(value: Date | string | number): Date {
  return value instanceof Date ? value : new Date(value);
}

export function formatDateEn(value: Date | string | number): string {
  return dateFormatter.format(toDate(value));
}

export function formatDateTimeEn(value: Date | string | number): string {
  return dateTimeFormatter.format(toDate(value));
}
