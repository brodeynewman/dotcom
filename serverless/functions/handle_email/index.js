import AWS from 'aws-sdk';

AWS.config.update({ region: 'us-east-1' });

const SES = new AWS.SES({ apiVersion: '2010-12-01' });

const handleSendEmail = async (event, context, callback) => {
  console.log(event);

  const params = {
    Destination: {
      CcAddresses: [
        process.env.EMAIL,
      ],
      ToAddresses: [
        process.env.EMAIL,
      ],
    },
    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: 'HTML_FORMAT_BODY',
        },
        Text: {
          Charset: 'UTF-8',
          Data: 'TEXT_FORMAT_BODY',
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: 'An email was sent from "brodeynewman.com"',
      },
    },
    Source: 'SENDER_EMAIL_ADDRESS',
    ReplyToAddresses: [
      'EMAIL_ADDRESS',
    ],
  };

  const email = await SES.sendEmail(params).promise();

  return callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Expecto Petronum',
      input: event,
    }),
  });
};

export const handler = handleSendEmail;
