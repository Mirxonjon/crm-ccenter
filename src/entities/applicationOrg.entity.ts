import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Sub_Category_Section_Entity } from './sub_category_org.entity';


@Entity()
export class ApplicationOrgEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'character varying',
    nullable: true,
  })
  title: string;

  @Column({
    type: 'character varying',
    nullable: true,
  })
  section: string;

  @Column({
    type: 'character varying',
    nullable: true,
  })
  head_organization: string;

  @Column({
    type: 'character varying',
    nullable: true,
  })
  manager: string;

  @Column({
    type: 'character varying',
    nullable: true,
  })
  e_mail: string;

  @Column({
    type: 'character varying',
    nullable: true,
  })
  index: string;

  @Column({
    type: 'character varying',
    nullable: true,
  })
  address: string;

  @Column({
    type: 'jsonb',
    nullable: true,
  })
  work_time: JSON;

  @Column({
    type: 'jsonb',
    nullable: true,
  })
  payment_type: JSON;

  @Column({
    type: 'jsonb',
    nullable: true,
  })
  transport: JSON;

  @Column({
    type: 'character varying',
    nullable: true,
  })
  more_info: string;

  @Column({
    type: 'jsonb',
    nullable: true,
  })
  location: JSON;

  @Column({
    type: 'character varying',
    nullable: true,
  })
  segment: string;

  @Column({
    type: 'character varying',
    nullable: true,
  })
  account: string;

  @Column({
    type: 'character varying',
    default: 'cc',
    nullable: true,
  })
  added_by: string;

  @Column({
    type: 'character varying',
    nullable: true,
  })
  inn: string;

  @Column({
    type: 'character varying',
    nullable: true,
  })
  bank_account: string;

  @Column({
    type: 'float',
    default: 0,
    nullable : true
  })
  common_rate: number;

  @Column({
    type: 'integer',
    default: 0,
    nullable : true
  })
  number_of_raters: number;

  @ManyToOne(
    () => Sub_Category_Section_Entity,
    (sub_category_org) => sub_category_org.applicationOrg,
    { nullable: true },
  )
  sub_category_org: Sub_Category_Section_Entity;

  // @OneToMany(() => Phone_Organization_Entity, (phone) => phone.organization)
  // phones: Phone_Organization_Entity[];

  // @OneToMany(
  //   () => Picture_Organization_Entity,
  //   (picture) => picture.organization_id,
  // )
  // pictures: Picture_Organization_Entity[];

  // @OneToMany(() => CommentAndRateEntity, (comment) => comment.organization_id)
  // comments: CommentAndRateEntity[];

  // @OneToMany(
  //   () => Saved_Organization_Entity,
  //   (saved_org) => saved_org.organization_id,
  // )
  // saved_organization: Saved_Organization_Entity[];

  @UpdateDateColumn({ name: 'updated_at' })
  update_date: Date;

  @CreateDateColumn({ name: 'created_at' })
  create_data: Date;
}
