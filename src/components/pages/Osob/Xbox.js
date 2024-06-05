import React, { useState } from "react";
import "../../style/Comp.css";

import comp1 from "../../../imageosob/Background-Markov-Xbox.png";

import comp3 from "../../../imageosob/MWIII_XBOX_Smart-Delivery.webp";
import comp4 from "../../../imageosob/MWIII_XBOX_Fast-Load.webp";
import comp2 from "../../../imageosob/MWIII_XBOX_Dolby-Audio.webp";

import bimg1 from "../../../image2/ps-icon.png";
import bimg2 from "../../../image2/xbox-icon.png";
import bimg3 from "../../../image2/bnet-icon.png";
import bimg4 from "../../../image2/steam-icon.png";
import { NavLink } from "react-router-dom";

const Comp = () => {
  const [isModal, setmodal] = useState(false);
  const [isModal1, setmodal1] = useState(false);
  return (
    <>
      <div id="comp">
        <div className="container">
          <div className="comp">
            <img src={comp1} alt="" />

            <div className="comptext">
              <h1>
                ПОГРУЗИТЕСЬ В МИР CALL OF DUTY®: MODERN <br /> WARFARE III®,
                ПОЛНОСТЬЮ ОПТИМИЗИРОВАННЫЙ <br /> ДЛЯ XBOX
              </h1>

              <NavLink to={"/register"}>
                <button>ПРИОБРЕТИТЕ MWIII</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <section id="fife">
        <div className="container">
          <div className="fife">
            {/* //// */}

            <div className="box1">
              <div className="image5">
                <img src={comp2} alt="" />
              </div>
              <div className="text1">
                <h1>ТЕХНОЛОГИЯ DOLBY AUDIO</h1>
                <p>
                  Погрузитесь в гущу сражений Modern Warfare III с технологией
                  Dolby Audio для Xbox Series X. Эта технология обеспечивает
                  богатый, насыщенный и мощный звук в любой ситуации, будь то
                  попытка побега из тюрьмы или бой с полчищами живых мертвецов.
                  Кристально чистый звук, автоматическая регулировка громкости,
                  объемное звучание и расширенный акустический диапазон позволят
                  вам в полной мере ощутить хаос каждого мгновения схватки.
                </p>
              </div>
            </div>

            <div className="box2">
              <div className="image5">
                <img src={comp3} alt="" />
              </div>
              <div className="text2">
                <h1>ТЕХНОЛОГИЯ SMART DELIVERY</h1>
                <p>
                  Благодаря технологии Smart Delivery для Xbox вы всегда будете
                  играть в наилучшую из доступных версий Modern Warfare III
                  независимо от того, к какому поколению относится ваша консоль.
                  Вам достаточно один раз купить Modern Warfare III, чтобы
                  всегда использовать оптимальную версию для своей консоли Xbox
                  без каких-либо дополнительных действий.
                </p>
              </div>
            </div>

            <div className="box3">
              <div className="image5">
                <img src={comp4} alt="" />
              </div>
              <div className="text3">
                <h1>ВЫСОКАЯ СКОРОСТЬ ЗАГРУЗКИ</h1>
                <p>
                  Благодаря беспрецедентно быстрой загрузке данных в Modern
                  Warfare III для Xbox Series X вы сможете больше играть и
                  меньше тратить время на ожидание. Помимо высокой скорости
                  загрузки, версия для Xbox Series X примечательна улучшенной
                  графикой и более стабильной частотой кадров вплоть до 120 к/c.
                </p>
              </div>
            </div>

            {/* /// */}
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
    </>
  );
};

export default Comp;
