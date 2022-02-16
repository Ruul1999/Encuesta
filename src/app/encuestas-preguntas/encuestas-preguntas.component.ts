import { Component, OnInit } from '@angular/core';
import datainfo from '../data.json'

export interface Encuestas {
  title: string;
  shortTitle: string;
  initMessage: string;
  idSurvey: number;
  idSurveyType: number;
  idEval: number;
  idTypeEval: number;
  status: string;
  sections: Section[];
}

export interface Section {
  title: string;
  shortTitle: string;
  idSection: number;
  rule: number;
  questions: Question[];
}

export interface Question {
  surveyId: number;
  idSection: number;
  label: string;
  key: number;
  idTree: number;
  required: number;
  controlType: string;
  replys: Reply[];
  order: number;
  value: null | string;
  idResponse: number;
}

export enum ControlType {
  Radio = "radio",
}

export interface Reply {
  replyType: null;
  replytext: null;
  key: string;
  value: string;
  order: number;
  idItemValue: number;
}

export enum Value {
  AlgunasVeces = " ALGUNAS VECES",
  CasiNunca = " CASI NUNCA",
  MuchasVeces = " MUCHAS VECES",
  Nunca = " NUNCA",
  Siempre = " SIEMPRE",
}

@Component({
  selector: 'app-encuestas-preguntas',
  templateUrl: './encuestas-preguntas.component.html',
  styleUrls: ['./encuestas-preguntas.component.css']
})
export class EncuestasPreguntasComponent implements OnInit {

  constructor() { }
  ngOnInit(): void { }

  encuestas: Encuestas = datainfo;
  seccionIndice: number = 0;
  preguntaIndice: number = 0;
  hidebutton: boolean = false;


  radioChecked(keyAnwser: string) 
  {
    if (keyAnwser != null) {
      if (keyAnwser == this.encuestas.sections[this.seccionIndice].questions[this.preguntaIndice].value) {
        console.log(keyAnwser);
        return true;
        
      }
    }
    return false;
  }
  mostrarValorButton(key: string) {
    this.encuestas.sections[this.seccionIndice].questions[this.preguntaIndice].value = key;
  }

  buttonsiguiente() {
    if (this.preguntaIndice < this.encuestas.sections[this.seccionIndice].questions.length - 1) {


      if (this.encuestas.sections[this.seccionIndice].questions[this.preguntaIndice].value != null) {
        this.preguntaIndice++;
      }

    }
    else {
      if (this.seccionIndice == this.encuestas.sections.length - 1) {
        this.seccionIndice = this.encuestas.sections.length - 1;

        if (this.encuestas.sections[this.seccionIndice].questions[this.preguntaIndice].value != null) {
          this.hidebutton = true;
        }
         
      }
      else {
        if (this.encuestas.sections[this.seccionIndice].questions[this.preguntaIndice].value != null) {
          this.seccionIndice++;
          this.preguntaIndice = 0;
        }
        
      }
    }
  }
  buttonatras() {

    if (this.preguntaIndice != 0) {
      this.preguntaIndice--;
      this.hidebutton = false;
    }
    else {

      if (this.seccionIndice == 0 && this.preguntaIndice == 0) {
        this.seccionIndice = 0;
        this.preguntaIndice = 0;
      }
      else {
        this.seccionIndice--;
        this.preguntaIndice = this.encuestas.sections[this.seccionIndice].questions.length - 1;
        
      }
    }
  }
}