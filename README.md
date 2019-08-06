# Personal Website

You can visit this website at the following url: www.charlesverleyen.me

## Tech used

Javascript, HTML, CSS and PHP. Various libraries of these languages have been used (more details in the node_modules).

## How to deploy

gcloud builds submit --tag eu.gcr.io/training-190916/cv-website 

gcloud config set run/region europe-west1

gcloud beta run deploy --image eu.gcr.io/training-190916/cv-website --platform managed 