import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private afs: AngularFirestore, private toastr: ToastrService) { }


  saveTodo(id: string, data: any) {
    this.afs.collection('categories').doc(id).collection('todos').add(data).then(ref => {
      this.toastr.success('New Todo Added Successfully');
    })
  }

}
