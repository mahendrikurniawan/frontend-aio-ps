import { Component, OnInit, HostListener } from '@angular/core';
import { TeamModel } from './team.model';
import { Teams } from './data';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  currentSection = 'home';
  showNavigationArrows: any;
  showNavigationIndicators: any;
  isNavbarHidden: boolean = false;
  prevScrollPos = window.pageYOffset;
  Teams!: TeamModel[];

  constructor() { }

  ngOnInit(): void {
    this._fetchData();
  }
  private _fetchData() {
    this.Teams = Teams;
  }

  /**
   * Window scroll method
   */
  // tslint:disable-next-line: typedef
  windowScroll() {
    const navbar = document.getElementById('navbar');
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
      navbar?.classList.add('is-sticky');
    }
    else {
      navbar?.classList.remove('is-sticky');
      // navbar.style.padding = '20px';
    }

    // Top Btn Set
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      (document.getElementById("back-to-top") as HTMLElement).style.display = "block"
    } else {
      (document.getElementById("back-to-top") as HTMLElement).style.display = "none"
    }
  }

  /**
  * Section changed method
  * @param sectionId specify the current sectionID
  */
  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  /**
* Toggle navbar
*/
  toggleMenu() {
    document.getElementById('navbarSupportedContent')?.classList.toggle('show');
  }

  // When the user clicks on the button, scroll to the top of the document
  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const navbar = document.getElementById('navbar');
    const currentScrollPos = window.pageYOffset;
    if (this.prevScrollPos > currentScrollPos) {
      // Scroll ke atas, tampilkan navbar
      this.isNavbarHidden = false;
    } else {
      // Scroll ke bawah, sembunyikan navbar
      this.isNavbarHidden = true;
    }

    this.prevScrollPos = currentScrollPos;
  }



}
