export function filterBySearch(data, query) {
  if (query !== "") {
    return data?.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
  }
  return data;
}

export function sortingHandler(data, sortWith) {
  if (sortWith?.bool) {
    return data.sort((a, b) =>
      a[`${sortWith?.sortType}`].localeCompare(b[`${sortWith?.sortType}`])
    );
  }
  if (!sortWith.bool) {
    return data.reverse();
  }
  return data;
}
