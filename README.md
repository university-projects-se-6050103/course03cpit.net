<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [ARMCC - Apartment Renovation Materials Cost Calculator](#armcc---apartment-renovation-materials-cost-calculator)
  - [Description](#description)
  - [Result](#result)
  - [Diagrams](#diagrams)
    - [Class Diagram](#class-diagram)
    - [DB Diagram](#db-diagram)
  - [Run](#run)
  - [Build Docker Image](#build-docker-image)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# ARMCC - Apartment Renovation Materials Cost Calculator

## Description

Програмна система обрахунку потрібних матеріалів для ремонту "сирої квартири. Користувач вводить розміри кімнат.
Вводить матеріал для підлоги (паркет, ламінат і т.д), інформацію про стелі і
стіни, к-сть і розмір вікон і т.д. Програмна система має розрахувати необхідну
к-сть матеріалів для ремонтів а також допоміжні матеріали.
Також обрахувати і вивести ціну

## Result

![screenshot](http://i.imgur.com/fZ8X2OD.png)

API Endpoints:

* `GET` /api/materials?category=some
* `POST` /api/price

## Diagrams

### Class Diagram

![class diagram](http://i.imgur.com/DqTwbjW.png)

### DB Diagram

![db diagram](http://i.imgur.com/NGi7WPQ.png)

## Run

```shell
$ docker run -p 5000:80 vladgolubev/arpc
```

Now visit [localhost:5000](http://localhost:5000/) from your Browser.

## Build Docker Image

0. `git clone git@github.com:university-projects-se-6050103/course03cpit.net.git`
1. `dotnet publish -c Debug -o out`
2. `docker build -t arpc .`
