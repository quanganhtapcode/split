// Bank data for VietQR - Sorted alphabetically by name
const BANKS = [
  {"id":43,"name":"Ngân hàng TMCP Ngoại Thương Việt Nam","code":"VCB","bin":"970436","shortName":"Vietcombank"},
  {"id":17,"name":"Ngân hàng TMCP Công thương Việt Nam","code":"ICB","bin":"970415","shortName":"VietinBank"},
  {"id":4,"name":"Ngân hàng TMCP Đầu tư và Phát triển Việt Nam","code":"BIDV","bin":"970418","shortName":"BIDV"},
  {"id":42,"name":"Ngân hàng Nông nghiệp và Phát triển Nông thôn Việt Nam","code":"VBA","bin":"970405","shortName":"Agribank"},
  {"id":38,"name":"Ngân hàng TMCP Kỹ thương Việt Nam","code":"TCB","bin":"970407","shortName":"Techcombank"},
  {"id":47,"name":"Ngân hàng TMCP Việt Nam Thịnh Vượng","code":"VPB","bin":"970432","shortName":"VPBank"},
  {"id":36,"name":"Ngân hàng TMCP Sài Gòn Thương Tín","code":"STB","bin":"970403","shortName":"Sacombank"},
  {"id":21,"name":"Ngân hàng TMCP Quân đội","code":"MB","bin":"970422","shortName":"MBBank"},
  {"id":12,"name":"Ngân hàng TMCP Phát triển Thành phố Hồ Chí Minh","code":"HDB","bin":"970437","shortName":"HDBank"},
  {"id":2,"name":"Ngân hàng TMCP Á Châu","code":"ACB","bin":"970416","shortName":"ACB"},
  {"id":35,"name":"Ngân hàng TMCP Sài Gòn - Hà Nội","code":"SHB","bin":"970443","shortName":"SHB"},
  {"id":45,"name":"Ngân hàng TMCP Quốc tế Việt Nam","code":"VIB","bin":"970441","shortName":"VIB"},
  {"id":39,"name":"Ngân hàng TMCP Tiên Phong","code":"TPB","bin":"970423","shortName":"TPBank"},
  {"id":26,"name":"Ngân hàng TMCP Phương Đông","code":"OCB","bin":"970448","shortName":"OCB"},
  {"id":22,"name":"Ngân hàng TMCP Hàng Hải","code":"MSB","bin":"970426","shortName":"MSB"},
  {"id":20,"name":"Ngân hàng TMCP Lộc Phát Việt Nam","code":"LPB","bin":"970449","shortName":"LPBank"},
  {"id":23,"name":"Ngân hàng TMCP Nam Á","code":"NAB","bin":"970428","shortName":"NamABank"},
  {"id":24,"name":"Ngân hàng TMCP Quốc Dân","code":"NCB","bin":"970419","shortName":"NCB"},
  {"id":30,"name":"Ngân hàng TMCP Đại Chúng Việt Nam","code":"PVCB","bin":"970412","shortName":"PVcomBank"},
  {"id":31,"name":"Ngân hàng TMCP Sài Gòn","code":"SCB","bin":"970429","shortName":"SCB"},
  {"id":10,"name":"Ngân hàng TMCP Xuất Nhập khẩu Việt Nam","code":"EIB","bin":"970431","shortName":"Eximbank"},
  {"id":29,"name":"Ngân hàng TMCP Xăng dầu Petrolimex","code":"PGB","bin":"970430","shortName":"PGBank"},
  {"id":1,"name":"Ngân hàng TMCP An Bình","code":"ABB","bin":"970425","shortName":"ABBANK"},
  {"id":3,"name":"Ngân hàng TMCP Bắc Á","code":"BAB","bin":"970409","shortName":"BacABank"},
  {"id":5,"name":"Ngân hàng TMCP Bảo Việt","code":"BVB","bin":"970438","shortName":"BaoVietBank"},
  {"id":9,"name":"Ngân hàng TMCP Đông Á","code":"DOB","bin":"970406","shortName":"DongABank"},
  {"id":19,"name":"Ngân hàng TMCP Kiên Long","code":"KLB","bin":"970452","shortName":"KienLongBank"},
  {"id":27,"name":"Ngân hàng Thương mại TNHH MTV Đại Dương","code":"Oceanbank","bin":"970414","shortName":"Oceanbank"},
  {"id":33,"name":"Ngân hàng TMCP Đông Nam Á","code":"SEAB","bin":"970440","shortName":"SeABank"},
  {"id":34,"name":"Ngân hàng TMCP Sài Gòn Công Thương","code":"SGICB","bin":"970400","shortName":"SaigonBank"},
  {"id":41,"name":"Ngân hàng TMCP Việt Á","code":"VAB","bin":"970427","shortName":"VietABank"},
  {"id":44,"name":"Ngân hàng TMCP Bản Việt","code":"VCCB","bin":"970454","shortName":"VietCapitalBank"},
  {"id":46,"name":"Ngân hàng TMCP Việt Nam Thương Tín","code":"VIETBANK","bin":"970433","shortName":"VietBank"},
  {"id":11,"name":"Ngân hàng Thương mại TNHH MTV Dầu Khí Toàn Cầu","code":"GPB","bin":"970408","shortName":"GPBank"},
  {"id":6,"name":"Ngân hàng Thương mại TNHH MTV Xây dựng Việt Nam","code":"CBB","bin":"970444","shortName":"CBBank"},
  {"id":53,"name":"TMCP Việt Nam Thịnh Vượng - Ngân hàng số CAKE by VPBank","code":"CAKE","bin":"546034","shortName":"CAKE"},
  {"id":54,"name":"TMCP Việt Nam Thịnh Vượng - Ngân hàng số Ubank by VPBank","code":"Ubank","bin":"546035","shortName":"Ubank"},
  {"id":58,"name":"Ngân hàng số Timo by Ban Viet Bank (Timo)","code":"TIMO","bin":"963388","shortName":"Timo"},
  {"id":37,"name":"Ngân hàng TNHH MTV Shinhan Việt Nam","code":"SHBVN","bin":"970424","shortName":"ShinhanBank"},
  {"id":14,"name":"Ngân hàng TNHH MTV HSBC (Việt Nam)","code":"HSBC","bin":"458761","shortName":"HSBC"},
  {"id":32,"name":"Ngân hàng TNHH MTV Standard Chartered Bank Việt Nam","code":"SCVN","bin":"970410","shortName":"StandardChartered"},
  {"id":49,"name":"Ngân hàng TNHH MTV Woori Việt Nam","code":"WVN","bin":"970457","shortName":"Woori"},
  {"id":7,"name":"Ngân hàng TNHH MTV CIMB Việt Nam","code":"CIMB","bin":"422589","shortName":"CIMB"},
  {"id":13,"name":"Ngân hàng TNHH MTV Hong Leong Việt Nam","code":"HLBVN","bin":"970442","shortName":"HongLeong"},
  {"id":28,"name":"Ngân hàng TNHH MTV Public Việt Nam","code":"PBVN","bin":"970439","shortName":"PublicBank"},
  {"id":18,"name":"Ngân hàng TNHH Indovina","code":"IVB","bin":"970434","shortName":"IndovinaBank"},
  {"id":59,"name":"Ngân hàng Citibank, N.A. - Chi nhánh Hà Nội","code":"CITIBANK","bin":"533948","shortName":"Citibank"},
  {"id":8,"name":"DBS Bank Ltd - Chi nhánh Thành phố Hồ Chí Minh","code":"DBS","bin":"796500","shortName":"DBSBank"},
  {"id":40,"name":"Ngân hàng United Overseas - Chi nhánh TP. Hồ Chí Minh","code":"UOB","bin":"970458","shortName":"UnitedOverseas"},
  {"id":15,"name":"Ngân hàng Công nghiệp Hàn Quốc - Chi nhánh Hà Nội","code":"IBK - HN","bin":"970455","shortName":"IBKHN"},
  {"id":16,"name":"Ngân hàng Công nghiệp Hàn Quốc - Chi nhánh TP. Hồ Chí Minh","code":"IBK - HCM","bin":"970456","shortName":"IBKHCM"},
  {"id":60,"name":"Ngân hàng KEB Hana – Chi nhánh Thành phố Hồ Chí Minh","code":"KEBHANAHCM","bin":"970466","shortName":"KEBHanaHCM"},
  {"id":61,"name":"Ngân hàng KEB Hana – Chi nhánh Hà Nội","code":"KEBHANAHN","bin":"970467","shortName":"KEBHANAHN"},
  {"id":50,"name":"Ngân hàng Kookmin - Chi nhánh Hà Nội","code":"KBHN","bin":"970462","shortName":"KookminHN"},
  {"id":51,"name":"Ngân hàng Kookmin - Chi nhánh Thành phố Hồ Chí Minh","code":"KBHCM","bin":"970463","shortName":"KookminHCM"},
  {"id":25,"name":"Ngân hàng Nonghyup - Chi nhánh Hà Nội","code":"NHB HN","bin":"801011","shortName":"Nonghyup"},
  {"id":55,"name":"Ngân hàng Đại chúng TNHH Kasikornbank (KBank)","code":"KBank","bin":"668888","shortName":"KBank"},
  {"id":48,"name":"Ngân hàng Liên doanh Việt - Nga","code":"VRB","bin":"970421","shortName":"VRB"},
  {"id":52,"name":"Ngân hàng Hợp tác xã Việt Nam","code":"COOPBANK","bin":"970446","shortName":"COOPBANK"},
  {"id":63,"name":"Ngân hàng Chính sách Xã hội","code":"VBSP","bin":"999888","shortName":"VBSP"},
  {"id":62,"name":"Công ty Tài chính TNHH MTV Mirae Asset (Việt Nam)","code":"MAFC","bin":"977777","shortName":"MAFC"},
  {"id":57,"name":"Tổng Công ty Dịch vụ số Viettel - Chi nhánh tập đoàn công nghiệp viễn thông Quân Đội","code":"VTLMONEY","bin":"971005","shortName":"ViettelMoney"},
  {"id":56,"name":"VNPT Money","code":"VNPTMONEY","bin":"971011","shortName":"VNPTMoney"}
];

