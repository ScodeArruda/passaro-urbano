import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Oferta } from './shared/oferta.model'
import { URL_API } from './app.api' //API criada para trazer a URL


import 'rxjs';

@Injectable()

export class OfertasService {
  // private url_api = "http://localhost:3000/ofertas"
  constructor(private http: HttpClient) { }

  public getOfertas(): Promise<Oferta[]> {
      //efetuar uma requisição http
      return this.http.get(`${URL_API}?destaque=true`)
          .toPromise()
          .then((resposta: any) => resposta)

      //retornar uma promise Oferta
  }
  public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
      return this.http.get(`${URL_API}?categoria=${categoria}`)
          .toPromise()
          .then((resposta: any) => resposta)
  }

  public getOfertaPorId(id: number): Promise<Oferta> {
      return this.http.get(`${URL_API}?id=${id}`)
          .toPromise()
          .then((resposta: any) => resposta[0])
  }
}


/**export class OfertasService {

  private URL_api = 'http://localhost:3000/ofertas?destaque=true';

  constructor(private http: HttpClient) { }

  public getOfertas(categoria: string): Promise<Oferta[]> {
    return this.http.get(`http://localhost:3000/ofertas?categoria=${categoria}`)
      .toPromise()
      .then((resposta: any) => resposta)
  }

  public getOfertas(): Promise<Oferta[]> {
    return this.http.get<Oferta[]>(this.URL_api).toPromise()
      .then(function (resposta) {
        //console.log(resposta);
        return resposta;
      });
  }

  public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
    return this.http.get(`http://localhost:3000/ofertas?categoria=${categoria}`)
      .toPromise()
      .then((resposta: any) => resposta)
  }

  // public getOfertasPorId(id: number): Promise<Oferta[]> {
  //   return this.http.get(`http://localhost:3000/ofertas?id=${id}`)
  //     .toPromise()
  //     .then((resposta: any) => resposta)
  // }
  public getOfertaPorId(id: number) : Promise<Oferta> {
    return this.http.get<Oferta[]>(`http://localhost:3000/ofertas?id=${id}`)
    .toPromise()
    .then(( o => {
      //  console.log(o.shift())
      return o.shift();
    }))
  }

}*/