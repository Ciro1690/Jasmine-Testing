describe("Payments test", function () {
    beforeEach(function () {
        // initialization logic
        billAmtInput.value = 200;
        tipAmtInput.value = 40;
    });

    it('should add a new current payment to allPayments', function () {
        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toEqual(1);
        expect(parseInt(allPayments.payment1.billAmt)).toEqual(200)
        expect(parseInt(allPayments.payment1.tipAmt)).toEqual(40)
        expect(parseInt(allPayments.payment1.tipPercent)).toEqual(20)
    });

    it('should return undefined with negative or empty inputs', function() {
        billAmtInput.value = "";
        submitPaymentInfo();

        expect(createCurPayment()).toEqual(undefined);

        billAmtInput.value = -5;
        submitPaymentInfo();

        expect(createCurPayment()).toEqual(undefined);
    });

    it('should allow tip to be 0, but billAmt must be positive', function() {
        billAmtInput.value = 0;
        submitPaymentInfo();

        expect(createCurPayment()).toEqual(undefined);

        billAmtInput.value = 10;
        tipAmtInput.value = 0;
       
        expect(createCurPayment()).not.toEqual(undefined);
    })

    it('should create a table row element', function() {
        let currentPayment = createCurPayment();
        allPayments['payment1'] = currentPayment;

        appendPaymentTable(currentPayment);
        let currentTdList = document.querySelectorAll('#paymentTable tbody tr td');

        expect(currentTdList.length).toEqual(4);
        expect(currentTdList[0].innerText).toEqual('$200');
        expect(currentTdList[1].innerText).toEqual('$40');
        expect(currentTdList[2].innerText).toEqual('20%');
    })

    afterEach(function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        paymentId = 0;
        allPayments = {};
    });
});
