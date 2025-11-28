import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { Column } from '../../model/column.model';
import { Commune } from '../../../features/department/model/commune.model';
import { MessageService } from 'primeng/api';
import { buildGoogleMapsUrl } from '../../utils/maps-url';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-test-technique-table',
  standalone: true,
  imports: [CommonModule, TableModule, ToastModule],
  templateUrl: './test-technique-table.component.html',
  styleUrls: ['./test-technique-table.component.scss'],
  providers: [MessageService]
})
export class TestTechniqueTableComponent {
  /** rows to render in the table */
  @Input() value: any[] = [];

  /** show paginator */
  @Input() paginator = false;

  /** number of rows for paginator */
  @Input() rows = 10;

  /** column definitions used to render header and body. Example: [{ field: 'nom', header: 'Nom' }] */
  @Input() columns: Column[] = [];

  trackByIndex(_: number) {
    return _;
  }

  constructor(private messageService: MessageService) {}

  /**
   * Safely resolve a property path (dot separated) and format arrays by joining values.
   */
  getValue(row: any, field: string): string {
    return row?.[field] ?? '';
  }


  getMapUrl(row: Commune): string {
    return buildGoogleMapsUrl(row);
  }

  /** Build a Google Maps search URL for a commune row. */
  openMapWithDelay(row: Commune, delayMs = 3000): void {
    const url = this.getMapUrl(row);
    if (!url) return;


    this.messageService.add({
      severity: 'info',
      summary: 'Redirection…',
      detail: `Ouverture de Google Maps dans ${delayMs / 1000} secondes`,
      life: delayMs
    });

    setTimeout(() => {
      window.open(url, '_blank');
    }, delayMs);
  }

}
