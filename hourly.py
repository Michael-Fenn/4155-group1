import csv
building_count = 0
line_counter = 0
# opens the file path that the code reads
with open(r"C:\Users\Admin\Downloads\cleaned_09-25-2021 - Trimmed.csv") as file:
    # initialize variables needed for code
    # cleaned_09-25-2021 - Trimmed.csv
    f = open(r"C:\Users\Admin\Downloads\cleaned_09-25-2021 - Trimmed - hourcounter.csv", 'w')
    #j = open(r"C:\Users\Admin\Downloads\cleaned_09-25-2021 - Trimmed - HourlyAverage.csv", 'w')
    csvreader = csv.reader(file)
    character = ''
    # proxy name list to hold, needed it to solve problem
    building_name_list_prox = []
    building_name_list = []
    building_list_full = []
    row_counter = 0
    time = 0

    # inital for loop reads each line of the code
    for row in csvreader:
        row_string = str(row)
        position = row_string.index("Time") + 8
        string = row_string[position: (position + 2)]
        stringTime = str(string)
        # gets the index for where the Name section for each line is
        name = row_string.index("Name") + 8
        building_name = ""
        character = row_string[row_string.index("Name") + 8]
        # while character is an alphabet letter keep building the name to add to list
        while character.isalpha():
            character = row_string[name]
            # added a break check here to make sure that the building name being given is unique
            if character.isnumeric():
                break
            building_name = building_name + row_string[name]
            name += 1


        # abreviated the building name to further make sure the name is unique since buildings have different numbers
        # the loop above doesn't check after for numbers so some numbers get through
        building_name_abv = building_name[:4]
        building_name  = stringTime + " " + building_name

        # adds the building name to the full list of building names ( holds every building and not unique)
        building_list_full.append(building_name)

        # this is a seperate list maker that holds the unique building names
        if building_name_abv not in building_name_list_prox:
            building_name_list_prox.append(building_name_abv)

        if building_name not in building_name_list:
            building_name_list.append(building_name)



    res = {}

    # coun
    # ts the number of instances for each building
    file_number = 0
    #f.write("Hour: " + str(time))
    #f.write("\n")
    #stuck here
    for row in building_name_list:
        ph = row[0:2]
        phint = int(ph)
        building_entry = str(row)
        if phint == time:

            res[row] = building_list_full.count(row)
            building_hour_entry = str(row) + ": " + str(res[row])
            f.write(building_hour_entry)
            f.write("\n")

        if phint != time:
            #entry = str(res)
            #f.write(entry)
            #f.write("\n")
            time += 1
            #f.write("Hour: " + str(time))
            #f.write("\n")
            res = {}
            res[row] = building_list_full.count(row)
            building_hour_entry = str(row) + ": " + str(res[row])
            f.write(building_hour_entry)
            f.write("\n")

    #f.write(entry)

    #f.write(str(res))
    print(res)

    print(building_name_list)

