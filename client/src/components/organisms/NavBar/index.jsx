import React from "react";
import { A as Link } from "hookrouter";
import styles from "./styles.module.scss";

import * as help from "utils/helpers";
import Dropdown from "atoms/Dropdown";
import Button from "atoms/Button";
import SearchBar from "molecules/SearchBar"
import Logo from "images/Logo_ML_x2.png";

const cx = help.cxBind(styles);

const NavBar = () => {
  return (
    <header>
      <nav className={cx(["nav"])}>
        <div className={cx(["wrapper"])}>
          <Link href="/">
            <img src={Logo} width="100px" alt="" aria-label="Ir al contenido principal" />
          </Link>
          <SearchBar />
          <Dropdown buttonName="Menu">
            <Button link="/404">404</Button>
          </Dropdown>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
