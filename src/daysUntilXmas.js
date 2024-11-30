export function calculateDaysUntilXmas() {
  // Get the current date and time (in local time zone)
  const now = new Date();

  // Create a Date object for 0:00 UTC today
  const todayUtc = new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 0, 0, 0)
  );

  // Set Christmas for this year (UTC)
  const xmas = new Date(Date.UTC(now.getUTCFullYear(), 11, 25)); // December 25th, current year

  // If Christmas has already passed this year, use next year's Christmas date (UTC)
  if (todayUtc > xmas) {
    xmas.setUTCFullYear(now.getUTCFullYear() + 1); // Move to next year
  }

  // Calculate the difference in milliseconds between Christmas and 0:00 UTC today
  const difference = xmas - todayUtc;

  // Convert the difference from milliseconds to days
  const daysUntilXmas = Math.ceil(difference / (1000 * 60 * 60 * 24));

  // If it's Christmas day, return 0 instead of 1
  if (
    daysUntilXmas === 1 &&
    now.getUTCMonth() === 11 &&
    now.getUTCDate() === 25
  ) {
    return 0;
  }

  return daysUntilXmas;
}
