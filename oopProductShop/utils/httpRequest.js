async function fetchData() {
  const res = await fetch("../js/data.json");
  const json = await res.json();
  return json;
}
export { fetchData };
