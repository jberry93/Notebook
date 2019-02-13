/*
Revising the Select Query 1
- Query all columnds for all American
cities in CITY with populations larger
than 100000. The CountryCode for America
is USA
*/
SELECT Id, Name, CountryCode, District, Population FROM City
WHERE Population > 100000
AND CountryCode = 'USA';
