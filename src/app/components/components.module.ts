import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { UploadBoxComponent } from './upload-box/upload-box.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { BarRatingModule } from 'ngx-bar-rating';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ParallaxHeader } from './parallax-header/parallax-header';
import { AccordionComponent } from './accordion/accordion.component';

@NgModule({
	declarations: [
		UploadBoxComponent,
		ProgressBarComponent,
		ParallaxHeader,
		AccordionComponent
	],
	imports: [
		CommonModule,
		IonicModule,
		RouterModule,
		TranslateModule,
		LazyLoadImageModule,
		BarRatingModule
	],
	exports: [
		UploadBoxComponent,
		ProgressBarComponent,
		ParallaxHeader,
		AccordionComponent
	]
})
export class ComponentsModule {}
