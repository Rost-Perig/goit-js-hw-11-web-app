/*
 =========================================promisification============================================ 
 */

const task31El = document.querySelector('#task31');
const task32El = document.querySelector('#task32');
const task33El = document.querySelector('#task33');
/* 
*ЗАДАНИЕ 1 - прикольно 
*/

const delay = ms => {
  // Твой код
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const passed = Math.random() > 0.5;
            if (passed) {
                resolve(ms);
            }
            reject(ms);
        },ms);
    });
};

const logger = time => {
  console.log(`TASK 1: Resolved after ${time}ms`);
  task31El.insertAdjacentHTML('beforeend', `<p></p>TASK 1: Resolved after ${time}ms.</p>`);
}

const logErr = time => {
  console.warn(`TASK 1: З ${time}мс не склалося... ХАЛЕПА!`);
  task31El.insertAdjacentHTML('beforeend', `<p class="err">TASK 1: З ${time}мс не склалося... ХАЛЕПА!</p>`);
}

delay(2000)
    .then(logger)
    .catch(logErr);
delay(1000)
    .then(logger)
    .catch(logErr);
delay(1500)
    .then(logger)
    .catch(logErr);

/* 
*ЗАДАНИЕ 2 - выполненное 
*/
console.log('TASK 2')

const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName) => {
    return new Promise((resolve, reject) => {
        const updatedUsers = allUsers.map(user =>
            user.name === userName ? { ...user, active: !user.active } : user,
        );
        resolve(updatedUsers);
    });
};    
    
const loggerTwo = updatedUsers => {
  console.table(updatedUsers);
  task32El.insertAdjacentHTML('beforeend', `<p>${JSON.stringify(updatedUsers)}</p>`);
};

/*
 * Должно работать так
 */
toggleUserState(users, 'Mango').then(loggerTwo);
toggleUserState(users, 'Lux').then(loggerTwo);



/* 
*ЗАДАНИЕ 3 - выполненное
*/
const makeTransaction = (transaction) => {
    
    return new Promise((resolve, reject) => {
     const delay = randomIntegerFromInterval(200, 500);    
    setTimeout(() => {
              
        const canProcess = Math.random() > 0.3;

        if (canProcess) {
            resolve({ id:transaction.id, time:delay });
        } 
        reject(transaction.id);
        
    }, delay); 
    })
    
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const logSuccess = (obj) => {
  console.log(`TASK 3: Transaction ${obj.id} processed in ${obj.time}ms`);
  task33El.insertAdjacentHTML('beforeend', `<p>TASK 3: Transaction ${obj.id} processed in ${obj.time}ms.</p>`);
};

const logError = id => {
  console.warn(`TASK 3: Error processing transaction ${id}. Please try again later.`);
  task33El.insertAdjacentHTML('beforeend', `<p class="err">TASK 3: Error processing transaction ${id}. Please try again later.</p>`);
};
/*
 * Должно работать так
 */
makeTransaction({ id: 70, amount: 150 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 71, amount: 230 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 72, amount: 75 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 73, amount: 100 })
  .then(logSuccess)
  .catch(logError);