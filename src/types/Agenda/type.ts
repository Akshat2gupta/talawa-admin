import type { User } from '../user';
import type { Organization } from '../organization';

export type AgendaCategory = {
  _id: string;
  createdAt: Date;
  createdBy: User;
  description?: string; // Optional
  name: string;
  organization: Organization;
  updatedAt?: Date; // Optional
  updatedBy?: User; // Optional
};
