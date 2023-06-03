// Modules
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
// Components
import { CardComponent } from "./components/card/card.component";
import { CardListComponent } from "../gifs/components/card-list/card-list.component";
import { HomePageComponent } from "./pages/home/home-page.component";
import { SearchBoxComponent } from "../gifs/components/search-box/search-box.component";

@NgModule({
  declarations: [
    CardComponent,
    CardListComponent,
    HomePageComponent,
    SearchBoxComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [HomePageComponent],
})
export class GifsModule {}
