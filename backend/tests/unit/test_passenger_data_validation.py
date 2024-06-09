import sys
import os
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '../..')))

import pytest
from pydantic import BaseModel
from predict import predict_survival

class MockPassenger(BaseModel):
    pclass: int
    sex: str
    age: float
    fare: float
    traveled_alone: bool
    embarked: str

@pytest.fixture
def sample_passenger():
    return MockPassenger(
        pclass=1,
        sex='male',
        age=22,
        fare=72.5,
        traveled_alone=True,
        embarked='Cherbourg'
    )

def test_predict_survival_decision_tree(sample_passenger):
    result = predict_survival('Decision Tree', sample_passenger)
    assert 'survived' in result
    assert isinstance(result['survived'], bool)

def test_predict_survival_random_forest(sample_passenger):
    result = predict_survival('Random Forest', sample_passenger)
    assert 'survived' in result
    assert isinstance(result['survived'], bool)
