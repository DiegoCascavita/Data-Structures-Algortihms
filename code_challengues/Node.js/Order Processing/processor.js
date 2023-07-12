const EventEmitter = require('events');
const stockData = require('./stock-list.json');

class OrderProcessor extends EventEmitter {
  placeOrder(orderData) {
    const { orderNumber, lineItems } = orderData;

    // Emit PROCESSING_STARTED event
    this.emit('PROCESSING_STARTED', orderNumber);

    if (lineItems.length === 0) {
      // Emit PROCESSING_FAILED event for empty lineItems
      this.emit('PROCESSING_FAILED', {
        orderNumber,
        reason: 'LINEITEMS_EMPTY'
      });
    } else {
      for (const lineItem of lineItems) {
        const { itemId, quantity } = lineItem;
        const stockItem = stockData.find(item => item.id === itemId);

        if (quantity > stockItem.stock) {
          // Emit PROCESSING_FAILED event for insufficient stock
          this.emit('PROCESSING_FAILED', {
            orderNumber,
            itemId,
            reason: 'INSUFFICIENT_STOCK'
          });
          return; // Stop processing further lineItems
        }
      }

      // Emit PROCESSING_SUCCESS event if all pre-order checks pass
      this.emit('PROCESSING_SUCCESS', orderNumber);
    }
  }
}

module.exports = OrderProcessor;

//-----------------------------------------------------------------------------
const EventEmitter = require('events');
const stockData = require('./stock-list.json');
/*
In this part, we import the EventEmitter class from the Node.js events module, which allows us to create an event-driven architecture. We also import the stock data from the stock-list.json file, assuming it's present in the same directory as the processor.js file.*/

class OrderProcessor extends EventEmitter {
  // Class implementation goes here
}
/*
Here, we define the OrderProcessor class, which inherits from the EventEmitter class. This allows instances of the OrderProcessor class to emit events and have event listeners attached to them.

Implementing the placeOrder Method:*/

placeOrder(orderData) {
  const { orderNumber, lineItems } = orderData;

  // Emit PROCESSING_STARTED event
  this.emit('PROCESSING_STARTED', orderNumber);

  // Rest of the method implementation
}
/*
The placeOrder method accepts the orderData object as an argument, which should have properties orderNumber and lineItems. It starts by extracting these properties using destructuring assignment.

Next, it emits the PROCESSING_STARTED event, passing the orderNumber as the argument. This event indicates that the pre-order checks for a specific order have started.

Handling Empty lineItems:*/

if (lineItems.length === 0) {
  // Emit PROCESSING_FAILED event for empty lineItems
  this.emit('PROCESSING_FAILED', {
    orderNumber,
    reason: 'LINEITEMS_EMPTY'
  });
}
/*
This part checks if the lineItems array is empty. If it is, it emits the PROCESSING_FAILED event with an object containing the orderNumber and the reason set to 'LINEITEMS_EMPTY'. This event indicates that the order processing failed because the lineItems array is empty.

Performing Pre-Order Checks:*/

for (const lineItem of lineItems) {
  const { itemId, quantity } = lineItem;
  const stockItem = stockData.find(item => item.id === itemId);

  if (quantity > stockItem.stock) {
    // Emit PROCESSING_FAILED event for insufficient stock
    this.emit('PROCESSING_FAILED', {
      orderNumber,
      itemId,
      reason: 'INSUFFICIENT_STOCK'
    });
    return; // Stop processing further lineItems
  }
}
/*
Here, we iterate over each lineItem in the lineItems array using a for...of loop. For each line item, we extract the itemId and quantity using destructuring assignment.

We then find the corresponding stock item from the stockData array using the itemId with the Array.prototype.find() method.

If the requested quantity for a line item exceeds the available stock (quantity > stockItem.stock), we emit the PROCESSING_FAILED event with an object containing the orderNumber, itemId, and the reason set to 'INSUFFICIENT_STOCK'. This event indicates that the order processing failed due to insufficient stock for a particular item.

Additionally, we use the return statement to exit the method and stop processing further line items since one failed check is enough to fail the entire order.

Handling Successful Order Processing:*/

this.emit('PROCESSING_SUCCESS', orderNumber);

/*
If all the pre-order checks pass without any failures, we emit the PROCESSING_SUCCESS event, passing the orderNumber as the argument. This event indicates that the pre-order checks were successful for the order.

Exporting the OrderProcessor Class:*/

module.exports = OrderProcessor;

/*
Finally, we export the OrderProcessor class as the default export of the processor.js module, allowing it to be imported and used in other files.

That's a walkthrough of the implementation of the processor.js module. It provides the OrderProcessor class with the ability to perform pre-order checks, emit events for different processing stages, and handle those events with event listeners.

In the index.js file, you can see an example of how to use the OrderProcessor class. It creates an instance of OrderProcessor, attaches event listeners to handle the emitted events, and calls the placeOrder method with different order data to simulate order processing.
*/