class BillSplitter {
  constructor() {
    this.people = [];
    this.items = [];
    this.currentTransactions = [];
    this.paymentInfo = {
      bankCode: '',
      accountNo: '',
      accountName: ''
    };

    this.initializeElements();
    this.setupEventListeners();
    this.populateBankSelect();
    this.loadData();
    this.updateUI();
  }
  initializeElements() {
    // Main elements
    this.peopleNamesTextarea = document.getElementById('peopleNames');
    this.peopleCount = document.getElementById('peopleCount');
    this.addItemBtn = document.getElementById('addItemBtn');
    this.itemsList = document.getElementById('itemsList');
    this.emptyState = document.getElementById('emptyState');
    this.clearAllBtn = document.getElementById('clearAllBtn');
    
    // Results
    this.totalAmount = document.getElementById('totalAmount');
    this.resultsList = document.getElementById('resultsList');
    this.emptyResults = document.getElementById('emptyResults');
    
    // Payment elements
    this.paymentSection = document.getElementById('paymentSection');
    this.togglePaymentBtn = document.getElementById('togglePaymentBtn');
    this.paymentForm = document.getElementById('paymentForm');
    this.bankSelect = document.getElementById('bankSelect');
    this.accountNo = document.getElementById('accountNo');
    this.accountName = document.getElementById('accountName');
    this.qrContainer = document.getElementById('qrContainer');
    this.qrImage = document.getElementById('qrImage');
    this.qrAmount = document.getElementById('qrAmount');
    this.qrLoading = document.getElementById('qrLoading');
    this.downloadQR = document.getElementById('downloadQR');
    this.shareQR = document.getElementById('shareQR');
    this.clearQRBtn = document.getElementById('clearQRBtn');
    
    // Templates
    this.itemTemplate = document.getElementById('itemTemplate');
    this.resultTemplate = document.getElementById('resultTemplate');
  }
  setupEventListeners() {
    // People input
    this.peopleNamesTextarea.addEventListener('input', this.debounce(() => {
      this.updatePeopleList();
      this.saveData();
    }, 300));

    // Clear all button
    this.clearAllBtn.addEventListener('click', () => {
      this.clearAllData();
    });

    // Add item button
    this.addItemBtn.addEventListener('click', () => {
      this.addNewItem();
    });

    // Payment form
    this.togglePaymentBtn.addEventListener('click', () => {
      this.togglePaymentForm();
    });

    // Clear QR button
    this.clearQRBtn.addEventListener('click', () => {
      this.clearQRCode();
    });

    [this.bankSelect, this.accountNo, this.accountName].forEach(element => {
      element.addEventListener('input', this.debounce(() => {
        this.updatePaymentInfo();
        this.saveData();
      }, 300));
    });

    // QR actions
    this.downloadQR.addEventListener('click', () => {
      this.downloadQRCode();
    });

    this.shareQR.addEventListener('click', () => {
      this.shareQRCode();
    });
  }

