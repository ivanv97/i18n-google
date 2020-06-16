import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";

if (environment.production) {
  enableProdMode();
  const scriptElement = document.createElement("script");
  scriptElement.async = true;
  if (window.location.hostname === "ivanv97.github.io") {
    scriptElement.src =
      "https://www.googletagmanager.com/gtag/js?id=UA-163765776-1";
  } else {
    scriptElement.src =
      "https://www.googletagmanager.com/gtag/js?id=TEST_ID";
  }
  document.head.insertBefore(scriptElement, document.head.firstChild);
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
