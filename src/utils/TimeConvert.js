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

const formatDate = (publishedAt) => {
    const now = new Date();
    const published = new Date(publishedAt);
    const diff = now.getTime() - published.getTime();
    const diffSeconds = Math.round(diff / 1000);
    const diffMinutes = Math.round(diff / (1000 * 60));
    const diffHours = Math.round(diff / (1000 * 60 * 60));
    const diffDays = Math.round(diff / (1000 * 60 * 60 * 24));

    if (diffSeconds < 60) {
        return 'just now';
    } else if (diffMinutes < 60) {
        return `${diffMinutes} minute${diffMinutes > 1 ? 's' : ''} ago`;
    } else if (diffHours < 24) {
        return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    } else if (diffDays === 1) {
        return 'Yesterday';
    } else {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return published.toLocaleDateString('en-US', options);
    }
};

export { formatDate, updateDate };
