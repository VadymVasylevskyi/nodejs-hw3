import fs from 'fs'

fs.mkdir('myFolder', (err) => {
    if (err) {
        console.error('Ошибка при создании каталога:', err);
    } else {
        console.log('Каталог успешно создан.');

    }
});

setTimeout(() => {
    fs.rmdir('myFolder', (err) => {
        if (err) {
            console.error('Ошибка при удалении каталога:', err);
        } else {
            console.log('Каталог успешно удален.');
        }
    })
}, 20000)