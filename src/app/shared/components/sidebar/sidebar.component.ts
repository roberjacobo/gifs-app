// Components
import { Component } from "@angular/core";
// Services
import { GifsService } from "../../../gifs/services/gifs.service";

@Component({
  selector: "shared-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent {
  constructor(private gifsService: GifsService) {}

  get tags() {
    return this.gifsService.tagsHistory;
  }

  searchHistoryElement(tag: string): void {
    if (tag === this.gifsService.tagsHistory[0]) return;
    this.gifsService.searchTag(tag);
  }

  removeElementFromHistory(tag: string): void {
    this.gifsService.deleteElementInHistory(tag);
  }
}
