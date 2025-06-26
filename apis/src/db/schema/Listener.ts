import { pgTable as table } from "drizzle-orm/pg-core";
import { db } from "@duneanalytics/sim-idx";

export const poolCreated = table("pool_created", {
  chainId: db.uint64('chain_id'),
  caller: db.address('caller'),
  pool: db.address('pool'),
  token0: db.address('token0'),
  token1: db.address('token1'),
  fee: db.uint24('fee'),
})
