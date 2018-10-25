import { AppComponent } from './app.component';
import { AppContext } from '../infrastructure/app.context';
import { AppRepository } from '../infrastructure/repositories/app.repository';
import { AppSession } from '../infrastructure/sessions/app.session';
import { BreadCrumbComponent } from '../components/breadcrumb/breadcrumb.component';
import { BreadCrumbItemComponent } from '../components/breadcrumb/breadcrumbitem/breadcrumbitem.component';
import { BreadCrumbSession } from '../infrastructure/sessions/breadcrumb.session';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DriveComponent } from '../components/drive/drive.component';
import { DialogOneInputComponent } from '../components/dialogoneinput/dialogoneinput.component';
import { FileRepository } from '../infrastructure/repositories/file.repository';
import { FileSession } from '../infrastructure/sessions/file.session';
import { FormsModule } from '@angular/forms';
import { GapiSession } from '../infrastructure/sessions/gapi.session';
import { HdMenuComponent } from '../components/hdmenu/hdmenu.component';
import { LoggedInGuard } from '../infrastructure/sessions/loggedInGuard';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { routing } from './app.routing';
import { SignInComponent } from '../components/signin/signin.component';
import { UserRepository } from '../infrastructure/repositories/user.repository';
import { UserSession } from '../infrastructure/sessions/user.session';
import { FilesUploadComponent } from '../components/filesupload/filesupload.component';
import { MatButtonModule, MatIconModule, MatMenuModule, MatTableModule, MatBottomSheetModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatToolbarModule, MatProgressSpinnerModule, MatListModule } from '@angular/material';
import { HomeComponent } from '../components/home/home.component';
import { CalendarEventComponent } from '../components/calendar-event/calendar-event.component';
import { YoutubeComponent } from '../components/youtube/youtube.component';
import { YoutubePipe } from '../components/youtube/filename.pipe';
import { YoutubePlayerModule } from 'ngx-youtube-player';

export function initGapi(gapiSession: GapiSession) {
  return () => gapiSession.initClient();
}

@NgModule({
  declarations: [
    AppComponent,
    BreadCrumbComponent,
    BreadCrumbItemComponent,
    DriveComponent,
    HomeComponent,
    CalendarEventComponent,
    YoutubeComponent,
    DialogOneInputComponent,
    FilesUploadComponent,
    HdMenuComponent,
    SignInComponent,
    YoutubePipe
  ],
  entryComponents: [
    DialogOneInputComponent,
    FilesUploadComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    routing,
    YoutubePlayerModule,

    MatBottomSheetModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatTableModule,
    MatToolbarModule,
    MatListModule,
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: initGapi, deps: [GapiSession], multi: true },
    AppContext,

    AppSession,
    FileSession,
    GapiSession,
    UserSession,

    AppRepository,
    BreadCrumbSession,
    FileRepository,
    UserRepository,

    LoggedInGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
