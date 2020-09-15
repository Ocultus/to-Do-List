import {
  AutoIncrement,
  Column,
  CreatedAt,
  DataType,
  DeletedAt,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';

@Table
export class Task extends Model<Task> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT)
  id: number;

  @Column({
    type: DataType.STRING,
  })
  description: string;

  @CreatedAt
  @Column({ field: 'created_at' })
  createdAt: Date;

  @UpdatedAt
  @Column({ field: 'updated_at' })
  updatedAt: Date;

  @DeletedAt
  @Column({ field: 'closed_at' })
  closedAt: Date;

  @Column({
    type: DataType.ENUM,
    values: ['CREATED', 'IN PROGRESS', 'CLOSED'],
    allowNull: false,
  })
  status: string;
}
