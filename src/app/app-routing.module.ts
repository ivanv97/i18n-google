import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TranslateSampleComponent } from "./translate-sample/translate-sample.component";
import { AppComponent } from "./app.component";

const routes: Routes = [
  { path: ":lang", component: TranslateSampleComponent },
  { path: "", component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
