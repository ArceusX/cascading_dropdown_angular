import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private title: Title) {}

  ngOnInit() {
    this.title.setTitle('Angular Cascading or Dependent Dropdown');
  }

  selectedSport: String = '--Choose Sport--';

  sports: Array<any> = [
    {
      name: 'Hockey',
      teams: [
        {
          name: 'Los Angeles Kings',
          players: ['Rick', 'Tyler', 'Amy'],
        },

        {
          name: 'Anaheim Ducks',
          players: ['Heidon', 'Tim', 'Timmy'],
        },
      ],
    },

    {
      name: 'Baseball',

      teams: [
        {
          name: 'Los Angeles Dodgers',
          players: ['Jose', 'Maribel', 'Simon'],
        },

        {
          name: 'Los Angeles Angels',
          players: ['Lang', 'Dan', 'Ian'],
        },

        {
          name: 'San Diego Padres',
          players: ['Sinead', 'Hamilton', 'Natalie'],
        },
      ],
    },
  ];

  teams: Array<any> = [];

  players: Array<any> = [];

  changeSport(sport: any) {
    this.teams = this.sports.find(
      (sprt: any) => sprt.name == sport.target.value
    ).teams;
  }

  changeTeam(team: any) {
    this.players = this.sports
      .find((sprt: any) => sprt.name == this.selectedSport)
      .teams.find((tm: any) => tm.name == team.target.value).players;
  }
}
