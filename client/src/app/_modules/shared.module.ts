import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ToastrModule } from 'ngx-toastr';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { HttpClientModule} from '@angular/common/http';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ToastrModule.forRoot({
        positionClass: 'toast-bottom-right'
    }),
    TabsModule.forRoot(),
    HttpClientModule, 
    NgxGalleryModule,
    FileUploadModule
  ],
  exports: [
      BsDropdownModule,
      TooltipModule,
      ToastrModule,
      TabsModule,
      HttpClientModule,
      NgxGalleryModule,
      FileUploadModule
  ]
})
export class SharedModule { }
