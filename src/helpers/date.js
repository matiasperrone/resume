export const formatDateYYYYMMToMMMYYYY = (dateString) => {
  // Parse the YYYY-MM string into a Date object
  const [year, month] = dateString.split('-');
  const date = new Date(parseInt(year), parseInt(month) - 1); // month is 0-indexed

  // Format to MMM YYYY
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short'
  });
}

// Example usage:
// formatDateYYYYMMToMMMYYYY('2023-03') // returns "Mar 2023"
// formatDateYYYYMMToMMMYYYY('2022-12') // returns "Dec 2022"
