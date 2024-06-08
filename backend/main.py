from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from predict import predict_survival

app = FastAPI()

class Passenger(BaseModel):
    pclass: int
    sex: str
    age: float
    fare: float
    traveled_alone: bool
    embarked: str

@app.post("/api/predict/{model_name}")
def predict(model_name: str, passenger: Passenger):
    try:
        result = predict_survival(model_name, passenger)
        return result
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@app.get("/api")
def read_root():
    return {"message": "Hello World"}

@app.post("/submit-form")
def submit_form(data: dict):
    # This is a stub for the submit form endpoint
    return {"message": "Form submitted successfully"}
