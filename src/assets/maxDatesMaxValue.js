const getMaxCasesDateWise = (data) => {
    // Extract year from the date and initialize arrays
    const maxDates = [];
    const maxValues = [];
    let currentYear = '';
    let currentMonth = '';
    let currentMaxDate = '';
    let currentMaxValue = -1;

    // Iterate through the data
    for (const dateStr in data) {
        const dateParts = dateStr.split('/');
        const year = dateParts[2];
        const month = dateParts[0];

        // Check if it's a new year
        if (year !== currentYear) {
            // Add the previous month's max data to arrays
            if (currentMaxDate && currentMaxValue !== -1) {
                maxDates.push(currentMaxDate);
                maxValues.push(currentMaxValue);
            }

            // Reset for the new year
            currentYear = year;
            currentMaxDate = dateStr;
            currentMaxValue = data[dateStr];
        } else if (month !== currentMonth) {
            // Check if it's a new month
            // Add the previous month's max data to arrays
            if (currentMaxDate && currentMaxValue !== -1) {
                maxDates.push(currentMaxDate);
                maxValues.push(currentMaxValue);
            }

            // Reset for the new month
            currentMonth = month;
            currentMaxDate = dateStr;
            currentMaxValue = data[dateStr];
        } else {
            // Update max value for the current month
            if (data[dateStr] > currentMaxValue) {
                currentMaxDate = dateStr;
                currentMaxValue = data[dateStr];
            }
        }
    }

    // Add the last month's max data to arrays
    if (currentMaxDate && currentMaxValue !== -1) {
        maxDates.push(currentMaxDate);
        maxValues.push(currentMaxValue);
    }
    return { maxDates, maxValues };
}

export default getMaxCasesDateWise;