import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  form: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router){
    this.form = this.fb.group({
      usuario: ['', Validators.required], 
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
      
  }

  
ingresar(){
  const usuario = this.form.value.usuario;
  const password = this.form.value.password;

  // Datos login prueba
  if(usuario == 'david' && password == '123'){
    // Redireccionamos a la app 
    this.fakeLoadin();

  } else {
    // Mensaje de error
    this.error();
    this.form.reset();

  }
} 

error(){
  this._snackBar.open('Usuario o contraseña incorrectas', '', {
    duration: 5000,
    horizontalPosition: 'center',
    verticalPosition: 'top',
  })
}

fakeLoadin(){
  this.loading = true;
  setTimeout(() => {
    this.router.navigate(['dashboard']);
  }, 1500);
}
}
