import Image from "next/image";
import style from "./page.module.css"
const mysql = require("mysql2");
  
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "midas",
  password: ""
});
connection.query("SELECT * FROM products",
  function(err, results, fields) {
   
    console.log(results)
    
});
connection.end();





export default function Home() {

  return (
    <div className={style.home}>
      <div className={style.titleblock}>
        <div>
          <p>Доставка готовой еды из фермерских продуктов!</p>
          <Image  src='/image/Union.png' width={184} height={184} alt="bg2" />
          <p>+7 (499) 841-67-29</p>
          <p>delivery@midas.rest</p>

          </div>
        <Image  src='/image/products/bg1.jpg' width={1170} height={680} alt="bg1" />
      </div>
      <div className={style.baner}>
        <h3>Стейк из лосося с овощами</h3>
        <p>Нежный стейк дикого лосося, пропитанный соком и ароматом слегка обжаренных фермерских овощей</p>

      </div>
      <h2 className={style.h2}>Популярные блюда</h2>
    </div>


  );
}
