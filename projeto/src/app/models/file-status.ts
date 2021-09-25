import { fileType } from "./file";

export class FileStatus{ 
  /**
   *
   */
  constructor(name, type, isChecked) {
    this.name = name;
    this.fileType = type;
    this.isChecked = isChecked;
    
  }
  name: string = "";
  fileType: fileType;
  isChecked: boolean;

}