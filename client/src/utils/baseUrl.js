const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://furnish-test-deployment.vercel.app'
    : 'http://localhost:5000';

export default baseUrl;
