const fs = require('fs');

const data = {
  firstName: 'nurs',
  lastName: 'nurs',
  dateOfBirth: '1997-71-11'
};

const jsonData = JSON.stringify(data);

fs.writeFile('userinfo.json', jsonData, 'utf8', (err) => {
  if (err) {
    console.error('Ошибка при записи в файл:', err);
    return;
  }
  console.log('Данные успешно записаны в файл.');
});