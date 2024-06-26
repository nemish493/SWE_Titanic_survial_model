import sys
import os
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '../../')))
from main import Passenger ,app
from pydantic import ValidationError
from unittest.mock import patch
import pytest
from fastapi.testclient import TestClient


def test_passenger_model_invalid():
    invalid_passenger = {
        "pclass": "invalid",  # pclass should be int
        "sex": 1,
        "age": 29.0,
        "fare": 100.0,
        "traveled_alone": 0,
        "embarked": 1
    }
    with pytest.raises(ValidationError):
        Passenger(**invalid_passenger)

def test_passenger_model_valid():
    valid_passenger = {
        "pclass": 1,
        "sex": 1,
        "age": 29.0,
        "fare": 100.0,
        "traveled_alone": 0,
        "embarked": 1
    }
    passenger = Passenger(**valid_passenger)
    assert passenger.pclass == 1
    assert passenger.sex == 1
    assert passenger.age == 29.0
    assert passenger.fare == 100.0
    assert passenger.traveled_alone == 0
    assert passenger.embarked == 1

@pytest.fixture
def client():
    return TestClient(app)

def test_read_root(client):
    
    response = client.get("/api") # Send Get requesrt to  Server
    
    #
    assert response.status_code == 200  # Success code checking
    assert response.json() == {"message": "Hello World"} # testing the json response