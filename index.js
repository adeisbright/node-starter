const TicketManager = require("./ticketManager");
const EmailService = require("./emailService");
const DatabaseService = require("./databaseService");

const ticketManager = new TicketManager(3);
const emailService = new EmailService();
const databaseService = new DatabaseService();

const onBuy = () => {
    console.log("I will be removed soon");
};
ticketManager.on("buy", (email, price, timestamp) => {
    emailService.send(email);
    databaseService.save(email, price, timestamp);
})
ticketManager.on("buy", onBuy);


ticketManager.buy("test@email.com", 10);
ticketManager.buy("test@email.com", 10);
ticketManager.off("buy", onBuy);
ticketManager.on("buy", onBuy);
console.log(`We have ${ticketManager.listenerCount("buy")} listener(s) for the buy event`); // Counting how many handlers are subscribed to an event
console.log(`We have ${ticketManager.listenerCount("error")} listener(s) for the error event`);
