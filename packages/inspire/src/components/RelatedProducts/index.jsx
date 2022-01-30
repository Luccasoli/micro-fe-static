/* eslint-disable global-require */
export function RelatedProducts() {
  return (
    <div id="reco">
      <h3>Related Products</h3>
      <img src={require('../../images/reco_3.jpg')} alt="Reco 3" />
      <img src={require('../../images/reco_5.jpg')} alt="Reco 5" />
      <img src={require('../../images/reco_6.jpg')} alt="Reco 6" />
    </div>
  );
}

export default RelatedProducts;
