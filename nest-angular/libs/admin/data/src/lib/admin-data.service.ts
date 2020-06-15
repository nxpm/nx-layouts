import { Injectable } from '@angular/core';

@Injectable()
export class AdminDataService {
  public projectFindAll() {
    // Call to backend
    return [
      { id: '1', name: 'Project 1' },
      { id: '2', name: 'Project 2' },
      { id: '3', name: 'Project 3' },
    ];
  }

  public projectFindOne(id: string) {
    // Call to backend
  }

  public projectCreate(data: string) {
    // Call to backend
  }

  public projectDelete(id: string) {
    // Call to backend
  }

  public projectUpdate(id: string, data: any) {
    // Call to backend
  }
}
