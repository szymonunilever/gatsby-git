import React from 'react';
import Image from 'gatsby-image';
import { getFluidImageObject } from 'gatsby-transformer-cloudinary';

export default () => {
  const [fluid, setFluid] = React.useState(false);

  React.useEffect(() => {
    getFluidImageObject({
      public_id: 'gatsby-cloudinary/avatar',
      cloudName: 'jam-unilever',
      originalHeight: 3000,
      originalWidth: 3000,
      breakpoints: [200, 400, 600, 800],
      transformations: ["ar_16:10"],
      defaults: ["f_auto", "q_auto"],
    }).then(result => setFluid(result));
  }, []);

  return fluid ? <Image fluid={fluid} alt="Smile" /> : <p>loading...</p>;
};