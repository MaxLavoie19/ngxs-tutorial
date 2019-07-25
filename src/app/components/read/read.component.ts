
import { Component } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';

import { Tutorial } from '../../models/tutorial.model';
import { TutorialState } from '../../state/tutorial.state';
import { RemoveTutorial } from '../../actions/tutorial.actions';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent {
  @Select(TutorialState.getTutorials) tutorials$: Observable<Tutorial>;

  constructor(private store: Store) { }

  delTutorial(name) {
    this.store.dispatch(new RemoveTutorial(name));
  }
}
