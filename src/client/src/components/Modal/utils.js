export function formatXAxis(unix_timestamp) {
  const date = new Date(unix_timestamp);
  const hours = date.getHours();
  const minutes = "0" + date.getMinutes();
  
  return hours + ':' + minutes.substr(-2);
}

export function formatYAxis(price) {
  return price / 100;
}
