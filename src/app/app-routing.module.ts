import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { EnglishComponent } from "./english/english.component";
import { DutchComponent } from "./dutch/dutch.component";
import { FrenchComponent } from "./french/french.component";

const routes: Routes = [
  { path: "translate/en", component: EnglishComponent },
  { path: "translate/nl", component: DutchComponent },
  { path: "translate/fr", component: FrenchComponent },
  { path: "", component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
