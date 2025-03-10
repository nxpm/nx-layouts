import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../../api/src/app/app.module';

describe('CoreModule (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/graphql (POST)', () => {
    return request(app.getHttpServer())
      .post('/graphql')
      .send({ query: `query { uptime }` })
      .expect(200)
      .expect((res) => {
        const body = res.body;

        if (!body.data) {
          throw Error(`Data prop not found`);
        }

        if (!body.data.uptime) {
          throw Error(`Data prop not found`);
        }

        if (typeof body.data.uptime !== 'number') {
          throw Error(`Uptime not a number`);
        }
        return true;
      });
  });
});
