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
    visitHistories: [
      { date: new Date('2024-12-01 12:00') },
      { date: new Date('2024-12-02 12:00') },
      { date: new Date('2024-12-03 12:00') },
      { date: new Date('2024-12-04 12:00') },
      { date: new Date('2024-12-05 12:00') },
      { date: new Date('2024-12-06 12:00') },
      { date: new Date('2024-12-07 12:00') },
      { date: new Date('2024-12-08 12:00') },
      { date: new Date('2024-12-09 12:00') },
      { date: new Date('2024-12-10 12:00') },
      { date: new Date('2024-12-11 12:00') },
      { date: new Date('2024-12-12 12:00') },
      { date: new Date('2024-12-13 12:00') },
      { date: new Date('2024-12-14 12:00') },
    ],
  },
  {
    id: 'cm4jve9fe0000qrx7bzfx4ise',
    name: 'Cafe B',
    description: '居心地がいい',
    visitCount: 5,
    visitHistories: [
      { date: new Date('2024-12-15 12:00') },
      { date: new Date('2024-12-16 12:00') },
      { date: new Date('2024-12-17 12:00') },
      { date: new Date('2024-12-18 12:00') },
      { date: new Date('2024-12-19 12:00') },
    ],
  },
  {
    id: 'cm4jvee330000qrx7ahp2b8oj',
    name: 'Cafe C',
    description: '低価格',
    visitCount: 2,
    visitHistories: [
      { date: new Date('2024-12-20 12:00') },
      { date: new Date('2024-12-21 12:00') },
    ],
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
    const place = places.find((place) => place.id === id);

    return place as Place;
  }

  async findAll(placesArgs: PlacesArgs): Promise<Place[]> {
    return places as Place[];
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}
