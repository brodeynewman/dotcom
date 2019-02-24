import AWS from 'aws-sdk';

AWS.config.update({ region: 'us-east-1' });

const SES = new AWS.SES({ apiVersion: '2010-12-01' });

const handleSendEmail = async (event, context) => {
  const { message, sender } = event.body;

  if (!message || !sender) {
    context.fail(JSON.stringify({
      statusCode: '400',
      body: JSON.stringify({ error: 'you messed up!' }),
      headers: {
        'Content-Type': 'application/json',
      },
    }));
  }

  const params = {
    Destination: {
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
    Source: 'brodeynewman@gmail.com',
  };

  // const email = await SES.sendEmail(params).promise();
};

export const handler = handleSendEmail;
