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
      // Register this component as a custom form control
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TestTechniqueAutocompleteComponent),
      multi: true
    }
  ]
})
export class TestTechniqueAutocompleteComponent implements ControlValueAccessor {

  // List of suggestions displayed by the autocomplete
  @Input() suggestions: any[] = [];

  // Property name used to display each option
  @Input() optionLabel = 'label';

  // Placeholder text inside the input field
  @Input() placeholder = '';

  // Message shown when no results are found
  @Input() emptyMessage = 'Aucun résultat trouvé';

  // Enables the dropdown icon to show all suggestions
  @Input() dropdown = false;

  // Unique input ID, especially useful for accessibility
  @Input() inputId = `autocomplete-${Math.random().toString(36).substring(2)}`;

  // Event emitted when autocomplete triggers a search (PrimeNG's completeMethod)
  @Output() complete = new EventEmitter<any>();

  // Current value of the input
  value: any = null;

  // Indicates whether the component is disabled
  disabled = false;

  // Functions assigned by Angular forms to handle value and touch events
  private onChange = (value: any) => {};
  private onTouched = () => {};

  /**
   * Called by Angular when the form sets a new value.
   * Updates the component's internal value.
   */
  writeValue(value: any): void {
    this.value = value;
  }

  /**
   * Registers a callback function that Angular will call
   * when the component's value changes.
   */
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  /**
   * Registers a callback function that Angular will call
   * when the input is marked as "touched".
   */
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  /**
   * Allows Angular to enable or disable the input programmatically.
   */
  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }

  /**
   * Triggered when the ngModel value changes (user input).
   * Notifies Angular forms via onChange + onTouched.
   */
  onModelChange(value: any): void {
    this.value = value;
    this.onChange(value); // Notify form of new value
    this.onTouched();     // Mark as touched
  }

  /**
   * Called when the autocomplete's completeMethod fires.
   * Emits the event upward so the parent component can fetch suggestions.
   */
  onComplete(event: any): void {
    this.complete.emit(event);
  }
}
