/// <reference types="cypress" />
import 'cypress-file-upload';
// Removed unnecessary import of Cypress
//import { TogglePayload } from '@/features/transaction/booking/booking';

interface TogglePayload {
  amount: number;
  description: string;
  transactionType: string;
  sender: { id: string };
  receiver: { id: string };
}

declare global {
  namespace Cypress {
    interface Chainable {
      createTransaction(payload: TogglePayload): void;
    }
  }

}
import "cypress";

Cypress.Commands.add("createTransaction", (payload: TogglePayload) => {

  const log = Cypress.log({
    name: "createTransaction",
    displayName: "CREATE TRANSACTION",
    message: [`💸 (${payload.transactionType}): ${payload.sender.id} <> ${payload.receiver.id}`],
    autoEnd: false,
    consoleProps: () => payload,
  });

  return cy.window({ log: false }).then((win) => {
    const service = (win as Window).createTransactionService;
    if (!service) {
      throw new Error("createTransactionService is not available on window");
    }

    log.snapshot("before");
    service.send("SET_USERS", payload);

    service.send("CREATE", {
      amount: payload.amount,
      description: payload.description,
      transactionType: payload.transactionType,
      senderId: payload.sender.id,
      receiverId: payload.receiver.id,
    });

    log.snapshot("after");
    log.end();
  });
});