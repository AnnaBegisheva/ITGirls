import './App.css';
import './components/Hero.css';
import Hero from './components/Hero';


const heroes = [
  {
    photo: "assets/batman.jpg",
    name: "Batman",
    universe: "DC",
    alterEgo: "Брюс Уэйн",
    powers: "интеллект, обширные познания, знания боевых искусств, ловкость",
    occupation: "борец с преступностью, филантроп, миллиардер",
    friends: "Робин, Бэтгерл",
    description: "по популярности человек-летучая мышь может сравниться только с Суперменом. Его образ кажется очень мистическим и мрачным: черный костюм с развевающимся плащом, устрашающий Бэтмобиль, штаб-квартира в сырой пещере. Его биография настолько же темна, как и образ. В детстве у него на глазах убили родителей, и юный Брюс поклялся всеми силами защищать родной Готэм от преступности. Брюс знаменит, несмотря на пожилой возраст: первый выпуск с его участием вышел аж в 1939 году. С каждым годом популярность только крепнет. Большую роль в этом сыграли экранизации: «Темный рыцарь», сериал «Готэм» и несколько одноименных картин. Главная причина такой любви среди фанатов — мысль, что каждый может стать Бэтменом. Если подумать, это один из немногих героев, кто добился своего положения за счет ума и упорства, а не за счет мутаций."
}, {
    photo: "assets/superman.jpg",
    name: "Супермен",
    universe: "DC",
    alterEgo: "Кларк Кент",
    powers: "непробиваемость, суперсила, полет, самоисцеление, суперзрение и суперслух, классный костюм",
    occupation: "борец за справедливость",
    friends: "собака Крипто",
    description: "полная противоположность своему противнику Бэтмену. Если Брюс Уэйн был простым человеком и стал героем, то Супермен героем родился, но вынужден был изображать выходца из бедной канзасской семьи. Последний представитель планеты Криптон был отправлен на Землю прямо перед тем, как его родина была уничтожена. Супермен — некий хамелеон от мира комиксов. В своем первом выпуске в 1938 году он был просто человек-огромный мускул, который умел только разбивать стены и выбивать двери. Позднее к его умениям добавилась способность летать. Дальше у многочисленных воплощений Кларка, от подростка в «Тайнах Смоллвиля» до величественного «Человека из стали», разный уровень и количество суперспособностей. Неизменным остается его слабое место — уязвимость к Криптониту, радиоактивному веществу с родной планеты."
}, {
    photo: "assets/wonderwoman.jpg",
    name: "Чудо-женщина",
    universe: "DC",
    alterEgo: "Диана Принс",
    powers: "сверхчеловеческая сила искорость, выносливость, полет",
    occupation: "супергероиня, секретарь-референт",
    friends: "Лига Справедливости, Бэтмен, Супермен",
    description: "пора бы разбавить эту мужскую вечеринку по-настоящему крутой девчонкой. Принцесса-амозонка родилась на мистическом острове Темескира, расположенном в центре Бермудского треугольника, где пропадают самолеты. Свое настоящее имя — Диана — она получила в честь древнегреческой богини охоты, а суперспособности — от богини любви Афродиты. Растили героиню в исключительно женском обществе, поэтому Чудо-женщина часто появляется в культуре как символ феминизма. У Дианы есть супер-снаряжение: лассо истины и тиара. Первое было сковано богом огня Гефестом, и оно никогда не промахивается. Человек, попавший в его петлю, неизбежно расскажет свои секреты, вспомнит забытое и даже подчинится приказам. Тиара же работает как метательное оружие, способное рассечь что угодно. Корона со звездой в центре символизирует патриотизм американской героини и служит стильным аксессуаром"
}
]

function App() {
  return (
    <div className="App">
      {
        heroes.map((hero) =>
<Hero photo={hero.photo} name={hero.name} universe={hero.universe} alterEgo={hero.alterEgo} powers={hero.powers} occupation={hero.occupation} friends={hero.friends} description={hero.description}></Hero>
        )
      }
    </div>
  );
}

export default App;
