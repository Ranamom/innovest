import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  userName: any;
  url:string = '';
  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.userName = localStorage.getItem("currentUser");
    this.url = this.router.url.split('/').pop() || '';
    // if(this.userName==null) {
    //   this.router.navigate(['../login']);
    // }
    console.log("dashboard:",this.router.url);
  }
  myProfile(){
    this.router.navigate(['./profile'],{relativeTo : this.route});
  }
  myChallengeList(word:any) {
    this.router.navigate(['ch-list',word], { relativeTo: this.route }).then(() => {
      window.location.reload();
    });
  }
  createChallenge() {
    this.router.navigate(['create-ch'], { relativeTo: this.route }).then(() => {
      window.location.reload();
    });
  }
  mySolutionsList() {
    this.router.navigate([
      '/list-solutions',
      JSON.stringify({
        solvedBy: `${localStorage.getItem('currentUser')}`,
      }),
    ]);
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['']).then(() => {
      window.location.reload();
    });
  }
}
