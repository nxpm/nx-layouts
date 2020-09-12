import { Int, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class CoreResolver {
  @Query(() => Int, { nullable: true })
  uptime() {
    return process.uptime();
  }
}
