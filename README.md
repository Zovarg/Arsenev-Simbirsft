# Приложение SoccerStat
Приложение для просмотра спортивной статистики «SoccerStat

# Технологии #
* Семантичная верстка
* Адаптивная верстка под разрешения 320, 520, 768, 1024, 1280 и выше, которая также корректно отображается между указанными брейкпоинтами
* React
* axios
* API - https://www.football-data.org/

# Доступные страницы # 
* Лиги - список лиг
* Команды - список команд 
* Матчи конкретной лиги - турнирная таблица
* Матчи конкретной команды - турнирная таблица


# Функционал # 
* Просмотр списка лиг;
* Просмотр списка команд;
* Просмотр списка матчей лиги (календаря лиги);
* Просмотр списка матчей команды (календарь лиги);
* Пагинация;
* Поиск лиг и команд по названию;
* Возможность фильтрации списка матчей по датам.


# Планы по доработке #
* Оптимизировать хлебные крошки 
* Произвести декомпозицию  некоторых элементов
* Вынести повторяющиеся элементы в отдельные компоненты

# Установка #

1. Перед началом работы необходимо проверить наличие установленного node.js и npm

2. Скачайте проект на компьютер

3. Установите зависимости:

```
npm install
```

# Работа #

Для локальной разработки с поднятием сервера используйте:

```
npm start
```

Для сборки версии в продакшен:

```
npm run build
```
