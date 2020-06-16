import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import jsPDF from "jspdf";
import { DeviceDetectorService } from "ngx-device-detector";

@Component({
  selector: "app-translate-sample",
  templateUrl: "./translate-sample.component.html",
  styleUrls: ["./translate-sample.component.scss"],
})
export class TranslateSampleComponent implements OnInit {
  private _pdf: jsPDF;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _translate: TranslateService,
    private _deviceDetectorService: DeviceDetectorService
  ) {}

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this._translate.use(paramMap.get("lang"));
    });
  }

  public printPDF() {
    this._pdf = new jsPDF({
      orientation: "p",
      unit: "mm",
      format: "a4",
      putOnlyUsedFonts: true,
    });

    this._pdf.rect(16, 16, 178, 120);

    this._pdf.setFontSize(24);
    this._pdf.setFontType("bold");
    this._pdf.text("Ivan", 100, 63);

    this._pdf.autoPrint();
    if (this._deviceDetectorService.isDesktop()) {
      this._pdf.save("printable.pdf");
    } else {
      this._pdf.output("dataurlnewwindow", { filename: "printable.pdf" });
    }
  }
}
