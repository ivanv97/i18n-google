import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-translate-sample",
  templateUrl: "./translate-sample.component.html",
  styleUrls: ["./translate-sample.component.scss"]
})
export class TranslateSampleComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.translate.use(paramMap.get("lang"));
    });
  }
}
