import { Link, useLocation } from "react-router-dom";
import styles from "./MenuLink.module.css";

const MenuLink = ({ children, to }) => {
  const location = useLocation();
  console.log(location);
  
  
  return (
    <Link
      className={`
             ${styles.link}
             ${location.pathname === to ? styles.linkDestacado : ""}
            `}
      to={to}
    >
      {children}
    </Link>
  );
};

export default MenuLink;
