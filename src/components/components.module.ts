import { NgModule } from '@angular/core';
import { GeGalleryComponent } from './ge-gallery/ge-gallery';
import { ModalImageComponent } from './ge-gallery/modal-image/modal-image';
@NgModule({
	declarations: [GeGalleryComponent,
    ModalImageComponent],
	imports: [],
	exports: [GeGalleryComponent,
    ModalImageComponent]
})
export class ComponentsModule {}
