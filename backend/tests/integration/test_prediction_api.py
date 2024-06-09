import sys
import os
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '../..')))

import pytest
from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_read_root():
    response = client.get("/api")
    assert response.status_code == 200
    assert response.json() == {"message": "Hello World"}

def test_submit_form():
    response = client.post("/submit-form", json={
        "dropdown1": "Option 1A",
        "dropdown2": "Option 2A",
        "dropdown3": "Option 3A",
        "slider1": 30,
        "slider2": 100
    })
    assert response.status_code == 200
    assert response.json() == {"message": "Form submitted successfully"}

def test_predict_survival():
    response = client.post("/api/predict/Random Forest", json={
        "pclass": 1,
        "sex": "male",
        "age": 22,
        "fare": 72.5,
        "traveled_alone": True,
        "embarked": "Cherbourg"
    })
    assert response.status_code == 200
    assert 'survived' in response.json()
    assert isinstance(response.json()['survived'], bool)
