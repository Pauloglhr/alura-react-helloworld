import styles from './Menu.module.css';
import MenuLink from '../MenuLink';

const Menu = () => {
    return (
        <header className={styles.navegacao}>
            <MenuLink to='/'>
                Início
            </MenuLink>
            <MenuLink to='/sobremim'>
                Sobre Mim
            </MenuLink>
        </header>
    );
}

export default Menu;