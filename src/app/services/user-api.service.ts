import { User } from './../models/user.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  private userSubject: BehaviorSubject<User[]> = new BehaviorSubject([
    {
      name: 'saif',
      phone: 9012344,
      company: 'Tide',
      address: 'India'
    },
    {
      name: 'james',
      phone: 901234455,
      company: 'Google',
      address: 'USA'
    }
  ])
  constructor() { }

  get(): Observable<User[]> {
      return this.userSubject.asObservable();
  }

}
