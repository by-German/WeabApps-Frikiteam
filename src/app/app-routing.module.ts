import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from "./pages/home/home.component";
import {EventComponent} from "./pages/event/side/event.component";
import {LoginComponent} from "./pages/auth/login/login.component";
import {CreateEventComponent} from "./pages/create-event/side/create-event.component";
import {UserProfileComponent} from "./pages/users/user-profile/user-profile.component";
import {RegisterComponent} from "./pages/auth/register/register.component";
import {EventLocationComponent} from "./pages/event/event-location/event-location.component";
import {EventInformationComponent} from "./pages/event/event-information/event-information.component";
import {GeneralInformationComponent} from "./pages/create-event/general-information/general-information.component";
import {DetailedInformationComponent} from "./pages/create-event/detailed-information/detailed-information.component";
import {OptionalInformationComponent} from "./pages/create-event/optional-information/optional-information.component";
import {UserComponent} from "./pages/users/side/user.component";
import {FavoriteComponent} from "./pages/favorites/side/favorite.component";
import {FollowsComponent} from "./pages/favorites/follows/follows.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'events', component: HomeComponent},
  { path: 'events/:id', component: EventComponent,
    children: [
      { path: '', component: EventInformationComponent },
      { path: 'information', component: EventInformationComponent },
      { path: 'location', component: EventLocationComponent}
    ]
  },
  { path: 'create-event', component: CreateEventComponent,
    children: [
      { path: 'general-information', component: GeneralInformationComponent },
      { path: ':id/detailed-information', component: DetailedInformationComponent },
      { path: ':id/optional-information', component: OptionalInformationComponent },
    ]
  },
  { path: 'update-event/:id', component: CreateEventComponent,
    children: [
      { path: '', component: GeneralInformationComponent },
      { path: 'general-information', component: GeneralInformationComponent },
      { path: 'detailed-information', component: DetailedInformationComponent },
      { path: 'optional-information', component: OptionalInformationComponent },
    ]
  },
  { path: 'favorites', component: FavoriteComponent,
    children: [
      {path: '', component: FollowsComponent},
      {path: 'organizers/:id', component: FollowsComponent},
    ]
  },
  { path: 'user-profile/:id', component: UserComponent,
    children: [
      {path: '', component: UserProfileComponent},
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
