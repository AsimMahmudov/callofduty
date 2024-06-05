import React, { useState } from "react";
import "../../style/Comp.css";
import "../../style/Ples.css";

import comp1 from "../../../imageosob/Background-Markov-PS5-new.png";

import comp4 from "../../../imageosob/Stunning-4k-Visuals-No-Clip.png";

import bimg1 from "../../../image2/ps-icon.png";
import bimg2 from "../../../image2/xbox-icon.png";
import bimg3 from "../../../image2/bnet-icon.png";
import bimg4 from "../../../image2/steam-icon.png";

import regim from "../../../image2/ps-bundle.jpg";
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
                ПОГРУЗИТЕСЬ В МИР CALL OF DUTY®: MODERN <br /> WARFARE III® НА
                PLAYSTATION 5
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
                <img
                  src="https://media1.giphy.com/media/MxGq4INSjhhDmAAaPP/giphy.gif?cid=6c09b9523aftww8g3gz4ix01hpcvhoz3qvhv9kdd520jmwd8&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g"
                  alt=""
                />
              </div>
              <div className="text1">
                <h1>АДАПТИВНЫЕ ТРИГГЕРЫ</h1>
                <p>
                  Беспроводной контроллер DualSense™ поможет вам почувствовать в
                  своих руках любое оружие из арсенала Call of Duty: Modern
                  Warfare III. С помощью функции адаптивных триггеров игра
                  передает изменение усилий на спусковом крючке, повышая
                  реалистичность ощущений от стрельбы.
                </p>
              </div>
            </div>

            <div className="box2">
              <div className="image5">
                <img
                  src="https://www.photofunky.net/output/image/d/c/f/0/dcf086/photofunky.gif"
                  alt=""
                />
              </div>
              <div className="text2">
                <h1>ТАКТИЛЬНАЯ ОБРАТНАЯ СВЯЗЬ</h1>
                <p>
                  Ощутите материальность игрового мира благодаря тактильной
                  обратной связи контроллера DualSense. Попадания пуль и энергия
                  взрывов, столкновения и удары - каждое событие будет
                  отдаваться импульсами в ваших руках.
                </p>
              </div>
            </div>

            <div className="box3">
              <div className="image5">
                <img
                  src="https://www.yankodesign.com/images/design_news/2021/06/auto-draft/sony_playstation5_gaming_earbuds_4.gif"
                  alt=""
                />
              </div>
              <div className="text3">
                <h1>ОБЪЕМНЫЙ ЗВУК​​​</h1>
                <p>
                  Пытаясь бежать из тюрьмы и сражаясь с полчищами живых
                  мертвецов, вы сможете полностью погрузиться в атмосферу боя
                  благодаря объемному звуку, поддерживаемому PlayStation 5.
                  Почувствуйте хаос боя, услышав свист пуль над своей головой и
                  жуткие стоны раненых зомби.
                </p>
              </div>
            </div>

            <div className="box4">
              <div className="image5">
                <img src={comp4} alt="" />
              </div>
              <div className="text3">
                <h1>ФАНТАСТИЧЕСКАЯ ГРАФИКА 4К</h1>
                <p>
                  Любуйтесь грандиозными батальными сценами в разрешении 4K,
                  поддерживаемом PlayStation 5. Рассматривайте мельчайшие детали
                  мира Modern Warfare III для PlayStation 5, включающего в себя
                  модернизированные версии ваших любимых сетевых карт.
                </p>
              </div>
            </div>

            {/* /// */}
          </div>
        </div>
      </section>

      <section id="psblok">
        <div className="container">
          <h1 className="psbloktext">
            ЭКСКЛЮЗИВНЫЕ ПРЕИМУЩЕСТВА ДЛЯ ИГРОКОВ PLAYSTATION
          </h1>
          <div className="psblok">
            <div className="psbox">
              <h1>БОНУС НАБОРА БОЕВОГО ПРОПУСКА</h1>
              <p>
                Получайте новое снаряжение и другие предметы еще быстрее.
                Пользователи PlayStation, купившие набор "Черный сектор",
                получают дополнительные 5 этапов. Таким образом количество
                этапов, которые можно открыть немедленно, достигает 25.
              </p>
            </div>

            <div className="psbox">
              <h1>ДВОЙНЫЕ ОЧКИ ОПЫТА</h1>
              <p>
                Игроки PlayStation могут рассчитывать на эксклюзивные
                ежемесячные события с удвоенным опытом (продолжительность 24
                часа), так что приготовьтесь повысить свой ранг.
              </p>
            </div>

            <div className="psbox">
              <h1>БОЕВЫЕ НАБОРЫ</h1>
              <p>
                Получайте бесплатный​​†††​​ игровой набор в начале каждого
                сезона Call of Duty: Modern Warfare III. Такие наборы могут
                включать в себя облики исполнителей, чертежи оружия, эмблемы и
                другие материалы. Время ограничено. Только для подписчиков
                PlayStation Plus.•
              </p>
            </div>

            <div className="psbox">
              <h1>БОНУС ТУСОВКИ PLAYSTATION</h1>
              <p>
                Чтобы мечта осуществилась, нужна командная работа. Игроки
                PlayStation, играющие вместе в командах, получат +25%
                дополнительного оружейного опыта. Бонус также учитывается при
                кроссплатформенной игре с союзниками по команде.
              </p>
            </div>

            <div className="psbox">
              <h1>ДОПОЛНИТЕЛЬНЫЕ КОМПЛЕКТЫ</h1>
              <p>
                Будьте готовы к любому развитию событий. Игроки PlayStation
                получат 2 дополнительные ячейки для персонализации комплектов
                экипировки. Они станут доступны в "Создании класса" при
                достижении 4 уровня.
              </p>
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

export default Comp;
