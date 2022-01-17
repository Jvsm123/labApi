import { EntityRepository, Repository } from 'typeorm';

import { Exame } from '../database/entity/exame';

@EntityRepository( Exame )
export class ExameRepository extends Repository< Exame > {  };
