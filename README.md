# ARMCC - Apartment Renovation Materials Cost Calculator

## Description

Програмна система обрахунку потрібних матеріалів для ремонту "сирої квартири. Користувач вводить розміри кімнат.
Вводить матеріал для підлоги (паркет, ламінат і т.д), інформацію про стелі і
стіни, к-сть і розмір вікон і т.д. Програмна система має розрахувати необхідну
к-сть матеріалів для ремонтів а також допоміжні матеріали.
Також обрахувати і вивести ціну

## Run

```
$ docker run -p 5000:80 vladgolubev/arpc
```

Now visit [http://localhost:5000/](localhost:5000) from your Browser.

## Build Docker Image

0. `git clone git@github.com:university-projects-se-6050103/course03cpit.net.git`
1. `dotnet publish -c Debug -o out`
2. `docker build -t arpc .`
