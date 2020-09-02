import { User } from './models/user.model';
import { TableColumn } from './models/data-table.model';
import { Component, OnInit, Inject } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map, withLatestFrom } from 'rxjs/operators';
import { element } from 'protractor';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UserApiService } from './services/user-api.service';
import { DialogBoxComponent } from './components/dialog-box/dialog-box.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  users$: Observable<User[]>;
  constructor(private usersApi: UserApiService, private dialog: MatDialog) {}

  columns: TableColumn[] = [
    {
      name: 'Name',
      key: 'name'   
    },
    {
      name: 'Phone',
      key: 'phone'   
    },
    {
      name: 'Company',
      key: 'company'   
    },
    {
      name: 'Address',
      key: 'address'   
    },
    {
      name: 'Actions',
      key: 'actions'
    }
  ];

  ngOnInit(): void {
    this.setUsers();
  }

  setUsers(): void {
    this.users$ = this.usersApi.get();
  }

  editBtnClickEvent(user: User[]): void {
    console.log('user', user);
   this.users$ = this.dialog.open(DialogBoxComponent, {
      height: "50%",
      width: "50%",
      data: user
    }).afterClosed().pipe(
      withLatestFrom(this.users$),
      map(([ediitedUser,allUsers]: [User, User[]]) => {
        const ediitedIndex: number = allUsers.findIndex((users: User) => users.name === ediitedUser.name);
        console.log('edited index', ediitedIndex);
        if(ediitedIndex !== -1) {
          allUsers[ediitedIndex] = ediitedUser;
        }
        return [...allUsers];
      })
    )
  }

}