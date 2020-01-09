# Web scraper to gather data from a wiki page about enemies from Super Metroid.
# Implemented using the BeautifulSoup and requests libraries.
from bs4 import BeautifulSoup
import os.path as path
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


def get_table_rows(table):
    table_rows = [[th.string for th in table.find_all("th")]]
    baseUrl = "https://wiki.supermetroid.run"

    # for tr in table.find_all("tr"):
    #     row = [td.string for td in tr.find_all("td")]
    #     table_rows.append(row)

    for tr in table.find_all("tr"):
        row = []

        for td in tr.find_all("td"):
            image = td.find("img")
            name = td.find_all("a")

            if image:
                image = image["src"]
                row.append(baseUrl + image)
            elif name:
                name = name[0]
                row.append(name.string)
            else:
                row.append(td.string)

        table_rows.append(row)

    return [row for row in table_rows if row]


# Refactor to not mutate table state
def assign_data_to_tables(tables, html_tables):
    for i, name in enumerate(tables.keys()):
        table = html_tables[i]
        tables[name] = get_table_rows(table)


def main():
    pp = pprint.PrettyPrinter(indent=4)
    soup = get_html(filename="sm_enemeies.html",
                    url="https://wiki.supermetroid.run/Enemies")
    html_tables = soup.find_all("table")
    table_names = ("Crateria", "Brinstar", "Wrecked Ship", "Maridia",
                   "Norfair", "Tourian", "Bosses", "Bosses (Projectiles)")

    tables = {name: [] for name in table_names}

    assign_data_to_tables(tables, html_tables)

    print("\ntables:")
    pp.pprint(tables)


main()
