import { Component } from '@angular/core'
import { FrameworkConfigService, FrameworkConfigSettings } from 'src/fw/services/framework-config.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(private frameworkConfigService: FrameworkConfigService){
    let config: FrameworkConfigSettings = {
      socialIcons: [
        { imageFile: '../assets/fb.png', alt:'facebook', link: 'https://www.facebook.com'},
        { imageFile: '../assets/google.png', alt:'google', link: 'https://www.google.com'},
        { imageFile: '../assets/twitter.png', alt:'twitter', link: 'https://www.twitter.com'}
      ],
      showLanguageSelector: true,
      showUserControls: true,
      showStatusBar: true,
      showStatusBarBreakpoint: 800
    }

    frameworkConfigService.configure(config)
  }


}
