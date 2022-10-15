import json


class Importer:

    def __init__(self):
        self.dec = []
        pass

    def read_tasks(self):
        with open("taski.json", "r", encoding="utf-8") as file:
            self.dec = json.load(file)

        # TODO odczytaj plik i zdekoduj treść tutaj
        pass

    def get_tasks(self):
        return self.dec

        # TODO zwróć zdekodowane taski tutaj
        pass