/*
Revising the Select Query 1

Query all columnds for all American
cities in CITY with populations larger
than 100000. The CountryCode for America
is USA
*/
SELECT Id, Name, CountryCode, District, Population FROM City
WHERE Population > 100000
AND CountryCode = 'USA';

/*
Revising the Select Query 2

Query the names of all American cities
in CITY with populations larger than
120000. The CountryCode for America is
USA
*/
SELECT Name FROM City
WHERE Population > 120000
AND CountryCode = 'USA';

/*
Select All

Query all columns (attributes) for
every row in the CITY table
*/
SELECT * FROM City;

/*
Select By Id

Query all columns for a city in
CITY with the Id 1661
*/
SELECT * FROM City
WHERE Id = 1661;

/*
Japanese Citis' Attributes

Query all attributes of every
Japanese city in the CITY table.
The CountryCode for Japan is JPN
*/
SELECT * FROM City
WHERE CountryCode = 'JPN';

/*
Weather Observation Station 1

Query a list of City and State
from the Station table
*/
SELECT City, State FROM Station;

/*
Weather Observation Station 3

Query a list of City names from
Station with even Id numbers only.
You may print the results in any
order, but must exclude duplicates
*/
SELECT DISTINCT City FROM Station
WHERE Id % 2 = 0;
