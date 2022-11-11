import csv

# place file path after " r" "
with open(r"C:\Users\Admin\Downloads\cleaned_09-25-2021.csv") as file:
    csvreader = csv.reader(file)
# make new file to hold the trimmed data values and add path here 
    f = open(r"C:\Users\Admin\Downloads\Testrewrite1.txt", 'w')

    line = 0
    for row in csvreader:
        row_string = str(row)
        if row_string[18].isnumeric() == False:
            connection_month = row_string[2:5]
            connection_date = row_string[6:8]
            connection_time = row_string[9:17]
            building_name = ""
            building_start_index = 18

            while row_string[building_start_index] != "-":
                building_name = building_name + row_string[building_start_index]
                building_start_index += 1
            connection_Entry = {
                "Month": connection_month,
                "Date": connection_date,
                "Time": connection_time,
                "Building Name": building_name
            }
            print(row_string)
            entry = str(connection_Entry)
            f.write(entry)
            f.write("\n")

            print(connection_Entry)
            line += 1
        else:
            connection_month = row_string[2:5]
            connection_date = row_string[6:8]
            connection_time = row_string[9:17]
            ext = row_string.index("AP")
            building_name = ""
            if "EXT" in row_string:
                building_start_index = ext + 7
                while row_string[building_start_index] != "-":
                    building_name = building_name + row_string[building_start_index]
                    building_start_index += 1
            else:
                building_start_index = ext + 3
                while row_string[building_start_index] != "-":
                    building_name = building_name + row_string[building_start_index]
                    building_start_index += 1
            connection_Entry = {
                "Month": connection_month,
                "Date": connection_date,
                "Time": connection_time,
                "Building Name": building_name
            }
            print(row_string)
            entry = str(connection_Entry)
            f.write(entry)
            f.write("\n")
            print(connection_Entry)
            line += 1

   
