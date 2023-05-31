#!/bin/bash
# This is a shell script to run MongoDB on Linux
# Create the data directory if it does not exist
if [ ! -d "/data" ]; then
 mkdir /data
fi
# Create the db directory if it does not exist
if [ ! -d "/data/db" ]; then
 mkdir /data/db
fi
# Check if MongoDB 5.0 is installed and run it with the dbpath option
if [ -f "/usr/bin/mongod" ]; then
 /usr/bin/mongod --dbpath=/data/db
fi
# Check if MongoDB 6.0 is installed and run it with the dbpath option
if [ -f "/opt/mongodb/bin/mongod" ]; then
 /opt/mongodb/bin/mongod --dbpath=/data/db
fi