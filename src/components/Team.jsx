import umovyPodarKarty from "/src/img/umovyPodarKarty.jpg";
import podarunkovaKarta from "/src/img/podarunkovaKarta.jpg";
export default function Team() {
  return (
    <section>
      <h2>Подарункова карта</h2>
      <p>
        Подарункова картка від мережі магазинів Світ Малюка – ідеальний
        подарунок!»
      </p>
      <p>
        Якщо ви не знаєте що подарувати дитині - ви можете придбати подарункові
        карти на зручну для вас суму:
      </p>
      <img src={podarunkovaKarta} alt="podarunkovaKarta" />
      <p>Також Подарункову карту можна отримати  під час розіграшів в соцмережах,
        в садочках та школах як нагороду, під час публічних свят та акцій в магазинах мережі</p>
      <img src={umovyPodarKarty} alt="umovyPodarKarty" />
    </section>
  );
}
