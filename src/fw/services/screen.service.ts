import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ScreenService {
  private resizeSource = new Subject<null>()
  resize$ = this.resizeSource.asObservable()

}
