import { Injectable } from '@nestjs/common';
import { NewPlaceInput } from './dto/new-place.input';
import { PlacesArgs } from './dto/places.args';
import { Place } from './models/place.model';

const places = [
  {
    id: 'cm4jvci640000qrx73fn10wh6',
    name: 'Cafe A',
    description: '家から一番近い',
    visitCount: 14,
  },
  {
    id: 'cm4jve9fe0000qrx7bzfx4ise',
    name: 'Cafe B',
    description: '居心地がいい',
    visitCount: 5,
  },
  {
    id: 'cm4jvee330000qrx7ahp2b8oj',
    name: 'Cafe C',
    description: '低価格',
    visitCount: 2,
  },
];

@Injectable()
export class PlacesService {
  /**
   * MOCK
   * Put some real business logic here
   * Left for demonstration purposes
   */

  async create(data: NewPlaceInput): Promise<Place> {
    return {} as any;
  }

  async findOneById(id: string): Promise<Place> {
    return {} as any;
  }

  async findAll(placesArgs: PlacesArgs): Promise<Place[]> {
    return places as Place[];
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}
