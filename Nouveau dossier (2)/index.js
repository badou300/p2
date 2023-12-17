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

const stock = livres.slice();

console.log('Nombre de livres:', nbLivres(stock));

console.log('\nListe de tous les titres:');
listerTousLesTitres(stock);

console.log('\nAjouter un nouveau livre:');
const stockMaj = ajouterLivre(stock, ' jeux ride', 'badou', 'Genre', 300, 'English', 2002);
console.log('Stock mis à jour:', stockMaj);

console.log('\nSupprimer un livre à l\'index 1:');
supprimerLivre(stockMaj, 1);
console.log('Stock mis à jour après suppression:', stockMaj);

console.log('\nMettre à jour le titre du livre à l\'index 0:');
mettreAJourTitre(stockMaj, 0, 'Titre mis à jour');
console.log('Stock mis à jour après mise à jour du titre:', stockMaj);

console.log('\nListe des livres en anglais:');
listerLivresEnAnglais(stockMaj);

console.log('\nListe des livres avec plus de 300 pages:');
listerLivresPlusDe300Pages(stockMaj);

console.log('\nLivres publiés entre 2000 et 2010:');
console.log(livresEntre2000Et2010(stockMaj));

console.log('\nLivres Fantasy en anglais:');
console.log(livresFantasyEnAnglais(stockMaj));

console.log('\nLivre contenant "ride" dans le titre:');
console.log(livreContenantRide(stockMaj));
