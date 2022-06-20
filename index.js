import getApp from './src/app.js';

const PORT = process.env.PORT || 3000;

(async () => {
  try {
    const app = getApp();

    app.listen(PORT, async () => {
      console.log(`App listening on port ${PORT}`)
    })

  } catch (error) {
    console.error('App failed to start ->', error)
  }
})();