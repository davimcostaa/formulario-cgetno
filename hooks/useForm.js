import {useState} from 'react';

const useForm = (steps) => {

const [currentStep, setCurrenteStep] = useState(0);

function changeStep(i, e) {

    if (e) e.preventDefault();

    if(i < 0 || i >= steps.length) return

    setCurrenteStep(i)

}

  return {
    currentStep,
    currentComponent: steps[currentStep],
    changeStep,
    isLastStep: currentStep + 1 === steps.length ? true : false,
    isFirstStep: currentStep === 0 ? true : false
  };
}

export default useForm