import sys
import os
from unittest.mock import patch

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '../../')))
from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_read_root():
    response = client.get("/api")
    assert response.status_code == 200
    assert response.json() == {"message": "Hello World"}

@patch('main.requests.post')
def test_surv_or_not(mock_post):
    mock_response = {
        "survived": 1
    }
    mock_post.return_value.json.return_value = mock_response
    mock_post.return_value.status_code = 200

    passenger_data = {
        "pclass": 1,
        "sex": 1,
        "age": 29.0,
        "fare": 100.0,
        "traveled_alone": 0,
        "embarked": 1
    }
    response = client.post("/surv_or_not/test_model", json=passenger_data)
    assert response.status_code == 200
    assert response.json() == mock_response
