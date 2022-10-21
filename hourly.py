import csv
building_count = 0
with open(r"C:\Users\Admin\Downloads\cleaned_09-25-2021 - Trimmed.csv") as file:
    csvreader = csv.reader(file)
    character = ''

    building_name_list_prox = []
    building_name_list = []
    building_list_full = []

    for row in csvreader:
        row_string = str(row)
        name = row_string.index("Name") + 8
        building_name = ""
        character = row_string[row_string.index("Name") + 8]

        while character.isalpha():
            character = row_string[name]
            if character.isnumeric():
                break
            building_name = building_name + row_string[name]
            name += 1

        building_name_abv = building_name[:4]


        building_list_full.append(building_name)


        if building_name_abv not in building_name_list_prox:
            building_name_list_prox.append(building_name_abv)
            building_name_list.append(building_name)

    res ={}

    for row in building_list_full:
        res[row] = building_list_full.count(row)

    print(res)
    print(building_name_list)