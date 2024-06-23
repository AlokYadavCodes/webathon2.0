const dishesArray = JSON.parse(localStorage.getItem('dishesArray')) ?? [
  {
    name: "Paneer Tikka",
    img: "https://media.istockphoto.com/id/1186759790/photo/paneer-tikka-at-skewers-in-black-bowl-at-dark-slate-background-paneer-tikka-is-an-indian.jpg?s=612x612&w=0&k=20&c=cITToqM1KEnrixXjoLhEciqP24SxdKtW3QXykq-W5OE=",
    reviews: [
      {
        name: "Alok Yadav",
        review: "Very delicious food to eat. Must order",
        profile_url: "https://avatars.githubusercontent.com/u/156905376?v=4",
      },
      {
        name: "Priya",
        review: "Loved the creamy texture and spices!",
        profile_url: "https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
      },
    ],
  },
  {
    name: "Vegetable Biryani",
    img: "https://media.istockphoto.com/id/1039691852/photo/vegetable-fried-rice.jpg?s=612x612&w=0&k=20&c=ylOZDjkctSmrZIWP24DQkMf_XKpg2xFPA4KOolk3B_U=",
    reviews: [
      {
        name: "Alok Yadav",
        review: "Aromatic and flavorful rice dish loaded with veggies. Perfect for a crowd!",
        profile_url: "https://avatars.githubusercontent.com/u/156905376?v=4",
      },
      {
        name: "David",
        review: "Loved the variety of vegetables and the fluffy rice. Highly recommend!",
        profile_url: "https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
      },
    ],
  },
  {
    name: "Mushroom Stroganoff",
    img: "https://media.istockphoto.com/id/817313114/photo/mushroom-beef-stroganoff-in-pan-with-copy-space.jpg?s=612x612&w=0&k=20&c=ll-EcueA9ikW1V18Pm4aRVI-ZmoLaRi31f5sfIriL18=",
    reviews: [
      {
        name: "Emily",
        review: "Creamy and comforting dish with perfectly cooked mushrooms. Delicious!",
        profile_url: "https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
      },
      {
        name: "Michael",
        review: "Great vegetarian alternative to traditional stroganoff. Loved the rich sauce!",
        profile_url: "https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
      },
    ],
  },
  {
    name: "Thai Curry with Tofu",
    img: "https://media.istockphoto.com/id/1172590634/photo/vegetarian-thai-green-curry-with-smoked-tofu-snow-peas-baby-corn-and-courgette.jpg?s=612x612&w=0&k=20&c=h-K2P6J0pzYBhrJ9nRmrOBK4fNyNHZEy713zYWvAOP4=",
    reviews: [
      {
        name: "Alex",
        review: "Spicy and flavorful curry with tender tofu. Great with rice or noodles!",
        profile_url: "https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
      },
      {
        name: "Jessica",
        review: "This curry is a perfect balance of sweet, savory, and spicy. Loved it!",
        profile_url: "https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
      },
    ],
  },
  {
    name: "Saag Paneer",
    img: "https://media.istockphoto.com/id/1146291429/photo/palak-paneer-or-spinach-and-cottage-cheese-curry-on-a-dark-background-traditional-indian-food.jpg?s=612x612&w=0&k=20&c=LuY5cNs9p9EonSEqRE8t7xgvCPjLfT2iPYhsg5ZRNkw=",
    reviews: [
      {
        name: "Anjali",
        review: "Creamy spinach curry with paneer cubes. A delightful vegetarian option!",
        profile_url: "https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
      },
      {
        name: "Kapil",
        review: "The richness of the spinach and the softness of paneer make this dish irresistible!",
        profile_url: "https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
      },
    ],
  },
  {
    name: "Malai Kofta",
    img: "https://media.istockphoto.com/id/1219174099/photo/malai-kofta-curry-in-black-bowl-at-dark-slate-background-malai-kofta-is-indian-cuisine-dish.jpg?s=612x612&w=0&k=20&c=ZqajoGuZIjQ_37LU7ZDyRpCJTCuLctwClGVumH2xCfM=",
    reviews: [
      {
        name: "Sunita",
        review: "Soft potato and cottage cheese dumplings in a creamy gravy. Perfect comfort food!",
        profile_url: "https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
      },
      {
        name: "Rajesh",
        review: "The melt-in-your-mouth koftas and flavorful gravy are a true delight!",
        profile_url: "https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
      },
    ],
  },
  {
    name: "Dosa",
    img: "https://media.istockphoto.com/id/1306083166/photo/masala-sin.jpg?s=612x612&w=0&k=20&c=DLrNS6s3FS6Eygy0vbEk0WY0ROMuEyNde6ttwUv_ObA=",
    reviews: [
      {
        name: "Meera",
        review: "Crispy and thin crepe made from fermented rice and lentils. A South Indian staple!",
        profile_url: "https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
      },
      {
        name: "Vivek",
        review: "Dosa is a versatile dish, perfect for breakfast, lunch, or a light dinner!",
        profile_url: "https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
      },
    ],
  }
];

