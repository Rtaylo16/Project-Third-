import React from 'react'
import 'react-dropdown/style.css';
import Dropdown from 'react-dropdown';
 

function Dropdowns(){
const options = [
    { value: 'Albuquerque, NM, United States', label: 'Albuquerque, NM, United States' },
    { value: 'Anchorage, AK, United States', label: 'Anchorage, AK, United States' },
    { value: 'Ann Arbor, MI, United States', label: 'Ann Arbor, MI, United States' },
    { value: 'Atlanta, GA, United States', label: 'Atlanta, GA, United States' },
    { value: 'Athens, GA, United States', label: 'Athens, GA, United States' },
    { value: 'Austin, TX, United States', label: 'Austin, TX, United States' },
    { value: 'Baltimore, MD, United States', label: 'Baltimore, MD, United States' },
    { value: 'Bakersfield, CA, United States', label: 'Bakersfield, CA, United States' },
    { value: 'Barrie, Canada', label: 'Barrie, Canada' },
    { value: 'Boston, MA, United States', label: 'Boston, MA, United States' },
    { value: 'Calgary, Canada', label: 'Calgary, Canada' },
    { value: 'Chattanooga, TN, United States', label: 'Chattanooga, TN, United States' },
    { value: 'Charlotte, NC, United States', label: 'Charlotte, NC, United States' },
    { value: 'Chicago, IL, United States', label: 'Chicago, IL, United States' },
    { value: 'Cincinnati, OH, United States', label: 'Cincinnati, OH, United States' },
    { value: 'Cleveland, OH, United States', label: 'Cleveland, OH, United States' },
    { value: 'Columbia, SC, United States', label: 'Columbia, SC, United States' },
    { value: 'Columbus, OH, United States', label: 'Columbus, OH, United States' },
    { value: 'Dallas, TX, United States', label: 'Dallas, TX, United States' },
    { value: 'Denver, CO, United States', label: 'Denver, CO, United States' },
    { value: 'Des Moines, IA, United States', label: 'Des Moines, IA, United States' },
    { value: 'Detroit, MI, United States', label: 'Detroit, MI, United States' },
    { value: 'Edmonton, Canada', label: 'Edmonton, Canada' },
    { value: 'Fairfax, VA, United States', label: 'Fairfax, VA, United States' },
    { value: 'Fayetteville, AR, United States', label: 'Fayetteville, AR, United States' },
    { value: 'Fort Lauderdale, FL, United States', label: 'Fort Lauderdale, FL, United States' },
    { value: 'Fort Myers, FL, United States', label: 'Fort Myers, FL, United States' },
    { value: 'Fort Worth, TX, United States', label: 'Fort Worth, TX, United States' },
    { value: 'Fremont, CA, United States', label: 'Fremont, CA, United States' },
    { value: 'Gainesville, FL, United States', label: 'Gainesville, FL, United States' },
    { value: 'Greensboro, NC, United States', label: 'Greensboro, NC, United States' },
    { value: 'Greenville, SC, United States', label: 'Greenville, SC, United States' },
    { value: 'Guadalajara, Mexico', label: 'Guadalajara, Mexico' },
    { value: 'Guelph, Canada', label: 'Guelph, Canada' },
    { value: 'Halifax, Canada', label: 'Halifax, Canada' },
    { value: 'Hamilton, Bermuda', label: 'Hamilton, Bermuda' },
    { value: 'Hamilton, Canada', label: 'Hamilton, Canada' },
    { value: 'Honolulu, HI, United States', label: 'Honolulu, HI, United States' },
    { value: 'Houston, TX, United States', label: 'Houston, TX, United States' },
    { value: 'Indianapolis, IN, United States', label: 'Indianapolis, IN, United States' },
    { value: 'Irvine, CA, United States', label: 'Irvine, CA, United States' },
    { value: 'Jacksonville, FL, United States', label: 'Jacksonville, FL, United States' },
    { value: 'Kansas City, MO, United States', label: 'Kansas City, MO, United States' },
    { value: 'Kitchener, Canada', label: 'Kitchener, Canada' },
    { value: 'Kingston, Jamaica', label: 'Kingston, Jamaica' },
    { value: 'Las Vegas, NV, United States', label: 'Las Vegas, NV, United States' },
    { value: 'Lexington, KY, United States', label: 'Lexington, KY, United States' },
    { value: 'Little Rock, AR, United States', label: 'Little Rock, AR, United States' },
    { value: 'London, Canada', label: 'London, Canada' },
    { value: 'Los Angeles, CA, United States', label: 'Los Angeles, CA, United States' },
    { value: 'Louisville, KY, United States', label: 'Louisville, KY, United States' },
    { value: 'Madison, WI, United States', label: 'Madison, WI, United States' },
    { value: 'Melbourne, FL, United States', label: 'Melbourne, FL, United States' },
    { value: 'Mexico City, Mexico', label: 'Mexico City, Mexico' },
    { value: 'Miami, FL, United States', label: 'Miami, FL, United States' },
    { value: 'Milwaukee, WI, United States', label: 'Milwaukee, WI, United States' },
    { value: 'Minneapolis, MN, United States', label: 'Minneapolis, MN, United States' },
    { value: 'Mississauga, Canada', label: 'Mississauga, Canada' },
    { value: 'Mobile, AL, United States', label: 'Mobile, AL, United States' },
    { value: 'Monterrey, Mexico', label: 'Monterrey, Mexico' },
    { value: 'Montreal, Canada', label: 'Montreal, Canada' },
    { value: 'Nassau, Bahamas', label: 'Nassau, Bahamas' },
    { value: 'Nashville, TN, United States', label: 'Nashville, TN, United States' },
    { value: 'Newark, NJ, United States', label: 'Newark, NJ, United States' },
    { value: 'New Orleans, LA, United States', label: 'New Orleans, LA, United States' },
    { value: 'New York, NY, United States', label: 'New York, NY, United States' },
    { value: 'Oakland, CA, United States', label: 'Oakland, CA, United States' },
    { value: 'Oklahoma City, OK, United States', label: 'Oklahoma City, OK, United States' },
    { value: 'Orlando, FL, United States', label: 'Orlando, FL, United States' },
    { value: 'Ottawa, Canada', label: 'Ottawa, Canada' },
    { value: 'Pensacola, FL, United States', label: 'Pensacola, FL, United States' },
    { value: 'Philadelphia, PA, United States', label: 'Philadelphia, PA, United States' },
    { value: 'Phoenix, AZ, United States', label: 'Phoenix, AZ, United States' },
    { value: 'Pittsburgh, PA, United States', label: 'Pittsburgh, PA, United States' },
    { value: 'Portland, OR, United States', label: 'Portland, OR, United States' },
    { value: 'Quebec City, Canada', label: 'Quebec City, Canada' },
    { value: 'Queretaro, Mexico', label: 'Queretaro, Mexico' },
    { value: 'Raleigh, NC, United State', label: 'Raleigh, NC, United State' },
    { value: 'Rochester, NY, United States', label: 'Rochester, NY, United States' },
    { value: 'Sacramento, CA, United States', label: 'Sacramento, CA, United States' },
    { value: 'Salem, OR, United States', label: 'Salem, OR, United States' },
    { value: 'Salt Lake City, UT, United States', label: 'Salt Lake City, UT, United States' },
    { value: 'San Antonio, TX, United States', label: 'San Antonio, TX, United States' },
    { value: 'San Diego, CA, United States', label: 'San Diego, CA, United States' },
    { value: 'San Francisco, CA, United States', label: 'San Francisco, CA, United States' },
    { value: 'Saint Louis, MO, United States', label: 'Saint Louis, MO, United States' },
    { value: 'Saint Paul, MN, United States', label: 'Saint Paul, MN, United States' },
    { value: 'Saint Petersburg, FL, United States', label: 'Saint Petersburg, FL, United States' },
    { value: 'Santa Cruz, CA, United States', label: 'Santa Cruz, CA, United States' },
    { value: 'Seattle, WA, United States', label: 'Seattle, WA, United States' },
    { value: 'Sioux Falls, SD, United States', label: 'Sioux Falls, SD, United States' },
    { value: 'Spokane, WA, United States', label: 'Spokane, WA, United States' },
    { value: 'Tacoma, WA, United States', label: 'Tacoma, WA, United States' },
    { value: 'Tampa, FL, United States', label: 'Tampa, FL, United States' },
    { value: 'Tijuana, Mexico', label: 'Tijuana, Mexico' },
    { value: 'Toronto, Canada', label: 'Toronto, Canada' },
    { value: 'Tucson, AZ, United States', label: 'Tucson, AZ, United States' },
    { value: 'Tulsa, OK, United States', label: 'Tulsa, OK, United States' },
    { value: 'Washington, DC, United States', label: 'Washington, DC, United States' },
    { value: 'Windsor, Canada', label: 'Windsor, Canada' },
    { value: 'Winnipeg, Canada', label: 'Winnipeg, Canada' },
    { value: 'Buenos Aires, Argentina', label: 'Buenos Aires, Argentina' },
    { value: 'Belo Horizonte, Brazil', label: 'Belo Horizonte, Brazil' },
    { value: 'Brasilia, Brazil', label: 'Brasilia, Brazil' },
    { value: 'Campinas, Brazil', label: 'Campinas, Brazil' },
    { value: 'Curitiba, Brazil', label: 'Curitiba, Brazil' },
    { value: 'Florianopolis, Brazil', label: 'Florianopolis, Brazil' },
    { value: 'Natal, Brazil', label: 'Natal' },
    { value: 'Porto Alegre, Brazil', label: 'Porto Alegre, Brazil' },
    { value: 'Recife, Brazil', label: 'Recife, Brazil' },
    { value: 'Rio De Janeiro, Brazil', label: 'Rio De Janeiro, Brazil' },
    { value: 'Sao Paulo, Brazil', label: 'Sao Paulo, Brazil' },
    { value: 'Concepcion, Chile', label: 'Concepcion, Chile' },
    { value: 'Santiago, Chile', label: 'Santiago, Chile' },
    { value: 'Bogota, Colombia', label: 'Bogota, Colombia' },
    { value: 'Cali, Colombia', label: 'Cali, Colombia' },
    { value: 'Medellin, Colombia', label: 'Medellin, Colombia' },
    { value: 'San Jose, Costa Rica', label: 'San Jose, Costa Rica' },
    { value: 'Santo Domingo, Dominican Republic', label: 'Santo Domingo, Dominican Republic' },
    { value: 'Cuenca, Ecuador', label: 'Cuenca, Ecuador' },
    { value: 'Guayaquil, Ecuador', label: 'Guayaquil, Ecuador' },
    { value: 'Quito, Ecuador', label: 'Quito, Ecuador' },
    { value: 'San Salvador, El Salvador', label: 'San Salvador, El Salvador' },
    { value: 'Guatemala City, Guatemala', label: 'Guatemala City, Guatemala' },
    { value: 'Panama City, Panama', label: 'Panama City, Panama' },
    { value: 'Lima, Peru', label: 'Lima, Peru' },
    { value: 'San Juan, Puerto Rico', label: 'San Juan, Puerto Rico' },
    { value: 'Aachen, Germany', label: 'Aachen, Germany' },
    { value: 'Aalborg, Denmark', label: 'Aalborg, Denmark' },
    { value: 'Aberdeen, United Kingdom', label: 'Aberdeen, United Kingdom' },
    { value: 'Alicante, Spain', label: 'Alicante, Spain' },
    { value: 'Amsterdam, Netherlands', label: 'Amsterdam, Netherlands' },
    { value: 'Antwerp, Belgium', label: 'Antwerp, Belgium' },
    { value: 'Arhus, Denmark', label: 'Arhus, Denmark' },
    { value: 'Athens, Greece', label: 'Athens, Greece' },
    { value: 'Banja Luka, Bosnia And Herzegovina', label: 'Banja Luka, Bosnia And Herzegovina' },
    { value: 'Barcelona, Spain', label: 'Barcelona, Spain' },
    { value: 'Bari, Italy', label: 'Bari, Italy' },
    { value: 'Basel, Switzerland', label: 'Basel, Switzerland' },
    { value: 'Belfast, United Kingdom', label: 'Belfast, United Kingdom' },
    { value: 'Belgrade, Serbia', label: 'Belgrade, Serbia' },
    { value: 'Bergamo, Italy', label: 'Bergamo, Italy' },
    { value: 'Bergen, Norway', label: 'Bergen, Norway' },
    { value: 'Berlin, Germany', label: 'Berlin, Germany' },
    { value: 'Bern, Switzerland', label: 'Bern, Switzerland' },
    { value: 'Bilbao, Spain', label: 'Bilbao, Spain' },
    { value: 'Birmingham, United Kingdom', label: 'Birmingham, United Kingdom' },
    { value: 'Bologna, Italy', label: 'Bologna, Italy' },
    { value: 'Bolzano-Bozen, Italy', label: 'Bolzano-Bozen, Italy' },
    { value: 'Bonn, Germany', label: 'Bonn, Germany' },
    { value: 'Bournemouth, United Kingdom', label: 'Bournemouth, United Kingdom' },
    { value: 'Braga, Portugal', label: 'Braga, Portugal' },
    { value: 'Brasov, Romania', label: 'Brasov, Romania' },
    { value: 'Bratislava, Slovakia', label: 'Bratislava, Slovakia' },
    { value: 'Bremen, Germany', label: 'Bremen, Germany' },
    { value: 'Brighton, United Kingdom', label: 'Brighton, United Kingdom' },
    { value: 'Bristol, United Kingdom', label: 'Bristol, United Kingdom' },
    { value: 'Brno, Czech Republic', label: 'Brno, Czech Republic' },
    { value: 'Brussels, Belgium', label: 'Brussels, Belgium' },
    { value: 'Bucharest, Romania', label: 'Bucharest, Romania' },
    { value: 'Budapest, Hungary', label: 'Budapest, Hungary' },
    { value: 'Cagliari, Italy', label: 'Cagliari, Italy' },
    { value: 'Cambridge, United Kingdom', label: 'Cambridge, United Kingdom' },
    { value: 'Cardiff, United Kingdom', label: 'Cardiff, United Kingdom' },
    { value: 'Chisinau, Moldova', label: 'Chisinau, Moldova' },
    { value: 'Cluj-napoca, Romania', label: 'Cluj-napoca, Romania' },
    { value: 'Coimbra, Portugal', label: 'Coimbra, Portugal' },
    { value: 'Cologne, Germany', label: 'Cologne, Germany' },
    { value: 'Copenhagen, Denmark', label: 'Copenhagen, Denmark' },
    { value: 'Cork, Ireland', label: 'Cork, Ireland' },
    { value: 'Coventry, United Kingdom', label: 'Coventry, United Kingdom' },
    { value: 'Dnipropetrovsk, Ukraine', label: 'Dnipropetrovsk, Ukraine' },
    { value: 'Dresden, Germany', label: 'Dresden, Germany' },
    { value: 'Dublin, Ireland', label: 'Dublin, Ireland' },
    { value: 'Dusseldorf, Germany', label: 'Dusseldorf, Germany' },
    { value: 'Edinburgh, United Kingdom', label: 'Edinburgh, United Kingdom' },
    { value: 'Eindhoven, Netherlands', label: 'Eindhoven, Netherlands' },
    { value: 'Exeter, United Kingdom', label: 'Exeter, United Kingdom' },
    { value: 'Florence, Italy', label: 'Florence, Italy' },
    { value: 'Frankfurt, Germany', label: 'Frankfurt, Germany' },
    { value: 'Galway, Ireland', label: 'Galway, Ireland' },
    { value: 'Gdansk, Poland', label: 'Gdansk, Poland' },
    { value: 'Gdynia, Poland', label: 'Gdynia, Poland' },
    { value: 'Geneva, Switzerland', label: 'Geneva, Switzerland' },
    { value: 'Genoa, Italy', label: 'Genoa, Italy' },
    { value: 'Gent, Belgium', label: 'Gent, Belgium' },
    { value: 'Glasgow, United Kingdom', label: 'Glasgow, United Kingdom' },
    { value: 'Gothenburg, Sweden', label: 'Gothenburg, Sweden' },
    { value: 'Granada, Spain', label: 'Granada, Spain' },
    { value: 'Graz, Austria', label: 'Graz, Austria' },
    { value: 'Groningen, Netherlands', label: 'Groningen, Netherlands' },
    { value: 'Hamburg, Germany', label: 'Hamburg, Germany' },
    { value: 'Heidelberg, Germany', label: 'Heidelberg, Germany' },
    { value: 'Helsinki, Finland', label: 'Helsinki, Finland' },
    { value: 'Heraklion, Greece', label: 'Heraklion, Greece' },
    { value: 'Iasi, Romania', label: 'Iasi, Romania' },
    { value: 'Karlsruhe, Germany', label: 'Karlsruhe, Germany' },
    { value: 'Katowice, Poland', label: 'Katowice, Poland' },
    { value: 'Kaunas, Lithuania', label: 'Kaunas, Lithuania' },
    { value: 'Kazan, Russia', label: 'Kazan, Russia' },
    { value: 'Kharkiv, Ukraine', label: 'Kharkiv, Ukraine' },
    { value: 'Kiev, Ukraine', label: 'Kiev, Ukraine' },
    { value: 'Kosice, Slovakia', label: 'Kosice, Slovakia' },
    { value: 'Krakow (Cracow), Poland', label: 'Krakow (Cracow), Poland' },
    { value: 'Lausanne, Switzerland', label: 'Lausanne, Switzerland' },
    { value: 'Leeds, United Kingdom', label: 'Leeds, United Kingdom' },
    { value: 'Leicester, United Kingdom', label: 'Leicester, United Kingdom' },
    { value: 'Leiden, Netherlands', label: 'Leiden, Netherlands' },
    { value: 'Leipzig, Germany', label: 'Leipzig, Germany' },
    { value: 'Leuven, Belgium', label: 'Leuven, Belgium' },
    { value: 'Lille, France', label: 'Lille, France' },
    { value: 'Limerick, Ireland', label: 'Limerick, Ireland' },
    { value: 'Lisbon, Portugal', label: 'Lisbon, Portugal' },
    { value: 'Liverpool, United Kingdom', label: 'Liverpool, United Kingdom' },
    { value: 'Ljubljana, Slovenia', label: 'Ljubljana, Slovenia' },
    { value: 'Lodz, Poland', label: 'Lodz, Poland' },
    { value: 'London, United Kingdom', label: 'London, United Kingdom' },
    { value: 'Lublin, Poland', label: 'Lublin, Poland' },
    { value: 'Lugano, Switzerland', label: 'Lugano, Switzerland' },
    { value: 'Luxembourg, Luxembourg', label: 'Luxembourg, Luxembourg' },
    { value: 'Lviv, Ukraine', label: 'Lviv, Ukraine' },
    { value: 'Lyon, France', label: 'Lyon, France' },
    { value: 'Maastricht, Netherlands', label: 'Maastricht, Netherlands' },
    { value: 'Madrid, Spain', label: 'Madrid, Spain' },
    { value: 'Malaga, Spain', label: 'Malaga, Spain' },
    { value: 'Malmo, Sweden', label: 'Malmo, Sweden' },
    { value: 'Manchester, United Kingdom', label: 'Manchester, United Kingdom' },
    { value: 'Marseille, France', label: 'Marseille, France' },
    { value: 'Milan, Italy', label: 'Milan, Italy' },
    { value: 'Milton Keynes, United Kingdom', label: 'Milton Keynes, United Kingdom' },
    { value: 'Minsk, Belarus', label: 'Minsk, Belarus' },
    { value: 'Modena, Italy', label: 'Modena, Italy' },
    { value: 'Moscow, Russia', label: 'Moscow, Russia' },
    { value: 'Munich, Germany', label: 'Munich, Germany' },
    { value: 'Nantes, France', label: 'Nantes, France' },
    { value: 'Naples, Italy', label: 'Naples, Italy' },
    { value: 'Newcastle Upon Tyne, United Kingdom', label: 'Newcastle Upon Tyne, United Kingdom' },
    { value: 'Norwich, United Kingdom', label: 'Norwich, United Kingdom' },
    { value: 'Nottingham, United Kingdom', label: 'Nottingham, United Kingdom' },
    { value: 'Novi Sad, Serbia', label: 'Novi Sad, Serbia' },
    { value: 'Novosibirsk, Russia', label: 'Novosibirsk, Russia' },
    { value: 'Nuremberg, Germany', label: 'Nuremberg, Germany' },
    { value: 'Odesa, Ukraine', label: 'Odesa, Ukraine' },
    { value: 'Olomouc, Czech Republic', label: 'Olomouc, Czech Republic' },
    { value: 'Osijek, Croatia', label: 'Osijek, Croatia' },
    { value: 'Oslo, Norway', label: 'Oslo, Norway' },
    { value: 'Ostrava, Czech Republic', label: 'Ostrava, Czech Republic' },
    { value: 'Oxford, United Kingdom', label: 'Oxford, United Kingdom' },
    { value: 'Padova, Italy', label: 'Padova, Italy' },
    { value: 'Palermo, Italy', label: 'Palermo, Italy' },
    { value: 'Palma De Mallorca, Spain', label: 'Palma De Mallorca, Spain' },
    { value: 'Paris, France', label: 'Paris, France' },
    { value: 'Parma, Italy', label: 'Parma, Italy' },
    { value: 'Patras, Greece', label: 'Patras, Greece' },
    { value: 'Plovdiv, Bulgaria', label: 'Plovdiv, Bulgaria' },
    { value: 'Podgorica, Montenegro', label: 'Podgorica, Montenegro' },
    { value: 'Porto, Portugal', label: 'Porto, Portugal' },
    { value: 'Poznan, Poland', label: 'Poznan, Poland' },
    { value: 'Prague, Czech Republic', label: 'Prague, Czech Republic' },
    { value: 'Reading, United Kingdom', label: 'Reading, United Kingdom' },
    { value: 'Reykjavik, Iceland', label: 'Reykjavik, Iceland' },
    { value: 'Riga, Latvia', label: 'Riga, Latvia' },
    { value: 'Rijeka, Croatia', label: 'Rijeka, Croatia' },
    { value: 'Rome, Italy', label: 'Rome, Italy' },
    { value: 'Rotterdam, Netherlands', label: 'Rotterdam, Netherlands' },
    { value: 'Saint Petersburg, Russia', label: 'Saint Petersburg, Russia' },
    { value: 'Sarajevo, Bosnia And Herzegovina', label: 'Sarajevo, Bosnia And Herzegovina' },
    { value: 'Seville, Spain', label: 'Seville, Spain' },
    { value: 'Sheffield, United Kingdom', label: 'Sheffield, United Kingdom' },
    { value: 'Sibiu, Romania', label: 'Sibiu, Romania' },
    { value: 'Skopje, Macedonia', label: 'Skopje, Macedonia' },
    { value: 'Sliema, Malta', label: 'Sliema, Malta' },
    { value: 'Sofia, Bulgaria', label: 'Sofia, Bulgaria' },
    { value: 'Southampton, United Kingdom', label: 'Southampton, United Kingdom' },
    { value: 'Split, Croatia', label: 'Split, Croatia' },
    { value: 'Stavanger, Norway', label: 'Stavanger, Norway' },
    { value: 'Stockholm, Sweden', label: 'Stockholm, Sweden' },
    { value: 'Stuttgart, Germany', label: 'Stuttgart, Germany' },
    { value: 'Sumy, Ukraine', label: 'Sumy, Ukraine' },
    { value: 'Szczecin, Poland', label: 'Szczecin, Poland' },
    { value: 'Tallinn, Estonia', label: 'Tallinn, Estonia' },
    { value: 'Tampere, Finland', label: 'Tampere, Finland' },
    { value: 'Tartu, Estonia', label: 'Tartu, Estonia' },
    { value: 'The Hague (Den Haag), Netherlands', label: 'The Hague (Den Haag), Netherlands' },
    { value: 'Thessaloniki, Greece', label: 'Thessaloniki, Greece' },
    { value: 'Timisoara, Romania', label: 'Timisoara, Romania' },
    { value: 'Tirana, Albania', label: 'Tirana, Albania' },
    { value: 'Toulouse, France', label: 'Toulouse, France' },
    { value: 'Trento, Italy', label: 'Trento, Italy' },
    { value: 'Trieste, Italy', label: 'Trieste, Italy' },
    { value: 'Trondheim, Norway', label: 'Trondheim, Norway' },
    { value: 'Turin, Italy', label: 'Turin, Italy' },
    { value: 'Turku, Finland', label: 'Turku, Finland' },
    { value: 'Uppsala, Sweden', label: 'Uppsala, Sweden' },
    { value: 'Utrecht, Netherlands', label: 'Utrecht, Netherlands' },
    { value: 'Valencia, Spain', label: 'Valencia, Spain' },
    { value: 'Varna, Bulgaria', label: 'Varna, Bulgaria' },
    { value: 'Venice, Italy', label: 'Venice, Italy' },
    { value: 'Vienna, Austria', label: 'Vienna, Austria' },
    { value: 'Vilnius, Lithuania', label: 'Vilnius, Lithuania' },
    { value: 'Warsaw, Poland', label: 'Warsaw, Poland' },
    { value: 'Wroclaw, Poland', label: 'Wroclaw, Poland' },
    { value: 'Yekaterinburg, Russia', label: 'Yekaterinburg, Russia' },
    { value: 'York, United Kingdom', label: 'York, United Kingdom' },
    { value: 'Zagreb, Croatia', label: 'Zagreb, Croatia' },
    { value: 'Zaragoza (Saragossa), Spain', label: 'Zaragoza (Saragossa), Spain' },
    { value: 'Zug, Switzerland', label: 'Zug, Switzerland' },
    { value: 'Zurich, Switzerland', label: 'Zurich, Switzerland' },
    { value: 'Abu Dhabi, United Arab Emirates', label: 'Abu Dhabi, United Arab Emirates' },
    { value: 'Ad Dammam, Saudi Arabia', label: 'Ad Dammam, Saudi Arabia' },
    { value: 'Ahmedabad, India', label: 'Ahmedabad, India' },
    { value: 'Al Khobar, Saudi Arabia', label: 'Al Khobar, Saudi Arabia' },
    { value: 'Almaty, Kazakhstan', label: 'Almaty, Kazakhstan' },
    { value: 'Amman, Jordan', label: 'Amman, Jordan' },
    { value: 'Ankara, Turkey', label: 'Ankara, Turkey' },
    { value: 'Baku, Azerbaijan', label: 'Baku, Azerbaijan' },
    { value: 'Bali, Indonesia', label: 'Bali, Indonesia' },
    { value: 'Bandung, Indonesia', label: 'Bandung, Indonesia' },
    { value: 'Bangalore, India', label: 'Bangalore, India' },
    { value: 'Bangkok, Thailand', label: 'Bangkok, Thailand' },
    { value: 'Beijing, China', label: 'Beijing, China' },
    { value: 'Beirut, Lebanon', label: 'Beirut, Lebanon' },
    { value: 'Bhubaneswar, India', label: 'Bhubaneswar, India' },
    { value: 'Bursa, Turkey', label: 'Bursa, Turkey' },
    { value: 'Busan, South Korea', label: 'Busan, South Korea' },
    { value: 'Cebu, Philippines', label: 'Cebu, Philippines' },
    { value: 'Chandigarh, India', label: 'Chandigarh, India' },
    { value: 'Chennai, India', label: 'Chennai, India' },
    { value: 'Chiang Mai, Thailand', label: 'Chiang Mai, Thailand' },
    { value: 'Coimbatore, India', label: 'Coimbatore, India' },
    { value: 'Colombo, Sri Lanka', label: 'Colombo, Sri Lanka' },
    { value: 'Davao, Philippines', label: 'Davao, Philippines' },
    { value: 'Delhi, India', label: 'Delhi, India' },
    { value: 'Dhaka, Bangladesh', label: 'Dhaka, Bangladesh' },
    { value: 'Doha, Qatar', label: 'Doha, Qatar' },
    { value: 'Dubai, United Arab Emirates', label: 'Dubai, United Arab Emirates' },
    { value: 'Goa, India', label: 'Goa, India' },
    { value: 'Guangzhou, China', label: 'Guangzhou, China' },
    { value: 'Gurgaon, India', label: 'Gurgaon, India' },
    { value: 'Haifa, Israel', label: 'Haifa, Israel' },
    { value: 'Hanoi, Vietnam', label: 'Hanoi, Vietnam' },
    { value: 'Ho Chi Minh City, Vietnam', label: 'Ho Chi Minh City, Vietnam' },
    { value: 'Hong Kong, Hong Kong', label: 'Hong Kong, Hong Kong' },
    { value: 'Hyderabad, India', label: 'Hyderabad, India' },
    { value: 'Indore, India', label: 'Indore, India' },
    { value: 'Irbil, Iraq', label: 'Irbil, Iraq' },
    { value: 'Islamabad, Pakistan', label: 'Islamabad, Pakistan' },
    { value: 'Istanbul, Turkey', label: 'Istanbul, Turkey' },
    { value: 'Izmir, Turkey', label: 'Izmir, Turkey' },
    { value: 'Jaipur, India', label: 'Jaipur, India' },
    { value: 'Jakarta, Indonesia', label: 'Jakarta, Indonesia' },
    { value: 'Jeddah (Jiddah), Saudi Arabia', label: 'Jeddah (Jiddah), Saudi Arabia' },
    { value: 'Jerusalem, Israel', label: 'Jerusalem, Israel' },
    { value: 'Johor Bahru, Malaysia', label: 'Johor Bahru, Malaysia' },
    { value: 'Kaohsiung, Taiwan', label: 'Kaohsiung, Taiwan' },
    { value: 'Karachi, Pakistan', label: 'Karachi, Pakistan' },
    { value: 'Kathmandu, Nepal', label: 'Kathmandu, Nepal' },
    { value: 'Kochi, India', label: 'Kochi, India' },
    { value: 'Kolkata, India', label: 'Kolkata, India' },
    { value: 'Kota Kinabalu, Malaysia', label: 'Kota Kinabalu, Malaysia' },
    { value: 'Kuala Lumpur, Malaysia', label: 'Kuala Lumpur, Malaysia' },
    { value: 'Kuwait City, Kuwait', label: 'Kuwait City, Kuwait' },
    { value: 'Lahore, Pakistan', label: 'Lahore, Pakistan' },
    { value: 'Limassol, Cyprus', label: 'Limassol, Cyprus' },
    { value: 'Lucknow (Lakhnau), India', label: 'Lucknow (Lakhnau), India' },
    { value: 'Ludhiana, India', label: 'Ludhiana, India' },
    { value: 'Makati, Philippines', label: 'Makati, Philippines' },
    { value: 'Male, Maldives', label: 'Male, Maldives' },
    { value: 'Manama, Bahrain', label: 'Manama, Bahrain' },
    { value: 'Mangalore, India', label: 'Mangalore, India' },
    { value: 'Manila, Philippines', label: 'Manila, Philippines' },
    { value: 'Mumbai, India', label: 'Mumbai, India' },
    { value: 'Muscat, Oman', label: 'Muscat, Oman' },
    { value: 'Nagpur, India', label: 'Nagpur, India' },
    { value: 'Navi Mumbai, India', label: 'Navi Mumbai, India' },
    { value: 'Nicosia, Cyprus', label: 'Nicosia, Cyprus' },
    { value: 'Noida, India', label: 'Noida, India' },
    { value: 'Pattaya, Thailand', label: 'Pattaya, Thailand' },
    { value: 'Penang, Malaysia', label: 'Penang, Malaysia' },
    { value: 'Phnom Penh, Cambodia', label: 'Phnom Penh, Cambodia' },
    { value: 'Phuket, Thailand', label: 'Phuket, Thailand' },
    { value: 'Pune, India', label: 'Pune, India' },
    { value: 'Quezon City, Philippines', label: 'Quezon City, Philippines' },
    { value: 'Ramat Gan, Israel', label: 'Ramat Gan, Israel' },
    { value: 'Riyadh, Saudi Arabia', label: 'Riyadh, Saudi Arabia' },
    { value: 'Selangor, Malaysia', label: 'Selangor, Malaysia' },
    { value: 'Seoul, South Korea', label: 'Seoul, South Korea' },
    { value: 'Shanghai, China', label: 'Shanghai, China' },
    { value: 'Sharjah, United Arab Emirates', label: 'Sharjah, United Arab Emirates' },
    { value: 'Shenzhen, China', label: 'Shenzhen, China' },
    { value: 'Singapore, Singapore', label: 'Singapore, Singapore' },
    { value: 'Surat, India', label: 'Surat, India' },
    { value: 'Taipei, Taiwan', label: 'Taipei, Taiwan' },
    { value: 'Tbilisi, Georgia', label: 'Tbilisi, Georgia' },
    { value: 'Tehran, Iran', label: 'Tehran, Iran' },
    { value: 'Tel Aviv-yafo, Israel', label: 'Tel Aviv-yafo, Israel' },
    { value: 'Thane, India', label: 'Thane, India' },
    { value: 'Thiruvananthapuram, India', label: 'Thiruvananthapuram, India' },
    { value: 'Tokyo, Japan', label: 'Tokyo, Japan' },
    { value: 'Ulaanbaatar, Mongolia', label: 'Ulaanbaatar, Mongolia' },
    { value: 'Vadodara, India', label: 'Vadodara, India' },
    { value: 'Valenzuela, Philippines', label: 'Valenzuela, Philippines' },
    { value: 'Visakhapatnam, India', label: 'Visakhapatnam, India' },
    { value: 'Yerevan, Armenia', label: 'Yerevan, Armenia' },
    { value: 'Sydney, Australia', label: 'Sydney, Australia' },
    { value: 'Perth, Australia', label: 'Perth, Australia' },
    { value: 'Darwin, Australia', label: 'Darwin, Australia' },
    { value: 'Hamilton, New Zealand', label: 'Hamilton, New Zealand' },
    { value: 'Auckland, New Zealand', label: 'Auckland, New Zealand' },
    { value: 'Melbourne, Australia', label: 'Melbourne, Australia' },
    { value: 'Christchurch, New Zealand', label: 'Christchurch, New Zealand' },
    { value: 'Adelaide, Australia', label: 'Adelaide, Australia' },
    { value: 'Cairns, Australia', label: 'Cairns, Australia' },
    { value: 'Brisbane, Australia', label: 'Brisbane, Australia' },
    { value: 'Hobart, Australia', label: 'Hobart, Australia' },
    { value: 'Canberra, Australia', label: 'Canberra, Australia' },
    { value: 'Wellington, New Zealand', label: 'Wellington, New Zealand' },
    { value: 'Newcastle, Australia', label: 'Newcastle, Australia' },
    { value: 'Gold Coast, Australia', label: 'Gold Coast, Australia' },
    { value: 'Accra, Ghana', label: 'Accra, Ghana' },
    { value: 'Addis Ababa, Ethiopia', label: 'Addis Ababa, Ethiopia' },
    { value: 'Algiers, Algeria', label: 'Algiers, Algeria' },
    { value: 'Cairo, Egypt', label: 'Cairo, Egypt' },
    { value: 'Cape Town, South Africa', label: 'Cape Town, South Africa' },
    { value: 'Casablanca, Morocco', label: 'Casablanca, Morocco' },
    { value: 'Dar Es Salaam, Tanzania', label: 'Dar Es Salaam, Tanzania' },
    { value: 'Durban, South Africa', label: 'Durban, South Africa' },
    { value: 'Harare, Zimbabwe', label: 'Harare, Zimbabwe' },
    { value: 'Johannesburg, South Africa', label: 'Johannesburg, South Africa' },
    { value: 'Kigali, Rwanda', label: 'Kigali, Rwanda' },
    { value: 'Lagos, Nigeria', label: 'Lagos, Nigeria' },
    { value: 'Nairobi, Kenya', label: 'Nairobi, Kenya' },
    { value: 'Rabat, Morocco', label: 'Rabat, Morocco' },
    { value: 'Tripoli, Libya', label: 'Tripoli, Libya' },
    { value: 'Tunis, Tunisia', label: 'Tunis, Tunisia' },
    { value: 'Vancouver, Canada', label: 'Vancouver, Canada' }
  
];


const defaultOption = options[0];

return(
<div>

<Dropdown options={options} className='droop' value={defaultOption} placeholder="Select an option" />
</div>
);

}

export default Dropdowns;


