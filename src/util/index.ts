export function formatDailyChange(change: number) {
  // +/- num%
  // return    `${sign} ${num}%`;
  return change.toString();
}

const formatter = new Intl.NumberFormat("en-us", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
});

export function formatCurrency(curr: number) {
  return formatter.format(curr);
}
