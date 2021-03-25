import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Oferta } from '../shared/oferta.model'
import { OfertasService } from '../ofertas.service'
import { Observable } from 'rxjs/Observable'
import 'rxjs/Rx' //para usar o interval do Obeservable
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'scode-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit, OnDestroy {
  private tempoObservableSubscription: Subscription
  private meuObservableTesteSubscription: Subscription

  public oferta: Oferta
  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService
  ) { }

  ngOnInit() {
    this.ofertasService.getOfertaPorId(this.route.snapshot.params['id'])
      .then((oferta: Oferta) => {
        this.oferta = oferta
      })

    let tempo = Observable.interval(2000) //será o observável


    this.tempoObservableSubscription = tempo.subscribe((intervalo: number) => {
      //aqui estaremos assistindo este observável
      console.log(intervalo)
    })

    //observable (observável)
    let meuObservableTeste = new Observable((observer: Observer<number>) => {
      observer.next(1) /*Estará sendo enviada
      para o observador, recuperado no arrow function no parâmetro resultado */
      observer.next(3)
      // observer.error('algum erro foi encontrado na stream de eventos')
      observer.complete()
      observer.next(3)
    })
    
    
    //observable (observador)
    this.meuObservableTesteSubscription = meuObservableTeste.subscribe(
      (resultado: number) => console.log(resultado + 10),
      (erro: string) => console.log(erro),
      () => console.log('Stream de eventos foi finalizada')

    )
  }
  ngOnDestroy(){
    //encerra os Observables
    this.meuObservableTesteSubscription.unsubscribe()
    this.tempoObservableSubscription.unsubscribe()
  }

}
