import { Component, Output, EventEmitter } from '@angular/core';

@Component({
selector: 'file-reader',
templateUrl: './file-reader.component.html',
styleUrls: ['./file-reader.component.css']
})
export class FileReaderComponent {
fileOutput;

onChange(event) {
var file = event.target.files[0];
var reader = new FileReader();
reader.onload = (e: any) => {
// The file's text will be printed here
this.fileOutput = e.target.result;
//this.fileOutput= this.fileOutput.replaceAll("@", "TEST");
console.log(this.fileOutput);
};

reader.readAsText(file);

}

}
