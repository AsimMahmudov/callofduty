import React, { useState } from "react";
import fon from "../../../image/COD_MW3_Logo.png";
import war from "../../../image/image_18_(2).png";
import war1 from "../../../image/image_19_(1).png";
import on from "../../../image/MWIII_S2_Season-2.webp";
import com1 from "../../../image/campaign-img.png";
import com2 from "../../../image/multiplayer-img.png";
import com3 from "../../../image/zombies-screenshot.png";
import com4 from "../../../image/top-features-img.png";
import com5 from "../../../image/zombie-ghost-img.png";

import cr from "../../../image2/vault-emblem.png";

import cr1 from "../../../image2/VE_Beauty_Nemesis-Operator-Pack_2x.png";
import cr2 from "../../../image2/VE_Beauty_Weapon-Vaults_2x.png";
import cr3 from "../../../image2/VE_Beauty_BlackCell_2x.png";
import cr4 from "../../../image2/VE_Beauty_Soap-Operator-Pack_2x.png";
import cr5 from "../../../image2/VE_Beauty_Soul.png";

import bimg1 from "../../../image2/ps-icon.png";
import bimg2 from "../../../image2/xbox-icon.png";
import bimg3 from "../../../image2/bnet-icon.png";
import bimg4 from "../../../image2/steam-icon.png";

import home from "../../../image/jpt-hero-desktop.jpg";

