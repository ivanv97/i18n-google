import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TranslateSampleComponent } from "./translate-sample/translate-sample.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: ":lang", component: TranslateSampleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
