// se deben declarar las variables env dentro de windows con el comando 'set/export' en la terminal
// Ejemplos de declaración en la terminal:
// set AZURE_CUSTOM_VISION_PREDICTION_KEY=0f9a0186312d46c78293f4cb85e3e70b
// set CUSTOM_VISION_ENDPOINT=https://animalespeligro-prediction.cognitiveservices.azure.com/

// importación de librerías y declaraciones
'use strict';
const fs = require('fs');
const util = require('util');
const PredictionApi = require("@azure/cognitiveservices-customvision-prediction");
const msRest = require("@azure/ms-rest-js");
const setTimeoutPromise = util.promisify(setTimeout);

// Add your Custom Vision Prediction Key to your environment variables.
let predictionKeyVar = 'AZURE_CUSTOM_VISION_PREDICTION_KEY';
if (!process.env[predictionKeyVar]) {
    throw new Error('please set/export the following environment variable: ' + predictionKeyVar);
}
const predictionKey = process.env[predictionKeyVar];

// Add your Custom Vision endpoint to your environment variables.
let predictionEndPointVar = 'CUSTOM_VISION_ENDPOINT';
if (!process.env[predictionEndPointVar]) {
    throw new Error('please set/export the following environment variable: ' + predictionEndPointVar);
}
const predictionEndpoint = process.env[predictionEndPointVar];

// Autorize credentials, data path, Iteration name and Project Id for the API Predictor
const predictor_credentials = new msRest.ApiKeyCredentials({ inHeader: { "Prediction-key": predictionKey } });
const publishIterationName = "Predice1";
const projectId = "d68b4c13-7679-4462-9906-880dbd10e16c";

// This is referenced from the root of the repo.
const sampleDataRoot = "/AImInDanger/src/assets/images/";

// Async Function to predict the sea animal in Danger

async function dangerSeaAnimal() {

    // Init the Prediction
    const predictor = new PredictionApi.PredictionAPIClient(predictor_credentials, predictionEndpoint);

    //const testFile = fs.readFileSync(`${sampleDataRoot}ballena01.jpg`);
    const testFile = fs.readFileSync(`turtle-test.jpg`);

    const results = await predictor.classifyImage(projectId, publishIterationName, testFile);

    // Show results
    console.log("Results:");
    
    const resultPrediction = results.predictions;
    
    const resultDanger = resultPrediction.filter(nombre => nombre.probability > 0.6);
        
    const animalProbability = resultDanger.map(numero => numero.probability);
    const animalInDanger = resultDanger.map(animal => animal.tagName);
    
    console.log(resultDanger);
    console.log(animalProbability);
    console.log(animalInDanger);
    
//    results.predictions.forEach(predictedResult => {
//        console.log(`\t ${predictedResult.tagName}: ${(predictedResult.probability * 100.0).toFixed(2)}%`);
//    });
}

dangerSeaAnimal();
