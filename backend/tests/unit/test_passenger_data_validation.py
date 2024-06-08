import pytest
from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_validate_passenger_data():
    response = client.post("/validate", json={
        "PClass": "First",
        "Sex": "Male",
        "Age": 30,
        "Fare": 100,
        "Traveled_Alone": "Yes",
        "Embarked": "Cherbourg"
    })
    assert response.status_code == 200
    assert response.json() == {"valid": True}

def test_invalid_age():
    response = client.post("/validate", json={
        "PClass": "First",
        "Sex": "Male",
        "Age": 150,  # Invalid age
        "Fare": 100,
        "Traveled_Alone": "Yes",
        "Embarked": "Cherbourg"
    })
    assert response.status_code == 422
