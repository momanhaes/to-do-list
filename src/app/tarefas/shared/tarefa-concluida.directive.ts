import { Directive, OnInit, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[tarefaConcluida]'
})
export class TarefaConcluidaDirective implements OnInit {

  // public numeroTarefas: number;

  @Input() tarefaConcluida: boolean;

  constructor(private el: ElementRef) { }

  ngOnInit() {

    if (this.tarefaConcluida) {
      this.el.nativeElement.style.textDecoration = 'line-through';
      // this.numeroTarefas = this.numeroTarefas + 1;
    }

  }

}
