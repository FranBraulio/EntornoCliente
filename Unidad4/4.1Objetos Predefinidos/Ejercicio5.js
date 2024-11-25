function getCurrentTime(timeZone) {
    const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    return new Intl.DateTimeFormat('en-US', { ...options, timeZone }).format(now);
}

const timeZones = {
    Madrid: 'Europe/Madrid',
    Ottawa: 'America/Toronto',
    Canberra: 'Australia/Sydney', // La zona horaria de Canberra está cubierta por Sydney
    Londres: 'Europe/London'
};

for (const [city, timeZone] of Object.entries(timeZones)) {
    console.log(`${city}: ${getCurrentTime(timeZone)}`);
}
