import format from 'date-fns/format';

export function formatDate(date, formatString = 'MM/dd/yyyy') {
  return format(new Date(date), formatString);
}
