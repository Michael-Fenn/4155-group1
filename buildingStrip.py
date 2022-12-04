import csv
with open(r"non-covid\Friday.txt") as file:
    f = open(r"non-covid\Fridaystripped.txt", 'w')
    csvreader = csv.reader(file)
    valid_buildings = ["Unio", "Cato", "Wood", "Bioi", "Pros", "PORT", "StuA", "Came", "Burs", "Fret", "Colv", "Cone",
                       "AtkiG", "UREC", "SVDH"]
    for row in csvreader:
        row_string = str(row)

        for substring in valid_buildings:
            if substring in row_string:
                strippedString = row_string.strip('["[')
                strippedString = strippedString.strip('"]')
                strippedString = strippedString.strip("'")
                strippedString = strippedString.strip('["')
                print(strippedString)
                f.write(strippedString + "\n")

