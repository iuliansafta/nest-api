import { Inject, Injectable } from '@nestjs/common';
import { PG_CONNECTION } from './constants';
import { CreateAddressDTO } from './create-address.dto';

@Injectable()
export class AppService {
  constructor(@Inject(PG_CONNECTION) private conn: any) {}

  async getAddress() {
    const res = await this.conn.query('SELECT * FROM wallets');
    return res.rows;
  }

  async addAddress({ address, chainName }: CreateAddressDTO) {
    const res = await this.conn.query(
      'INSERT INTO wallets(address, chain_name) VALUES($1, $2)',
      [address, chainName],
    );
    return res[0];
  }
}
