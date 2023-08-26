import { hours } from "@/data";

export function calculateTotal(cookieStands) {
  let totalAll = 0;
  const hourlyTotals = calculateHourlyTotals(cookieStands, totalAll);
  return { hourlyTotals, totalAll };
}

function calculateHourlyTotals(cookieStands, totalAll) {
  return hours.map((_, i) => {
    const hourlyTotal = calculateHourlyTotal(cookieStands, i, totalAll);
    totalAll += hourlyTotal;
    return hourlyTotal;
  });
}

function calculateHourlyTotal(cookieStands, hourIndex, totalAll) {
  return cookieStands
    .filter((stand) => stand.hourly_sales)
    .reduce((prev, curr) => prev + (curr.hourly_sales[hourIndex] || 0), 0);
}