  populateBankSelect() {
    this.bankSelect.innerHTML = '<option value="">Chọn ngân hàng</option>';
    BANKS.forEach(bank => {
      const option = document.createElement('option');
      option.value = bank.bin;
      option.textContent = bank.shortName;
      option.dataset.code = bank.code;
      this.bankSelect.appendChild(option);
    });
  }

  updatePeopleList() {
    const names = this.peopleNamesTextarea.value
      .split('\n')
      .map(name => name.trim())
      .filter(name => name.length > 0);
    
    this.people = names;
    this.peopleCount.textContent = this.people.length;
    
    // Update all existing people selectors
    this.updateAllPeopleSelectors();
    this.calculateResults();
  }

  addNewItem() {
    const newItem = {
      id: Date.now(),
      name: '',
      price: 0,
      eaters: [],
      payers: []
    };
    
    this.items.push(newItem);
    this.renderItem(newItem);
    this.updateEmptyState();
    this.saveData();
    
    // Focus on the new item's name input
    const newItemElement = this.itemsList.lastElementChild;
    const nameInput = newItemElement.querySelector('.item-name');
    if (nameInput) {
      nameInput.focus();
    }
  }

  renderItem(item) {
    const itemElement = this.itemTemplate.content.cloneNode(true);
    const itemCard = itemElement.querySelector('.item-card');
    
    itemCard.dataset.itemId = item.id;
    itemCard.classList.add('item-card--new');
    
    // Set up inputs
    const nameInput = itemElement.querySelector('.item-name');
    const priceInput = itemElement.querySelector('.item-price');
    const deleteBtn = itemElement.querySelector('.item-card__delete');
      nameInput.value = item.name;
    priceInput.value = item.price ? item.price / 1000 : ''; // Display as thousands
    
    // Event listeners
    nameInput.addEventListener('input', this.debounce(() => {
      item.name = nameInput.value;
      this.calculateResults();
      this.saveData();
    }, 300));
      priceInput.addEventListener('input', this.debounce(() => {
      const inputValue = parseFloat(priceInput.value) || 0;
      item.price = inputValue * 1000; // Convert to VND (50 = 50,000 VND)
      this.calculateResults();
      this.saveData();
    }, 300));
    
    deleteBtn.addEventListener('click', () => {
      this.removeItem(item.id);
    });
    
    // Set up people selectors
    this.setupPeopleSelectors(itemElement, item);
    
    this.itemsList.appendChild(itemElement);
  }

