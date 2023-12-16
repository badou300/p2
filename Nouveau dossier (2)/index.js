const livres = require('./library.json');

/**
 * @param {array} stock 
 * @returns {number} 
 */
function nbLivres(stock) {
  return stock.length;
}

/**
 * @param {array} stock 
 */
function listerTousLesTitres(stock) {
  stock.forEach((livre) => {
    console.log(livre.title);
  });
}

/**
 * @param {array} stock 
 * @param {string} titre
 * @param {string} auteur 
 * @param {string} genre
 * @param {number} pages 
 * @param {string} langue
 * @param {number} annee 
 * @returns {array} 
 */
function ajouterLivre(stock, titre, auteur, genre, pages, langue, annee) {
  const nouveauLivre = {
    stock,
    auteur,
    titre,
    pages,
    genre,
    langue,
    annee
  };
  stock.push(nouveauLivre);
  return stock;
}

/**
 * @param {array} stock 
 * @param {number} index
 */
function supprimerLivre(stock, index) {
  stock.splice(index, 1);
}

/**
 * @param {array} stock
 * @param {number} index 
 * @param {string} nouveauTitre 
 */
function mettreAJourTitre(stock, index, nouveauTitre) {
  stock[index].titre = nouveauTitre;
}

/**
 * @param {array} stock 
 */
function listerLivresEnAnglais(stock) {
  const livresEnAnglais = stock.filter((livre) => livre.langue === 'English');
  listerTousLesTitres(livresEnAnglais);
}

/**
 * @param {array} stock 
 */
function listerLivresPlusDe300Pages(stock) {
  const livresPlusDe300Pages = stock.filter((livre) => livre.pages > 300);
  listerTousLesTitres(livresPlusDe300Pages);
}

/**
 * @param {array} stock 
 * @returns {array} 
 */
function livresEntre2000Et2010(stock) {
  return stock.filter((livre) => livre.annee > 2000 && livre.annee <= 2010);
}

/**
 * @param {array} stock
 * @returns {array} 
 */
function livresFantasyEnAnglais(stock) {
  return stock.filter((livre) => livre.genre === 'Fantasy' && livre.langue === 'English');
}

/**
 * @param {array} stock 
 * @returns {object}
 */
function livreContenantRide(stock) {
  return stock.find((livre) => livre.titre.toLowerCase().includes('ride'));
}
