import React, { useState } from "react";
import "../../../style/Online.css";

import c1 from "../../../../imagealim/COD_MWIII_Multiplayer_Hero_Desktop_03.png";
import c3 from "../../../../imagealim/MWIII_Multiplayer_TAC-Stance.webp";
import c4 from "../../../../imagealim/MWIII_Multiplayer_Evolving-Loadouts.webp";
import c5 from "../../../../imagealim/MWIII_Multiplayer_Aftermarket-Parts.webp";
import c6 from "../../../../imagealim/core-machanics.png";
import c7 from "../../../../imagealim/multiplayer-1.png";

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
import { NavLink } from "react-router-dom";

const Online = () => {
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
              <img src={c1} alt="" />
            </div>
            <div className="onlineText">
              <div className="game">
                <p>СЕТЕВАЯ ИГРА</p>
              </div>
              <div className="game2">
                <h1>
                  ПОРА СВЕСТИ СТАРЫЕ СЧЕТЫ И ЗАВЕСТИ НОВЫХ <br /> ВРАГОВ
                </h1>
                <h4>
                  К 20-летию серии в Modern Warfare III собрана самая большая
                  коллекция сетевых карт в истории Call of Duty. В нее входят
                  как <br /> новинки, так и легендарные шедевры, известные всем
                  фанатам.
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
            <h1>
              В Modern Warfare III вас ждет бескомпромиссная сетевая игра с
              модернизированными картами из Modern Warfare 2 (2009), новыми
              режимами и видами оружия, классической игровой механикой и
              оригинальной системой тюнинга с использованием особых деталей.
            </h1>
            <div className="nomerTriler">
              <img
                src="https://i.ytimg.com/vi/AkX2DSM7h4I/maxresdefault.jpg"
                alt=""
              />
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
                          width="701"
                          height="413"
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
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="nomer3">
        <div className="container">
          <div className="nomer3">
            <h1>ПЕРЕНОС ДАННЫХ</h1>
            <p>
              Исполнители и оружие из Modern Warfare II будут перенесены в
              Modern Warfare III и следующую главу Call of Duty: Warzone™.
            </p>
            <button>получите информацию</button>
          </div>
        </div>
      </section>
      <section id="nomer4">
        <div className="container">
          <div className="nomer4">
            <div className="nomer4text">
              <h1>
                НОВЫЕ МЕХАНИКИ И ВОЗМОЖНОСТИ <br /> ПЕРСОНАЛИЗАЦИИ
              </h1>
              <p>
                Улучшите любимое оружие до максимального уровня, а потом
                дорабатывайте его с помощью особых <br /> деталей.{" "}
              </p>
            </div>
            <div className="nomerblock">
              <div className="nblog">
                <div className="nbox">
                  <h1>ТАКТИЧЕСКАЯ СТОЙКА​</h1>
                  <p>
                    Зачищайте помещения с помощью новой тактической стойки,
                    которая занимает промежуточное положение между прицельным
                    огнем и стрельбой от бедра. Приняв эту стойку сразу после
                    входа в узкий коридор или переполненную комнату, вы повысите
                    эффективность своей стрельбы и сможете выиграть бой.
                  </p>
                </div>
                <img src={c3} alt="" />
              </div>
              <div className="nblog">
                <img src={c4} alt="" />
                <div className="nbox">
                  <h1>ДИНАМИЧЕСКИЕ КОМПЛЕКТЫ​</h1>
                  <p>
                    Система создания классов в Modern Warfare III выходит на
                    совершенно новый уровень. Вы сможете собрать себе полный
                    комплект самой передовой военной экипировки, включающий в
                    себя не только оружие и снаряжение, но и перчатки,
                    тактический жилет и обувь. Все эти предметы влияют на
                    различные аспекты игрового процесса.
                  </p>
                </div>
              </div>

              <div className="nblog">
                <div className="nbox">
                  <h1>ОСОБЫЕ ДЕТАЛИ​​</h1>
                  <p>
                    Дополнительный набор функций персонализации, позволяющий
                    адаптировать оружие к вашему стилю игры и личным
                    предпочтениям. С помощью особых деталей вы сможете создавать
                    уникальные конфигурации и типы оружия, а также получать
                    доступ к новым испытаниям и путям карьеры.
                  </p>
                </div>
                <img src={c5} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="nomer5">
        <div className="container">
          <div className="nomer5">
            <h1 className="nomh1">ИЗМЕНЕНИЯ БАЗОВОЙ МЕХАНИКИ</h1>
            <div className="nom5block">
              <div className="num5box">
                <img src={c6} alt="" />
                <h1>ВОЗВРАЩЕНИЕ ИГРОВОЙ КЛАССИКИ</h1>
                <p>
                  В Modern Warfare III вас ждет классический игровой процесс с
                  такими элементами, как выбор карт путем голосования, красные
                  индикаторы выстрелов противника на мини-карте и выбор перков в
                  начале каждого боя. К примеру, перк "Кеды лазутчика" сделает
                  ваши шаги совершенно бесшумными! Вдобавок, здоровье участников
                  стандартной сетевой игры увеличено до 150 ед., что приводит к
                  более длительным огневым контактам. Это не относится к
                  хардкорным режимам.
                </p>
              </div>
              <div className="num5box">
                <img src={c7} alt="" />
                <h1>ДВИЖЕНИЕ В MODERN WARFARE III</h1>
                <p>
                  Маневрируя в сетевой игре Modern Warfare III, будьте готовы
                  применять следующие функции, влияющие на подвижность вашего
                  исполнителя: прерывание скольжения, не влияющее на тактический
                  бег; преждевременное прерывание перезарядки, позволяющее
                  мгновенно открыть ответный огонь; преодоление преград со
                  скоростью бега; стрельба в скольжении и сразу же после него;
                  более длительный тактический бег в зависимости от выбранного
                  оружия; и восстановление тактического бега во время обычного.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="gets1">
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

export default Online;
