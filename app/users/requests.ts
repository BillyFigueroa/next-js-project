export const fetchUsers = async () => {
  const res = await fetch("https://randomuser.me/api?nat=us&results=10", {
    cache: "force-cache",
  });
  const { results } = await res.json();

  return results;
};
