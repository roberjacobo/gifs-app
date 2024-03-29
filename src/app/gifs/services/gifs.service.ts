import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient, HttpParams } from "@angular/common/http";
import { SearchResponse, Gif } from "../interfaces/gifs.interfaces";

@Injectable({ providedIn: "root" })
export class GifsService {
  public gifList: Gif[] = [];

  private _tagsHistory: string[] = [];
  private apiKey: string = environment.apiKey;
  private serviceUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {
    this.loadLocalStorage();
    console.info("Gifs Service Ready");
  }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string): void {
    tag = tag.toLowerCase();
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this.tagsHistory.splice(0, 10);
    this.saveLocalStorage();
  }

  deleteElementInHistory(tag: string): void {
    this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    localStorage.setItem("history", JSON.stringify(this._tagsHistory));
  }

  private saveLocalStorage(): void {
    localStorage.setItem("history", JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage(): void {
    if (!localStorage.getItem("history")) return;
    this._tagsHistory = JSON.parse(localStorage.getItem("history")!);
    if (this._tagsHistory.length === 0) return;
    this.searchTag(this._tagsHistory[0]);
  }

  searchTag(tag: string): void {
    if (tag.length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set("api_key", this.apiKey)
      .set("limit", "10")
      .set("q", tag);

    this.http
      .get<SearchResponse>(`${this.serviceUrl}/search`, { params })
      .subscribe((resp) => {
        this.gifList = resp.data;
        // console.log({ gifs: this.gifList });
      });
  }
}
