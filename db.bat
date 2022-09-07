@echo off
chcp 65001
"d:\MongoDB\mongoimport.exe" --uri="mongodb://localhost:27017/ingatlan" --collection=kategoriak --drop --file=db_1.json --jsonArray
"d:\MongoDB\mongoimport.exe" --uri="mongodb://localhost:27017/ingatlan" --collection=ingatlanok --drop --file=db_n.json --jsonArray
"d:\MongoDB\mongoimport.exe" --uri="mongodb://localhost:27017/ingatlan" --collection=identitycounters --drop --file=db_counters.json --jsonArray
echo PLEASE KILL AND RESTART YOUR BACKEND SERVER DEV TASK IF RUNNING!