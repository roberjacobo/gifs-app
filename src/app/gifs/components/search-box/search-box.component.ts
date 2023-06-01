import { GifsService } from "../../services/gifs.service";
import { Component, ElementRef, ViewChild } from "@angular/core";

@Component({
  selector: "gifs-search-box",
  template: `
    <h5>Buscar:</h5>
    <input
      type="text"
      class="form-control"
      placeholder="Buscar gifs..."
      (keyup.enter)="onKeyUp($event)"
      #txtTagInput
    />
  `,
})
export class SearchBoxComponent {
  @ViewChild("txtTagInput")
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {}

  searchTag(): void {
    const newTag = this.tagInput.nativeElement.value;

    this.gifsService.searchTag(newTag);
    this.tagInput.nativeElement.value = "";
  }

  onKeyUp(event: Event) {
    const keyboardEvent = event as KeyboardEvent;
    if (keyboardEvent.key === "Enter" || keyboardEvent.key === "Return") {
      this.searchTag();
    }
  }

}
