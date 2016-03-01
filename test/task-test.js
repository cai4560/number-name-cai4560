describe('DividedNumArr', function() {
	it('Should return correct numArr', function() {
		var input = "43112603";
		var result = getDividedNumArrs(input);
		var expectResult = ["603","112","43"];
  	expect(result).toEqual(expectResult);
	});

	it('Should return correct numArr', function() {
		var input = "3112603";
		var result = getDividedNumArrs(input);
		var expectResult = ["603","112","3"];
		expect(result).toEqual(expectResult);
	});

	it('Should return correct numArr', function() {
		var input = "112603";
		var result = getDividedNumArrs(input);
		var expectResult = ["603","112"];
		expect(result).toEqual(expectResult);
	});
});

/*
describe('getReceipt', function() {
  var inputs = [{ cartItem: { item: { barcode: 'ITEM000001',
                                      name: '雪碧',
                                      unit: '瓶',
                                      price: 3.00 },
                              number:5},
                  total: 12.00,
                  save: 3.00 },
                { cartItem: { item: { barcode: 'ITEM000003',
                                      name: '荔枝',
                                      unit: '斤',
                                      price: 15.00 },
                result.push              number: 4.5 },
                  total: 67.50,
                  save:  0.00 },
                { cartItem: { item: { barcode: 'ITEM000005',
                                      name: '方便面',
                                      unit: '袋',
                                      price: 4.50},
                              number: 3},
                  total: 9.00,
                  save: 4.50 }];

  it('Should return correct receipt', function() {
    spyOn(console, 'log');
    getReceipt(inputs);
    var expectResult =    '***<没钱赚商店>收据***\n' +
                          '名称：雪碧，数量：5瓶，单价：3.00(元)，小计：12.00(元)\n' +
                          '名称：荔枝，数量：4.5斤，单价：15.00(元)，小计：67.50(元)\n' +
                          '名称：方便面，数量：3袋，单价：4.50(元)，小计：9.00(元)\n' +
                          '----------------------\n' +
                          '总计：88.50(元)\n' +
                          '节省：7.50(元)\n' +
                          '**********************';
    expect(console.log).toHaveBeenCalledWith(expectResult);
  });
});
*/
