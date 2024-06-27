import pytest
import requests

MAIN_BACKEND_URL = "http://127.0.0.1:8080"
MODEL_BACKEND_URL = "http://127.0.0.1:8000"

def test_main_backend_to_model_backend():
    # Ensure both servers are running before this test
    passenger_data = {
        "pclass": 1,
        "sex": 0,
        "age": 29,
        "fare": 100,
        "traveled_alone": 1,
        "embarked": 2
    }
    model_name = "random_forest"

    response = requests.post(f"{MAIN_BACKEND_URL}/surv_or_not/{model_name}", json=passenger_data)
    assert response.status_code == 200
    assert "survived" in response.json()

    model_response = requests.post(f"{MODEL_BACKEND_URL}/surv/{model_name}", json=passenger_data)
    assert model_response.status_code == 200
    assert response.json()["survived"] == model_response.json()["survived"]
