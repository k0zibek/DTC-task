export const formatDateTime = (dateString: string, locale = 'ru-RU'): string => {
  const date = new Date(dateString);

  return date.toLocaleString(locale, {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};
