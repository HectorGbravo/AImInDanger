// se deben declarar las variables env dentro de windows con set en la terminal
// set AZURE_CUSTOM_VISION_PREDICTION_KEY=0f9a0186312d46c78293f4cb85e3e70b
// set CUSTOM_VISION_ENDPOINT=https://animalespeligro-prediction.cognitiveservices.azure.com/

'use strict';

const fs = require('fs');
const util = require('util');

const PredictionApi = require("@azure/cognitiveservices-customvision-prediction");
const msRest = require("@azure/ms-rest-js");

const setTimeoutPromise = util.promisify(setTimeout);

let predictionKeyVar = 'AZURE_CUSTOM_VISION_PREDICTION_KEY';

if (!process.env[predictionKeyVar]) {
    throw new Error('please set/export the following environment variable: ' + predictionKeyVar);
}
const predictionKey = process.env[predictionKeyVar];
// Add your Custom Vision endpoint to your environment variables.
const predictionEndpoint = process.env['CUSTOM_VISION_ENDPOINT'];

const predictor_credentials = new msRest.ApiKeyCredentials({ inHeader: { "Prediction-key": predictionKey } });
console.log(predictor_credentials)
// This is referenced from the root of the repo.
const sampleDataRoot = "/AImInDanger/src/assets/images/";
const publishIterationName = "Predice1";
const projectId = "d68b4c13-7679-4462-9906-880dbd10e16c";
//const publishIterationName = "classifyModel";

async function sample() {

    // Step 5. Prediction
    const predictor = new PredictionApi.PredictionAPIClient(predictor_credentials, predictionEndpoint);

    //const testFile = fs.readFileSync(`${sampleDataRoot}ballena01.jpg`);
    const testFile = fs.readFileSync(`turtle-test.jpg`);

    const results = await predictor.classifyImage(projectId, publishIterationName, testFile);

    // Step 6. Show results
    console.log("Results:");
    results.predictions.forEach(predictedResult => {
        console.log(`\t ${predictedResult.tagName}: ${(predictedResult.probability * 100.0).toFixed(2)}%`);
    });
}

sample();