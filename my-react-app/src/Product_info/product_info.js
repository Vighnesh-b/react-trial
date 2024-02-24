import Chair_images from '../Chairs/cahimage.js';
const PRODUCTS = [{
    id:1,
    name: 'Cosmo Comfort Armchair',
    unitPrice: 13000,
    images: [Chair_images.c1_1, Chair_images.c1_2, Chair_images.c1_3],
    description: `
      Clean lines and supportive comfort, regardless if you’re reading, socialising with friends or just relaxing for a moment.
      Each armchair has a unique expression since the wooden frame is first stained in a dark-brown tone and then covered with clear lacquer that makes the wood’s natural grains visible.
      High-resilience foam in the seat and back makes the armchair regain its shape when you stand up, and it’s complemented with zigzag springs in the seat and supportive fabric in the back for a firm comfort.
      You will sit stable and steady for years to come since the frame is made of hardwearing solid wood. You also enjoy a relaxed sitting position thanks to the angled backrest.
      The tall legs in solid wood make it easy to vacuum or reach things hiding under the armchair to avoid clutter.
      The elegant, fixed cover has a perfect fit that will last over time. You can choose from different covers and find one that suits you and your home.
    `,
    measurements: [
        'Height backrest: 46 cm (18 1/8 ")',
        'Width: 64 cm (25 1/4 ")',
        'Depth: 78 cm (30 3/4 ")',
        'Height: 76 cm (29 7/8 ")',
        'Free height under furniture: 22 cm (8 5/8 ")',
        'Armrest height: 63 cm (24 3/4 ")',
        'Seat width: 56 cm (22 ")',
        'Seat depth: 50 cm (19 5/8 ")',
        'Seat height: 45 cm (17 3/4 ")',
    ],
},
{
  id:2,
  name: 'Zenith Lounge Furnish Chair',
  unitPrice: 18999,
  images: [
    Chair_images.c2_1,
    Chair_images.c2_2,
    Chair_images.c2_3
  ],
  description: `This wing chair and footstool are the perfect combination when you want to stretch out, rest your feet and sit extra comfortably and relaxed.
    You can easily move the footstool around to wherever you need it and use it as an extra seat, for example when you have friends visiting.
    The wing chair has a high back which provides extra support for your neck, so that you can lean your head back when resting.
    Round armrests, soft lines and an inviting upholstery give this wing chair a soft embracing feel.`,
  measurements: [
    'Width: 74 cm (29 ¼ ")',
    'Height: 47 cm (18 ¼ ")',
    'Length: 105 cm (41 ¼ ")',
    'Weight: 29.60 kg (65 lb 4 oz)',
    'Package(s): 1'
  ]
},
{
  id:3,
  name: 'Tranquil Retreat Armchair',
  unitPrice: 16999,
  images: [
    Chair_images.c3_1,
    Chair_images.c3_2,
    Chair_images.c3_3
  ],
  description: `This classic and timeless wing chair with an embracing backrest gives you relaxing me-time and is also great to sit on while enjoying socialising with others.
    Clean lines, simple and at the same time a softly rounded design with wooden legs all make the wing chair easy to like and place anywhere.
    The wing chair has a high comfort level thanks to the seat with a combination of supportive springs and soft foam, lumbar support, armrests and an extra-high backrest that you can lean against.
    You can complete your wing chair with OSKARSHAMN footstool to sit even more comfortably.`,
  measurements: [
    'Depth: 86 cm (33 7/8 ")',
    'Height: 99 cm (39 ")',
    'Seat depth: 54 cm (21 1/4 ")',
    'Seat height: 44 cm (17 3/8 ")',
    'Seat width: 54 cm (21 1/4 ")',
    'Width: 82 cm (32 1/4 ")',
  ],

},
{
  id:4,
  name: 'Nexus Cozy Corner Chair',
  unitPrice: 14999,
  images: [
    Chair_images.c4_1,
    Chair_images.c4_2,
    Chair_images.c4_3
  ],
  description: `The shape of the armchair provides nice support for the lumbar region.
    The fixed cover HAKEBO feels soft and smooth and has a nice texture that makes the sofa comfortable and inviting.`,
  measurements: [
    'Depth: 86 cm (33 7/8 ")',
    'Height: 99 cm (39 ")',
    'Seat depth: 54 cm (21 1/4 ")',
    'Seat height: 44 cm (17 3/8 ")',
    'Seat width: 54 cm (21 1/4 ")',
    'Width: 82 cm (32 1/4 ")',
  ],
},
{
  id:5,
  name: 'Blissful Oasis Armchair',
  unitPrice: 15999,
  images: [
    Chair_images.c5_1,
    Chair_images.c5_2,
    Chair_images.c5_3
  ],
  description: `HAVBERG swivel armchair has an inviting and timeless design that feels cosy when you sit down to relax.
    The swivel function allows for more flexibility, for example if you want to turn around and easily reach the remote control or a beverage and a snack.
    The seat cushion is filled with polyurethane foam that provides a soft comfort and an embracing feeling.
    Stretch out and rest your feet on the footstool to sit extra comfortably and relaxed.
    The footstool also works as an extra seat which is practical when you have friends visiting.
    The cover is woven in a strong fabric that creates a visible texture and makes it more hardwearing.
    The swivel armchair and footstool are easy to assemble, so you can quickly sit down and relax.`,
  measurements: [
    'Depth: 86 cm (33 7/8 ")',
    'Height: 99 cm (39 ")',
    'Seat depth: 54 cm (21 1/4 ")',
    'Seat height: 44 cm (17 3/8 ")',
    'Seat width: 54 cm (21 1/4 ")',
    'Width: 82 cm (32 1/4 ")',
  ],
},
{
  id:6,
  name: 'Harmony Lounge Chair',
  unitPrice: 17999,
  images: [
    Chair_images.c6_1,
    Chair_images.c6_2,
    Chair_images.c6_3
  ],
  description: `Classic design with soft, rounded shapes and generously sized armrests makes VISKAFORS armchair a statement piece in any living room.
    The deep seat with pocket springs is really soft and creates an inviting, embracing feel when you sit on the armchair.
    Skillful craftsmanship and a perfect fit mean that the armchair will always show off its best side.
    The cover in cotton and polyester fabric is dyed in different tones, which gives it a nice effect. The strong and hardwearing woven quality gives the fabric a clear texture.`,
  measurements: [
    'Depth: 86 cm (33 7/8 ")',
    'Height: 99 cm (39 ")',
    'Seat depth: 54 cm (21 1/4 ")',
    'Seat height: 44 cm (17 3/8 ")',
    'Seat width: 54 cm (21 1/4 ")',
    'Width: 82 cm (32 1/4 ")',
  ],
}

];
export default PRODUCTS;