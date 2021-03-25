import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { OfertasService } from '../../ofertas.service'

@Component({
  selector: 'scode-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [ OfertasService ]
})
export class OndeFicaComponent implements OnInit {
  [x: string]: any;

  public ondeFica: string = ''

  constructor( 
    private route: ActivatedRoute,
    private ofertasService: OfertasService    
    ) { }

  ngOnInit(): void {
    // console.log('ID da rota pai: ', this.route.parent.snapshot.params['id'])
    this.ofertasService.getOndeFicaOfertaPorId(this.route.parent.snapshot.params['id'])
      .then((descricao: string) => {
        this.ondeFica = descricao
      })
  }

}
