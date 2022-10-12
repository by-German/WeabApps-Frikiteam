import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './pages/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CreateEventComponent }from './pages/create-event/side/create-event.component';
import { HomeComponent } from './pages/home/home.component';
import { EventComponent } from './pages/event/side/event.component';
import { MatSidenavModule } from "@angular/material/sidenav";
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { MatToolbarModule} from "@angular/material/toolbar";
import { MatButtonModule} from "@angular/material/button";
import { MatGridListModule} from "@angular/material/grid-list";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";
import { MatCardModule } from "@angular/material/card";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSelectModule } from "@angular/material/select";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatDividerModule } from "@angular/material/divider";
import { MatNativeDateModule, MatOptionModule } from "@angular/material/core";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { UserProfileComponent } from "./pages/users/user-profile/user-profile.component";
import { RegisterComponent } from './pages/auth/register/register.component';
import { MatTabsModule } from '@angular/material/tabs';
import { authInterceptorProviders } from "./helpers/auth.interceptor";
import { EventLocationComponent } from './pages/event/event-location/event-location.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { EventInformationComponent } from './pages/event/event-information/event-information.component';
import { GeneralInformationComponent } from './pages/create-event/general-information/general-information.component';
import { DetailedInformationComponent } from './pages/create-event/detailed-information/detailed-information.component';
import { OptionalInformationComponent } from './pages/create-event/optional-information/optional-information.component';
// Import the functions you need from the SDKs you need
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { UserComponent } from './pages/users/side/user.component';
import { FavoriteComponent } from './pages/favorites/side/favorite.component';
import { FollowsComponent } from './pages/favorites/follows/follows.component';
import { NgxStripeModule } from 'ngx-stripe';


const firebaseConfig = {
  apiKey: "AIzaSyCHOyue5J5xvSQMWy0wygE3HYKvF3Lexy4",
  authDomain: "prueba-43bf8.firebaseapp.com",
  projectId: "prueba-43bf8",
  storageBucket: "prueba-43bf8.appspot.com",
  messagingSenderId: "532923786597",
  appId: "1:532923786597:web:85d9eb22e55f95b11ead8c"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventComponent,
    NavBarComponent,
    LoginComponent,
    CreateEventComponent,
    UserProfileComponent,
    RegisterComponent,
    EventLocationComponent,
    EventInformationComponent,
    GeneralInformationComponent,
    DetailedInformationComponent,
    OptionalInformationComponent,
    UserComponent,
    FavoriteComponent,
    FollowsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatOptionModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatMenuModule,
    MatTabsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireStorageModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyCtz7v_IiSCZxQwE0Fz6vtfuXFjseNXAJY'}),
    NgxStripeModule.forRoot('pk_test_51JkIRwHuC2BvrhslZ7rxjQD6VM9Cnqo5uUMlUOXu5L7h2j8qXhPp3yzQVbKwfyLKMlRvqGDcqC1reJVmegkNMrl400u3knGHqS'),

  ],
  providers: [
    authInterceptorProviders,
    MatDatepickerModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
