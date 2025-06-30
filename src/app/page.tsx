import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";
import CarList from "./components/CarList";


export default function Home() {
  return(
    <>
      <CarList />
    </>
  )
}
