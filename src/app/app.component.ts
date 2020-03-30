import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "i18n-google";

  constructor(
    private translate: TranslateService
  ) {
    this.translate.addLangs(["nl", "fr", "en"]);
    this.translate.setDefaultLang("nl");
  }
}
