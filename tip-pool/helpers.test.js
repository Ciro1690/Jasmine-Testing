describe('helper functions sum total and calculate tip percent', function() { 
    beforeEach(function() {
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();
    });

    it('should calculate the tip amount', function() {
        expect(sumPaymentTotal('tipAmt')).toEqual(20);

        billAmtInput.value = 200;
        tipAmtInput.value = 40;
        submitPaymentInfo();

        expect(sumPaymentTotal('tipAmt')).toEqual(60);
    });

    it('should calculate the bill amount', function() {
        expect(sumPaymentTotal('billAmt')).toEqual(100);

        billAmtInput.value = 200;
        tipAmtInput.value = 40;
        submitPaymentInfo();

        expect(sumPaymentTotal('billAmt')).toEqual(300);
    });

    it('should calculate the tip percent', function() {
        expect(sumPaymentTotal('tipPercent')).toEqual(20);

        billAmtInput.value = 200;
        tipAmtInput.value = 40;
        submitPaymentInfo();

        expect(sumPaymentTotal('tipPercent')).toEqual(40);
    });

    it('should calculate the tip percentage', function() {
        expect(calculateTipPercent(200,40)).toEqual(20)
    })

    it('should add a new table row', function() {
        let newTr = document.createElement('tr');
        appendTd(newTr,'test');

        expect(newTr.children.length).toEqual(1);
        expect(newTr.children[0].innerHTML).toEqual('test')
    })

    it('should add a delete element', function() {
        let newTr = document.createElement('tr');
        appendDeleteBtn(newTr);

        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstElementChild.innerHTML).toEqual('X');        
    })

    afterEach(function () {
        billAmtInput.value = 0;
        tipAmtInput.value = 0;
        paymentTbody.innerHTML = "";
        summaryTds[0].innerHTML = "";
        summaryTds[1].innerHTML = "";
        serverTbody.innerHTML = "";
        allPayments = {};
        paymentId = 0;
    });
});