const nonvegDishes = JSON.parse(localStorage.getItem('nonvegDishes')) ?? [
    {
      name: "Chicken Tikka Masala",
      img: "https://media.istockphoto.com/id/1081828956/photo/spicy-barbecued-chicken-tikka-boti-on-skewers-served-in-a-plate-with-green-chutney-selective.jpg?s=612x612&w=0&k=20&c=oNYrfh_7MfvueO8Taw38EWJ4MuuHoYyLCJhsidJwyII=",
      reviews: [
        {
          name: "Alok Yadav",
          review: "Very delicious food to eat. Must order",
          profile_url: "https://avatars.githubusercontent.com/u/156905376?v=4",
        },
        {
          name: "Priya",
          review: "Loved the creamy texture and spices!",
          profile_url: "https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
        },
      ],
    },
    {
      name: "Butter Chicken",
      img: "https://media.istockphoto.com/id/618457124/photo/butter-chicken-served-with-homemade-indian-naan-bread.jpg?s=612x612&w=0&k=20&c=7FoiHoDtocfPvQIaRFfFani4e5lkfMTNl_619rTTh4g=",
      reviews: [
        {
          name: "Alok Yadav",
          review: "The perfect blend of vegetables and rice. Loved it!",
          profile_url: "https://avatars.githubusercontent.com/u/156905376?v=4",
        },
        {
          name: "Sarah",
          review: "Aromatic and flavorful. Highly recommend!",
          profile_url: "https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
        },
      ],
    },
    {
      name: "Mutton Rogan Josh",
      img: "https://media.istockphoto.com/id/608005280/photo/mutton-rogan-josh-mutton-curry-indian-cuisine.jpg?s=612x612&w=0&k=20&c=F-sjeDrKuwqVh51seSkRV7Lng8ujiObyJPDxLvz3oOM=",
      reviews: [
        {
          name: "Rajesh",
          review: "This creamy tomato gravy is heavenly!",
          profile_url: "https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
        },
        {
          name: "Sonia",
          review: "The perfect comfort food. Goes great with rice or naan.",
          profile_url: "https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
        },
      ],
    },
    {
      name: "Fish Curry",
      img: "https://media.istockphoto.com/id/1266092627/photo/spicy-fish-curry-popular-indian-seafood-served-with-rice.jpg?s=612x612&w=0&k=20&c=C1tBoF5k89FhTfMfMjWNoc-nAddknXbUE0Wp57vHwYI=",
      reviews: [
        {
          name: "Rajesh",
          review: "This creamy tomato gravy is heavenly!",
          profile_url: "https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
        },
        {
          name: "Sonia",
          review: "The perfect comfort food. Goes great with rice or naan.",
          profile_url: "https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
        },
      ]
    },
    {
      name: "Tandoori Chicken ",
      img: "https://media.istockphoto.com/id/1396604313/photo/roasted-whole-chicken-legs-with-condiment-directly-above-photo.jpg?s=612x612&w=0&k=20&c=JDs72E-fX5SdcBQREta58T82W8zO_rFiKC7d1WwEEUE=",
      reviews: [
        {
          name: "Alok Yadav",
          review: "This creamy tomato gravy is heavenly!",
          profile_url: "https://avatars.githubusercontent.com/u/156905376?v=4",
        },
        {
          name: "Sonia",
          review: "The perfect comfort food. Goes great with rice or naan.",
          profile_url: "https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
        },
      ],
    },
    {
      name: "Chicken Keema",
      img: "https://media.istockphoto.com/id/1255574619/photo/mutton-keema-indian-delicious-minced-chicken-curry.jpg?s=612x612&w=0&k=20&c=_DFQU8iUvViUVDcpSDVQVWSYr-YQIOCcArVAyJ2PHBw=",
      reviews: [
        {
          name: "Amit",
          review: "The perfect blend of vegetables and rice. Loved it!",
          profile_url: "https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
        },
        {
          name: "Sarah",
          review: "Aromatic and flavorful. Highly recommend!",
          profile_url: "https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
        },
      ],
    },
    {
      name: "Lamb Vindaloo",
      img: "https://media.istockphoto.com/id/1164095805/photo/spicy-indian-lamb-curry-close-up.jpg?s=612x612&w=0&k=20&c=XfeuNZr25yYu7VckmFAckEWZa-i8TSX97T5lBTT4Tf4=",
      reviews: [
        {
          name: "Rajesh",
          review: "This creamy tomato gravy is heavenly!",
          profile_url: "https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
        },
        {
          name: "Sonia",
          review: "The perfect comfort food. Goes great with rice or naan.",
          profile_url: "https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
        },
      ],
    },
    {
      name: "Chicken 65",
      img: "https://media.istockphoto.com/id/1265209311/photo/fried-chicken-kebab-or-kabab.jpg?s=612x612&w=0&k=20&c=cq6fgpRnjpiD3ILifT3bPg2m8EnxtUvG7M8oB-9h1MY=",
      reviews: [
        {
          name: "Rajesh",
          review: "This creamy tomato gravy is heavenly!",
          profile_url: "https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
        },
        {
          name: "Sonia",
          review: "The perfect comfort food. Goes great with rice or naan.",
          profile_url: "https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
        },
      ],
    },
    {
      name: "Reshmi Kebab",
      img: "https://media.istockphoto.com/id/1447752296/photo/chicken-reshmi-tikka-boti-kabab-with-melted-butter-and-chili-sauce-served-in-a-dish-isolated.jpg?s=612x612&w=0&k=20&c=fJssgzaBBqruJ1v9Eh0RAprngdH5Dw52E-qc7cJ2kHg=",
      reviews: [],
    }
]

