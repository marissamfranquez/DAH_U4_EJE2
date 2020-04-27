import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { EstudianteService } from '../../services/estudiante.service';
import { Estudiante } from '../../models/estudiante';

@Component({
  selector: 'app-special',
  templateUrl: './special.page.html',
  styleUrls: ['./special.page.scss'],
})
export class SpecialPage implements OnInit {

  ventana: any;
  public students: Estudiante[];

  constructor(public service: EstudianteService, private actroute: ActivatedRoute, private router: Router) {
    this.actroute.queryParams.subscribe(
      params => {
        this.ventana = JSON.parse(params.special);
      }
    );
    this.service.getStudents().subscribe(data => {
      this.students = data.map(e => {
        return{
          id: e.payload.doc.id,
          ...e.payload.doc.data() as any
        } as Estudiante;
      });
    });

   }
   ngOnInit() {
  }
}
