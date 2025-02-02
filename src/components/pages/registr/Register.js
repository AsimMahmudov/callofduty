import React, { useState } from "react";
import "../../style/Register.css";
import "../../style/Home.css";

import reg from "../../../image/jpt-playnow-desktop-bg.jpg";
import red2 from "../../../image/mw3-logo.png";

import bimg1 from "../../../image2/ps-icon.png";
import bimg2 from "../../../image2/xbox-icon.png";
import bimg3 from "../../../image2/bnet-icon.png";
import bimg4 from "../../../image2/steam-icon.png";

import regim from "../../../image2/ps-bundle.jpg";

const Register = () => {
  const [isModal, setmodal] = useState(false);
  const [isModal1, setmodal1] = useState(false);

  return (
    <>
      <div id="register">
        <div className="container">
          <div className="register">
            <img src={reg} alt="" />
            <div className="reg2">
              <img src={red2} alt="" />
              <div className="red2text">
                <div className="ee"></div>
                <h1>SELECT YOUR EDITION</h1>
                <div className="ee"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="buy1">
        <div className="container">
          <div className="buy1">
            <div className="tttt">
              {/* <h1>КУПИТЬ CALL OF DUTY: MODERN WARFARE III</h1> */}
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
      <section id="regpl">
        <div className="container">
          <div className="regpl">
            <div className="regpltext">
              <h2>
                PLAYSTATION®5 CONSOLE <br /> – CALL OF DUTY: MODERN WARFARE III
                BUNDLE
              </h2>
              <a href="https://direct.playstation.com/en-us/buy-consoles/playstation5-console-call-of-duty-modern-warfare-iii-bundle-model-group-slim">
                View Details
              </a>
            </div>
            <div className="regplimg">
              <img src={regim} alt="" />
            </div>
          </div>
          <p className="regp">
            © 2023 Sony Interactive Entertainment Inc. All rights reserved.
            Design and specifications are subject to change without notice.{" "}
            <br /> Vertical stand sold separately.
          </p>
        </div>
      </section>
    </>
  );
};

export default Register;
