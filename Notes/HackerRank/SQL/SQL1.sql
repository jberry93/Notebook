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
