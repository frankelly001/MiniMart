const formatNumberToCurrency = ({
  amount,
  locale = 'en-US',
  symbol = '',
}: {
  amount?: number;
  locale?: string | string[] | undefined;
  symbol?: string | null;
}): string => {
  const fixed = 2;
  const options = {
    minimumFractionDigits: fixed,
    maximumFractionDigits: fixed,
  };
  return typeof amount === 'number'
    ? symbol + new Intl.NumberFormat(locale, options).format(amount)
    : '';
};

export default formatNumberToCurrency;
