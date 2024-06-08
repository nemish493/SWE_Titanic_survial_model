from fastapi import APIRouter
import pickle
from pydantic import BaseModel
import os
import numpy as np

router = APIRouter()

# Load models
models = {}
model_names = [
    'Decision Tree', 'Gaussian Naive Bayes', 'K-Nearest Neighbors', 
    'Logistic Regression', 'Perceptron', 'Random Forest', 
    'Stochastic Gradient Descent', 'Support Vector Machine'
]

for model_name in model_names:
    model_file = f'{model_name}.pkl'
    model_path = os.path.join(os.path.dirname(__file__), 'models', model_file)
    with open(model_path, 'rb') as file:
        models[model_name] = pickle.load(file)

# Define the request body
class Passenger(BaseModel):
    pclass: int
    sex: str
    age: float
    fare: float
    traveled_alone: bool
    embarked: str

def predict_survival(model_name: str, passenger: Passenger):
    if model_name not in models:
        return {"error": "Model not found"}

    model = models[model_name]
    
    # Prepare the input data for prediction
    input_data = [[
        passenger.pclass,
        1 if passenger.sex == 'male' else 0,
        passenger.age,
        passenger.fare,
        1 if passenger.traveled_alone else 0,
        {'Cherbourg': 0, 'Queenstown': 1, 'Southampton': 2}.get(passenger.embarked, 2)
    ]]
    
    # Get the prediction
    prediction = model.predict(input_data)
    
    # Return the result
    return {"survived": bool(prediction[0])}

@router.post("/predict/{model_name}")
async def predict(model_name: str, passenger: Passenger):
    return predict_survival(model_name, passenger)
