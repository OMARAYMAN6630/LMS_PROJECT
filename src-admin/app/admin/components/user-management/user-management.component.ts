import { Component } from '@angular/core';

@Component({
  selector: 'app-user-management',
  standalone: false,
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent {
  users = [
    { username: 'john_doe', email: 'john@example.com', status: 'Pending' },
    { username: 'jane_doe', email: 'jane@example.com', status: 'Active' },
  ];

  approveUser(user: any) {
    user.status = 'Active';
    alert(`Approved ${user.username}`);
  }

  deactivateUser(user: any) {
    user.status = 'Inactive';
    alert(`Deactivated ${user.username}`);
  }

  deleteUser(user: any) {
    this.users = this.users.filter(u => u !== user);
    alert(`Deleted ${user.username}`);
  }
}
