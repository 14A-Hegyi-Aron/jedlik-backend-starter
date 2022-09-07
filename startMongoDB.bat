if not exist "c:\data\" mkdir "c:\data"
if not exist "c:\data\db" mkdir "c:\data\db"
"d:\MongoDB\mongod.exe" --dbpath="c:\data\db"