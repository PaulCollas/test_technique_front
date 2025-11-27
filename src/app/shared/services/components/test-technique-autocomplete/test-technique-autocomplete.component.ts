import {
  Component,
  forwardRef,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import {
  NG_VALUE_ACCESSOR,
  ControlValueAccessor
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AutoComplete } from 'primeng/autocomplete';

@Component({
  selector: 'app-test-technique-autocomplete',
  standalone: true,
  imports: [CommonModule, FormsModule, AutoComplete],
  templateUrl: './test-technique-autocomplete.component.html',
  styleUrls: ['./test-technique-autocomplete.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TestTechniqueAutocompleteComponent),
      multi: true
    }
  ]
})
export class TestTechniqueAutocompleteComponent implements ControlValueAccessor {

  @Input() suggestions: any[] = [];
  @Input() optionLabel = 'label';
  @Input() placeholder = '';
  @Input() emptyMessage = 'Aucun résultat trouvé';
  @Input() dropdown = false;
  @Input() inputId = `autocomplete-${Math.random().toString(36).substring(2)}`;

  @Output() complete = new EventEmitter<any>();

  value: any = null;
  disabled = false;

  private onChange = (value: any) => {};
  private onTouched = () => {};

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }

  onModelChange(value: any): void {
    this.value = value;
    this.onChange(value);
    this.onTouched();
  }

  onComplete(event: any): void {
    this.complete.emit(event);
  }
}
