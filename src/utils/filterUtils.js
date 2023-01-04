export function filterBySearch(data, query) {
  console.log("filter search getting called : ", data, query);
  if (query !== "") {
    return data?.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
  }
  return data;
}

export function sortingHandler(data, sortWith) {
  console.log(sortWith);
  if (sortWith?.bool) {
    return data
      .sort((a, b) =>
        a[`${sortWith?.sortType}`].localeCompare(b[`${sortWith?.sortType}`])
      )
      .reverse();
  } else if (!sortWith?.bool) {
    return data.sort().reverse();
  }
  return data;
}
