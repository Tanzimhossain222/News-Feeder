const updateDate = (currentDateTime) => {
    const now = new Date();
    const currentDay = now.getDate();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();
    const lastUpdatedDay = currentDateTime.getDate();

    // Update only if the day has changed
    if (currentDay !== lastUpdatedDay) {
        return new Date(currentYear, currentMonth, currentDay);
    }

    return currentDateTime;
};

export default updateDate;