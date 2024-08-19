import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MemberService } from './member.service';

@Component({
  selector: 'app-member',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, RouterLink],
  templateUrl: './member.component.html',
  styleUrl: './member.component.css',
  providers: [MemberService],
})
export class MemberComponent {
  constructor(private memberService: MemberService) {}
  async onSubmit(memberForm: NgForm) {
    if (memberForm.valid) {
      try {
        // API'den veri çekme veya form verilerini işleme
        const data = await this.memberService.postData(memberForm.value);
        console.log(data);

        // Burada form gönderimi sonrası yapılacak işlemleri tanımlayabilirsiniz

        // Formu sıfırlama
        memberForm.resetForm();

        // Başarı mesajı
        alert('Member added successfully!');
      } catch (error) {
        console.error('Error adding member:', error);
        alert('An error occurred while adding the member.');
      }
    }
  }
}
