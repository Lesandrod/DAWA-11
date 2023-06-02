import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Local } from 'src/app/models/local';
import { LocalService } from 'src/app/services/local.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-editar-local',
  templateUrl: './editar-local.component.html',
  styleUrls: ['./editar-local.component.css']
})

export class EditarLocalComponent implements OnInit {
  localForm: FormGroup;
  id: string | null; 
  constructor(private fb: FormBuilder,
              private aRouter: ActivatedRoute,
              private router: Router,
              private _localService: LocalService){
    this.localForm = this.fb.group({
        departamento: ['', Validators.required],
        distrito: ['', Validators.required],
        cantidad: ['', Validators.required],
        latitud: ['', Validators.required],
        longitud: ['', Validators.required]
    })
    this.id = aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    
    this.validarId()

  }

  validarId(){

    if(this.id !== null){
      this._localService.viewLocal(this.id).subscribe(data => {
        this.localForm.setValue({
          departamento: data.departamento,
          distrito: data.distrito,
          cantidad: data.cantidad,
          latitud: data.latitud,
          longitud: data.longitud,
        })
      })
    }

  }

  editarLocal(){
    
    const LOCAL: Local = {
      departamento: this.localForm.get('departamento')?.value,
      distrito: this.localForm.get('distrito')?.value,
      cantidad: this.localForm.get('cantidad')?.value,
      latitud: this.localForm.get('latitud')?.value,
      longitud: this.localForm.get('longitud')?.value,
      title: '',
      info: ''
    }

    Swal.fire({
          title: 'Actualizacion de Local',
          text: "¿Desea actualizar el Local?",
          icon: 'info',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Aceptar',
          cancelButtonText: 'Cancelar'
        }).then((result) => {
          if (result.isConfirmed) {
            if(this.id !== null){
              this._localService.actualizarLocal(this.id, LOCAL).subscribe(data => {
                  console.log(LOCAL);
                  this.router.navigate(['/listar-local']) 
              })
            }
          }
        })
    
           
  }

}
