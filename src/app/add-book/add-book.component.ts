import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthorService } from '../service/author.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent implements OnInit {
  imageSrc: string;
  base64textString: string;
  myForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authorservice: AuthorService,
    public dialogRef: MatDialogRef<AddBookComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.myForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      description: [null, [Validators.required, Validators.maxLength(300)]],
      img: ['', [Validators.required]],
      price: [null, [Validators.required, Validators.min(50)]],
      publisher: [null, [Validators.required]],
      publish_year: [null, [Validators.required]],
    });
  }

  onFileChange(event) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      reader.readAsBinaryString(file);

      reader.onload = this._handleReaderLoaded.bind(this);
    }
  }

  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    var source = 'data:image/jpeg;base64,';
    this.base64textString = source + btoa(binaryString);
    this.imageSrc = this.base64textString;
    this.myForm.get('img').setValue(this.base64textString);
  }

  close() {
    this.dialogRef.close();
  }

  submit() {
    var bookValue = this.myForm.value;

    bookValue['publish_year'] = bookValue['publish_year'].split('-')[0];
    bookValue['author_id'] = this.data.id;

    this.authorservice.addBook(bookValue);
    this.dialogRef.close();
  }
}
