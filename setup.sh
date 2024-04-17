#!/bin/bash

sudo yum update -y
sudo yum install -y git

curl -sL https://rpm.nodesource.com/setup_20.x | sudo bash -
sudo yum install -y nodejs

if [ -d "./CarSalesAPI" ]; then
    rm -rf ./CarSalesAPI
fi
git clone https://github.com/Deiraheler/CarSalesAPI.git

# Navigate into the repository directory
cd CarSalesAPI || exit

# Install npm dependencies
npm install

# Start the server using npm start script
npm run start &
