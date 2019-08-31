import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../shared/tarefa.service';
import { Tarefa } from '../shared/tarefa.model';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  tarefas: Tarefa[];

  constructor(private tarefaSerivce: TarefaService) { }

  ngOnInit() {
    this.tarefas = this.listarTodos();
    // this.tarefas = [
    //   new Tarefa(123, 'Estudar Angular', 'Tarefa para estudar', false),
    //   new Tarefa(123, 'Estudar Angular', 'Tarefa para estudar', false),
    //   new Tarefa(123, 'Estudar Angular', 'Tarefa para estudar', false),
    //   new Tarefa(123, 'Estudar Angular', 'Tarefa para estudar', false),
    //   new Tarefa(123, 'Estudar Angular', 'Tarefa para estudar', false)
    // ];
  }

  listarTodos(): Tarefa[] {
    return this.tarefaSerivce.listarTodos();
  }



}
