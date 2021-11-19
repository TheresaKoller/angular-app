import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'file-reader',
  templateUrl: './file-reader.component.html',
  styleUrls: ['./file-reader.component.css']
})
export class FileReaderComponent {
  fileOutput;
  result = new Array();
  ersteZeile;
  onChange(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = (e: any) => {

      this.fileOutput = e.target.result;

      let zeilen = this.fileOutput.split("\n");
      let zeilenanzahl = zeilen.length;   // Ausgabe der Zeilenlänge der eingelesenen Datei

      // String wird gesplittete und startet nun beim ersten @ Zeichen
      for(let zeile of zeilen){
        if(zeile.search("@ApiOperation") !== -1){
          zeile = zeile.substring(zeile.search("@ApiOperation"));     // substring: gibt Teilstring des Strings nach dem @ zurück
          let gesplittet = zeile.split("\"");                        //Zeilen werden beim ersten " gesplittete
          gesplittet = gesplittet [1] + "\"";                       // Speichern der gesplitteten Wörter an 1 Stelle
          console.log(gesplittet);                                  // Ausgabe der gesplitteten Wörter
          this.result.push(gesplittet);                             // push: fügt die aktuelle Zeile zum Array hinten an
        }
        else if
          (zeile.search("GetMapping"||"PostMapping"||"PatchMapping"||"PutMapping"||"DeleteMapping")){
          console.log("else-ausgeführt!");
        }
        else {
          console.log("Annotation entspricht nicht den Fällen 1-5");
        }
      }
      //console.log(this.result);
    };

    reader.readAsText(file);

  }
  headers = ["Gefilterte-Zeilen"];          //Tabellen-Überschrift
  rows = this.result;                      // Ausgabe der gefilterten Zeilen

}
