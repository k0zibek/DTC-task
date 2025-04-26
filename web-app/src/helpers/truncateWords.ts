export const truncateWords = (text: string, wordLimit: number) => {
  if (!text) {
    return '';
  }

  const words = text.trim().split(/\s+/);

  if (words.length <= wordLimit) {
    return text;
  }

  return `${words.slice(0, wordLimit).join(' ')}...`;
};
