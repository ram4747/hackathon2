import { Routes } from '@angular/router';
import { PatientListComponent } from './components/patient-list/patient-list';
import { PatientFormComponent } from './components/patient-form/patient-form';

export const routes: Routes = [
  { path: '', redirectTo: 'patients', pathMatch: 'full' },
  { path: 'patients', component: PatientListComponent },
  { path: 'add-patient', component: PatientFormComponent }
];