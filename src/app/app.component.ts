import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Router, NavigationEnd } from "@angular/router";
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
    let path = localStorage.getItem("path");
    if (path) {
      localStorage.removeItem("path");
      this._router.navigate([path]);
    }
    this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        gtag("config", "UA-163765776-1", {
          page_path: event.urlAfterRedirects,
        });
      }
    });
  }
}
