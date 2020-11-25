import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage {

  public listaCategorias = [];

  constructor(
    private categoriaService: CategoriaService,
    public toastController: ToastController,
    public alertController: AlertController
  ) { }

  private carregarLista() {
    this.categoriaService.listar().subscribe(dados => {
      this.listaCategorias = dados['content'];
      this.presentToast('Categorias carregadas com sucesso!');
    });
  }

  ionViewWillEnter() {
    this.carregarLista();
  }

  public deletar(id: number) {
    this.categoriaService.deletar(id).subscribe(dados => {
      this.presentToast('Categoria deletada com sucesso!');
      this.carregarLista();
    });
  }

  async presentToast(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 2000
    });
    toast.present();
  }

  async presentAlertConfirm(id) {
    const alert = await this.alertController.create({
      header: 'ATENÇÃO!',
      message: 'Deseja realmente excluir? <br/><strong>ID: ${id}</strong>!',
      buttons: [
        {
          text: 'Não',
          role: "cancel",
          cssClass: 'secondary'
        }, {
          text: 'Sim, excluir',
          handler: () => {
            this.deletar(id);
          }
        }
      ]
    });
    await alert.present();
  }
}