import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header"
import Footer from "./components/Footer";
import Body from "./components/Body";

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}
