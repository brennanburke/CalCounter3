import { Component, OnInit } from '@angular/core';
import { DiaryService } from "C://Users/burke/CalCounter3/src/app/service/diary.service"
@Component({
  selector: 'app-entry-detail',
  templateUrl: './entry-detail.page.html',
  styleUrls: ['./entry-detail.page.scss'],
})
export class EntryDetailPage implements OnInit {
  entry = this.diaryService.selectedEntry;

  constructor( private diaryService: DiaryService ) { }

  ngOnInit() {
    console.log(this.entry);
  }

}
