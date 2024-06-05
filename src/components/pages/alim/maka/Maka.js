import React, { useState } from "react";
import "../../../style/Online.css";
import "../../../style/Maka.css";
import "../../../style/Zombie.css";

import c1 from "../../../../imagealim/campaign-desktop-background.png";
import c4 from "../../../../imagealim/MWIII_Campaign_Join-Fight.webp";
import c5 from "../../../../imagealim/MWIII_Campaign_Open-Combat.webp";
import c3 from "../../../../imagealim/MWIII_Campaign_Story-Continues.webp";

import bimg1 from "../../../../image2/ps-icon.png";
import bimg2 from "../../../../image2/xbox-icon.png";
import bimg3 from "../../../../image2/bnet-icon.png";
import bimg4 from "../../../../image2/steam-icon.png";
import { NavLink } from "react-router-dom";

const Online = () => {
  const [isModal, setmodal] = useState(false);
  const [isModal1, setmodal1] = useState(false);

  const [trey, setTrey] = useState(false);

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
                <p>КАМПАНИЯ</p>
              </div>
              <div className="game2">
                <h1>
                  МЕНЯЙТЕСЬ ИЛИ УМРИТЕ В БОЮ С НАИВЫСШЕЙ <br /> УГРОЗОЙ
                </h1>
                <h4>
                  ОТГ-141 нужна ваша помощь в борьбе с самым опасным врагом.
                  Начните кампанию прямо сейчас.
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
              В прямом продолжении культовой игры Call of Duty®: Modern Warfare®
              II капитан Прайс и ОТГ-141 сражаются со своим главным противником.
              Им предстоит вести беспощадный бой, чтобы ультранационалист и
              военный преступник Владимир Макаров не смог распространить свое
              влияние на весь мир.
            </h1>
            <div className="nomerTriler">
              <img
                src="https://i.ytimg.com/vi/paNdkV9RcSs/maxresdefault.jpg"
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
                          width="661"
                          height="413"
                          src="https://www.youtube.com/embed/IQxaf1gfqrk"
                          title="Modern Warfare III - Makarov Reveal Trailer [UK]"
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
      <section id="makarov">
        <div className="container">
          <div className="makarov">
            <h1>ВОЗВРАЩЕНИЕ СТАРОГО ВРАГА</h1>
            <p>
              Уже знакомый вам Владимир Макаров готовится совершить нечто
              ужасное. Воин до мозга костей, он бесстрастен, расчетлив и
              пунктуален. Раскинутая им паутина охватывает весь мир. Вы уже
              сталкивались с его влиянием в Modern Warfare II и не только. У
              него много подручных: одни из них, подобно ЧВК "Конни", служат ему
              добровольно, в то время как других он использует втемную.
            </p>
          </div>
        </div>
      </section>
      <section id="makarov2">
        <div className="container">
          <div className="makarov2">
            <h1>БОЙ - ЭТО ВЫБОР</h1>
            <p>
              Бой - это всегда выбор. Разное оружие, разное снаряжение, разные
              пути к цели... Вдобавок к фирменным кинематографическим эпизодам
              кампании, знакомым по прошлым играм Call of Duty®, в Modern
              Warfare III вас ждут открытые боевые операции, предлагающие больше
              вариантов выбора. В них нет универсального решения. Вы можете
              действовать скрытно и осторожно или убивать всех подряд - все
              зависит только от вас самих.
            </p>
          </div>
        </div>
      </section>
      <section id="nomer33">
        <div className="container">
          <div className="nomer2">
            <h2 className="hh">ОПЕРАЦИЯ 627</h2>
            <p className="hhp">
              В начале новой кампании вы вместе с элитной спецгруппой
              вторгнетесь в тюрьму особого режима, чтобы <br /> найти важного
              заключенного. Смотрите в оба: здесь все не так, как может
              показаться на первый взгляд.
            </p>
            <div className="nomerTriler">
              <img
                src="https://cdn.administrace.tv/2023/11/14/small/57ab9093c821fbe87cb794c835e35b9f.jpg"
                alt=""
              />
              <div className="pleyTriler">
                <button className="plt">
                  <ion-icon name="caret-forward-circle-outline"></ion-icon>
                </button>
              </div>
            </div>
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
                  <h1>ИСТОРИЯ ПРОДОЛЖАЕТСЯ​</h1>
                  <p>
                    Вас ждет продолжение захватывающей истории Modern Warfare с
                    сюжетными операциями, неожиданными поворотами и
                    кинематографической динамикой событий.
                  </p>
                </div>
                <img src={c3} alt="" />
              </div>
              <div className="nblog">
                <img src={c4} alt="" />
                <div className="nbox">
                  <h1>ОТКРЫТЫЕ БОЕВЫЕ ОПЕРАЦИИ​</h1>
                  <p>
                    Новые операции, подобных которым еще не было в Call of Duty,
                    позволяют вам самостоятельно решать, каким путем вы пойдете
                    к цели. Крадитесь в тени или стреляйте из всех стволов.
                    Выбор за вами.
                  </p>
                </div>
              </div>

              <div className="nblog">
                <div className="nbox">
                  <h1>ВСТУПАЙТЕ В БОЙ​</h1>
                  <p>
                    Добро пожаловать в удивительный, интерактивный и
                    реалистичный мир, полный неизведанных мест и нераскрытых
                    секретов.
                  </p>
                </div>
                <img src={c5} alt="" />
              </div>
            </div>
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

export default Online;
