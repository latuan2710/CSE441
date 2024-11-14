export const formatMoney = q => {
  return q.toLocaleString('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });
};

export const formatDate = dateStr => {
  const date = new Date(dateStr);

  const formattedDate =
    date.toISOString().slice(2, 10).replace(/-/g, '/') +
    ' ' +
    date.toTimeString().slice(0, 5);

  return formattedDate;
};
