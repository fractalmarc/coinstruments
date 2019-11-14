import { Colors } from "../theme";

const formatter = new Intl.NumberFormat("en-us", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
});

export function formatCurrency(usd: number) {
  return formatter.format(usd);
}

export function formatDailyChange(change: number) {
  // +/- num%
  const sign = change >= 0 ? "+" : "-";
  // use absolute value to remove original minus sign from string
  const rounded = Math.abs(Math.round(change * 100) / 100).toFixed(2);
  return `${sign} ${rounded}%`;
}

export function colorForChange(change: number) {
  return change >= 0 ? Colors.HodlGreen : Colors.RektRed;
}
