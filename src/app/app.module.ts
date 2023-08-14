import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HelloComponent } from './coba/hello.component';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SampleRouteModule } from './sample-route/sample-route.module';
import { AppRoutingModule } from './app-routing.module';
import { ChildComponent } from './demo/child/child.component';
import { DemoComponent } from './demo/demo.component';
import { MainComponent } from './demo/main/main.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { TodosComponent } from './pages/todos/todos.component';
import { HeadersComponent } from './pages/headers/headers.component';
import { HighlightCardComponent } from './pages/highlight-card/highlight-card.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { NextStepsComponent } from './pages/next-steps/next-steps.component';
import { FooterComponent } from './pages/footer/footer.component';
import { AnimeFormComponent } from './anime/anime-form/anime-form.component';
import { AnimeListComponent } from './anime/anime-list/anime-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoViewComponent } from './todo-view/todo-view.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import { ExponentPipe } from './shared/pipes/exponent.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ChildComponent,
    DemoComponent,
    MainComponent,
    ResumeComponent,
    TodosComponent,
    HeadersComponent,
    HighlightCardComponent,
    ResourcesComponent,
    NextStepsComponent,
    FooterComponent,
    AnimeFormComponent,
    AnimeListComponent,
    TodoViewComponent,
    ModalComponent,
    ExponentPipe
  ],
  imports: [
    BrowserModule,
    NgbModule,
    SampleRouteModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
