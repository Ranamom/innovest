import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {SharedDataService} from '../shared-data.service'

@Component({
  selector: 'app-header-landing-page',
  templateUrl: './header-landing-page.component.html',
  styleUrls: ['./header-landing-page.component.css']
})
export class HeaderLandingPageComponent implements OnInit {

  userName: any;
  loggedIn: any;

  ngOnInit(): void {
    this.userName = localStorage.getItem("currentUser");
    console.log("username:", this.userName);
    if (this.userName != null) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  }
  constructor(private route:ActivatedRoute, private sidebarService: SharedDataService, private router: Router) { }

  get isSidebarVisible(): boolean {
      return this.sidebarService.isSidebarVisible;
  }

  toggleSidebar() {
      console.log("in toggle Headers")
      this.sidebarService.toggleSidebarVisibility()
  }
  myProfile(){
    this.router.navigate(['profile'],{relativeTo : this.route});
      // .then(() => {window.location.reload();});
  }
  createChallenge() {
    this.router.navigate(['create-ch'], { relativeTo: this.route }).then(() => {
      window.location.reload();
    });
  }
  gotoChallengeList(word:any) {
    this.router.navigate(['ch-list',word], { relativeTo: this.route });
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['']).then(() => {
      window.location.reload();
    });
  }

}
