import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-patient-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './patient-form.html',
  styleUrl: './patient-form.css'
})
export class PatientFormComponent {

  patient = {
    name: '',
    age: '',
    disease: '',
    phone: ''
  };

  savePatient() {
    console.log(this.patient);
    alert('Patient Saved!');
  }
}