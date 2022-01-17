import { EntityRepository, Repository } from 'typeorm';

import { Laboratorio } from '../database/entity/laboratorio';

@EntityRepository( Laboratorio )
export class LabRepository extends Repository< Laboratorio > {  };
