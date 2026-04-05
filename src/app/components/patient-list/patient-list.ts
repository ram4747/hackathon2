import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';   // ✅ ADD THIS

@Component({
  selector: 'app-patient-list',
  standalone: true,
  imports: [CommonModule],   // ✅ ADD THIS
  templateUrl: './patient-list.html',
  styleUrl: './patient-list.css'
})
export class PatientListComponent {

  patients = [
    { name: 'Rahul', age: 25, disease: 'Fever', phone: '9876543210' },
    { name: 'Priya', age: 30, disease: 'Cold', phone: '9123456780' }
  ];
}