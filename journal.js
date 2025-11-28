// Vanilla JS Trading Journal

const app = document.getElementById('app');
let trades = [];
let accountBalance = 49714;

function render() {
  app.innerHTML = `
    <div class="max-w-7xl mx-auto">
      <div class="bg-white rounded-xl shadow-2xl p-8 mb-6">
        <h1 class="text-3xl font-bold text-gray-800 mb-2">Gold Trading Journal</h1>
        <p class="text-gray-600 mb-4">Elite Alpha Trader | $50K Prop Account</p>
        <div class="mb-4">
          <span class="font-semibold">Account Balance:</span> $${accountBalance.toFixed(2)}
        </div>
        <button id="exportCSV" class="bg-purple-600 text-white px-4 py-2 rounded-lg">Export CSV</button>
      </div>
      <div class="bg-white rounded-xl shadow-2xl p-8 mb-6">
        <h2 class="text-2xl font-bold text-gray-800 mb-6">Add New Trade</h2>
        <form id="tradeForm" class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <input type="date" name="date" value="${new Date().toISOString().split('T')[0]}" required class="px-4 py-2 border rounded-lg" />
          <input type="number" step="0.01" name="entryPrice" placeholder="Entry Price*" required class="px-4 py-2 border rounded-lg" />
          <input type="number" step="0.01" name="exitPrice" placeholder="Exit Price*" required class="px-4 py-2 border rounded-lg" />
          <input type="number" step="0.01" name="lotSize" placeholder="Lot Size" class="px-4 py-2 border rounded-lg" />
          <select name="direction" class="px-4 py-2 border rounded-lg">
            <option value="Long">Long</option>
            <option value="Short">Short</option>
          </select>
          <input type="number" step="0.01" name="riskAmount" placeholder="Risk Amount" class="px-4 py-2 border rounded-lg" />
          <input type="text" name="setup" placeholder="Setup/Strategy" class="px-4 py-2 border rounded-lg" />
          <input type="text" name="notes" placeholder="Notes" class="px-4 py-2 border rounded-lg" />
          <button type="submit" class="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-lg font-bold col-span-1 md:col-span-3 mt-2">Add Trade</button>
        </form>
      </div>
      <div class="bg-white rounded-xl shadow-2xl p-8">
        <h2 class="text-2xl font-bold text-gray-800 mb-6">Trade History (${trades.length})</h2>
        ${trades.length === 0 ? `<p class="text-center text-gray-500 py-8">No trades logged yet. Add your first trade above!</p>` : `
          <table class="w-full">
            <thead>
              <tr class="bg-purple-600 text-white">
                <th class="px-4 py-3">#</th>
                <th class="px-4 py-3">Date</th>
                <th class="px-4 py-3">Direction</th>
                <th class="px-4 py-3">Entry</th>
                <th class="px-4 py-3">Exit</th>
                <th class="px-4 py-3">P/L</th>
                <th class="px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              ${trades.map((t, i) => `
                <tr>
                  <td class="px-4 py-3">${i+1}</td>
                  <td class="px-4 py-3">${t.date}</td>
                  <td class="px-4 py-3">${t.direction}</td>
                  <td class="px-4 py-3">${t.entryPrice}</td>
                  <td class="px-4 py-3">${t.exitPrice}</td>
                  <td class="px-4 py-3">${t.profitLoss}</td>
                  <td class="px-4 py-3">
                    <button data-del="${t.id}" class="text-red-600">Delete</button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        `}
      </div>
    </div>
  `;

  document.getElementById('tradeForm').onsubmit = function(e) {
    e.preventDefault();
    const fd = Object.fromEntries(new FormData(e.target));
    fd.id = Date.now();
    fd.profitLoss = calcPL(fd);
    trades.push(fd);
    accountBalance += parseFloat(fd.profitLoss || 0);
    render();
  };

  document.querySelectorAll('button[data-del]').forEach(btn => {
    btn.onclick = function() {
      const id = btn.getAttribute('data-del');
      const idx = trades.findIndex(t => t.id == id);
      if (idx > -1) {
        accountBalance -= parseFloat(trades[idx].profitLoss || 0);
        trades.splice(idx, 1);
        render();
      }
    };
  });

  document.getElementById('exportCSV').onclick = function() {
    const headers = ['date','direction','entryPrice','exitPrice','lotSize','riskAmount','setup','notes','profitLoss'];
    const rows = trades.map(t => headers.map(h => `"${t[h]||''}"`).join(','));
    const csv = [headers.join(','), ...rows].join('\n');
    const blob = new Blob([csv], {type:'text/csv'});
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `Trading_Journal_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };
}

function calcPL(data) {
  if (!data.entryPrice || !data.exitPrice || !data.lotSize) return 0;
  const entry = parseFloat(data.entryPrice);
  const exit = parseFloat(data.exitPrice);
  const lots = parseFloat(data.lotSize);
  const pips = data.direction === 'Long' ? (exit - entry) * 10 : (entry - exit) * 10;
  const plPerPip = lots * 10;
  return (pips * plPerPip).toFixed(2);
}

render();
// ...end of file...