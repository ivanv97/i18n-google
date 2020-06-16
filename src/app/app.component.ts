import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Router, NavigationEnd } from "@angular/router";
import { environment } from "src/environments/environment";
declare let gtag;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "i18n-google";

  constructor(private _translate: TranslateService, private _router: Router) {
    this._translate.addLangs(["nl", "fr", "en"]);
    this._translate.setDefaultLang("nl");
    let googleAnalyticsId;
    if (environment.production) {
      if (window.location.hostname === "ivanv97.github.io") {
        googleAnalyticsId = "UA-163765776-1";
      } else {
        googleAnalyticsId = "TEST_ID";
      }
    }
    this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        gtag("config", googleAnalyticsId, {
          page_path: event.urlAfterRedirects,
        });
      }
    });
  }
}
