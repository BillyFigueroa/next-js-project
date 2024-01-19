export const fetchUsers = async () => {
  const res = await fetch("https://randomuser.me/api?nat=us&results=5");
  const { results } = await res.json();

  return results;
};
