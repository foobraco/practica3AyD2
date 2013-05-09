var request = require('superagent');
var expect = require('expect.js');
  
describe('Suite one', function(){
 it ('should create a prepaid card',function(done){
   request.get('localhost:3000/create_card?id=1&amount=35').end(function(res){
    expect(res).to.exist;
    expect(res.status).to.equal(200);
    expect(res.text).to.contain('Transaction Succesful');
    done();
   });
  });

  it ('Save the money in the prepaid card',function(done){
   request.get('localhost:3000/save_money?id=1?amount=20').end(function(res){
    expect(res).to.exist;
    expect(res.status).to.equal(200);
    expect(res.text).to.contain('Transaction Succesful');
    done();
   });
  });

   it ('Withdraw 1.25 from the card, when it is used',function(done){
   request.get('localhost:3000/charge_card?id=1').end(function(res){
    expect(res).to.exist;
    expect(res.status).to.equal(200);
    expect(res.text).to.contain('Transaction Succesful');
    done();
   });
  });

    it ('Returns the amount saved in the prepaid card',function(done){
   request.get('localhost:3000/amount_saved?id=1').end(function(res){
    expect(res).to.exist;
    expect(res.status).to.equal(200);
    expect(res.text).to.contain('The amount for');
    done();
   });
  });
});