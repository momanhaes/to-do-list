import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../shared/tarefa.service';
import { Tarefa } from '../shared/tarefa.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  tarefas: Tarefa[];

  constructor(private tarefaService: TarefaService) { }

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
    return this.tarefaService.listarTodos();
  }

  remover($event: any, tarefa: Tarefa): void {
    $event.preventDefault();

    Swal.fire({
      title: 'Você tem certeza?',
      text: `Você está removendo a tarefa '${tarefa.nome}'.`,
      type: 'warning',
      background: '#fff',
      showCancelButton: true,
      confirmButtonColor: '#23272B',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não'
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          title: 'Sucesso!',
          text: 'Sua tarefa foi deletada.',
          confirmButtonText: 'Ok',
          confirmButtonColor: '#23272B',
          type: 'success'
        }
        )
        this.tarefaService.remover(tarefa.id);
        this.tarefas = this.listarTodos();
      }
    });
  }

  alterarStatus($event: any, tarefa: Tarefa): void {
    $event.preventDefault();

    Swal.fire({
      title: 'Você tem certeza?',
      text: `Você está marcando a tarefa '${tarefa.nome}' como pronta. Os botões de concluir e editar desta tarefa ficarão desabilitados.`,
      type: 'warning',
      background: '#fff',
      showCancelButton: true,
      confirmButtonColor: '#23272B',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não'
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          title: 'Sucesso!',
          text: 'Sua tarefa foi concluída com sucesso.',
          confirmButtonText: 'Ok',
          confirmButtonColor: '#23272B',
          type: 'success'
        }
        );
        this.tarefaService.alterarStatus(tarefa.id);
        this.tarefas = this.listarTodos();
      }
    })
  }

}
