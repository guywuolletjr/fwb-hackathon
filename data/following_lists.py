import json
import random

with open("dummydata.json") as f:
    data = json.load(f)
    print(type(data))
    handles = set()
    # loaded = json.loads(data)
    # print(loaded)
    for k, v in data.items():
        print(v["twitter"])
        handles.add(v["twitter"])
    new_json = {}
    for handle in handles:
        sample = random.sample(handles, random.randint(0, 15))
        new_json[handle] = [t for t in sample if t != handle]
    print(new_json)
with open('data.json', 'w+') as f:
    json.dump(new_json, f)