const veganDishes = JSON.parse(localStorage.getItem('veganDishes')) ?? [
    {
      name: "Dal Makhani",
      img: "https://media.istockphoto.com/id/1170374719/photo/dal-makhani-at-dark-background.jpg?s=612x612&w=0&k=20&c=49yLaUAE2apakVk2AAiRQimZd98WtSjIQ0hzCzWsmns=",
      reviews: [
        {
          name: "Alok Yadav",
          review: "The perfect blend of vegetables and rice. Loved it!",
          profile_url: "https://avatars.githubusercontent.com/u/156905376?v=4",
        },
        {
          name: "Sarah",
          review: "Aromatic and flavorful. Highly recommend!",
          profile_url: "https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
        },
      ],
    },
    {
      name: "Chana Masala",
      img: "https://media.istockphoto.com/id/1295943731/photo/chana-masala-or-chole-in-black-bowl-on-dark-slate-table-top-indian-cuisine-veg-chickpeas.jpg?s=612x612&w=0&k=20&c=FI-Qt3ufxWPGNmyZxnezSORGtM4As1McZj4FDOaF1cw=",
      reviews: [
        {
          name: "Alok Yadav",
          review: "The perfect blend of vegetables and rice. Loved it!",
          profile_url: "https://avatars.githubusercontent.com/u/156905376?v=4",
        },
        {
          name: "Sarah",
          review: "Aromatic and flavorful. Highly recommend!",
          profile_url: "https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
        },
      ],
    },
    {
      name: "Aloo Gobi",
      img: "https://media.istockphoto.com/id/450469817/photo/gobi-aloo-indian-curry-dish.jpg?s=612x612&w=0&k=20&c=LMIAbZLAXXRVCPRb8dwvtp23y_RPyRLAp0UuOW4DmDc=",
      reviews: [
        {
          name: "Amit",
          review: "The perfect blend of vegetables and rice. Loved it!",
          profile_url: "https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
        },
        {
          name: "Sarah",
          review: "Aromatic and flavorful. Highly recommend!",
          profile_url: "https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
        },
      ],
    },
    {
      name: "Saag Paneer",
      img: "https://media.istockphoto.com/id/1146291429/photo/palak-paneer-or-spinach-and-cottage-cheese-curry-on-a-dark-background-traditional-indian-food.jpg?s=612x612&w=0&k=20&c=LuY5cNs9p9EonSEqRE8t7xgvCPjLfT2iPYhsg5ZRNkw=",
      reviews: [
        {
          name: "Amit",
          review: "The perfect blend of vegetables and rice. Loved it!",
          profile_url: "https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
        },
        {
          name: "Sarah",
          review: "Aromatic and flavorful. Highly recommend!",
          profile_url: "https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
        },
      ],
    },
    {
      name: "Masala Dosa",
      img: "https://media.istockphoto.com/id/1156896023/photo/cheese-masala-dosa-recipe-with-sambar-and-chutney-selective-focus.jpg?s=612x612&w=0&k=20&c=ddWTTzN52tHM_jqSRj35G9WYoas2Da3HLwzOxaQ0WFY=",
      reviews: [
        {
          name: "Amit",
          review: "The perfect blend of vegetables and rice. Loved it!",
          profile_url: "https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
        },
        {
          name: "Sarah",
          review: "Aromatic and flavorful. Highly recommend!",
          profile_url: "https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
        },
      ],
    },
    {
      name: "Rajma Masala",
      img: "https://media.istockphoto.com/id/1058491256/photo/rajma-masala-kidney-beans-curry.jpg?s=612x612&w=0&k=20&c=uL6p8dMocrt_jCFK-vMfxFb5cJJG1ZA_8_6p12qdabA=",
      reviews: [
        {
          name: "Amit",
          review: "The perfect blend of vegetables and rice. Loved it!",
          profile_url: "https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
        },
        {
          name: "Sarah",
          review: "Aromatic and flavorful. Highly recommend!",
          profile_url: "https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
        },
      ],
    },
    {
      name: "Palak Paneer",
      img: "https://media.istockphoto.com/id/851889508/photo/palak-paneer.jpg?s=612x612&w=0&k=20&c=5xcTOeOYTnihYzSG4OYaLVkhgn1EOgehU73aiZnhhNA=",
      reviews: [
        {
          name: "Amit",
          review: "The perfect blend of vegetables and rice. Loved it!",
          profile_url: "https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
        },
        {
          name: "Sarah",
          review: "Aromatic and flavorful. Highly recommend!",
          profile_url: "https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
        },
      ],
    },
    {
      name: "Bhel Puri",
      img: "https://media.istockphoto.com/id/1394951804/photo/bhel-poori-an-indian-road-side-snack-in-a-conical-shape-paper-container.jpg?s=612x612&w=0&k=20&c=QFf8Py4YAoAtSjM6uCPR__3fiuTgP7VMvfIol8CqPXI=",
      reviews: [
        {
          name: "Amit",
          review: "The perfect blend of vegetables and rice. Loved it!",
          profile_url: "https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
        },
        {
          name: "Sarah",
          review: "Aromatic and flavorful. Highly recommend!",
          profile_url: "https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
        },
      ],
    },
    {
      name: "Chole Bhature",
      img: "https://media.istockphoto.com/id/979914742/photo/chole-bhature-or-chick-pea-curry-and-fried-puri-served-in-terracotta-crockery-over-white.jpg?s=612x612&w=0&k=20&c=OLAw-ZleN1UVaa468OlPSAc6dkz2sjehxWevbvZQNew=",
      reviews: [
        {
          name: "Amit",
          review: "The perfect blend of vegetables and rice. Loved it!",
          profile_url: "https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
        },
        {
          name: "Sarah",
          review: "Aromatic and flavorful. Highly recommend!",
          profile_url: "https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
        },
      ],
    },
    {
      name: "Litti Chokha",
      img: "https://media.istockphoto.com/id/528436526/photo/litti-chokha-bihar-traditional-food.jpg?s=612x612&w=0&k=20&c=UJXViBY965xU2GajpYHX_BN5eINuIDbSNuCnXq8SUgw=",
      reviews: [
        {
          name: "Amit",
          review: "The perfect blend of vegetables and rice. Loved it!",
          profile_url: "https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
        },
        {
          name: "Sarah",
          review: "Aromatic and flavorful. Highly recommend!",
          profile_url: "https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
        },
      ],
    }
]
  