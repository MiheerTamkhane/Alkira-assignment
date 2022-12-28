export function filterBySearch(data, query) {
  if (query !== "") {
    return data.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
  }
  return data;
}

export function sortByCity(data, sort) {
  if (!sort) {
    return data.sort((a, b) => a.city.localeCompare(b.city));
  } else if (sort) {
    return data.sort((a, b) => a.city.localeCompare(b.city)).reverse();
  }
  return data;
}
