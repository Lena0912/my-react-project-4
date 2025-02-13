import sambirImg from "/src/img/svit-maluka-sambir.jpg";
import khustImg from "/src/img/svit-maluka-khust.jpg";
import novojavorivskImg from "/src/img/svit-maluka-novojavorivsk.jpg";

export default function Home() {
  return (
    <main>
      <h1>Про компанію</h1>
      <img src="https://via.placeholder.com/960x240" alt="" />
      <p>
        «Світ Малюка» - це мережа супермаркетів, що пропонує широкий асортимент
        товарів для дітей від народження та до шкільного віку. Ми поділяємо Вашу
        турботу та бажання забезпечити діточок усім необхідним найвищого
        ґатунку, а також дбаємо про демократичну цінову політику і привабливі
        акційні пропозиції для батьків!{" "}
      </p>
      <p>У «Світі Малюка» на Вас чекають:</p>
      <ul>
        <li>товари для немовлят</li>
        <li>дитяче харчування</li>
        <li>предмети гігієни та дитяча косметика</li>
        <li>одяг</li>
        <li>аксесуари</li>
        <li>іграшки для дітей різного віку</li>
      </ul>
      <p>
        Завітайте у «Світ Малюка» та скористайтесь усіма перевагами: широкий
        асортимент, висока якість, привабливі ціни, вигідні акції й розпродажі.
        Для наших постійних клієнтів – гнучка система знижок, участь в конкурсах
        і розіграшах цінних призів.
      </p>
      <p>Адреси магазинів «Світ Малюка»:</p>
      <ul>
        <li>Самбір, вул. Хмельницького, 1</li>
        <img src={sambirImg} alt="Svit Maluka Sambir" width="300" />
        <li>Хуст, Майдан Незалежності, 16</li>
        <img src={khustImg} alt="Svit Maluka Khust" width="300" />
        <li>Новояворівськ, вул. Шевченка, 10</li>
        <img src={novojavorivskImg} alt="Svit Maluka Novojavorivsk" width="300" />
      </ul>
    </main>
  );
}
