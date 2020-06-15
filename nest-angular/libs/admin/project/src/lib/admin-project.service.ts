import { Injectable } from '@angular/core';
import { AdminDataService } from '@sandbox/admin/data';

@Injectable()
export class AdminProjectService {
  constructor(private readonly data: AdminDataService) {}

  findAll() {
    return this.data.projectFindAll();
  }

  findOne(id: string) {
    return this.data.projectFindOne(id);
  }

  create(data: string) {
    return this.data.projectCreate(data);
  }

  delete(id: string) {
    return this.data.projectDelete(id);
  }

  update(id: string, data: any) {
    return this.data.projectUpdate(id, data);
  }
}
