import { useState } from 'react';
import styles from '../src/App.module.css';
import poweredImage from '../src/assets/powered.png';
import arrowLeftImage from '../src/assets/leftarrow.png';
import { levels, calculateImc, Level } from './helpers/imc';
import { GridItem } from './components/GridItem';

const App = () =>{
  const [heigthField, setHeigthField] = useState(0);
  const [weighthField, setWeighthField] = useState(0);
  const [toShow, setToShow] = useState<Level | null>(null);

  const handleCalculateButton = () =>{
    if(heigthField && weighthField){
      setToShow(calculateImc(heigthField, weighthField));
    }else{
      alert('Digite todos os campos');
    }
  }

  const handleBackButton = () => {
    setToShow(null);
    setHeigthField(0);
    setWeighthField(0);
  }

  return (
    <div className={styles.main}>    
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt="Logo IMC React App" width={150}/>
        </div>
      </header>
      {/* Begin Container */}
      <div className={styles.container}>
          <div className={styles.leftSide}>
            <h1>Calcule seu IMC</h1>
            <p>IMC é a sigla para Índice de Massa Cóporea, parâmetro adotado pela OMG(Organização Mundial de Saúde) para 
              calcular o peso ideal de cada pessoa.
            </p>
            <input
            placeholder='Digite a sua Altura. Ex: 1.5(em Métros)'
            type="number" 
            value={heigthField > 0 ? heigthField : ''} 
            onChange={e => setHeigthField(parseFloat(e.target.value))} disabled={toShow ? true : false}/>
            {/* --- */}
            <input
            placeholder='Digite o seu Peso. Ex: 75.5(em Kg)'
            type="number" 
            value={weighthField > 0 ? weighthField : ''} 
            onChange={e => setWeighthField(parseFloat(e.target.value))} disabled={toShow ? true : false}/>
            
            <button onClick={handleCalculateButton} disabled={toShow ? true : false}>Calcular</button>
          </div>
          

          {/* Begin RightSide */}
          <div className={styles.rightSide}>
            {!toShow &&
              <div className={styles.grid}>
                {levels.map((item, key) => (
                  <GridItem key={key} item={item} />
                ))}
              </div>
            }
            {toShow &&
              <div className={styles.rightBig}>
                <div className={styles.rightArrow} onClick={handleBackButton}>
                  <img src={arrowLeftImage} alt="" width={25}/>
                </div>
                <GridItem item={toShow}/>
              </div>
            }
          </div>
      </div>
      {/* End Containr */}
    </div>
  );
}

export default App;
