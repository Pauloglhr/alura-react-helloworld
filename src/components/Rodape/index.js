import styles from './Rodape.module.css';
import { ReactComponent as SvgImage } from 'assets/marca_registrada.svg';

const Rodape = () => {
    return(
        <footer className={styles.rodape}>
            <SvgImage />

            Desenvolvido por Alura.
        </footer>
    )
};

export default Rodape;