import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/app/shared/services/data.service';
import { MealType } from '../log/log';

@Component({
  selector: 'app-quick-add',
  templateUrl: './quick-add.component.html',
  styleUrls: ['./quick-add.component.scss'],
})
export class QuickAddComponent {
  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService
  ) {}

  protected get mealTypes(): string[] {
    return Object.values(MealType).map((val) => val);
  }

  protected get quickAddMealTypeValue(): string {
    return MealType.QuickAdd;
  }

  public quickAddForm = this.formBuilder.group({
    // nonNullable shouldn't be needed here, but the form resets to an null values without it.
    // Even a NonNullableFormBuilder seems to still require it.
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(1)],
    }),
    calories: new FormControl(0, {
      nonNullable: true,
      validators: [Validators.required],
    }),
    type: new FormControl(MealType.QuickAdd, {
      nonNullable: true,
      validators: [Validators.required],
    }),
    date: new FormControl(new Date().toISOString().slice(0, 10), {
      // why is Angular's date format so weird?
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  onSubmit(): void {
    if (
      this.quickAddForm.invalid ||
      this.quickAddForm.value.name === undefined ||
      this.quickAddForm.value.type === undefined ||
      this.quickAddForm.value.calories === undefined ||
      this.quickAddForm.value.date === undefined
    )
      return;

    this.dataService.addLog({
      date: new Date(this.quickAddForm.value.date),
      meals: [
        {
          type: this.quickAddForm.value.type,
          foods: [
            {
              name: this.quickAddForm.value.name,
              calories: this.quickAddForm.value.calories,
            },
          ],
        },
      ],
    });
    this.quickAddForm.reset();
  }
}
