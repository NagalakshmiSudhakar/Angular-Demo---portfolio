import { Component } from '@angular/core';

import { Navbar } from './components/navbar/navbar';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { Experience } from './components/experience/experience';
import { Achievements } from './components/achievements/achievements';
import { Contact } from './components/contact/contact';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Navbar,
    Home,
    About,
    Skills,
    Projects,
    Experience,
    Achievements,
    Contact
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {

}