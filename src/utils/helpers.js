export const unixToDate = timestamp => {
  const milliseconds = timestamp * 1000;

  const dateObject = new Date(milliseconds);

  const month = dateObject.toLocaleString('en-US', { month: 'long'} );
  let day = parseInt(dateObject.toLocaleString('en-US', { day: 'numeric'}));
  const time = dateObject.toLocaleString('en-US', { hour: 'numeric'});

  const thDays = [4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,24,25,26,27,29,29,30];
  const stDays = [1, 21, 31]
  const ndDays = [2, 22]
  const rdDays = [3, 23]

  if (thDays.includes(day)) day = `${day}th`;
  else if(stDays.includes(day)) day = `${day}st`;
  else if(ndDays.includes(day)) day = `${day}nd`;
  else if(rdDays.includes(day)) day = `${day}rd`;
  return `${month} ${day}, ${time}`
}

export const getDay = (timestamp) => {
  const milliseconds = timestamp * 1000;

  const dateObject = new Date(milliseconds);

  return dateObject.toLocaleString("en-US", {weekday: "long"})


}