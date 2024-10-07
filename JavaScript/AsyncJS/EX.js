console.log("Start");
setTimeout(() => {
 console.log("Inside setTimeout with 0ms");
}, 0);
console.log("End");
//Q1
// my predict is the code will print int this order : start -> Inside setTimeout with 0ms -> end , it will pint
// in this order because first the main thread when he start it will print start and then because the the thread 
//have to wait for 0ms thats mean it will not wait it just like without waiting and then he will print the second
// sentence and the he will print the end
//result : my predictions was not correct thats means that if there a collback function it will continue and then 
//he will back to it

console.log("Start");
setTimeout(() => {
 console.log("Timeout 1: After 50ms");
}, 50);
setTimeout(() => {
 console.log("Timeout 2: After 30ms");
}, 30);
setTimeout(() => {
 console.log("Timeout 3: After 0ms");
}, 0);
console.log("End");
//Q2
//my predictions that the code will print it in this oreder : start->end->Timeout 3: After 0ms->Timeout 2: After 30ms->Timeout 1: After 50ms
//in the first the main therad will print start and then just like the Q1 he will print END and the first one that will finish
//the waiting is the third and the second and then the first

console.log("First");
setTimeout(() => {
 console.log("Inside Timeout 1: After 20ms");
}, 20);
for (let i = 0; i < 1000000000; i++) {
    // Simulate a long-running task
}
setTimeout(() => {
    console.log("Inside Timeout 2: After 0ms");
}, 0);
console.log("Last");

//Q3
//the predicate is that the code will print in this order : first -> end -> Inside Timeout 1: After 20ms -> Inside Timeout 2: After 0ms
//because at the first the code will print the fist and then hw will do the loop the loop will execute and then the first collback
//time not finsh and the seconed not finish becouse that he will print the end adn becouse the coll back enter in a thing
// like queue then first who will execute is the first collback and the seconed
//and the function is synchronously


console.log("Start");
setTimeout(() => {
 console.log("First Timeout");
 setTimeout(() => {
 console.log("Nested Timeout");
 }, 0);
}, 100);
setTimeout(() => {
 console.log("Second Timeout");
}, 50);
console.log("End");

// Q4
//the predicate is that the code will print in this order : Start -> end -> Second Timeout -> First Timeout -> Nested Timeout
//because at the first the code will print the fist and then evere thread is take a waiting time because that he till print the end and the
//first who finsh the waiting time is the second becouse that he will print  Second Timeout, the nested timeout it take 0ms but the 0ms 
//is in a callback who will waiting 100ms becouse that the nested timeout will waiting 100ms and execut after the first timeout
//and the function is synchronously

console.log("Start");
setInterval(() => {
 console.log("Interval: Every 30ms");
}, 30);
setTimeout(() => {
 console.log("Timeout 1: After 50ms");
}, 50);
setTimeout(() => {
 console.log("Timeout 2: After 100ms");
 clearInterval(this.interval);
}, 100);
console.log("End");
//Q5
//my predicate is that first will print start->end->"Interval: Every 30ms"->"Interval: Every 50ms"->"Interval: Every 30ms"->"Interval: Every 30ms"->"Interval: Every 100ms" and repeat the line "Interval: Every 30ms"
//according to the working to setInterval it will be executed every 30ms that it will be executed every 30ms and print the line 
//that mean we will have an infinite loop that will print the line "Interval: Every 30ms"
//the function is asynchronous