# Helsinki city bike app

This is the summer project (OAMK 2023) 

## Goal of the project

The project aimed to create a UI to display journey and station lists made with city bikes in the Helsinki Capital area.

## The applied technologies

Backend: Nodejs (ExpressJS 4.18.2) - MVC architecture

Frontend: 
*Mobile: React Native
*Web: ReactJS
Database: MongoDB

## Datasets

For the exercise download three datasets of journey data. The data is owned by City Bike Finland.

* <https://dev.hsl.fi/citybikes/od-trips-2021/2021-05.csv>
* <https://dev.hsl.fi/citybikes/od-trips-2021/2021-06.csv>
* <https://dev.hsl.fi/citybikes/od-trips-2021/2021-07.csv>

Also, there is a dataset that has information about Helsinki Region Transport’s (HSL) city bicycle stations.

* Dataset: <https://opendata.arcgis.com/datasets/726277c507ef4914b0aec3cbcfcbfafc_0.csv>
* License and information: <https://www.avoindata.fi/data/en/dataset/hsl-n-kaupunkipyoraasemat/resource/a23eef3a-cc40-4608-8aa2-c730d17e8902>

## Sources

**Backend live: https://backend-bikecity.azurewebsites.net/**

**Backend source:https://github.com/t0dida00/backend-bikecityapp**

**Frontend live https://bikecityapp.azurewebsites.net/stations**

**Frontend source: https://github.com/t0dida00/frontend-bikecityapp**

## The functionalities of the project

### Data import

* The user can add a single journey and station information.
* The user can add a journey and station dataset (csv file only).
* The data is validated before importing (No import journeys that lasted for less than ten seconds. No import journeys that covered distances shorter than 10 meters).

### Journey list view

* List journeys
* For each journey show its information, additional covered distance in kilometers, and duration in minutes
* Pagination
* Ordering per column
* Searching
* Filtering 

### Station list

* List all the stations
* Pagination
* Searching 

### Single station view

* For each station show its information.
* Total number of journeys starting from the station
* Total number of journeys ending at the station
* Station location on the map
* The average distance of a journey starting from the station
* The average distance of a journey ending at the station
* Top 5 most popular return stations for journeys starting from the station
* Top 5 most popular departure stations for journeys ending at the station
* Ability to filter all the calculations per month
