describe('Melakukan Transaksi Pembelian Produk Di Website Demo midtrans', () =>{
it("Mencoba Visit Link ke Demo Midtrans", () => {
    cy.visit('https://demo.midtrans.com/')
    cy.url().should('include', 'demo.midtrans.com')
    cy.contains('BUY NOW').click()
    cy.get('[data-reactid=".0.0.1.0.2"]').contains('Customer Details')
    cy.contains('CHECKOUT').click()
});



})