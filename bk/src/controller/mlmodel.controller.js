const axios = require("axios");

async function predictCrop(req, res) {
  try {
    // Get data from frontend
    const data = req.body;

    // Send to FastAPI
    const response = await axios.post("http://0.0.0.0:8000/predict", data);

    // Return ML response
    res.status(200).json(response.data);
  } catch (err) {
    console.log(err.response?.data || err.message);

    res.status(500).json({
      msg: "ML model request failed",
      error: err.response?.data || err.message,
      console: err.response?.data || err.message,
    });
  }
}

module.exports = {
  predictCrop,
};
