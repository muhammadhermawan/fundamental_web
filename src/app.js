import "regenerator-runtime";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.css";
import "./script/component/app-bar.js";
import "./script/component/content-bar.js";
import "./script/component/aside-bar.js";
import "./script/component/footer-bar.js";
import "./script/component/covid-bar.js";
import main from "./script/view/main.js";
import covid from "./script/data/covid.js";

document.addEventListener("DOMContentLoaded", main);
covid();