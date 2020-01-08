from bs4 import BeautifulSoup
import requests

url = "https://wiki.supermetroid.run/Enemies"
req = requests.get(url)

soup = BeautifulSoup(req.text, "html.parser")

# print(soup.prettify())

all_tables = soup.find_all("table")

# print(all_tables[0])
print("len(all_tables):", len(all_tables))

table_headings = []

for table in all_tables:
    table_headings.append(table.find("thead"))
    print("table:\n", table)

print("table_headings:\n", table_headings)
