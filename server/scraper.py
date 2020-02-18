# Web scraper to gather data from a wiki page about enemies from Super Metroid.
# Implemented using the BeautifulSoup and requests libraries.
from bs4 import BeautifulSoup
from os import path
import csv
import pprint
import requests


def get_html(filename, url):
    if path.isfile(filename):
        file = open(filename, "r")
        return BeautifulSoup(file, "html.parser")
    else:
        req = requests.get(url)
        file = open(filename, "w+")
        file.write(req.text)
        return BeautifulSoup(req.text, "html.parser")


def get_table_rows(table, location):
    table_rows = [[th.string.strip() for th in table.find_all("th")]]
    table_rows[0].append("Location")
    baseUrl = "https://wiki.supermetroid.run"

    for tr in table.find_all("tr"):
        row = []

        for td in tr.find_all("td"):
            image = td.find("img")
            name = td.find_all("a")
            value = None

            if image:
                value = baseUrl + image["src"]
            elif name:
                value = name[0].string.strip()
            else:
                text = td.string.strip()
                try:
                    value = float(text)
                except:
                    value = text
            
            row.append(value)

        if row:
            row.append(location)

        table_rows.append(row)

    return [row for row in table_rows if row]


# Refactor to not mutate table state
def assign_data_to_tables(tables, html_tables, table_names):
    for i in range(len(table_names)):
        table = html_tables[i]
        name = table_names[i]
        tables[name] = get_table_rows(table, name)


def write_to_csv(tables):
    for name in tables.keys():
        with open("./data/" + name + ".csv", mode="w") as file:
            writer = csv.writer(file, delimiter=",")
            writer.writerows(tables.get(name))


def main():
    pp = pprint.PrettyPrinter(indent=4)
    soup = get_html(filename="sm_enemeies.html",
                    url="https://wiki.supermetroid.run/Enemies")
    html_tables = soup.find_all("table")
    table_names = ["Crateria", "Brinstar", "Wrecked Ship", "Maridia",
                   "Norfair", "Tourian"]
    # boss_tables = {"Bosses", "Bosses (Projectiles)"}

    tables = {name: [] for name in table_names}

    assign_data_to_tables(tables, html_tables, table_names)

    write_to_csv(tables)

    print("\ntables:")
    pp.pprint(tables)


main()
