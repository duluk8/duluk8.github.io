import requests
import csv
from datetime import datetime
import psycopg2


#API to Crypto
url = 'http://api.coincap.io/v2/assets'

headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

#Request the API url
response = requests.get(url)

#Transform to json
data = response.json()

#Current timestamp and format
current_timestamp = datetime.now()
str_timestamp = current_timestamp.strftime('%d-%m-%Y %H:%M:%S')

#Difine data of csv File and the Headrs
ourdata = []
csvheader = ['SYMBOL','NAME','PRICEUSD','TIMESTAMP']


#For each entry in data(json section) write to varible "ourdata"
for x in data['data']:
    listing = x['symbol'],x['name'],x['priceUsd']
    ourdata.append(listing)


    

#Write our data to csv File
with open("crypto.csv", "w", encoding='UTF8', newline='') as f:
    writer = csv.writer(f)

    writer.writerow(csvheader)

    for line in ourdata:
        writer.writerow(line + (str_timestamp,))
    
    



conn = psycopg2.connect(database="postgres"
                        ,user='postgres'
                        , password='example123'
                        , host='postgres'
                        , port='5436')

conn.autocommit = True
cursor = conn.cursor()

sql = '''insert into crypto_archive (symbol, name, priceUSD, date)
         select symbol, name, priceUSD, date 
         from crypto;

         create table if not exists crypto_archive
         (
             id_cryarch bigserial primary key,
             symbol varchar(8),
             name varchar(50),
             priceUSD money,
             date timestamp
         );

         create table if not exists crypto
         (
             id_crypto serial primary key,
             symbol varchar(8),
             name varchar(50),
             priceUSD money,	
             date timestamp
         );

         COPY crypto(symbol,name,priceUSD,date)
         from '/app/crypto.csv'
         delimiter ','
         csv header;
         '''

cursor.execute(sql)
conn.commit()
conn.close()


