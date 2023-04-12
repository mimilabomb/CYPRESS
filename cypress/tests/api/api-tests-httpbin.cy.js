/// <reference types="cypress" />

describe('httpbin tests', () => {

/// Step 1

    it('httpbin GET test', () => {
      cy.request('https://httpbin.org').then(response => {
        const status = response.status;
  
        assert.equal(200, status);
      })
    })

/// Step 2

    const request2 = {
      method: 'POST',
      url: 'https://httpbin.org/post',
      failOnStatusCode: false
    };
  
    it('httpbin POST test', () => {
      cy.request(request2).then(response => {
        assert.equal(200, response.status);
      })
    })

   
/// Step 3

    const request3 = {
        method: 'PUT',
        url: 'https://httpbin.org/put',
        failOnStatusCode: false
      };
    
      it('httpbin PUT test', () => {
        cy.request(request3).then(response => {
          assert.equal(200, response.status);
        })
      })




/// Step 4

    const request4 = {
        method: 'DELETE',
        url: 'https://httpbin.org/delete',
        failOnStatusCode: false
      };
    
      it('httpbin DELETE test', () => {
        cy.request(request4).then(response => {
          assert.equal(200, response.status);
        })
    })


/// Step 5 

    const request5 = {
        method: 'GET',
        url: 'https://httpbin.org',
        headers: {
          'user-agent': 'My test user-agent'
        },
        failOnStatusCode: false
      };
    

      it('httpbin User-Agent Test', () => {
        cy.request(request5).then(response => {
          assert.equal(200, response.status);
          assert.equal("My test user-agent", response.requestHeaders['user-agent']);
        })
      })


/// Step 6

      const request6 = {
        method: 'GET',
        url: 'https://httpbin.org/headers',
        headers: {
          'Cookie': 'cookieName=cookieValue'
        },
        failOnStatusCode: false
      };
    
      it('httpbin Cookie Test', () => {
        cy.request(request6).then(response => {
          assert.equal(200, response.status);
          assert.equal("cookieName=cookieValue", response.requestHeaders['Cookie']);
        })
      })


/// Step 7 

      const request7 = {
        url: 'https://httpbin.org',
      }

      it('httpbin Test Duration', () => {
        cy.request(request7).then(response => {
          assert.isTrue(response.duration <= 3000)
        })
      }) 


/// Step 8      

      it('httpbin Test Random Ids', () => {
        for(let i = 0; i < 10; i++) {
          const randomId = getRandomInt(10000000);
    
          const request8 = {
            url: 'https://httpbin.org/headers',
            id: randomId
          }
    
          cy.request(request8).then(response => {
            assert.isTrue(response.status == 200)
          })
        } 
      })
    
    
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }



    
/// Step 9

    const request9 = {
    url: 'https://httpbin.org',
    
    }

    it('httpbin Test Header of Server', () => {
        cy.request(request9).then(response => {
        assert.equal('gunicorn/19.9.0', response.headers['server']);
        })
      })



/// Step 10

const request10 = {
    url: 'https://httpbin.org/get',
    }

it('httpbin Test Response Body', () => {
    cy.request(request10).then(response => {
      const expectedBody = {
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Site": "same-origin",
      };

      assert.equal(expectedBody.someKey, response.body.someKey);
    })
  })

})
      
  