import { ServiceRequestType } from '@the-crew/common/enums';
import { MigrationInterface, QueryRunner } from 'typeorm';

import { ServiceRequestEntity } from '../../app/service-request/models/entities';
import { UserEntity } from '../../app/user/models/entities';

export class AddOtherServiceTypes1643486322096 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const provider = await queryRunner.connection
      .getRepository(UserEntity)
      .findOne({ email: 'professional@thecrew.com' });
    const repo = queryRunner.connection.getRepository(ServiceRequestEntity);
    const services = repo.create([
      {
        type: [ServiceRequestType.SALON_FEMALE],
        title: 'Complete Honey Waxing',
        description: 'Waxing - Honey full arms + underarms, Full legs honey',
        price: 349,
        providerId: provider.id,
      },
      {
        type: [ServiceRequestType.SALON_FEMALE],
        title: 'Deluxe pedicure',
        description: 'Deluxe pedicure',
        price: 399,
        providerId: provider.id,
        included: [
          '4 Step Pedicure enriched with Rose petals',
          'Recommended for a soft & luxurious experience',
        ],
      },
      {
        type: [ServiceRequestType.SALON_MALE],
        title: 'Haircut + Massage',
        description: 'Haircut + Massage',
        price: 349,
        providerId: provider.id,
        included: [`Hair Cut - Men's Haircut`, 'Massage - 10 min Head Massage'],
      },
      {
        type: [ServiceRequestType.SALON_MALE],
        title: 'Anti-Tan Essentials',
        description: 'Anti-Tan Essentials',
        price: 649,
        providerId: provider.id,
        included: [`Hair Cut - Men's Haircut`, 'Skin Care - Face & Neck Detan Pack'],
      },
      {
        type: [ServiceRequestType.PAINT],
        title: 'Painting Consultation',
        description: 'Painting Consultation',
        price: 99,
        providerId: provider.id,
        included: [
          `Consultation involves in-depth on-site assessment`,
          'Basis your inputs, the consultant will share customized quotation(s)',
        ],
      },
      {
        type: [ServiceRequestType.PAINT],
        title: 'Textured Walls Consultation',
        description: 'Textured Walls Consultation',
        price: 99,
        providerId: provider.id,
        included: [
          `Add depth & dimension to any wall in your house`,
          'Basis your inputs, the consultant will share customized quotation(s)',
        ],
      },
      {
        type: [ServiceRequestType.CLEANING],
        title: 'Apartment',
        description: 'Apartment - 1 BHK-Termite Control',
        price: 3699,
        providerId: provider.id,
      },
      {
        type: [ServiceRequestType.CLEANING],
        title: 'Bungalow',
        description: 'Bungalow - 2000-3000 sq. ft.-Termite Control',
        price: 8299,
        providerId: provider.id,
      },
      {
        type: [ServiceRequestType.CLEANING],
        title: 'Empty Kitchen Cleaning',
        description: 'Empty Kitchen Cleaning  - Empty Kitchen Cleaning',
        price: 1059,
        providerId: provider.id,
      },
    ]);
    await repo.save(services);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.connection.getRepository(ServiceRequestEntity).clear();
  }
}
