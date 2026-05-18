# Игры разума

Небольшой набор консольных игр на JavaScript. Каждая игра задаёт три вопроса, и задача игрока — дать три правильных ответа подряд.

## Установка

```bash
npm install -g .
```

## Запуск

```bash
brain-games
brain-even
brain-calc
brain-gcd
brain-progression
brain-prime
```

## Описание игр

### brain-games
Приветствие и запрос имени игрока.

### brain-even
Проверка, является ли число чётным. Отвечайте `yes` или `no`.

### brain-calc
Нужно вычислить результат арифметического выражения: сложение, вычитание или умножение.

### brain-gcd
Найдите наибольший общий делитель двух чисел.

### brain-progression
Восстановите пропущенное число в числовой прогрессии.

### brain-prime
Ответьте `yes`, если число простое, иначе `no`.

## Пример игры

```
$ brain-even
Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
Answer "yes" if the number is even, otherwise answer "no".
Question: 14
Your answer: yes
Correct!
Question: 7
Your answer: no
Correct!
Question: 30
Your answer: yes
Correct!
Congratulations, Sam!
```

Если ответ неверный, игра сразу завершится и выведет правильный вариант.

## Проверка

```bash
npm test
```

## Примечания

- Игра работает через `readline-sync`, поэтому ввод осуществляется прямо в терминале.
- Чтобы удалить глобальную установку, выполните `npm uninstall -g frontend-project-44` (или нужное имя пакета).

