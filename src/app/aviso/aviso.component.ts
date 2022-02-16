import { Component, OnInit } from '@angular/core';
import datainfo from '../data.json';


export interface Encuestas {
  title:        string;
  shortTitle:   string;
  initMessage:  string;
  idSurvey:     number;
  idSurveyType: number;
  idEval:       number;
  idTypeEval:   number;
  status:       string;
  sections:     Section[];
}

export interface Section {
  title:      string;
  shortTitle: string;
  idSection:  number;
  rule:       number;
  questions:  Question[];
}

export interface Question {
  surveyId:    number;
  idSection:   number;
  label:       string;
  key:         number;
  idTree:      number;
  required:    number;
  controlType: string;
  replys:      Reply[];
  order:       number;
  value:       null;
  idResponse:  number;
}

export enum ControlType {
  Radio = "radio",
}

export interface Reply {
  replyType:   null;
  replytext:   null;
  key:         string;
  value:       string;
  order:       number;
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
  selector: 'app-aviso',
  templateUrl: './aviso.component.html',
  styleUrls: ['./aviso.component.css']
})
export class AvisoComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }

aviso: Encuestas = datainfo;






}
