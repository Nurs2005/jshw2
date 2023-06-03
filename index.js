const fs = require('fs');

fs.readFile('count.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Ошибка', err);
    return;
  }
  const jsonData = JSON.parse(data);
  const { count, target } = jsonData;
  console.log('count:', count);
  if (count === target) {
    console.error('Счётчик уже максимальный');
    return;
  }
jsonData.count += 1;
const updatedData = JSON.stringify(jsonData);
fs.writeFile('count.json', updatedData, 'utf8', (err) => {
    if (err) {
      console.error('Ошибка:', err);
      return;
    }
    console.log('успешно');
  });
});