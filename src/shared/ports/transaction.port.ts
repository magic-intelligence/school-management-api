import { UnitOfWorkPort } from "src/shared/ports/unit-of-work.port";

export const TRANSACTION_PORT = 'TRANSACTION_PORT';

export interface TransactionPort extends UnitOfWorkPort{

}