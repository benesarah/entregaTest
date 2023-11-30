describe('Acesso ao sistema de teste', () => {

  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  it(' 1 - Logar como admin', () => {
    cy.visit('https://hotelaria2000000.000webhostapp.com/');
    cy.get('[name="usuario"]').type('admin')
    cy.get('[type="password"]').type('admin')
    cy.get('[type="submit"]').click()
    cy.wait(1000);
   
  });



  it('2 - Cadastrar Hotel de forma válida', () => {  
    cy.visit('https://hotelaria2000000.000webhostapp.com/admin.php');
    cy.get('#botaoCadastrar').click()
    cy.get('#titulo').type('Hotel de teste')
    cy.get('#descricao').type('Hotel de teste muito bonito para fazer testes esse hotel')
    cy.get('#preco').type('500')
    cy.get('#tipo').type('Hotel')
    cy.fixture('fotoHotel.png').then(fileContent => {
    cy.get('#imagem').attachFile({
    fileContent,
    fileName: 'fotoHotel.png',
    mimeType: 'image/png',  
  });
  });
    cy.get('button[type="submit"].btn.btn-primary:contains("Enviar")').click();
    cy.wait(1000);
   });



  it('3 - Visualizar Hoteis pela tela de login', () => {
    cy.visit('https://hotelaria2000000.000webhostapp.com/');
    cy.get('a[href="home.php"]')
    .contains('Acessar Página Principal')
    .click();
    cy.get('[type="submit"]').click()
  });

  
  it('4 - Preencher reserva de hotel', () => {
    cy.visit('https://hotelaria2000000.000webhostapp.com/');
    cy.get('a[href="home.php"]')
    .contains('Acessar Página Principal')
    .click();
    cy.get('[type="submit"]').click()
    cy.get('#nome').type('Sarah Teste')
    cy.get('#email').type('Sarahteste1234@teste.com')
    cy.get('input[name="checkin"]')
  .type('2023-12-20');
  cy.get('input[name="checkout"]')
  .type('2023-12-25');
  cy.get('[type="submit"]').click()
  });


  it('5 - Na tela dos dados do Hotel, verificar o valor do hotel e clicar em voltar e validar se o sistema voltou para a tela anterior', () => {
    cy.visit('https://hotelaria2000000.000webhostapp.com/');
    cy.get('a[href="home.php"]')
    .contains('Acessar Página Principal')
    .click();
    cy.get('[type="submit"]').click()
    cy.get('h1')
   .contains('R$800')
   cy.get('[type="submit"]').click()
   cy.get('.btn.corBotao')
  .contains('Voltar')
  .click();
  
  
  });


  
})
