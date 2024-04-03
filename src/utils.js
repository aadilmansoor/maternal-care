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

export const fillMissingDatesAndSort = (data, daysInMonth) => {
  // Sort data by date in ascending order
  data.sort((a, b) => {
    const dateA = new Date(a.date.split("-").reverse().join("-"));
    const dateB = new Date(b.date.split("-").reverse().join("-"));
    return dateA - dateB;
  });

  // Use a Set for faster lookup of unique dates
  const uniqueDates = new Set(data.map((item) => item.date));

  // Get the first and last dates from the sorted data
  const firstDate = new Date(data[0].date.split("-").reverse().join("-"));

  // Fill in missing dates with placeholder values for the same month
  let currentDate = new Date(firstDate);
  const lastDayOfMonth =
    daysInMonth ||
    new Date(firstDate.getFullYear(), firstDate.getMonth() + 1, 0).getDate();

  const newData = [];
  while (currentDate.getDate() <= lastDayOfMonth) {
    const formattedDate = currentDate
      .toLocaleDateString("en-GB")
      .split("/")
      .join("-");
    if (!uniqueDates.has(formattedDate)) {
      newData.push({
        date: formattedDate,
        time_in: "--",
        time_out: "--",
        workingHours: 0,
        serviceProviderId: "",
        present: false,
        __v: 0,
      });
    }
    currentDate.setDate(currentDate.getDate() + 1);
  }

  // Concatenate the original data with the newly generated data
  const sortedData = data.concat(newData);

  // Sort the updated data by date
  sortedData.sort((a, b) => {
    const dateA = new Date(a.date.split("-").reverse().join("-"));
    const dateB = new Date(b.date.split("-").reverse().join("-"));
    return dateA - dateB;
  });

  return sortedData;
};
