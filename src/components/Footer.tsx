import {
  FaTwitter,
  FaFacebookF,
  FaRss,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import i18n, { changeLanguage } from "i18next";
import { useEffect, useState } from "react";
import { Trans } from "react-i18next";

const Footer = () => {
  const [selectedLng, setSelectedLng] = useState(i18n.language || "en");
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );
  const t = i18n.t;
  const handleChange = (lng: string) => {
    changeLanguage(lng);
    setSelectedLng(lng);
  };
  useEffect(() => {
    if (darkMode) {
      document.body.classList.remove("lightMode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.add("lightMode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  const handleThemeToggle = () => setDarkMode((prev) => !prev);
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <p className="copyright">
            <Trans
              i18nKey="footer.rights"
              values={{
                replaceName: "Tarlan Alijanov",
                replaceDate: `${new Date().getFullYear()}`,
              }}
              components={{ spanName: <span /> }}
            />
          </p>
          <ul className="socialList">
            <li className="socialItem">{t("footer.followUs")}</li>
            <li className="socialItem">
              <FaTwitter />
            </li>
            <li className="socialItem">
              <FaFacebookF />
            </li>
            <li className="socialItem">
              <FaRss />
            </li>
            <li className="socialItem">
              <FaInstagram />
            </li>
            <li className="socialItem">
              <FaYoutube />
            </li>
          </ul>
          <div className="inps">
            <select
              name="language"
              className="language"
              onChange={(e) => {
                handleChange(e.target.value);
              }}
              value={selectedLng}
            >
              <option value="en">English</option>
              <option value="az">Azərbaycanca</option>
              <option value="tr">Türkçe</option>
            </select>
            <label className="switch">
              <input type="checkbox" onChange={handleThemeToggle} />
              <span className="slider"></span>
            </label>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