import "../../style/Home.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [isModal, setmodal] = useState(false);
  const [isModal1, setmodal1] = useState(false);
  const [trey, setTrey] = useState(false);

  const [trey1, setTrey1] = useState(false);
  const [trey2, setTrey2] = useState(false);
  const [trey3, setTrey3] = useState(false);
  const [trey4, setTrey4] = useState(false);
  const [trey5, setTrey5] = useState(false);
  const [trey6, setTrey6] = useState(false);

  const [asim, setAsim] = useState(false);

  return (
    <>
      <div id="home">
        <div className="container">
          <div className="homeimg">
            <img src={home} alt="" />
          </div>
          <div className="fon">
            <img src={fon} alt="" />
            <NavLink to={"/register"}>
              <button>ПРИОБРЕТИТЕ MWIII</button>
            </NavLink>
          </div>
        </div>
      </div>
      <section id="trey">
        <div className="container">
          <div className="trey">
            <img
              src=" https://i.ytimg.com/vi/paNdkV9RcSs/maxresdefault.jpg"
              alt=""
            />
            <h1 onClick={() => setTrey(true)}>
              <ion-icon name="play-circle-outline"></ion-icon>
            </h1>
          </div>
          {/* /////////////// */}

          <div
            className="modal-window-tery"
            style={{ display: trey ? "" : "none" }}
          >
            <div className="modal-content-trey">
              <div className="btn2">
                <button className="click" onClick={() => setTrey(false)}>
                  <ion-icon name="close-circle-outline"></ion-icon>
                </button>
                <div className="treyl">
                  <iframe
                    width="820"
                    height="500"
                    src="https://www.youtube.com/embed/I6nKvOx_jx8"
                    title="Season 2 Multiplayer Launch Trailer | Call of Duty: Warzone &amp; Modern Warfare III [UK]"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* //////////////// */}
        </div>
      </section>
      <section id="home2">
        <div className="container">
          <div className="war">
            <div className="ww">
              <img src={war1} alt="" />
            </div>
            <div className="box">
              <h1>ВОЙНА ИЗМЕНИЛАСЬ</h1>
              <p>
                В прямом продолжении легендарной игры Call of Duty: Modern
                Warfare II <br /> капитан Прайс и ОТГ-141 противостоят самой
                страшной угрозе. <br /> Ультранационалистический военный
                преступник Владимир Макаров <br /> распространяет свою власть по
                всему миру, заставляя ОТГ-141 сражаться <br /> как никогда
                раньше
              </p>
            </div>
            <div className="ww2">
              <img src={war} alt="" />
            </div>
          </div>
          <div className="fon"></div>
        </div>
      </section>
      <section id="outline">
        <div className="container">
          <div className="outline">
            <div className="image3">
              <img src={on} alt="" />
            </div>
            <div className="text">
              <h1>ПРИСОЕДИНЯЙТЕСЬ К СЕЗОНУ 2!</h1>
              <p>
                Сражайтесь в дополнительных режимах на нескольких новых сетевых
                картах. Улучшайте свою позицию во втором сезоне рейтинговой
                игры, участвуйте в новой операции режима "Зомби" и знакомьтесь с
                другими новинками сезона.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="fife">
        <div className="container">
          <div className="fife">
            {/* //// */}

            <div className="box1">
              <div className="image5">
                <img src={com1} alt="" />
              </div>
              <div className="text1">
                <h3>КАМПАНИЯ</h3>
                <h1>АДАПТИРУЙТЕСЬ ИЛИ УМРИТЕ В БОРЬБЕ С ГЛАВНОЙ УГРОЗОЙ</h1>
                <p>
                  Ведение боя подразумевает выбор - различные варианты
                  комплектов и пути прохождения миссии. В дополнение к фирменным
                  кинематографичным миссиям кампании в Call of Duty: Modern
                  Warfare III появились открытые боевые задания, предоставляющие
                  игроку еще больше возможностей для выбора.
                </p>
                <NavLink to={"/Maka"}>
                  <button>ПОДРОБНЕЕ</button>
                </NavLink>
              </div>
            </div>

            <div className="box2">
              <div className="image5">
                <img src={com2} alt="" />
              </div>
              <div className="text2">
                <h3>СЕТЕВАЯ ИГРА</h3>
                <h1>ПРИШЛО ВРЕМЯ СВЕСТИ СТАРЫЕ СЧЕТЫ И НАЧАТЬ НОВЫЕ</h1>
                <p>
                  Вас уже ждут 16 карт из оригинальной Modern Warfare 2 (2009),
                  адаптированных для новых режимов и элементов игрового
                  процесса. Вдобавок, в течение нескольких сезонов после выхода
                  игры в нее будет добавлено более 12 совершенно новых карт для
                  боев 6х6. Кроме того, игра включает в себя инновационные поля
                  сражений для режима "Наземная война" и грандиозную
                  реинкарнацию популярного режима "Война", впервые появившегося
                  в 2017 году в Call of Duty: WWII.
                </p>
                <NavLink to={"/Online"}>
                  <button>ПОДРОБНЕЕ</button>
                </NavLink>
              </div>
            </div>

            <div className="box3">
              <div className="image5">
                <img src={com3} alt="" />
              </div>
              <div className="text3">
                <h3>ЗОМБИ</h3>
                <h1>НОВЫЕ ЗОМБИ С ОТКРЫТЫМ МИРОМ</h1>
                <p>
                  Теперь вы сможете объединиться с другими отрядами, чтобы
                  выжить и сразиться с огромными полчищами нежити на самой
                  большой зомби-карте Call of Duty за всю историю игры. Call of
                  Duty: Modern Warfare III Zombies (MWZ) представляет новую
                  историю зомби Treyarch с миссиями, основными игровыми
                  особенностями зомби и секретами. Приготовьтесь к PvE-выживанию
                  в открытом мире против самых сильных врагов в истории Call of
                  Duty.​​
                </p>
                <NavLink to={"/Zombie"}>
                  <button>ПОДРОБНЕЕ</button>
                </NavLink>
              </div>
            </div>

            <div className="box4">
              <div className="image5">
                <img src={com4} alt="" />
              </div>
              <div className="text4">
                <h3>УЖЕ ДОСТУПНО В MODERN WARFARE III</h3>
                <h1>ОСОБЕННОСТИ ГЕЙМПЛЕЯ</h1>
                <p>
                  Перенесите инвентарь из MWII в MWIII, а также встречайте
                  возвращение классической мини-карты, голосования по карте,
                  перка бесшумного передвижения, обновленную механику
                  перемещения и многое другое.
                </p>
              </div>
            </div>

            <div className="box5">
              <div className="image5">
                <img src={com5} alt="" />
              </div>
              <div className="text5">
                <h3>МГНОВЕННАЯ РАЗБЛОКИРОВКА</h3>
                <h1>ОБЛИК ИСПОЛНИТЕЛЯ "ГОУСТ-ЗОМБИ"**</h1>
                <p>
                  Купите любое издание Modern Warfare III и получите облик
                  исполнителя "Гоуст-зомби" для Call of Duty: Modern Warfare
                  III, Call of Duty: Modern Warfare II и Call of Duty: Warzone.
                </p>
              </div>
            </div>

            {/* /// */}
          </div>
        </div>
      </section>
      <section id="gets">
        <div className="container">
          <div className="gets">
            <div className="images6">
              <img src={cr} alt="" />
            </div>
            <div className="block">
              <h1 className="ttt">ПОЛУЧИТЕ ЕЩЕ БОЛЬШЕ С VAULT EDITION</h1>
              <div className="block1">
                <div className="box6">
                  <img src={cr1} alt="" />
                  <div className="th">
                    <h2>НАБОР ИСПОЛНИТЕЛЕЙ "ВРАГИ"</h2>
                    <h4>ВКЛЮЧАЕТ ПРАЙСА, ГОУСТА, КОМЕНДАНТА И МАКАРОВА</h4>
                  </div>
                </div>

                <div className="box6">
                  <img src={cr2} alt="" />
                  <div className="th">
                    <h2>ДВА ОРУЖЕЙНЫХ СКЛАДА**</h2>
                  </div>
                </div>

                <div className="box6">
                  <img src={cr3} alt="" />
                  <div className="th">
                    <h2>ВКЛЮЧАЕТ БОЕВОЙ ПРОПУСК*** 1100 CP И 50 ЭТАПОВ</h2>
                  </div>
                </div>

                <div className="box6">
                  <img src={cr4} alt="" />
                  <div className="th">
                    <h2>НАБОР ИСПОЛНИТЕЛЯ СОУПА*</h2>
                    <h4>МГНОВЕННО ДОСТУПНО ДЛЯ ИГРЫ</h4>
                  </div>
                </div>

                <div className="box6">
                  <img src={cr5} alt="" />
                  <div className="th">
                    <h2>"КОЛЛЕКЦИОНЕР ДУШ"</h2>
                    <h4>
                      ЧЕРТЕЖ ОРУЖИЯ С ТРАССЕРАМИ МГНОВЕННО ДОСТУПНО ДЛЯ ИГРЫ
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            {/* //////// */}

            <div className="asim" style={{ display: asim ? "" : "none" }}>
              <div className=" alim">
                <div className="btn2">
                  <div className="ff">
                    <h1>VAULT EDITION</h1>
                    <button className="cick" onClick={() => setAsim(false)}>
                      <ion-icon name="close-circle-outline"></ion-icon>
                    </button>
                  </div>
                  <div className="saz"></div>
                  <h4>ВЫБЕРИТЕ ПЛАТФОРМУ</h4>
                  <div className="saz"></div>
                  {/* // */}
                  <div className="bl">
                    <div className="blo">
                      <img src={bimg1} alt="" />
                      <div className="bb1">
                        <h2>PLAYSTATION</h2>
                        <p>(PS5 + PS4)</p>
                      </div>
                      <h2 className="ic">
                        <a href="https://store.steampowered.com/agecheck/app/2519060/">
                          <ion-icon name="chevron-forward-sharp"></ion-icon>
                        </a>
                      </h2>
                    </div>

                    <div className="blo">
                      <img src={bimg2} alt="" />
                      <div className="bb2">
                        <h2>XBOX </h2>
                        <p>(SERIES X|S + ONE)</p>
                      </div>
                      <h2 className="ic">
                        <a href="https://store.steampowered.com/agecheck/app/2519060/">
                          <ion-icon name="chevron-forward-sharp"></ion-icon>
                        </a>
                      </h2>
                    </div>

                    <div className="blo">
                      <img src={bimg3} alt="" />
                      <div className="bb3">
                        <h2>BATTLE.NET </h2>
                        <p>(PC)</p>
                      </div>
                      <h2 className="ic">
                        <a href="https://store.steampowered.com/agecheck/app/2519060/">
                          <ion-icon name="chevron-forward-sharp"></ion-icon>
                        </a>
                      </h2>
                    </div>

                    <div className="blo">
                      <img src={bimg4} alt="" />
                      <div className="bb4">
                        <h2>STEAM</h2>
                        <p>(PC)</p>
                      </div>
                      <h2 className="ic">
                        <a href="https://store.steampowered.com/agecheck/app/2519060/">
                          <ion-icon name="chevron-forward-sharp"></ion-icon>
                        </a>
                      </h2>
                    </div>
                  </div>

                  {/* /// */}
                </div>
              </div>
            </div>

            {/* /////////// */}
          </div>
          <button className="btns" onClick={() => setAsim(true)}>
            КУПИТЬ VAULT EDITION
          </button>
        </div>
      </section>
      <section id="smi">
        <div className="container">
          <h1 className="smitext">ОФИЦИАЛЬНЫЕ СМИ</h1>
          <div className="smi">
            <div className="block3">
              <div className="box7">
                <img
                  src=" https://i.ytimg.com/vi/AkX2DSM7h4I/maxresdefault.jpg"
                  alt=""
                />
                <h1 onClick={() => setTrey1(true)}>
                  <ion-icon name="play-circle-outline"></ion-icon>
                </h1>
              </div>
              <div className="box7">
                {" "}
                <img
                  src="  https://imgs.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/body/mwiii/MWIII-CAMPAIGN-TRAILER-THUMBNAIL.jpg"
                  alt=""
                />
                <h1 onClick={() => setTrey2(true)}>
                  <ion-icon name="play-circle-outline"></ion-icon>
                </h1>
              </div>
            </div>

            <div className="block4">
              <div className="box8">
                {" "}
                <img
                  src="  https://i.ytimg.com/vi/ZWb6wCKA_Pk/maxresdefault.jpg"
                  alt=""
                />
                <h1 onClick={() => setTrey3(true)}>
                  <ion-icon name="play-circle-outline"></ion-icon>
                </h1>
              </div>
              <div className="box8">
                {" "}
                <img
                  src=" https://i.ytimg.com/vi/mHDEDDrGYvo/maxresdefault.jpg"
                  alt=""
                />
                <h1 onClick={() => setTrey4(true)}>
                  <ion-icon name="play-circle-outline"></ion-icon>
                </h1>
              </div>
              <div className="box8">
                {" "}
                <img
                  src=" https://mp1st.com/wp-content/uploads/2023/08/mw3-makarov.jpg"
                  alt=""
                />
                <h1 onClick={() => setTrey5(true)}>
                  <ion-icon name="play-circle-outline"></ion-icon>
                </h1>
              </div>
              <div className="box8">
                {" "}
                <img
                  src="  https://cdn.administrace.tv/2023/11/14/small/57ab9093c821fbe87cb794c835e35b9f.jpg"
                  alt=""
                />
                <h1 onClick={() => setTrey6(true)}>
                  <ion-icon name="play-circle-outline"></ion-icon>
                </h1>
              </div>
            </div>

            {/* /////////// */}

            {/* /// */}

            <div
              className="modal-window-tery1"
              style={{ display: trey1 ? "" : "none" }}
            >
              <div className="modal-content-trey1">
                <div className="btn2">
                  <button className="click" onClick={() => setTrey1(false)}>
                    <ion-icon name="close-circle-outline"></ion-icon>
                  </button>
                  <div className="treyl1">
                    <iframe
                      width="620"
                      height="300"
                      src="https://www.youtube.com/embed/cOHBmH4AMzQ"
                      title="Multiplayer Hype Trailer l Call of Duty: Modern Warfare III [UK]"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

            {/* /// */}

            <div
              className="modal-window-tery2"
              style={{ display: trey2 ? "" : "none" }}
            >
              <div className="modal-content-trey2">
                <div className="btn2">
                  <button className="click" onClick={() => setTrey2(false)}>
                    <ion-icon name="close-circle-outline"></ion-icon>
                  </button>
                  <div className="treyl2">
                    <iframe
                      width="620"
                      height="350"
                      src="https://www.youtube.com/embed/Obg3-7r7Y1c"
                      title="The Lobby | Call of Duty: Modern Warfare III [UK]"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

            {/* /// */}

            <div
              className="modal-window-tery3"
              style={{ display: trey3 ? "" : "none" }}
            >
              <div className="modal-content-trey3">
                <div className="btn2">
                  <button className="click" onClick={() => setTrey3(false)}>
                    <ion-icon name="close-circle-outline"></ion-icon>
                  </button>
                  <div className="treyl3">
                    <iframe
                      width="300"
                      height="180"
                      src="https://www.youtube.com/embed/a8Fph-HRjIk"
                      title="Multiplayer Trailer | Call of Duty: Modern Warfare III [UK]"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

            {/* /// */}

            <div
              className="modal-window-tery4"
              style={{ display: trey4 ? "" : "none" }}
            >
              <div className="modal-content-trey4">
                <div className="btn2">
                  <button className="click" onClick={() => setTrey4(false)}>
                    <ion-icon name="close-circle-outline"></ion-icon>
                  </button>
                  <div className="treyl4">
                    <iframe
                      width="300"
                      height="180"
                      src="https://www.youtube.com/embed/mHDEDDrGYvo"
                      title="Gameplay Reveal Trailer | Call of Duty: Modern Warfare III"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

            {/* /// */}

            <div
              className="modal-window-tery5"
              style={{ display: trey5 ? "" : "none" }}
            >
              <div className="modal-content-trey5">
                <div className="btn2">
                  <button className="click" onClick={() => setTrey5(false)}>
                    <ion-icon name="close-circle-outline"></ion-icon>
                  </button>
                  <div className="treyl5">
                    <iframe
                      width="300"
                      height="180"
                      src="https://www.youtube.com/embed/C_6J06wdgXY"
                      title="Modern Warfare III - Makarov Reveal Trailer"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

            {/* /// */}

            <div
              className="modal-window-tery6"
              style={{ display: trey6 ? "" : "none" }}
            >
              <div className="modal-content-trey6">
                <div className="btn2">
                  <button className="click" onClick={() => setTrey6(false)}>
                    <ion-icon name="close-circle-outline"></ion-icon>
                  </button>
                  <div className="treyl6">
                    <iframe
                      width="300"
                      height="180"
                      src="https://www.youtube.com/embed/dSzkg7t1kfY"
                      title="Campaign Launch Trailer | Call of Duty: Modern Warfare III [UK]"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

            {/* //////////// */}
          </div>
        </div>
      </section>
      <section id="buy">
        <div className="container">
          <div className="buy">
            <div className="tttt">
              <h1>КУПИТЬ CALL OF DUTY: MODERN WARFARE III</h1>
            </div>
            <div className="block2">
              <div className="box9">
                <h2>VAULT EDITION</h2>
                <img
                  src="https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/global/play-now-module/mw3/mw3-vault-edition-banner.jpg"
                  alt=""
                />
                <h5 className="ss">Доступно для</h5>

                <div className="text6">
                  <h5>PS5+4 </h5>
                  <h5>XBOX X|S+ONE </h5>
                  <h5>BATTLE.NET </h5>
                  <h5>STEAM</h5>
                </div>
                <hr />
                <li>Call of Duty: Modern Warfare III</li>
                <li>Облик исполнителя "Гоуст-зомби"*</li>
                <li>Чертеж оружия с трассерами "Коллекционер душ"*</li>
                <li>Набор исполнителей "Враги"</li>
                <li>2 оружейных склада**</li>
                <li>Черный сектор (1 сезон) + 30 дополнительных этапов***</li>
                <button onClick={() => setmodal1(true)}>Выбор</button>
              </div>

              <div className="box9">
                <h2>CROSS-GEN / СТАНДАРТ</h2>
                <img
                  src="https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/global/play-now-module/mw3/mw3-standard-edition-banner.jpg"
                  alt=""
                />
                <h5 className="ss">Доступно для</h5>
                <div className="text6">
                  <h5>PS5+4 </h5>
                  <h5>XBOX X|S+ONE </h5>
                  <h5>BATTLE.NET </h5>
                  <h5>STEAM</h5>
                </div>
                <hr />
                <li>Call of Duty: Modern Warfare III</li>
                <li>Облик исполнителя "Гоуст-зомби"*</li>
                <li>Чертеж оружия с трассерами "Коллекционер душ"*</li>
                <li>Набор исполнителей "Враги"</li>
                <li>2 оружейных склада**</li>
                <li>Черный сектор (1 сезон) + 30 дополнительных этапов***</li>

                <button onClick={() => setmodal(true)}>Выбор</button>
              </div>
            </div>

            {/* /////// modal-window ////// */}

            <div
              className="modal-window"
              style={{ display: isModal ? "" : "none" }}
            >
              <div className="modal-content">
                <div className="mu">
                  <div className="btn2">
                    <div className="ff">
                      <h1>VAULT EDITION</h1>
                      <button className="cick" onClick={() => setmodal(false)}>
                        <ion-icon name="close-circle-outline"></ion-icon>
                      </button>
                    </div>
                    <div className="saz"></div>
                    <h4>ВЫБЕРИТЕ ПЛАТФОРМУ</h4>
                    <div className="saz"></div>
                    {/* // */}
                    <div className="bl">
                      <div className="blo">
                        <img src={bimg1} alt="" />
                        <div className="bb1">
                          <h2>PLAYSTATION</h2>
                          <p>(PS5 + PS4)</p>
                        </div>
                        <h2 className="ic">
                          <a href="https://store.steampowered.com/agecheck/app/2519060/">
                            <ion-icon name="chevron-forward-sharp"></ion-icon>
                          </a>
                        </h2>
                      </div>

                      <div className="blo">
                        <img src={bimg2} alt="" />
                        <div className="bb2">
                          <h2>XBOX </h2>
                          <p>(SERIES X|S + ONE)</p>
                        </div>
                        <h2 className="ic">
                          <a href="https://store.steampowered.com/agecheck/app/2519060/">
                            <ion-icon name="chevron-forward-sharp"></ion-icon>
                          </a>
                        </h2>
                      </div>

                      <div className="blo">
                        <img src={bimg3} alt="" />
                        <div className="bb3">
                          <h2>BATTLE.NET </h2>
                          <p>(PC)</p>
                        </div>
                        <h2 className="ic">
                          <a href="https://store.steampowered.com/agecheck/app/2519060/">
                            <ion-icon name="chevron-forward-sharp"></ion-icon>
                          </a>
                        </h2>
                      </div>

                      <div className="blo">
                        <img src={bimg4} alt="" />
                        <div className="bb4">
                          <h2>STEAM</h2>
                          <p>(PC)</p>
                        </div>
                        <h2 className="ic">
                          <a href="https://store.steampowered.com/agecheck/app/2519060/">
                            <ion-icon name="chevron-forward-sharp"></ion-icon>
                          </a>
                        </h2>
                      </div>
                    </div>

                    {/* /// */}
                  </div>
                </div>
              </div>
            </div>

            <div
              className="modal-window"
              style={{ display: isModal1 ? "" : "none" }}
            >
              <div className="modal-content1">
                <div className="mu">
                  <div className="btn2">
                    <div className="ff">
                      <h1>VAULT EDITION</h1>
                      <button className="cick" onClick={() => setmodal1(false)}>
                        <ion-icon name="close-circle-outline"></ion-icon>
                      </button>
                    </div>
                    <div className="saz"></div>
                    <h4>ВЫБЕРИТЕ ПЛАТФОРМУ</h4>
                    <div className="saz"></div>
                    {/* // */}
                    <div className="bl">
                      <div className="blo">
                        <img src={bimg1} alt="" />
                        <div className="bb1">
                          <h2>PLAYSTATION</h2>
                          <p>(PS5 + PS4)</p>
                        </div>
                        <h2 className="ic">
                          <a href="https://store.steampowered.com/agecheck/app/2519060/">
                            <ion-icon name="chevron-forward-sharp"></ion-icon>
                          </a>
                        </h2>
                      </div>

                      <div className="blo">
                        <img src={bimg2} alt="" />
                        <div className="bb2">
                          <h2>XBOX </h2>
                          <p>(SERIES X|S + ONE)</p>
                        </div>
                        <h2 className="ic">
                          <a href="https://store.steampowered.com/agecheck/app/2519060/">
                            <ion-icon name="chevron-forward-sharp"></ion-icon>
                          </a>
                        </h2>
                      </div>

                      <div className="blo">
                        <img src={bimg3} alt="" />
                        <div className="bb3">
                          <h2>BATTLE.NET </h2>
                          <p>(PC)</p>
                        </div>
                        <h2 className="ic">
                          <a href="https://store.steampowered.com/agecheck/app/2519060/">
                            <ion-icon name="chevron-forward-sharp"></ion-icon>
                          </a>
                        </h2>
                      </div>

                      <div className="blo">
                        <img src={bimg4} alt="" />
                        <div className="bb4">
                          <h2>STEAM</h2>
                          <p>(PC)</p>
                        </div>
                        <h2 className="ic">
                          <a href="https://store.steampowered.com/agecheck/app/2519060/">
                            <ion-icon name="chevron-forward-sharp"></ion-icon>
                          </a>
                        </h2>
                      </div>
                    </div>

                    {/* /// */}
                  </div>
                </div>
              </div>
            </div>

            {/* ///////// */}
            <div className="pp">
              <p>
                *Для получения вам потребуется игра Call of Duty®: Modern
                Warfare® III / Call of Duty®: Warzone™. Эту игру следует
                приобрести или загрузить отдельно. Предложением необходимо
                воспользоваться до 10 ноября 2024 г.
              </p>
              <p>
                **Дизайн склада оружия ограничен содержимым склада оружия при
                запуске.
              </p>
              <p>
                ***Боевой пропуск, его этапы и очки Call of Duty будут доступны
                в игре Modern Warfare III после выхода первого боевого пропуска
                для данной игры. Активация боевого пропуска распространяется
                только на один сезон боевого пропуска Modern Warfare III.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="news">
        <div className="container">
          <h1 className="ttttt">СВЕЖИЕ НОВОСТИ</h1>

          <div className="news">
            <div className="box10">
              <img
                src="https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/patchnotes/hero/mw3/s2/MWIII-S2-PATCHNOTES-WZ-TOUTA.jpg"
                alt=""
              />
              <h3>
                Call of Duty: Warzone Season 2 <br /> Patch Notes
              </h3>
            </div>
            <div className="box10">
              <img
                src="https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/patchnotes/hero/mw3/s2/MWIII-S2-PATCHNOTES-MWIII-TOUTA.jpg"
                alt=""
              />
              <h3>
                Call of Duty: Modern Warfare III <br /> Season 2 Patch Notes
              </h3>
            </div>
            <div className="box10">
              <img
                src="https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/mwiii/MWIII-S2-BATTLEPASS-TOUT.jpg"
                alt=""
              />
              <h3>
                Intel Drop: Season 2 BlackCell, <br /> Battle Pass, and Bundles
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
