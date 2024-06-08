import pytest
from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_prediction_endpoint():
    response = client.post("/predict", json={
        "PClass": "First",
        "Sex": "Male",
        "Age": 30,
        "Fare": 100,
        "Traveled_Alone": "Yes",
        "Embarked": "Cherbourg"
    })
    assert response.status_code == 200
    assert "prediction" in response.json()
