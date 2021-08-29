import csv
import json
import codecs
import random
 
 
# Function to convert a CSV to JSON
# Takes the file paths as arguments
def make_json(csvFilePath, jsonFilePath):
     
    # create a dictionary
    data = {}
     
    # Open a csv reader called DictReader
    with codecs.open(csvFilePath, encoding='utf-8') as csvf:
        csvReader = csv.DictReader(csvf)
         
        # Convert each row into a dictionary
        # and add it to data
        for rows in csvReader:
             
            # Assuming a column named 'No' to
            # be the primary key
            key = rows['discord_id']
            data[key] = rows
            data[key]["member"] = (random.random() < 0.75)
 
    # Open a json writer, and use the json.dumps()
    # function to dump data
    with codecs.open(jsonFilePath, 'w', encoding='utf-8') as jsonf:
        jsonf.write(json.dumps(data, indent=4))
         
# Driver Code
 
# Decide the two file paths according to your
# computer system
csvFilePath = r'hackathon_dummydata.csv'
jsonFilePath = r'dummydata.json'
 
# Call the make_json function
make_json(csvFilePath, jsonFilePath)