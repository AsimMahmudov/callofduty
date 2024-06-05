import React, { useState } from "react";
import "../../style/Online.css";
import "../../style/Maka.css";

import c1 from "../../../imageasim/ricochet-logo-tm-new.jpg";

import c3 from "../../../imageasim/ricochet-how-it-works-desktop.jpg";
import c4 from "../../../imageasim/ricochet-kernel-level-desktop.jpg";
import c5 from "../../../imageasim/wz-ricochet-privacy-desktop.jpg";

import { NavLink } from "react-router-dom";

const Online = () => {
  return (
    <>
      <section id="onlinee">
        <div className="container">
          <div className="online">
            <div className="onlineImg">
              <img src={c1} alt="" />
            </div>
            <div className="onlineText">
              <div className="game22">
                <h1>НОВАЯ СИСТЕМА ЗАЩИТЫ ОТ НЕЧЕСТНОЙ ИГРЫ</h1>
                <h4>
                  Инициатива RICOCHET Anti-Cheat™ - это многогранный подход к
                  борьбе с нечестной игрой, включающий новые серверные <br />
                  инструменты, которые отслеживают аналитику для определения
                  нечестной игры, усовершенствованные процессы <br />
                  расследования для выявления читеров, обновления для усиления
                  безопасности учетной записи и многое другое. <br /> Запущены
                  бэкэнд-функции античитерской безопасности RICOCHET Anti-Cheat
                  для игр Call of Duty®: Modern Warfare® III, <br /> Call of
                  Duty®: Modern Warfare® II, Call of Duty®: Vanguard и Call of
                  Duty®: Warzone™.
                </h4>
                <h4>
                  В Call of Duty: Modern Warfare III, Call of Duty: Modern
                  Warfare II, Call of Duty: Warzone и Call of Duty: Vanguard на
                  ПК также <br /> используется новый kernel-драйвер для ПК,
                  разработанный для франшизы Call of Duty в рамках инициативы
                  RICOCHET <br /> Anti-Cheat. В настоящее время драйвер доступен
                  в Modern Warfare II, Vanguard и Warzone по всему миру.
                </h4>
                <NavLink to={"/register"}>
                  <button>ПРИОБРЕТИТЕ MWIII</button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="nomer44">
        <div className="container">
          <div className="nomer4">
            <div className="nomerblock">
              <div className="nblog">
                <div className="nbox">
                  <h1>КАК ЭТО РАБОТАЕТ​</h1>
                  <p>
                    RICOCHET Anti-Cheat значительно повышает безопасность Call
                    of Duty: Modern Warfare III, Call of Duty: Modern Warfare
                    II, Call of Duty: Vanguard и Call of Duty: Warzone. Частью
                    этой многоаспектной инициативы по защите от читерства
                    является выпуск нового kernel-драйвера для ПК, который уже
                    доступен для Modern Warfare II, Vanguard и Warzone. Новая
                    инициатива позволяет быстро реагировать для борьбы со
                    сложной и постоянно развивающейся проблемой.
                  </p>
                </div>
                <img src={c3} alt="" />
              </div>
              <div className="nblog">
                <img src={c4} alt="" />
                <div className="nbox">
                  <h1>ДРАЙВЕРЫ УРОВНЯ ЯДРА​</h1>
                  <p>
                    Kernel-драйверы предоставляют высокий уровень доступа для
                    мониторинга и управления программным обеспечением и
                    приложениями на ПК, такими как драйвер видеокарты вашего ПК.
                    Элемент драйвера на уровне ядра системы RICOCHET будет
                    проверять программное обеспечение и приложения, которые
                    пытаются взаимодействовать и использовать Call of Duty:
                    Modern Warfare III, Call of Duty: Modern Warfare II, Call of
                    Duty: Warzone и Call of Duty: Vanguard, предоставляя команде
                    RICOCHET Anti-Cheat больше данных для повышения
                    безопасности. Для получения более подробной информации о
                    RICOCHET и его драйвере уровня ядра прочтите специальный
                    FAQ.
                  </p>
                </div>
              </div>

              <div className="nblog">
                <div className="nbox">
                  <h1>ЗАЩИТА ВАШЕЙ КОНФИДЕНЦИАЛЬНОСТИ​</h1>
                  <p>
                    В начале kernel-драйвер будет работать только при игре на
                    ПК. Драйвер не всегда включен. Программа включается, когда
                    вы запускаете Modern Warfare III, Modern Warfare II, Warzone
                    или Vanguard, и выключается, когда вы закрываете игру.Кроме
                    того, kernel-драйвер отслеживает и сообщает только о тех
                    действиях, которые связаны с Call of Duty. Хотя
                    kernel-драйвер будет выпущен для ПК, пользователи консолей с
                    кроссплатформенной игрой и игроками на ПК также ощутят
                    разницу.
                  </p>
                </div>
                <img src={c5} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="end">
        <div className="container">
          <div className="end">
            <h1>ЧАВО</h1>
            <h2>ЧТО ТАКОЕ RICOCHET ANTI-CHEAT?</h2>
            <p>
              Инициатива RICOCHET Anti-Cheat - это многогранный подход к борьбе
              с нечестной игрой, включающий новые серверные инструменты, которые
              отслеживают аналитику для определения нечестной игры,
              усовершенствованные процессы расследования для выявления читеров,
              обновления для усиления безопасности учетной записи и многое
              другое. Запущены бэкэнд-функции античитерской безопасности для
              ​​Call of Duty®: Modern Warfare® III​​, ​​Call of Duty®: Modern
              Warfare® II​​, ​​Call of Duty®: Vanguard​​ и ​​Call of Duty®:
              Warzone™​​. В каждой игре также используется новый kernel-драйвер
              для всех игроков, разработанный для франшизы Call of Duty. Драйвер
              развернут по всему миру для ​​Modern Warfare II​​, ​​Vanguard​​ и
              ​​Warzone​​.
            </p>
            <h2>КАК РАБОТАЕТ KERNEL-ДРАЙВЕР В RICOCHET ANTI-CHEAT?</h2>
            <p>
              Kernel-драйвер отслеживает и сообщает о приложениях, которые
              пытаются взаимодействовать с ​​Call of Duty: Modern Warfare III​​,
              ​​Call of Duty: Modern Warfare II​​, ​​Call of Duty: Warzone​​ или
              ​​Call of Duty: Vanguard​​, что позволяет команде RICOCHET
              Anti-Cheat определить, использует ли компьютер несанкционированные
              процессы для управления игрой.
            </p>
            <NavLink to={"/register"}>
              <button>ПРИОБРЕТИТЕ MWIII</button>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Online;
