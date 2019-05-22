import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ConfirmDialogComponent } from "./confirm/confirm-dialog.component";
import { DialogModalComponent } from "./modal/dialog-modal.component";
import { SpnModalComponent } from "./modal/spn-modal.component";
import {DialogModalService} from "./modal/dialog-modal.service";
@NgModule({
  declarations: [
      ConfirmDialogComponent,
      DialogModalComponent,
      SpnModalComponent
  ],
  exports: [
      ConfirmDialogComponent,
      DialogModalComponent,
      SpnModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [DialogModalService]
})
export class DvComponentModule { }
