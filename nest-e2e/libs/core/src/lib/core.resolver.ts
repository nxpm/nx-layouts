import { Float, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class CoreResolver {
  @Query(() => Float, { nullable: true })
  uptime() {
    return process.uptime();
  }
}
