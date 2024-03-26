export const formatDate = (inputDate) => {
  const parts = inputDate.split("-");
  const formattedDate = parts[2] + "-" + parts[1] + "-" + parts[0];
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
