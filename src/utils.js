export const formatDate = (inputDate) => {
  const parts = inputDate.split("-");
  const formattedDate = parts[2] + "-" + parts[1] + "-" + parts[0];
  return formattedDate;
};

export const formatDateForBooking = (inputDate) => {
  // Split the input date string by "-"
  var parts = inputDate.split("-");

  // Rearrange the parts to the desired format
  var formattedDate = parts[2] + "/" + parts[1] + "/" + parts[0];

  return formattedDate;
};

export const validateTimeInAndOut = (timeIn, timeOut) => {
  // Split time strings into hours and minutes
  const timeInParts = timeIn.split(":");
  const timeOutParts = timeOut.split(":");

  // Convert hours and minutes to numbers
  const hoursIn = parseInt(timeInParts[0]);
  const minutesIn = parseInt(timeInParts[1]);
  const hoursOut = parseInt(timeOutParts[0]);
  const minutesOut = parseInt(timeOutParts[1]);

  // Check if time in is earlier than time out
  if (hoursIn < hoursOut || (hoursIn === hoursOut && minutesIn < minutesOut)) {
    return true;
  } else {
    return false;
  }
};

export const calculateDecimalHours = (timeIn, timeOut) => {
  if (timeIn === "00:00" && timeOut === "00:00") {
    return 24;
  }
  // Split time strings into hours and minutes
  const timeInParts = timeIn.split(":");
  const timeOutParts = timeOut.split(":");

  // Convert hours and minutes to numbers
  const hoursIn = parseInt(timeInParts[0]);
  const minutesIn = parseInt(timeInParts[1]);
  const hoursOut = parseInt(timeOutParts[0]);
  const minutesOut = parseInt(timeOutParts[1]);

  // Convert both times into minutes
  const totalMinutesIn = hoursIn * 60 + minutesIn;
  const totalMinutesOut = hoursOut * 60 + minutesOut;

  // Calculate the difference in minutes
  const differenceInMinutes = totalMinutesOut - totalMinutesIn;

  // Convert the difference into decimal hours, rounded to four decimal places
  const decimalHours = parseFloat((differenceInMinutes / 60).toFixed(2));

  return decimalHours;
};

export const daysBetweenDates = (date1, date2) => {
  // Parse the input dates
  var parts1 = date1.split("-");
  var parts2 = date2.split("-");
  var startDate = new Date(parts1[2], parts1[1] - 1, parts1[0]); // Month is zero-based
  var endDate = new Date(parts2[2], parts2[1] - 1, parts2[0]); // Month is zero-based

  // Calculate the difference in milliseconds
  var differenceMs = Math.abs(endDate - startDate);

  // Convert milliseconds to days and include the start and end dates
  var daysDifference = Math.ceil(differenceMs / (1000 * 60 * 60 * 24)) + 1;

  return daysDifference;
};
