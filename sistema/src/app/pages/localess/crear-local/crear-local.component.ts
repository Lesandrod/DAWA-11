import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Local } from 'src/app/models/local';
import { LocalService } from 'src/app/services/local.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-local',
  templateUrl: './crear-local.component.html',
  styleUrls: ['./crear-local.component.css']
})
export class CrearLocalComponent {

  localForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private _localService: LocalService){
    this.localForm = this.fb.group({
        departamento:  ['', Validators.required],
        distrito: ['', Validators.required],
        cantidad: ['', Validators.required],
        latitud:    ['', Validators.required],
        longitud:    ['', Validators.required]
    })
  }

  agregarLocal(){

    const LOCAL: Local = {
      departamento: this.localForm.get('departamento')?.value,
      distrito: this.localForm.get('distrito')?.value,
      cantidad: this.localForm.get('cantidad')?.value,
      latitud: this.localForm.get('latitud')?.value,
      longitud: this.localForm.get('longitud')?.value,
      title: '',
      info: ''
    }

    console.log(LOCAL)

    Swal.fire({
      title: 'Creacion de Local',
      text: "¿Desea crear el local?",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this._localService.guardarLocal(LOCAL).subscribe(data =>{
          console.log(data);  
          this.router.navigate(['/listar-local'])
        }) 
      }
    })

    
  }

    //console.log(this.localForm)
}
