export const setToken = (value: string) => {
  document.cookie = `token=${value}; path=/; max-age=86400`;
}

export const getToken = () => {
  const cookies = document.cookie.split('; ');
  const cookie = cookies.find(row => row.startsWith("token="));
  return cookie ? cookie.split('=')[1] : null;
}
