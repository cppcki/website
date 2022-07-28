function parseDate(start, end) {
  const startDate = new Date(start);
  const endDate = new Date(end);

  const startingDay = startDate.toLocaleDateString("en-US", { dateStyle: "full" });
  const startingTime = startDate.toLocaleTimeString("en-US", { hour: '2-digit', minute:'2-digit'});
  const endingTime = endDate.toLocaleTimeString("en-US", { hour: '2-digit', minute:'2-digit' });

  if (startDate.toDateString() === endDate.toDateString()) {
    return `${startingDay} @ ${startingTime.toLowerCase()} - ${endingTime.toLowerCase()}`
  } else {
    const endingDay = endDate.toLocaleDateString("en-US", { dateStyle: "full" });
    return `${startingDay} @ ${startingTime.toLowerCase()} - ${endingDay} @ ${endingTime.toLowerCase()}`;
  }
}

export default parseDate;