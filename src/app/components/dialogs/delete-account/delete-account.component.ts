import { RedirectLoggedService } from './../../../core/services-redirect/redirect-logged.service';
import { DeleteAccountInterface } from './../../../core/interfaces/delete-account';
import { DeleteAccountService } from './../../../core/services/delete-account/delete-account.service';
import { DialogData } from './../../../footer/footer.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { TranslateService } from 'src/app/shared/translate.service';
import { UserDataService } from 'src/app/core/services/profile-infos/user-data.service';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.scss']
})
export class DeleteAccountComponent implements OnInit {
  text;
  language;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public dialogRef: MatDialogRef<DeleteAccountComponent>,
    private translatePage: TranslateService,
    private deleteAccountService: DeleteAccountService,
    private userData: UserDataService,
    private redirectLoggedService: RedirectLoggedService,

  ) { }

  ngOnInit(): void {
    this.language = this.translatePage.dataFormatation;
    this.text = this.translatePage.textTranslate;
  }
 async deleteAccount() {
    let userDeleted: DeleteAccountInterface = {
      id: parseFloat(this.userData.userData.id),
      usertype: parseFloat(this.userData.userData.user_type)
    }
    await this.deleteAccountService.post(userDeleted);

  }
}
