// Modules
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
// Components
import { HomePageComponent } from "./pages/home/home-page.component";
import { SearchBoxComponent } from "../gifs/components/search-box/search-box.component";
import { CardListComponent } from "../gifs/components/card-list/card-list.component";
import { CardComponent } from "./components/card/card.component";

@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    CardListComponent,
    CardComponent,
  ],
  imports: [CommonModule],
  exports: [HomePageComponent],
})
export class GifsModule {}
