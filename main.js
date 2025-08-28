const balanceEl = document.getElementById('balance');
    const incomeEl = document.getElementById('income');
    const expenseEl = document.getElementById('expense');
    const transactionsList = document.getElementById('transactions-list');
    const transactionForm = document.getElementById('transaction-form');
    const resetBtn = document.getElementById('reset-btn');
    const chartCanvas = document.getElementById('chart');

    let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

    const chart = new Chart(chartCanvas, {
      type: 'doughnut',
      data: {
        labels: ['Income', 'Expenses'],
        datasets: [{
          data: [0, 0],
          backgroundColor: ['#2ecc71', '#e74c3c']
        }]
      },
      options: { cutout: '70%' }
    });

    function formatCurrency(amount) {
      return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
    }

    function updateSummary() {
      const income = transactions.filter(t => t.type === 'income').reduce((a, t) => a + t.amount, 0);
      const expense = transactions.filter(t => t.type === 'expense').reduce((a, t) => a + t.amount, 0);
      const balance = income - expense;

      incomeEl.textContent = formatCurrency(income);
      expenseEl.textContent = formatCurrency(expense);
      balanceEl.textContent = formatCurrency(balance);

      chart.data.datasets[0].data = [income, expense];
      chart.update();
    }

    function renderTransactions() {
      transactionsList.innerHTML = '';
      if (transactions.length === 0) {
        transactionsList.innerHTML = '<p>No transactions yet.</p>';
        return;
      }
      transactions.forEach(t => {
        const div = document.createElement('div');
        div.className = `transaction-item ${t.type}`;
        div.innerHTML = `
          <div class="transaction-info">
            <i class="fas ${t.type === 'income' ? 'fa-plus' : 'fa-minus'}"></i>
            <span>${t.title} (${t.category}) - ${t.date}</span>
          </div>
          <div class="transaction-amount">${t.type === 'income' ? '+' : '-'}${formatCurrency(t.amount)}</div>
          <button class="delete-btn" data-id="${t.id}"><i class="fas fa-trash"></i></button>
        `;
        transactionsList.appendChild(div);
      });
    }

    function addTransaction(e) {
      e.preventDefault();
      const title = document.getElementById('title').value;
      const amount = parseFloat(document.getElementById('amount').value);
      const type = document.querySelector('input[name="transaction_type"]:checked').value;
      const category = document.getElementById('category').value;
      const date = document.getElementById('date').value;

      const transaction = { id: Date.now(), title, amount, type, category, date };
      transactions.push(transaction);
      localStorage.setItem('transactions', JSON.stringify(transactions));

      renderTransactions();
      updateSummary();
      transactionForm.reset();
    }

    function deleteTransaction(id) {
      transactions = transactions.filter(t => t.id !== id);
      localStorage.setItem('transactions', JSON.stringify(transactions));
      renderTransactions();
      updateSummary();
    }

    transactionsList.addEventListener('click', e => {
      if (e.target.closest('.delete-btn')) {
        const id = parseInt(e.target.closest('.delete-btn').dataset.id);
        deleteTransaction(id);
      }
    });

    resetBtn.addEventListener('click', () => {
      if (confirm('Reset all data?')) {
        transactions = [];
        localStorage.removeItem('transactions');
        renderTransactions();
        updateSummary();
      }
    });

    transactionForm.addEventListener('submit', addTransaction);

    renderTransactions();
    updateSummary();