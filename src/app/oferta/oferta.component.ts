import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Oferta } from '../shared/oferta.model'
import { OfertasService } from '../ofertas.service'

@Component({
  selector: 'scode-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit {

  public oferta: Oferta

  constructor(
    private route: ActivatedRoute,
    private ofertaService: OfertasService
  ) { }

  ngOnInit() {
    // this.route.snapshot.params['id']
    // this.route.params.subscribe((parametro: any) => {
    //   console.log(parametro.id)
    // })
    this.ofertaService.getOfertaPorId(this.route.snapshot.params['id'])
      .then((oferta: Oferta) => {
        this.oferta = oferta
        // console.log(this.oferta)
      })

    //   this.route.params.subscribe(
    // /* Ficará observando a alteração do id recebido vindo da url,
    // sem precisar utilizar o snapshot.params['id'] pois nele é 
    // uma foto, e em subscribe ficará observando a mudança, caso
    // ocorra erro, a funcao erro será chamada. E, caso
    // ocorra sucesso, será executada a funcao de sucesso */
    // (parametro: any) => { console.log(parametro)},
    // (erro: any) => console.log(erro),
    // () => console.log('Processamento foi classificado como concluído')
    // )
  }

}