  setupPeopleSelectors(itemElement, item) {
    const eatersSelector = itemElement.querySelector('[data-type="eaters"]');
    const payersSelector = itemElement.querySelector('[data-type="payers"]');
    
    this.renderPeopleSelector(eatersSelector, item, 'eaters');
    this.renderPeopleSelector(payersSelector, item, 'payers');
  }
  renderPeopleSelector(container, item, type) {
    container.innerHTML = '';
    
    if (this.people.length === 0) {
      container.innerHTML = '<p class="text-muted">Chưa có người nào</p>';
      return;
    }
    
    this.people.forEach((person, index) => {
      const tag = document.createElement('button');
      tag.type = 'button';
      tag.className = 'person-tag';
      tag.textContent = person;
      tag.dataset.index = index;
      
      const isSelected = item[type].includes(index);
      if (isSelected) {
        tag.classList.add('person-tag--selected');
      }
      
      tag.addEventListener('click', () => {
        this.togglePersonSelection(item, type, index);
        tag.classList.toggle('person-tag--selected');
        this.calculateResults();
        this.saveData();
      });
      
      container.appendChild(tag);
    });
  }

  togglePersonSelection(item, type, personIndex) {
    const selections = item[type];
    const index = selections.indexOf(personIndex);
    
    if (index > -1) {
      selections.splice(index, 1);
    } else {
      selections.push(personIndex);
    }
  }

  updateAllPeopleSelectors() {
    this.items.forEach(item => {
      const itemElement = this.itemsList.querySelector(`[data-item-id="${item.id}"]`);
      if (itemElement) {
        // Filter out invalid person indices
        item.eaters = item.eaters.filter(index => index < this.people.length);
        item.payers = item.payers.filter(index => index < this.people.length);
        
        this.setupPeopleSelectors(itemElement, item);
      }
    });
  }

