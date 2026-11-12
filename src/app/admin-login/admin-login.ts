import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  imports: [FormsModule],
  templateUrl: './admin-login.html',
  styleUrl: './admin-login.css'
})
export class AdminLogin {

  senha: string = '';
  mensagem: string = '';

  // Senha demonstrativa
  private senhaCorreta = 'admin123';

  constructor(private router: Router) {}

  entrar() {

    if (this.senha === this.senhaCorreta) {

      sessionStorage.setItem('adminAutorizado', 'true');

      this.router.navigate(['/admin']);

    } else {

      this.mensagem = 'Senha incorreta! Tente novamente.';

    }

  }
}