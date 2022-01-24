import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@prateek/navbar",
  app: () => System.import("@prateek/navbar"),
  activeWhen: ["/"]
});

registerApplication({
  name: "@prateek/dashboard",
  app: () => System.import("@prateek/dashboard"),
  activeWhen: ["/dashboard"]
});

registerApplication({
  name: "@prateek/infrastructure",
  app: () => System.import("@prateek/infrastructure"),
  activeWhen: ["/infra"]
});

start({
  urlRerouteOnly: true,
});
