import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './appointment.html',
  styleUrls: ['./appointment.css']
})
export class Appointment {

  name: string = '';
  email: string = '';
  date: string = '';
  time: string = '';

  bookAppointment() {
    console.log("Appointment Details");
    console.log(this.name, this.email, this.date, this.time);

    alert("Appointment Booked Successfully");
  }

}