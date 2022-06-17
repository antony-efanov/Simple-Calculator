let previosNumber = document.querySelector('#previousDisplay').textContent;
let currentNumber = document.querySelector('#display').textContent;
let currentOperator

const btnCE = document.querySelector('#CE');
const btnON = document.querySelector('#ON');

const btnROOT = document.querySelector('#root');
const btnPERCENT = document.querySelector('#percent');
const btnDIVISION = document.querySelector('#division');
const btnMULTIPLY = document.querySelector('#multiply');
const btnMINUS = document.querySelector('#minus');
const btnPLUS = document.querySelector('#plus');

const btnRESULT = document.querySelector('#result');

const numbers = document.querySelectorAll('.number');

function assignNumberOne() {

  numbers.forEach(number => {
    number.addEventListener('click', () => {

      if (currentNumber.length >= 8) {
        console.log('too much')
        console.log(currentNumber)
        return
      }
      
      currentNumber += number.textContent;
      document.querySelector('#display').textContent = currentNumber
    });
  });
};

function clearScreens() {
  btnCE.addEventListener('click', () => {
    if (previosNumber || currentNumber) {
      previosNumber = '';
      currentNumber = '';
      document.querySelector('#display').textContent = '';
      document.querySelector('#previousDisplay').textContent = '';
    }
  });
};

function choseOperator() {
  btnROOT.addEventListener('click', () => {
    currentOperator = '√';
    checkIsNull();
  });
  btnPERCENT.addEventListener('click', () => {
    currentOperator = '%';
    checkIsNull();
  });
  btnDIVISION.addEventListener('click', () => {
    currentOperator = '/';
    checkIsNull();
  });
  btnMULTIPLY.addEventListener('click', () => {
    currentOperator = '*';
    checkIsNull();
  });
  btnMINUS.addEventListener('click', () => {
    currentOperator = '-';
    checkIsNull();
  });
  btnPLUS.addEventListener('click', () => {
    currentOperator = '+';
    checkIsNull();
  });

  function checkIsNull() {
    if (currentNumber != '') {
      previosNumber = currentNumber;
      currentNumber = '';
      document.querySelector('#previousDisplay').textContent = previosNumber + currentOperator;
      document.querySelector('#display').textContent = '';
    }
  }
}

function displayResult() {
  btnRESULT.addEventListener('click', () => {

    let result;

    if (previosNumber && currentNumber) {
      switch(currentOperator) {
        case '+':
          result = parseFloat(previosNumber) + parseFloat(currentNumber);
          document.querySelector('#previousDisplay').textContent = '';
          document.querySelector('#display').textContent = result;
          break
        case '-':
          result = parseFloat(previosNumber) - parseFloat(currentNumber);
          document.querySelector('#previousDisplay').textContent = '';
          document.querySelector('#display').textContent = result;
          break
        case '*':
          result = parseFloat(previosNumber) * parseFloat(currentNumber);
          document.querySelector('#previousDisplay').textContent = '';
          document.querySelector('#display').textContent = result;
          break
        case '/':
          result = parseFloat(previosNumber) / parseFloat(currentNumber);
          document.querySelector('#previousDisplay').textContent = '';
          document.querySelector('#display').textContent = result;
          break
        
      }
    }
  })
}

displayResult();

choseOperator();

clearScreens();

assignNumberOne();

