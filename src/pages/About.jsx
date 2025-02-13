import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import loyaltyImg from "/src/img/loyal.png";
import giftCardImg from "/src/img/giftCardImg.png";
import exclusiveImg from "/src/img/exclusiveImg.png";


export default function About () {
  return (
    <main>
      <h1>Спеціальні пропозиції</h1>
      <p>Програма для майбутніх мам</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
        laborum amet ab cumque sit nihil dolore modi error repudiandae
        perspiciatis atque voluptas corrupti, doloribus ex maiores quam magni
        mollitia illum dolor quis alias in sequi quod. Sunt ex numquam hic
        asperiores facere natus sapiente cum neque laudantium quam, expedita
        voluptates atque quia aspernatur saepe illo, rem quasi praesentium
        aliquid sed inventore obcaecati veniam? Nisi magnam vero, dolore
        praesentium totam ducimus similique asperiores culpa, eius amet
        repudiandae quam ut. Architecto commodi, tempore ut nostrum voluptas
        dolorum illum voluptatum dolores! Quas perferendis quis alias excepturi
        eaque voluptatibus eveniet error, nulla rem iusto?
      </p>
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
            <p>Ексклюзивні пропозиції</p>
          </Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
}
