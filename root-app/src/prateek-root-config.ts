import { registerApplication, start } from "single-spa";

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
