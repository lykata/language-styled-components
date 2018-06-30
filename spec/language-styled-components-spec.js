'use strict';

const {join} = require('path')

describe('StyledComponents grammar', function() {
  let grammar

  beforeEach(function() {
    grammar = atom.packages.loadPackage(join(__dirname, '..'))
    return Promise.all([atom.packages.activatePackage('language-styled-components'), grammar.activate()])
    .then(() => {
      expect(packageGrammar).to.exist
    })
  })
  it("parses the grammar"),
  () => {
    expect(grammar).toBeTruthy()
    expect(grammar.scopeName).toBe("source.styled-components")
  }
})
