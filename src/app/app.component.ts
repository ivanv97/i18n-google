import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "i18n-google";

  constructor(
    private translate: TranslateService,
    private router: Router
  ) {
    this.translate.addLangs(["nl", "fr", "en"]);
    this.translate.setDefaultLang("nl");
    let path = localStorage.getItem("path");
    if (path) {
      localStorage.removeItem("path");
      this.router.navigate([path]);
    }
  }
}
