export class Task {
  id: number;
  description: string;
  creationDate: Date;
  closedDate?: Date;
  status: TaskStatus;
}
