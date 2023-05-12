import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FiSend } from "react-icons/fi";
import UserForm from "@/components/UserForm";
import { ReviewForm } from "@/components/ReviewForm";
import Thanks from "@/components/Thanks";
import Steps from "@/components/Steps";
import useForm from "@/hooks/useForm";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {
  const formComponents = [<UserForm />, <ReviewForm />, <Thanks />];

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } = useForm(formComponents);

  return (
    <>
      <Head>
        <title>Formulário E-PAT</title>
      </Head>

      <div className={styles.app}>
        <div className={styles.title}> 
            <h2> Formulário E-PAT 2023 </h2>
        </div>

        <div className={styles.formContainer}>
          <Steps currentStep={currentStep} />
          <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
            <div className={styles.inputsContainer}>{currentComponent}</div>
            <div className="actions">
              {!isFirstStep && (
                <button
                  type="button"
                  onClick={() => changeStep(currentStep - 1)}
                >
                  <GrFormPrevious />
                  <span> Voltar </span>
                </button>
              )}

              {isLastStep ? (
                <button type="submit">
                  <span> Enviar </span>
                  <FiSend />
                </button>
              ) : (
                <button type="submit">
                  <span> Avançar </span>
                  <GrFormNext />
                </button>
              )}
              
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
