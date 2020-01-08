# Web scraper to gather data from a wiki page about enemies from Super Metroid.
# Implemented using the BeautifulSoup and requests libraries.
from bs4 import BeautifulSoup
import pprint
import requests

baseUrl = "https://wiki.supermetroid.run"
enemiesUrl = baseUrl + "/Enemies"
req = requests.get(enemiesUrl)

pp = pprint.PrettyPrinter(indent=4)

soup = BeautifulSoup(req.text, "html.parser")

all_tables = soup.find_all("table")
crateria = all_tables[0]

print("len(all_tables):", len(all_tables))

table_headings = []

for th in crateria.find_all("th"):
    table_headings.append(th.string)

print("table_headings:")
pp.pprint(table_headings)

table_rows = []

# Splicing [1:] ignores first element of list
for tr in crateria.find_all("tr")[1:]:
    row = []
    for td in tr.find_all("td"):
        # print(td)
        row.append(td.string)
    table_rows.append(row)

print("table_rows:")
pp.pprint(table_rows)
