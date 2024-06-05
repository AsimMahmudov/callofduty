import React from "react";
import "../style/Footer.css";
import end from "../../image2/esrb-mw3-en.jpg";
import end2 from "../../image2/esrb-privacy.jpg";

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="footer">
          <div className="block5">
            <a href="https://www.activision.com/legal">ПРАВОВЫЕ ПОЛОЖЕНИЯ |</a>
            <a href="https://www.activision.com/legal/terms-of-use">
              ПОЛЬЗОВАТЕЛЬСКОЕ СОГЛАШЕНИЕ |
            </a>
            <a href="https://www.activision.com/ru/legal/privacy-policy">
              ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ |
            </a>
            <a href="https://careers.activision.com/">КАРЬЕРА |</a>
            <a href="https://www.activision.com/ru/legal/cookie-policy">
              ПОЛИТИКА О ФАЙЛАХ COOKIE |
            </a>
            <a href="https://support.activision.com/">ПОДДЕРЖКА |</a>
            <a href="">ПРАВИЛА ПОВЕДЕНИЯ </a>
          </div>
          <div className="hr"></div>
          <div className="block6">
            <img
              src="https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/hub/studio-logos/activision-logo.png"
              alt=""
            />
            <img
              src="https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/hub/studio-logos/treyarch-logo.png"
              alt=""
            />

            <img
              src="https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/hub/studio-logos/shg-logo.png"
              alt=""
            />
            <img
              src="https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/hub/studio-logos/high-moon-logo.png"
              alt=""
            />
            <img
              src="https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/hub/studio-logos/digital-legends-logo.png"
              alt=""
            />
            <img
              src="https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/hub/studio-logos/atvi-shanghai-logo.png"
              alt=""
            />
            <img
              src="https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/hub/studio-logos/infinity-ward-logo.png"
              alt=""
            />
            <img
              src="https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/hub/studio-logos/raven-logo.png"
              alt=""
            />
            <img
              src="https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/hub/studio-logos/toys-for-bob-logo.png"
              alt=""
            />
            <img
              src="https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/hub/studio-logos/solid-state-logo.png"
              alt=""
            />
            <img
              src="https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/hub/studio-logos/demonware-logo.png"
              alt=""
            />
            <img
              src="https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/hub/studio-logos/beenox-logo.png"
              alt=""
            />
          </div>

          <div className="entimg">
            <img src={end2} alt="" />
            <img src={end} alt="" />
          </div>

          <div className="text7">
            <p>
              © 2024 Activision Publishing, Inc. ACTIVISION, CALL OF DUTY,
              MODERN WARFARE и CALL OF DUTY: WARZONE являются <br /> товарными
              знаками Activision Publishing, Inc.Все остальные товарные знаки и
              торговые наименования принадлежат <br /> соответствующим
              владельцам.
            </p>
            <button>НАСТРОЙКИ ФАЙЛОВ COOKIE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