  removeItem(itemId) {
    const itemIndex = this.items.findIndex(item => item.id === itemId);
    if (itemIndex > -1) {
      this.items.splice(itemIndex, 1);
      
      const itemElement = this.itemsList.querySelector(`[data-item-id="${itemId}"]`);
      if (itemElement) {
        itemElement.remove();
      }
      
      this.updateEmptyState();
      this.calculateResults();
      this.saveData();
    }
  }
  calculateResults() {    if (this.people.length === 0 || this.items.length === 0) {
      this.showEmptyResults();
      return;
    }

    const results = {};
    let totalAmount = 0;

    // Initialize results for all people
    this.people.forEach((person, index) => {
      results[index] = {
        name: person,
        totalAmount: 0,
        details: []
      };
    });

    // Calculate for each item
    this.items.forEach(item => {
      if (item.price > 0 && item.eaters.length > 0 && item.payers.length > 0) {
        const costPerEater = item.price / item.eaters.length;
        const costPerPayer = item.price / item.payers.length;
        
        totalAmount += item.price;        // Add cost for eaters
        item.eaters.forEach(eaterIndex => {
          if (results[eaterIndex]) {
            results[eaterIndex].totalAmount += costPerEater;
            results[eaterIndex].details.push({
              type: 'use',
              itemName: item.name || 'Khoản không tên',
              amount: costPerEater
            });
          }
        });

        // Subtract cost for payers
        item.payers.forEach(payerIndex => {
          if (results[payerIndex]) {
            results[payerIndex].totalAmount -= costPerPayer;
            results[payerIndex].details.push({
              type: 'pay',
              itemName: item.name || 'Khoản không tên',
              amount: -costPerPayer
            });
          }
        });
      }
    });

    // Calculate optimal transactions
    const transactions = this.calculateOptimalTransactions(results);
    
    this.displayResults(results, totalAmount, transactions);
  }
  displayResults(results, totalAmount, transactions) {
    // Update total amount
    this.totalAmount.textContent = this.formatCurrency(totalAmount);
    
    // Clear previous results
    this.resultsList.innerHTML = '';
    this.emptyResults.style.display = 'none';
    
    // Show payment section if there are results
    this.paymentSection.style.display = totalAmount > 0 ? 'block' : 'none';
    
    // Store transactions for QR generation
    this.currentTransactions = transactions;
    
    // Create result items
    Object.values(results).forEach(result => {
      if (Math.abs(result.totalAmount) > 0.01) { // Ignore very small amounts due to floating point precision
        const resultElement = this.createResultElement(result, transactions);
        this.resultsList.appendChild(resultElement);
      }
    });
    
    if (this.resultsList.children.length === 0) {
      this.showEmptyResults();
    }
  }  createResultElement(result, transactions) {
    const element = this.resultTemplate.content.cloneNode(true);
    
    const nameElement = element.querySelector('.result-item__name');
    const detailsElement = element.querySelector('.result-item__details');
    const amountElement = element.querySelector('.result-item__amount');
    const qrButton = element.querySelector('.result-item__qr');
    
    nameElement.textContent = result.name;
      // Create details text
    const detailsText = result.details.map(detail => {
      const type = detail.type === 'use' ? 'Dùng' : 'Trả';
      return `${type}: ${detail.itemName} (${this.formatCurrency(Math.abs(detail.amount))})`;
    }).join(', ');
    
    detailsElement.textContent = detailsText;
    
    // Format amount and determine who owes/receives
    const amount = result.totalAmount;
    const isOwed = amount > 0; // Positive = person owes money, Negative = person should receive money
    const formattedAmount = this.formatCurrency(Math.abs(amount));
    
    // Find person index more reliably
    const personIndex = this.people.findIndex(person => person === result.name);
    
    if (isOwed) {
      // This person owes money - show who they need to pay
      const personTransactions = transactions.filter(t => t.from === personIndex);
      
      if (personTransactions.length > 0) {
        amountElement.innerHTML = `<strong>Cần trả: ${formattedAmount}</strong><br>`;
        personTransactions.forEach(transaction => {
          amountElement.innerHTML += `→ ${transaction.toName}: ${this.formatCurrency(transaction.amount)}<br>`;
        });
      } else {
        amountElement.textContent = `Cần trả: ${formattedAmount}`;
      }
      amountElement.style.color = 'var(--error-500)';
    } else {
      // This person should receive money - show who will pay them
      const personTransactions = transactions.filter(t => t.to === personIndex);
      
      if (personTransactions.length > 0) {
        amountElement.innerHTML = `<strong>Sẽ nhận: ${formattedAmount}</strong><br>`;
        personTransactions.forEach(transaction => {
          amountElement.innerHTML += `← ${transaction.fromName}: ${this.formatCurrency(transaction.amount)}<br>`;
        });
      } else {
        amountElement.textContent = `Sẽ nhận: ${formattedAmount}`;
      }
      amountElement.style.color = 'var(--success-500)';
    }
      // Set up QR button - show for people who RECEIVE money (negative amounts)
    if (!isOwed && this.isPaymentInfoComplete()) {
      const personTransactions = transactions.filter(t => t.to === personIndex);
      
      if (personTransactions.length > 0) {
        qrButton.style.display = 'block';
        qrButton.textContent = 'Tạo QR nhận tiền';
        qrButton.addEventListener('click', () => {
          this.showReceiveTransactionQROptions(personTransactions);
        });
      }
    }
    
    return element;
  }

