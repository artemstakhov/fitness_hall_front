import React from "react";
import styles from "./Trainers.module.css";

const TrainersList = ({ list, toggleTrainer }) => {
  console.log(Array.isArray(list));
  return (
    <div className={styles.trainerList}>
      <div className={styles.trainers}>
        {list.map((item) => (
          <button
            onClick={()=>toggleTrainer(item)}
            className={styles.trainer}
          >{`${item.name} ${item.surname}`}</button>
        ))}
      </div>
    </div>
  );
};

const TrainerInfo = ({trainer}) => {
    return (
        <div className={styles.trainerInfo}>
          <h2 className={styles.name}> {`${trainer.name} ${trainer.surname}`}</h2>
          <h3 className={styles.specialization}>
            ТРЕНЕР БОЙОВИХ МИСТЕЦТВ ТА ФІТНЕСУ
          </h3>
          <p className={styles.specializationDesc}>
            Майстер спорту України з боксу. Неодноразовий призер і переможець
            змагань з боксу і фітнесу.
          </p>
          <h2 className={styles.cv}>РЕЗЮМЕ</h2>
          <p className={styles.specializationDesc}>
            Життя пов'язане з спортом вже 24 роки. Пропонує Вам: Бойові
            мистецтва, Силовий тренінг, Функціональний тренінг, Тренування: для
            зменшення ваги, для набору м'язової маси, для виділення рельєфу і
            формування фігури без нарощування м'язів, техніка підтримання
            досягнутих результатів.
          </p>
          <h2 className={styles.contacts}>КОНТАКТИ</h2>
          <div className={styles.contactsWrapper}>
            <h3 className={styles.contact}>
              andriy.batkovich@coach.bubblegym.ua
            </h3>
            <h3 className={styles.contact}>andriy.b@instagram.com</h3>
          </div>
        </div>
    )
}

const Trainers = () => {
  const [trainers, setTrainers] = React.useState([]);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [selectedTrainer, setSelectedTrainer] = React.useState(null);

  const toggleTrainer = trainer => setSelectedTrainer(trainer);


  React.useEffect(() => {
    fetch("http://localhost:8000/api/coaches")
      .then((res) => res.json())
      .then(
        (result) => {
          // console.log(result);
          setTrainers(result);
        },
        (error) => {
          console.log(error);
        }
      )
      .then(setIsLoaded(true));
  }, []);

  React.useEffect(() => {
    if (trainers.length && selectedTrainer === null) {
        setSelectedTrainer(trainers[0]);
    }
  }, [trainers, selectedTrainer]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.profile}></div>
        {selectedTrainer && <TrainerInfo trainer={selectedTrainer}/>}

        {isLoaded && trainers.length && <TrainersList toggleTrainer={toggleTrainer} list={trainers} />}
      </div>
      <button className={styles.submit}>ОФОРМИТИ АБОНЕМЕНТ</button>
    </div>
  );
};

export default Trainers;
