import React, { useState } from "react";

import f5 from "../../../../imagealim/MWIII_Zombies_Story-Missions.webp";
import f4 from "../../../../imagealim/MWIII_Zombies_Open-World.webp";
import f1 from "../../../../imagealim/zombies-hero-bg-hd.png";
import f3 from "../../../../imagealim/purplezombies_transparent.png";
import f2 from "../../../../imagealim/MWIII_Multiplayer_Aftermarket-Parts.webp";

import cr from "../../../../image2/vault-emblem.png";
import cr1 from "../../../../image2/VE_Beauty_Nemesis-Operator-Pack_2x.png";
import cr2 from "../../../../image2/VE_Beauty_Weapon-Vaults_2x.png";
import cr3 from "../../../../image2/VE_Beauty_BlackCell_2x.png";
import cr4 from "../../../../image2/VE_Beauty_Soap-Operator-Pack_2x.png";
import cr5 from "../../../../image2/VE_Beauty_Soul.png";

import bimg1 from "../../../../image2/ps-icon.png";
import bimg2 from "../../../../image2/xbox-icon.png";
import bimg3 from "../../../../image2/bnet-icon.png";
import bimg4 from "../../../../image2/steam-icon.png";

import "../../../style/Zombie.css";
import { NavLink } from "react-router-dom";

const Zombie = () => {
  const [asim, setAsim] = useState(false);

  const [trey, setTrey] = useState(false);

  const [isModal, setmodal] = useState(false);
  const [isModal1, setmodal1] = useState(false);

  return (
    <>
      <section id="online">
        <div className="container">
          <div className="online">
            <div className="onlineImg">
              <img src={f1} alt="" />
            </div>
            <div className="onlineText">
              <div className="game">
                <p>ЗОМБИ</p>
              </div>
              <div className="game222">
                <h1>
                  ОПЕРАЦИЯ "РИГЕЛЬ": НОВЫЙ РЕЖИМ <br /> "ЗОМБИ" В ОТКРЫТОМ МИРЕ
                </h1>
                <h4>
                  Теперь вы сможете объединиться с другими отрядами, чтобы
                  выжить и сразиться с огромными полчищами нежити на самой
                  большой зомби-карте Call of Duty за всю историю игры.
                </h4>
                <NavLink to={"/register"}>
                  <button>ПРИОБРЕТИТЕ MWIII</button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="nomer2">
        <div className="container">
          <div className="nomer2">
            <div className="Hh1">
              <h1 className="nH1">
                Зону отчуждения заполонили орды зомби, но они здесь не одни.
                Ультраправый оружейный магнат Виктор Захаев и его частная армия
                "Терминус Эвентус" прочесывают зону на предмет ресурсов и
                одновременно ищут нечто, способное вызывать катастрофические
                разрушения в мировом масштабе.
              </h1>
            </div>
            <div className="nomerTriler">
              <img src={f2} alt="" />
              <div className="pleyTriler">
                <button onClick={() => setTrey(true)} className="plt">
                  <ion-icon name="caret-forward-circle-outline"></ion-icon>
                </button>

                <div
                  className="modal-window-tery"
                  style={{ display: trey ? "" : "none" }}
                >
                  <div className="modal-content-trey">
                    <div className="btn2">
                      <button className="click2" onClick={() => setTrey(false)}>
                        <ion-icon name="close-circle-outline"></ion-icon>
                      </button>
                      <div className="treyl222">
                        <iframe
                          width="680"
                          height="380"
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
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="zombi">
        <div className="zombie">
          <div className="z-img">
            <img className="zm" src={f3} alt="" />
          </div>
          <div className="container">
            <div className="zombi">
              <div className="zombitext">
                <p>
                  05:00 - Зона отчуждения операции "Ригель" <br /> Автор доклада
                  - Эйитайо Дэвис (Клинок), "КорТак"
                </p>
                <p>Мертвецы повсюду. </p>
                <p>
                  "Терминус Эвентус", карманная армия Захаева, тоже на <br />{" "}
                  каждом углу, но даже ее бронированные грузовики и
                  крупнокалиберные пулеметы не способны остановить эту волну
                  нежити.
                </p>
                <p>
                  Зачем Захаев обрекает на гибель своих людей, а если мы не
                  справимся, то и весь мир? Несомненно, он хочет получить
                  какие-то здешние ресурсы, но какой ценой?{" "}
                </p>
                <p>
                  Мы повторяем директиву операции, словно мантру: "Ничто не
                  входит, ничто не выходит". Но с каждым днем нежити становится
                  все больше, а нас - все меньше.
                </p>
                <p>[[Остальное удалено цензурой]]</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="battle">
        <div className="container">
          <div className="battle">
            <div className="b-block">
              <div className="b-text">
                <h1>СРАЖЕНИЯ С ЗОМБИ В ОТКРЫТОМ МИРЕ</h1>
                <p>
                  Отражайте атаки зомби невиданных масштабов, применяя новое
                  оружие, классические усиления и потрясающие сюрпризы. На самой
                  большой карте режима "Зомби" в истории Call of Duty опасность
                  подстерегает за каждым поворотом. Как далеко вы сможете пройти
                  в этом хаосе?
                </p>
              </div>
              <div className="b-img">
                <img src={f4} alt="" />
              </div>
            </div>

            <div className="b-block">
              <div className="b-img">
                <img src={f5} alt="" />
              </div>
              <div className="b-text">
                <h1>СЮЖЕТНЫЕ ОПЕРАЦИИ</h1>
                <p>
                  Режим "Зомби" в Modern Warfare - это специальные операции,
                  зрелищные видеоролики и любопытные "пасхалки", связанные с
                  тайнами истории о Темном эфире. Участвуйте во многочасовых
                  операциях, раскрывая секреты Урзыкстана и загадочного
                  параллельного мира.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="gets2">
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
    </>
  );
};

export default Zombie;
