import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild("myForm") registerForm: NgForm;
  @ViewChild("closeBtn") closeElRef: ElementRef;
  @ViewChild("modal") modalRef: ElementRef;

  defaultOption: string;

  subscriptions: string[] = [
    "Basic",
    "Advanced",
    "Pro"
  ] 

  constructor() { }

  ngOnInit(): void {
    this.defaultOption = this.subscriptions[1];
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      alert("Your data is not valid!");
      return;
    }
    this.modalRef.nativeElement.classList.add("modal-active");
  }

  toggleModal() {
    this.modalRef.nativeElement.classList.remove("modal-active");
    this.registerForm.reset();
  }
}
