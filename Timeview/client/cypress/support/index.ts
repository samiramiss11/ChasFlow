import './commands'

/// <reference types="cypress" />
/// <reference types="jquery" />
export {}; // Ensures this file is treated as a module

// Declare custom Cypress commands and properties for Cypress global scope.
declare namespace Cypress {
  // Extending the Chainable interface for custom commands
//   interface Chainable<Subject> {
//     /**
//      * Custom command to create a transaction.
//      * @param payload The transaction details.
//      */
//     createTransaction(payload: TogglePayload): Chainable<void>;

//     // Other custom commands can go here.
//     getByData(dataTestAttribute: string): Chainable<JQuery<HTMLElement>>;
//   }
  interface Chainable {
      createTransaction(payload: TogglePayload): void;
    }
  // Extending the AUTWindow interface to include createTransactionService
  interface AUTWindow {
    createTransactionService: {
      send: (event: string, payload?: any) => void;
    };
  }
}

// Declare the global window interface to include the service
declare global {
  interface Window {
    createTransactionService?: {
      send: (event: string, payload: any) => void;
    };
  }
}

// Define the TogglePayload type
interface TogglePayload {
  amount: number;
  description: string;
  transactionType: string;
  sender: { id: string };
  receiver: { id: string };
}
