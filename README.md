### Hexlet tests and linter status:
[![Actions Status](https://github.com/jabbarovabdujabar-code/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/jabbarovabdujabar-code/frontend-project-44/actions)

## Demo

Asciinema: https://asciinema.org/a/oONKWmKvYHhuwDHH

## Usage

1. Установите пакет глобально (или через npm link):

```bash
npm install -g .
```

2. Запустите игры:

```bash
brain-games
brain-even
brain-calc
brain-gcd
brain-progression
```

## Brain Even Game Demo

_Пример сценария:_
- `brain-even`
- Ввод: `Sam`
- Ввод: `yes` / `no`
- 3 правильных -> `Congratulations, Sam!`
- Неправильный -> `'yes' is wrong answer ;(. Correct answer was 'no'.` `Let's try again, Sam!`

Пример (победа):
- Question: 8 -> yes `Correct!`
- ... -> Congratulations, Sam!

Пример ошибки:
- Question: 15 -> yes `'yes' is wrong answer ;(. Correct answer was 'no'.` `Let's try again, Sam!`

## Brain Calc Game

Asciinema: https://asciinema.org/a/brain-calc-demo.cast # replace with real

### Usage
`brain-calc`

Пример (победа):
- Question: 4 + 10 `14` `Correct!`
- Question: 25 - 11 `14` `Correct!`
- Question: 25 * 7 `175` `Correct!`
- Congratulations, Sam!

Пример ошибки:
- Question: 25 * 7 `145` `'145' is wrong answer ;(. Correct answer was '175'.` `Let's try again, Sam!`

## Brain GCD Game

**Asciinema Demo:**
Upload brain-gcd-demo.cast to asciinema.org

### Usage
`brain-gcd`

**Успех:**
```
$ brain-gcd
... 
Question: 25 50
Your answer: 25
Correct!
...
Congratulations, Sam!
```

**Ошибка:**
```
Question: 25 50
Your answer: 1
'1' is wrong answer ;(. Correct answer was '25'.
Let's try again, Sam!
```

## Brain Progression Game

**Asciinema Demo (success):** Upload brain-progression-demo.cast

**Демонстрация успешного прохождения:**

```
$ brain-progression
Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
What number is missing in the progression?
Question: 5 7 9 11 13 .. 17 19 21 23
Your answer: 15
Correct!
Question: 2 5 8 .. 14 17 20 23 26 29
Your answer: 11
Correct!
Question: 14 19 24 29 34 39 44 49 54 ..
Your answer: 59
Correct!
Congratulations, Sam!
```

**Демонстрация ошибки:**

```
Question: 5 7 9 11 13 .. 17 19 21 23
Your answer: 1
'1' is wrong answer ;(. Correct answer was '15'.
Let's try again, Sam!
```

### Usage
`brain-progression`

