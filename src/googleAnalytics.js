import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-FT266B3KDZ");
};

export const logPageView = () => {
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname + window.location.search,
  });
};