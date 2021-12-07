import { ServiceRequestType } from '@the-crew/common';
import { MigrationInterface, QueryRunner } from 'typeorm';

import { ServiceRequestEntity } from '../../app/service-request/models/entities';
import { UserEntity } from '../../app/user/models/entities';

export class AddServices1638736884742 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const provider = await queryRunner.connection
      .getRepository(UserEntity)
      .findOne({ email: 'handyman@thecrew.com' });
    const repo = queryRunner.connection.getRepository(ServiceRequestEntity);
    const services = repo.create([
      {
        type: [ServiceRequestType.PLUMBING],
        title: 'Waste Pipe Leakage',
        description: 'Suited for repair or replacement',
        price: 119,
        providerId: provider.id,
        included: [
          'Diagnosis and Repair of leakage between wash-basin and waste pipe',
          'Procurement of spare parts (at extra cost)',
        ],
        excluded: ['Tiling, cementing and other such masonry work'],
      },
      {
        type: [ServiceRequestType.PLUMBING],
        title: 'Minor Fitting Installation',
        description: 'Small fitting (towel hanger, holder) installation',
        price: 100,
        providerId: provider.id,
        included: [
          'Minor fittings (e.g. towel hanger, soap dispenser)',
          'Procurement of fittings (at extra cost)',
        ],
        excluded: ['Tiling, cementing and other such masonry work'],
      },
      {
        title: 'Hot & Cold Water Mixer Repair',
        type: [ServiceRequestType.PLUMBING],
        description: 'Broken or leaking mixer tap repair',
        price: 269,
        providerId: provider.id,
        included: [
          'Table-top or wall-mounted mixer tap repair (Low flow rate, leakage, improper mixing)',
          'Procurement of spare parts (at extra cost)',
        ],
        excluded: ['Tiling, cementing and other such masonry work'],
      },
      {
        title: 'Drainage Pipe Blockage Removal (Underground or In-Wall)',
        type: [ServiceRequestType.PLUMBING],
        description: 'Underground or In-wall pipe blockage removal',
        price: 369,
        providerId: provider.id,
        included: [
          'Unclogging of under-ground/in-wall blockage',
          'Procurement of spare parts (at extra cost)',
        ],
        excluded: ['Tiling, cementing and other such masonry work'],
      },
      {
        title: 'Ceiling Fan Regulator Replacement',
        type: [ServiceRequestType.ELECTRICIAN],
        providerId: provider.id,
        description: 'Includes replacement of 1 unit.\nPrice does not include spare part costs',
        price: 79,
      },
      {
        title: 'Fan Replacement',
        type: [ServiceRequestType.ELECTRICIAN],
        providerId: provider.id,
        description:
          'Replacement of either ceiling, exhaust or wall fan\nExcludes decorative fans having in-built light or music\nPlease provide a ladder for the technician',
        price: 199,
        included: ['Ceiling,Exhaust or Wall Fan'],
      },
      {
        title: 'Single Battery Inverter Installation',
        type: [ServiceRequestType.ELECTRICIAN],
        providerId: provider.id,
        description:
          'Additional wiring charges applicable as per rate card\nPrice does not include spare part costs',
        price: 429,
      },
      {
        title: 'Double Battery Inverter Installation',
        type: [ServiceRequestType.ELECTRICIAN],
        providerId: provider.id,
        description:
          'Additional wiring charges applicable as per rate card\nPrice does not include spare part costs',
        price: 509,
      },
      {
        title: 'Clothes Ceiling Hanger Installation',
        type: [ServiceRequestType.CARPENTING],
        providerId: provider.id,
        description:
          'Includes roof drilling\nPlease provide a ladder for the technician\nPrice does not include spare part costs',
        price: 499,
      },
      {
        title: 'Bed Support Repair',
        type: [ServiceRequestType.CARPENTING],
        providerId: provider.id,
        description:
          'Includes mattress support repair\nMajor repairs or repairs requiring dismantling bed as per quotation\nPrice does not include spare part costs',
        price: 419,
      },
      {
        title: 'Wooden Door Installation',
        type: [ServiceRequestType.CARPENTING],
        providerId: provider.id,
        description:
          'Includes installation and alignment of hinges\nMain Door Installation ₹1099\nPrice does not include spare part costs',
        price: 699,
      },
      {
        title: 'Door Repair',
        type: [ServiceRequestType.CARPENTING],
        providerId: provider.id,
        description:
          'Includes wood scraping, door alignment & minor fixing\nExcludes hinge replacement, dismantling of door or door lock repairs\nMain door & damaged doors as per quotation\nExcludes hinge replacement, door dismantling or any other lock repairs.',
        price: 169,
      },
    ]);
    await repo.save(services);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.connection.getRepository(ServiceRequestEntity).clear();
  }
}
