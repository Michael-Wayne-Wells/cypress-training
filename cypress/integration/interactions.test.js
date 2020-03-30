describe('Basic page interaction', ()=> {
  beforeEach(()=>{
    cy.visit('example-4');
  });

  it("sets the header text to the items name when double clicked", () => {
    cy.get('[data-cy=box-1-items-list] > :nth-child(2)')
      .dblclick();

    cy.get('[data-cy=box-1-selected-name]')
      .invoke('text')
      .should('equal', 'Option Two')
  });
  it('Displays correct count for the number of selected checkboxes', () => {
    cy.get('[data-cy=box-2-checkboxes] > :nth-child(1) input')
      .check();


    cy.get('[data-cy=box-2-selected-count]')
      .invoke('text')
      .should('equal', '1');
  });
  it('displays the name of the current selected item', () =>{
    cy.get('[data-cy=box-3-dropdown]')
      .select('Option Three');

    cy.get('[data-cy=box-3-selected-name]')
      .invoke('text')
      .should('equal', 'Option Three');
    
  });

  it('should display the name of the most recent hvered over item', () => {
    cy.get('[data-cy=box-4-items-list] > :nth-child(2)')
      .trigger('mouseover');

    cy.get('[data-cy=box-4-selected-name]')
      .invoke('text')
      .should('equal', 'Option Two');
  })
})