  showEmptyResults() {
    this.totalAmount.textContent = this.formatCurrency(0);
    this.resultsList.innerHTML = '';
    this.emptyResults.style.display = 'block';
    this.paymentSection.style.display = 'none';
  }

  updateEmptyState() {
    this.emptyState.style.display = this.items.length === 0 ? 'block' : 'none';
  }

  togglePaymentForm() {
    const isHidden = this.paymentForm.style.display === 'none' || !this.paymentForm.style.display;
    this.paymentForm.style.display = isHidden ? 'block' : 'none';
    this.togglePaymentBtn.textContent = isHidden ? 'Ẩn form thanh toán' : 'Thiết lập thanh toán';
  }

  updatePaymentInfo() {
    this.paymentInfo.bankCode = this.bankSelect.value;
    this.paymentInfo.accountNo = this.accountNo.value;
    this.paymentInfo.accountName = this.accountName.value;
    
    // Re-render results to show/hide QR buttons
    this.calculateResults();
  }

  isPaymentInfoComplete() {
    return this.paymentInfo.bankCode && 
           this.paymentInfo.accountNo && 
           this.paymentInfo.accountName;
  }
  generateQRCode(amount, description) {
    if (!this.isPaymentInfoComplete()) {
      alert('Vui lòng nhập đầy đủ thông tin thanh toán');
      return;
    }

    const bankCode = this.bankSelect.selectedOptions[0]?.dataset.code || '';
    const qrUrl = `https://img.vietqr.io/image/${bankCode}-${this.paymentInfo.accountNo}-compact2.jpg?amount=${amount}&addInfo=${encodeURIComponent(description)}&accountName=${encodeURIComponent(this.paymentInfo.accountName)}`;
    
    this.showQRCode(qrUrl, amount, description);
  }
  showQRCode(url, amount, description) {
    this.qrContainer.style.display = 'block';
    this.qrLoading.style.display = 'flex';
    this.qrImage.style.display = 'none';
    this.clearQRBtn.style.display = 'block';
    
    this.qrAmount.textContent = this.formatCurrency(amount);
    
    // Load QR image
    const img = new Image();
    img.onload = () => {
      this.qrImage.src = url;
      this.qrImage.style.display = 'block';
      this.qrLoading.style.display = 'none';
    };
    img.onerror = () => {
      this.qrLoading.innerHTML = '<p>Không thể tạo mã QR</p>';
    };
    img.src = url;
  }

  clearQRCode() {
    this.qrContainer.style.display = 'none';
    this.clearQRBtn.style.display = 'none';
    this.qrImage.src = '';
    this.qrAmount.textContent = '';
  }

