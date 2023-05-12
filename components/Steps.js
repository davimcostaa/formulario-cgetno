import styles from './Steps.module.css'
import { AiOutlineUser, AiOutlineStar } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import { TfiWrite } from "react-icons/tfi";
import { BiMoney } from "react-icons/bi";

const Steps = ({currentStep}) => {
  return (
    <div className={styles.steps}>
      <div className={styles.stepActive} >
        <AiOutlineUser />
        <p> Identificação </p>
      </div>
      <div className={currentStep >= 1 ? styles.stepActive : styles.step}>
        <TfiWrite />
        <p> Descrição Geral </p>
      </div>
      <div className={currentStep >= 2 ? styles.stepActive : styles.step}>
        <BiMoney />
        <p> Orçamento e Execução de Recursos </p>
      </div>
    </div>
  )
}

export default Steps