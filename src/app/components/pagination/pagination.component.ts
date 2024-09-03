import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CharacterResponse } from '../../model/character.model';
import { CharacterService } from '../../service/character.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnDestroy {

  public characterResponse$: Observable<CharacterResponse> = this.characterService.getCharacters();
  public currentPage$: any = this.characterService.currentPage$;
  public totalPages: number[] = [];
  public visiblePages: number[] = [];
  public maxVisibleButtons = 5;

  private destroy$ = new Subject<void>();

  constructor(private characterService: CharacterService) { }

  public ngOnInit(): void {
    this.characterResponse$.pipe(takeUntil(this.destroy$)).subscribe((response: CharacterResponse) => {
      this.totalPages = Array(response.info.pages).fill(0).map((x, i) => i + 1);
      this.updateVisiblePages();
    });

    this.characterService.currentPage$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.updateVisiblePages();
    });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public goToPage(page: number): void {
    this.characterService.loadCharacters(page);
  }

  private updateVisiblePages(): void {
    const currentPage = this.characterService.currentPage$.getValue();
    const start = Math.max(currentPage - Math.floor(this.maxVisibleButtons / 2), 1);
    const end = Math.min(start + this.maxVisibleButtons - 1, this.totalPages.length);
    this.visiblePages = this.totalPages.slice(start - 1, end);
  }

  public nextPageGroup(): void {
    const newPage = Math.min(this.characterService.currentPage$.getValue() + this.maxVisibleButtons, this.totalPages.length);
    this.goToPage(newPage);
  }

  public prevPageGroup(): void {
    const newPage = Math.max(this.characterService.currentPage$.getValue() - this.maxVisibleButtons, 1);
    this.goToPage(newPage);
  }
}
