#!/bin/sh

function echoBanner {
  echo "
  ----------------------------
  $1
  ----------------------------
  "
}

function push {
  aws s3 sync $PWD/dist s3://brodeynewman
}

echoBanner "Initiating deploy"

# mkdir ~/.aws
# cat > ~/.aws/credentials << EOF1
# [default]
# aws_access_key_id = $AWS_ACCESS_KEY
# aws_secret_access_key = $AWS_SECRET_TOKEN
# EOF1

push

echoBanner "Deploy process complete"