  clearAllData() {
    if (confirm('Bạn có chắc muốn xóa tất cả dữ liệu? Hành động này không thể hoàn tác.')) {
      // Clear all data
      this.people = [];
      this.items = [];
      this.paymentInfo = {
        bankCode: '',
        accountNo: '',
        accountName: ''
      };
      
      // Clear UI
      this.peopleNamesTextarea.value = '';
      this.peopleCount.textContent = '0';
      this.itemsList.innerHTML = '';
      this.bankSelect.value = '';
      this.accountNo.value = '';
      this.accountName.value = '';
      
      // Clear QR
      this.clearQRCode();
      
      // Update UI
      this.updateUI();
      
      // Clear localStorage
      localStorage.removeItem('billSplitterData');
      
      // Show success message
      setTimeout(() => {
        alert('Đã xóa tất cả dữ liệu thành công!');
      }, 100);
    }
  }
  downloadQRCode() {
    if (this.qrImage.src) {
      // Create a canvas to convert the image to blob
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();
      
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        
        // Convert canvas to blob and download
        canvas.toBlob((blob) => {
          if (blob) {
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `qr-code-${Date.now()}.png`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
          } else {
            // Fallback method
            this.fallbackDownload();
          }
        }, 'image/png');
      };
      
      img.onerror = () => {
        this.fallbackDownload();
      };
      
      img.src = this.qrImage.src;
    }
  }

  fallbackDownload() {
    // Alternative method using fetch
    if (this.qrImage.src) {
      fetch(this.qrImage.src)
        .then(response => response.blob())
        .then(blob => {
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = `qr-code-${Date.now()}.jpg`;
          link.style.display = 'none';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(url);
        })
        .catch(() => {
          // Final fallback - open in new tab
          window.open(this.qrImage.src, '_blank');
          alert('Không thể tải xuống trực tiếp. QR code đã được mở trong tab mới, bạn có thể click chuột phải và chọn "Lưu hình ảnh".');
        });
    }
  }

  async shareQRCode() {
    if (navigator.share && this.qrImage.src) {
      try {
        const response = await fetch(this.qrImage.src);
        const blob = await response.blob();
        const file = new File([blob], 'qr-code.jpg', { type: 'image/jpeg' });
        
        await navigator.share({
          title: 'Mã QR Thanh Toán',
          text: 'Quét mã QR để thanh toán',
          files: [file]
        });
      } catch (error) {
        this.fallbackShare();
      }
    } else {
      this.fallbackShare();
    }
  }

  fallbackShare() {
    if (this.qrImage.src) {
      navigator.clipboard.writeText(this.qrImage.src).then(() => {
        alert('Đã copy link QR code vào clipboard');
      }).catch(() => {
        alert('Không thể chia sẻ QR code');
      });
    }
  }

  formatCurrency(amount) {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(amount);
  }

  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  saveData() {
    const data = {
      people: this.people,
      items: this.items,
      paymentInfo: this.paymentInfo
    };
    
    try {
      localStorage.setItem('billSplitterData', JSON.stringify(data));
    } catch (error) {
      console.warn('Could not save data to localStorage:', error);
    }
  }

  loadData() {
    try {
      const savedData = localStorage.getItem('billSplitterData');
      if (savedData) {
        const data = JSON.parse(savedData);
        
        // Restore people
        if (data.people && Array.isArray(data.people)) {
          this.people = data.people;
          this.peopleNamesTextarea.value = this.people.join('\n');
          this.peopleCount.textContent = this.people.length;
        }
          // Restore items
        if (data.items && Array.isArray(data.items)) {
          this.items = data.items;
          // Ensure prices are in correct format (multiply by 1000 if they seem to be in old format)
          this.items.forEach(item => {
            // Check if price seems to be in old format (less than 1000 but greater than 0)
            if (item.price > 0 && item.price < 1000) {
              item.price = item.price * 1000;
            }
            this.renderItem(item);
          });
          this.updateEmptyState();
        }
        
        // Restore payment info
        if (data.paymentInfo) {
          this.paymentInfo = { ...this.paymentInfo, ...data.paymentInfo };
          this.bankSelect.value = this.paymentInfo.bankCode;
          this.accountNo.value = this.paymentInfo.accountNo;
          this.accountName.value = this.paymentInfo.accountName;
        }
      }
    } catch (error) {
      console.warn('Could not load data from localStorage:', error);
    }
  }

  updateUI() {
    this.updateEmptyState();
    this.calculateResults();
  }

  calculateOptimalTransactions(results) {
    // Get people who owe money (positive amounts) and who should receive money (negative amounts)
    const debtors = [];
    const creditors = [];
    const tolerance = 0.01;

    Object.entries(results).forEach(([index, result]) => {
      const amount = result.totalAmount;
      if (amount > tolerance) {
        debtors.push({
          index: parseInt(index),
          name: result.name,
          amount: amount
        });
      } else if (amount < -tolerance) {
        creditors.push({
          index: parseInt(index),
          name: result.name,
          amount: Math.abs(amount)
        });
      }
    });

    // Calculate optimal transactions using greedy algorithm
    const transactions = [];
    let debtorIndex = 0;
    let creditorIndex = 0;

    while (debtorIndex < debtors.length && creditorIndex < creditors.length) {
      const debtor = debtors[debtorIndex];
      const creditor = creditors[creditorIndex];
      
      const transferAmount = Math.min(debtor.amount, creditor.amount);
      
      if (transferAmount > tolerance) {
        transactions.push({
          from: debtor.index,
          fromName: debtor.name,
          to: creditor.index,
          toName: creditor.name,
          amount: transferAmount
        });
        
        debtor.amount -= transferAmount;
        creditor.amount -= transferAmount;
      }
      
      if (debtor.amount <= tolerance) {
        debtorIndex++;
      }
      if (creditor.amount <= tolerance) {
        creditorIndex++;
      }
    }

    return transactions;
  }

  showTransactionQROptions(transactions) {
    if (transactions.length === 1) {
      // Only one transaction, generate QR directly
      const transaction = transactions[0];
      this.generateQRCode(transaction.amount, `Chuyển tiền từ ${transaction.fromName} đến ${transaction.toName}`);
    } else {
      // Multiple transactions, show selection modal
      this.showTransactionSelectionModal(transactions);
    }
  }

  showTransactionSelectionModal(transactions) {
    // Create modal overlay
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
      <div class="modal">
        <div class="modal__header">
          <h3>Chọn giao dịch để tạo QR</h3>
          <button class="modal__close btn btn--secondary btn--sm">×</button>
        </div>
        <div class="modal__content">
          <p>Chọn người bạn muốn chuyển tiền:</p>
          <div class="transaction-list">
            ${transactions.map((transaction, index) => `
              <button class="transaction-option btn btn--outline" data-index="${index}">
                Chuyển ${this.formatCurrency(transaction.amount)} đến ${transaction.toName}
              </button>
            `).join('')}
          </div>
        </div>
      </div>
    `;
    
    // Add event listeners
    modal.querySelector('.modal__close').addEventListener('click', () => {
      document.body.removeChild(modal);
    });
    
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        document.body.removeChild(modal);
      }
    });
    
    modal.querySelectorAll('.transaction-option').forEach((button, index) => {
      button.addEventListener('click', () => {
        const transaction = transactions[index];
        this.generateQRCode(transaction.amount, `Chuyển tiền từ ${transaction.fromName} đến ${transaction.toName}`);
        document.body.removeChild(modal);
      });
    });
    
    document.body.appendChild(modal);
  }

  showReceiveTransactionQROptions(transactions) {
    if (transactions.length === 1) {
      // Only one transaction, generate QR directly
      const transaction = transactions[0];      this.generateQRCode(transaction.amount, `Nhận tiền từ ${transaction.fromName}`);
    } else {
      // Multiple transactions, show selection modal
      this.showReceiveTransactionSelectionModal(transactions);
    }
  }

  showReceiveTransactionSelectionModal(transactions) {
    // Create modal overlay
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
      <div class="modal">
        <div class="modal__header">
          <h3>Chọn người để tạo QR nhận tiền</h3>
          <button class="modal__close btn btn--secondary btn--sm">×</button>
        </div>
        <div class="modal__content">
          <p>Chọn người sẽ chuyển tiền cho bạn:</p>
          <div class="transaction-list">
            ${transactions.map((transaction, index) => `
              <button class="transaction-option btn btn--outline" data-index="${index}">
                Nhận ${this.formatCurrency(transaction.amount)} từ ${transaction.fromName}
              </button>
            `).join('')}
          </div>
        </div>
      </div>
    `;
    
    // Add event listeners
    modal.querySelector('.modal__close').addEventListener('click', () => {
      document.body.removeChild(modal);
    });
    
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        document.body.removeChild(modal);
      }
    });
    
    modal.querySelectorAll('.transaction-option').forEach((button, index) => {
      button.addEventListener('click', () => {
        const transaction = transactions[index];
        this.generateQRCode(transaction.amount, `Nhận tiền từ ${transaction.fromName}`);
        document.body.removeChild(modal);
      });
    });
    
    document.body.appendChild(modal);
  }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new BillSplitter();
});
