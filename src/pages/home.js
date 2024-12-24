import styles from "../page.module.css";
import Header from "../app/components/Header"
import Footer from "../app/components/Footer";
import Body from "../app/components/Body";
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