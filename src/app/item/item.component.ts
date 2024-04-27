import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tarefa } from "../tarefa";
@Component({
 selector: 'app-item',
 templateUrl: './item.component.html',
 styleUrls: ['./item.component.css']
})
export class ItemComponent {
 emEdicao = false;
 @Input() tarefa: Tarefa = new Tarefa("", false);
 @Output() removerElemento = new EventEmitter();
 @Output() modificaTarefa = new EventEmitter();
 
 enviarEvento() {
    this.removerElemento.emit(this.tarefa);
 }
}

