import { Component, OnInit, ViewChild } from '@angular/core';
import { Tarefa } from '../shared/tarefa.model';
import { TarefaService } from '../shared/tarefa.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastrar-tarefa',
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrls: ['./cadastrar-tarefa.component.css']
})
export class CadastrarTarefaComponent implements OnInit {

  @ViewChild('formTarefa', { static: true }) formTarefa: NgForm;
  tarefa: Tarefa;
  public isEdit = false;
  constructor(
    private tarefaService: TarefaService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.tarefa = new Tarefa();
    // tslint:disable-next-line: no-string-literal
    const id = +this.route.snapshot.params['id'];
    if (id) {
      this.isEdit = true;
      this.tarefa = this.tarefaService.buscarPorId(id);
    }
  }

  action(): void {
    this.isEdit ? this.atualizar() : this.cadastrar();
  }

  cadastrar(): void {
    if (this.formTarefa.form.valid) {
      this.tarefaService.cadastrar(this.tarefa);
      this.router.navigate(['/tarefas']);
    }
  }

  atualizar(): void {
    if (this.formTarefa.form.valid) {
      this.tarefaService.atualizar(this.tarefa);
      this.router.navigate(['/tarefas']);
    }
  }

  cancelarForm(): void {
    Swal.fire({
      title: 'Você tem certeza que deseja sair?',
      text: 'Todos os dados serão perdidos.',
      type: 'warning',
      background: '#fff',
      showCancelButton: true,
      confirmButtonColor: '#23272B',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não'
    }).then((result) => {
      if (result.value) {
        this.router.navigate(['/tarefas']);
      }
    });

  }

}
