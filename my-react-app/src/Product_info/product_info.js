import Chair_images from '../Chairs/cahimage.js';
import sofa_images from '../Sofas/cah2image.js';
import bed_images from '../Beds/cah3image.js';

const PRODUCTS = [{
    id:1,
    name: 'Cosmo Comfort Armchair',
    unitPrice: 13000,
    images: [Chair_images.c1_1,
            Chair_images.c1_2,
            Chair_images.c1_3],
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
},
{
  id:7,
  name: 'Harmony Sofa',
  unitPrice: 13000,
  images: [
    sofa_images.c1_1,
    sofa_images.c1_2,
    sofa_images.c1_3
  ],
  description: `This soft sofa will have a long life since the seat cushions are filled with high resilience foam that gives good support for your body and quickly regains its original shape when you get up. The chaise longue has storage under the seat. The lid automatically stops in the open position so that you can easily pick out and put back the things that you are storing. You can complete with VIMLE headrest to extend the backrest of the sofa, so that you sit even more comfortably with a nice support for your neck. This cover is made from Saxemara fabric in cotton and polyester. The needlecord corduroy is soft yet durable and has a modern, elegant look. The cover is easy to keep clean since it is removable and machine washable. You can place the chaise longue section to the left or right of the sofa, and switch whenever you like.`,
  measurements: [
    'Height including back cushions: 83 cm (32 5/8 ")',
    'Height backrest: 68 cm (26 3/4 ")',
    'Depth chaise longue: 164 cm (64 5/8 ")',
    'Width: 322 cm (126 3/4 ")',
    'Depth: 98 cm (38 5/8 ")',
    'Seat depth, chaise longue: 124 cm (49 1/4 ")',
    'Free height under furniture: 6 cm (2 3/8 ")',
    'Armrest width: 15 cm (5 7/8 ")',
    'Armrest height: 68 cm (26 3/4 ")',
    'Seat width: 292 cm (115 ")',
    'Seat depth: 55 cm (21 5/8 ")',
    'Seat height: 48 cm (18 7/8 ")',
  ],
},
{
  id:8,
  name: 'LuxeLounge Sofa',
  unitPrice: 18999,
  images: [
    sofa_images.c2_1,
    sofa_images.c2_2,
    sofa_images.c2_3
  ],
  description: `This classic and timeless wing chair with an embracing backrest gives you relaxing me-time and is also great to sit on while enjoying socializing with others. Clean lines, simple and at the same time a softly rounded design with wooden legs all make the wing chair easy to like and place anywhere. The wing chair has a high comfort level thanks to the seat with a combination of supportive springs and soft foam, lumbar support, armrests and an extra-high backrest that you can lean against. You can complete your wing chair with OSKARSHAMN footstool to sit even more comfortably.`,
  measurements: [
    'Depth: 86 cm (33 7/8 ")',
    'Height: 89 cm (39 ")',
    'Seat depth: 54 cm (21 1/4 ")',
    'Seat height: 44 cm (17 3/8 ")',
    'Seat width: 54 cm (21 1/4 ")',
    'Width: 82 cm (32 1/4 ")',
  ],
},
{
  id: 9,
  name: 'UrbanScape Sofa',
  unitPrice: 16999,
  images: [
    sofa_images.c3_1,
    sofa_images.c3_2,
    sofa_images.c3_3
  ],
  description: `5 year guarantee. Read about the terms in the guarantee brochure. A sofa-bed with small, neat dimensions which is easy to furnish with, even when space is limited. The storage space under the seat has room for pillows and throws. Readily converts into a bed. You get an even surface to sleep on since the seat comes as a single piece. Seat cushions filled with high resilience foam and polyester fibre wadding give comfortable support for your body, and easily regain their shape when you get up. Back cushions filled with polyester fibres for soft comfort.`,
  measurements: [
    'Width: 220 cm (86 5/8 ")',
    'Depth: 88 cm (34 5/8 ")',
    'Height: 92 cm (36 1/4 ")',
    'Seat depth: 57 cm (22 1/2 ")',
    'Seat height: 48 cm (18 7/8 ")',
    'Bed width: 145 cm (57 1/8 ")',
    'Bed length: 183 cm (72 ")',
    'Bed height: 35 cm (13 3/4 ")',
    'Armrest height: 66 cm (25 ")'
  ],
},
{
  id: 10,
  name: 'TranquilTide Sofa',
  unitPrice: 14999,
  images: [
    sofa_images.c4_1,
    sofa_images.c4_2,
    sofa_images.c4_3
  ],
  description: `Light, airy design with high legs and slim lines, yet still a great comfort thanks to the elastic weave in the bottom and high resilience foam in the seat cushions. The sofa's sections can be used freestanding or combined in different ways to get a size and shape that suits you and your home. If you need a larger sofa, you can add a section or two to your existing combination. You can create your own perfect combination with the planning tool. Assemble, take apart and put together again until it’s just right. The removable back cushions give your body support where needed. For example, place several behind your back for a more upright position or use them to make it comfortable when lying down and reading. The depth of the sofa makes it perfect for relaxing or even taking a nice nap. You can place the chaise longue section to the left or right of the sofa, and switch whenever you like. You can choose to use the sofa with or without armrests, depending on the expression you want to create. The high legs make it easy to clean the floor under the sofa. This cover is made of Fridtuna, a sturdy cotton and polyester fabric with a deep texture woven in different tones. The cover is easy to keep clean since it can be machine washed and is easy to take off and put on again.`,
  measurements: [
    'Width: 285 cm (112 1/4 ")',
    'Depth: 99 cm (39 ")',
    'Depth chaise longue: 151 cm (59 1/2 ")',
    'Seat depth: 70 cm (27 1/2 ")',
    'Seat depth, chaise longue: 122 cm (48 ")',
    'Height including back cushions: 83 cm (32 5/8 ")',
    'Height backrest: 69 cm (27 1/8 ")',
    'Seat height: 40 cm (15 3/4 ")',
    'Free height under furniture: 14 cm (5 1/2 ")',
    'Armrest width: 6 cm (2 3/8 ")'
  ],
},
{
  id: 11,
  name: 'NovaForm Sofa',
  unitPrice: 15999,
  images: [
    sofa_images.c5_1,
    sofa_images.c5_2,
    sofa_images.c5_3
  ],
  description: `This sofa converts quickly and easily into a spacious bed when you remove the back cushions and pull out the underframe. Sofa, chaise longue and double bed in one. Storage space under the chaise longue. The lid stays open so you can safely and easily take things in and out. You can place the chaise longue section to the left or right of the sofa, and switch whenever you like.`,
  measurements: [
    'Depth: 151 cm (59 1/2 ")',
    'Bed width: 140 cm (55 1/8 ")',
    'Bed length: 204 cm (80 3/8 ")',
    'Height including back cushions: 86 cm (33 7/8 ")',
    'Height backrest: 66 cm (26 ")',
    'Width: 230 cm (90 1/2 ")'
  ],
},
{
  id: 12,
  name: 'Enigma Sofa',
  unitPrice: 17999,
  images: [
    sofa_images.c6_1,
    sofa_images.c6_2,
    sofa_images.c6_3
  ],
  description: `Seat cushions filled with high resilience foam and polyester fibre wadding give comfortable support for your body, and easily regain their shape when you get up. Back cushions filled with polyester fibres for soft comfort.`,
  measurements: [
    'Height incl. headrest: 72 cm (28 3/8 ")',
    'Height including back cushions: 82 cm (32 1/4 ")',
    'Height backrest: 72 cm (28 3/8 ")',
    'Width: 201 cm (79 1/8 ")',
    'Depth: 91 cm (35 7/8 ")',
    'Free height under furniture: 15 cm (5 7/8 ")',
    'Armrest width: 18 cm (7 1/8 ")',
    'Armrest height: 60 cm (23 5/8 ")',
    'Seat width: 166 cm (65 3/8 ")',
    'Seat depth: 54 cm (21 1/4 ")',
    'Seat height: 48 cm (18 7/8 ")',
    'Height: 82 cm (32 1/4 ")'
  ],
},
{
  id: 13,
  name: 'BlissfulHaven ',
  unitPrice: 18999,
  images: [
    bed_images.c1_1,
    bed_images.c1_2,
    bed_images.c1_3
  ],
  description: `This classic and timeless wing chair with an embracing backrest gives you relaxing me-time and is also great to sit on while enjoying socializing with others. Clean lines, simple and at the same time a softly rounded design with wooden legs all make the wing chair easy to like and place anywhere. The wing chair has a high comfort level thanks to the seat with a combination of supportive springs and soft foam, lumbar support, armrests and an extra-high backrest that you can lean against. You can complete your wing chair with OSKARSHAMN footstool to sit even more comfortably.`,
  measurements: [
    'Depth: 86 cm (33 7/8 ")',
    'Height: 99 cm (39 ")',
    'Seat depth: 54 cm (21 1/4 ")',
    'Seat height: 44 cm (17 3/8 ")',
    'Seat width: 54 cm (21 1/4 ")',
    'Width: 82 cm (32 1/4 ")'
  ],
},
{
  id: 14,
  name: 'SereneDreamscape',
  unitPrice: 18999,
  images: [
    bed_images.c2_1,
    bed_images.c2_2,
    bed_images.c2_3
  ],
  description: `This classic and timeless wing chair with an embracing backrest gives you relaxing me-time and is also great to sit on while enjoying socializing with others. Clean lines, simple and at the same time a softly rounded design with wooden legs all make the wing chair easy to like and place anywhere. The wing chair has a high comfort level thanks to the seat with a combination of supportive springs and soft foam, lumbar support, armrests and an extra-high backrest that you can lean against. You can complete your wing chair with OSKARSHAMN footstool to sit even more comfortably.`,
  measurements: [
    'Depth: 86 cm (33 7/8 ")',
    'Height: 99 cm (39 ")',
    'Seat depth: 54 cm (21 1/4 ")',
    'Seat height: 44 cm (17 3/8 ")',
    'Seat width: 54 cm (21 1/4 ")',
    'Width: 82 cm (32 1/4 ")'
  ],
},
{
  id: 15,
  name: 'CozyNook',
  unitPrice: 18999,
  images: [
    bed_images.c3_1,
    bed_images.c3_2,
    bed_images.c3_3
  ],
  description: `This classic and timeless wing chair with an embracing backrest gives you relaxing me-time and is also great to sit on while enjoying socializing with others. Clean lines, simple and at the same time a softly rounded design with wooden legs all make the wing chair easy to like and place anywhere. The wing chair has a high comfort level thanks to the seat with a combination of supportive springs and soft foam, lumbar support, armrests and an extra-high backrest that you can lean against. You can complete your wing chair with OSKARSHAMN footstool to sit even more comfortably.`,
  measurements: [
    'Depth: 86 cm (33 7/8 ")',
    'Height: 99 cm (39 ")',
    'Seat depth: 54 cm (21 1/4 ")',
    'Seat height: 44 cm (17 3/8 ")',
    'Seat width: 54 cm (21 1/4 ")',
    'Width: 82 cm (32 1/4 ")'
  ],
},
{
  id: 16,
  name: 'TranquilTide Sofa',
  unitPrice: 18999,
  images: [
    bed_images.c4_1,
    bed_images.c4_2,
    bed_images.c4_3
  ],
  description: `This classic and timeless wing chair with an embracing backrest gives you relaxing me-time and is also great to sit on while enjoying socializing with others. Clean lines, simple and at the same time a softly rounded design with wooden legs all make the wing chair easy to like and place anywhere. The wing chair has a high comfort level thanks to the seat with a combination of supportive springs and soft foam, lumbar support, armrests and an extra-high backrest that you can lean against. You can complete your wing chair with OSKARSHAMN footstool to sit even more comfortably.`,
  measurements: [
    'Depth: 86 cm (33 7/8 ")',
    'Height: 99 cm (39 ")',
    'Seat depth: 54 cm (21 1/4 ")',
    'Seat height: 44 cm (17 3/8 ")',
    'Seat width: 54 cm (21 1/4 ")',
    'Width: 82 cm (32 1/4 ")'
  ],
},
{
  id: 17,
  name: 'HarmonyHaven',
  unitPrice: 18999,
  images: [
    bed_images.c5_1,
    bed_images.c5_2,
    bed_images.c5_3
  ],
  description: `This classic and timeless wing chair with an embracing backrest gives you relaxing me-time and is also great to sit on while enjoying socializing with others. Clean lines, simple and at the same time a softly rounded design with wooden legs all make the wing chair easy to like and place anywhere. The wing chair has a high comfort level thanks to the seat with a combination of supportive springs and soft foam, lumbar support, armrests and an extra-high backrest that you can lean against. You can complete your wing chair with OSKARSHAMN footstool to sit even more comfortably.`,
  measurements: [
    'Depth: 86 cm (33 7/8 ")',
    'Height: 99 cm (39 ")',
    'Seat depth: 54 cm (21 1/4 ")',
    'Seat height: 44 cm (17 3/8 ")',
    'Seat width: 54 cm (21 1/4 ")',
    'Width: 82 cm (32 1/4 ")'
  ],
},
{
  id: 18,
  name: 'RestfulAura',
  unitPrice: 18999,
  images: [
    bed_images.c6_1,
    bed_images.c6_2,
    bed_images.c6_3
  ],
  description: `This classic and timeless wing chair with an embracing backrest gives you relaxing me-time and is also great to sit on while enjoying socializing with others. Clean lines, simple and at the same time a softly rounded design with wooden legs all make the wing chair easy to like and place anywhere. The wing chair has a high comfort level thanks to the seat with a combination of supportive springs and soft foam, lumbar support, armrests and an extra-high backrest that you can lean against. You can complete your wing chair with OSKARSHAMN footstool to sit even more comfortably.`,
  measurements: [
    'Depth: 86 cm (33 7/8 ")',
    'Height: 99 cm (39 ")',
    'Seat depth: 54 cm (21 1/4 ")',
    'Seat height: 44 cm (17 3/8 ")',
    'Seat width: 54 cm (21 1/4 ")',
    'Width: 82 cm (32 1/4 ")'
  ],
}









];
export default PRODUCTS;