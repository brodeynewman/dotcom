#!/bin/sh

function echoBanner {
  echo "
  ----------------------------
  $1
  ----------------------------
  "
}

function push {
  aws s3 sync ${TRAVIS_BUILD_DIR}/dist s3://$S3_PROD_BUCKET
}

echoBanner "Initializing deploy"

mkdir .aws
cat > .aws/credentials << EOF1
[default]
aws_access_key_id = $AWS_ACCESS_KEY
aws_secret_access_key = $AWS_SECRET_TOKEN
EOF1

push

echoBanner "Deploy process complete"
