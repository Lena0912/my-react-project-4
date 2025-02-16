import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import loyaltyImg from "/src/img/loyal.png";
import giftCardImg from "/src/img/giftCardImg.png";
import exclusiveImg from "/src/img/exclusiveImg.png";
import pakunokMalukaImg from "/src/img/pakunokMalukaImg.jpg";


export default function About () {
  return (
    <main>
      <h1>Пакунок Малюка</h1>

      <p>Програма для майбутніх мам</p>
      <p>Ми - партнери програми «Пакунок Малюка»! 👩‍🍼</p>
      <p>
        ➡️ Використовуй державну грошову виплату у мережі магазинів «Світ
        Малюка»! 🧡 А також! ➖ За кожну витрачену тисячу гривень із «Пакунку
        Малюка» отримуй додаткову ПОДАРУНКОВУ картку номіналом 100 грн на
        покупки!
      </p>
      <img src={pakunokMalukaImg} alt="Програма лояльності" width="150" />
      <ul style={{ listStyle: "none", display: "flex", gap: "20px" }}>
        <li>
          <Link to="mission">
            <img src={loyaltyImg} alt="Програма лояльності" width="150" />
            <p>Програма лояльності</p>
          </Link>
        </li>
        <li>
          <Link to="team">
            <img src={giftCardImg} alt="Подарункова карта" width="150" />
            <p>Подарункова карта</p>
          </Link>
        </li>
        <li>
          <Link to="reviews">
            <img src={exclusiveImg} alt="Ексклюзивні пропозиції" width="150" />
            <p>Для майбутніх мам</p>
          </Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
}
