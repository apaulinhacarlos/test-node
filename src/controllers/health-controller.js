import 'dotenv/config';

export default async (req, res) => {
  try {
    return res.status(200).json({
      service: process.env.SERVICE_NAME,
      environment: process.env.ENVIRONMENT,
      status: 'online'
    });
  } catch (error) {
    console.error('App failed ->', error)
  }
};