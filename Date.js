
const currentDate = new Date();

function getDayAbbrev(date) {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[date.getDay()];
}

function getMonthAbbrev(date) {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    return months[date.getMonth()];
}

function getTime(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let period = hours >= 12 ? "PM" : "AM";

    if (hours === 0) {
        hours = 12;
    } else if (hours > 12) {
        hours -= 12;
    } else if (hours === 12) {
        period = "PM";
    }
    minutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${hours}:${minutes} ${period}`;
}
function getUTCTime(date) {
    let hours = date.getUTCHours();
    let minutes = date.getUTCMinutes();
    let period = hours >= 12 ? "PM" : "AM";

    if (hours === 0) {
        hours = 12;
    } else if (hours > 12) {
        hours -= 12;
    } else if (hours === 12) {
        period = "PM";
    }
    minutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${hours}:${minutes} ${period}`;
}


console.log(`Full Date: ${currentDate}`);
console.log(`Day: ${getDayAbbrev(currentDate)}`);
console.log(`Month: ${getMonthAbbrev(currentDate)}`);
console.log(`Date: ${currentDate.getDate()}`); // Built-In
console.log(`Local Year: ${currentDate.getFullYear()}`);
console.log(`UTC Year: ${currentDate.getUTCFullYear()}`);
console.log(`Local Time: ${getTime(currentDate)}`);
console.log(`UTC Time: ${getUTCTime(currentDate)}`);
console.log(`Time Zone: ${Intl.DateTimeFormat().resolvedOptions().timeZone}`);