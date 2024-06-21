const dishesArray = JSON.parse(localStorage.getItem('dishesArray')) ?? [
    {
      name: "Paneer Tikka",
      img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQbQTIqPRyvBO6GB0KH4Jw2yJWesg-DFnPioVy4pYNRHROnDIr8-A6XqOWpYr5n",
      reviews: [
        {
          name: "Ramesh",
          review: "Very delicious food to eat. Must order",
          profile_url: "https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
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
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSbxXpz3Bw1OCWswNJydr0eboP4fVdGwvLBt_i1g0NGuKiabe6gkZG5s5VxSHfn",
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
      name: "Butter Chicken",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzuiDdfOjPjDUekS_tpEvpqsiihnjjDnFnLcJ181qP-u5zWHE2wcbDeSUGdxvi",
      reviews: [
        {
          name: "Rajesh",
          review: "This creamy tomato gravy is heavenly!",
          profile_url: "https://www.pngkey.com/png/detail/202-2024792_user_profile-icon-png-download-fa-user-circle.png",
        },
        {
          name: "Sonia",
          review: "The perfect comfort food. Goes great with rice or naan.",
          profile_url: "https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
        },
      ],
    },
    {
      name: "Naan",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbabwm4QRR6QiOhCDQ2GJ9-FbkHyCEvk28VLw8K_m_qwZ5oM61nCkbrpfednm9",
      reviews: [
        {
          name: "Aisha",
          review: "Soft and fluffy naan bread. Perfect for scooping up curries!",
          profile_url: "https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
        },
        {
          name: "Vikas",
          review: "A delicious addition to any Indian meal.",
          profile_url: "https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
        },
      ],
    },
    {
        name: "Paneer Tikka",
        img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQbQTIqPRyvBO6GB0KH4Jw2yJWesg-DFnPioVy4pYNRHROnDIr8-A6XqOWpYr5n",
        reviews: [
          {
            name: "Ramesh",
            review: "Very delicious food to eat. Must order",
            profile_url: "https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
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
    img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSbxXpz3Bw1OCWswNJydr0eboP4fVdGwvLBt_i1g0NGuKiabe6gkZG5s5VxSHfn",
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
      name: "Butter Chicken",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzuiDdfOjPjDUekS_tpEvpqsiihnjjDnFnLcJ181qP-u5zWHE2wcbDeSUGdxvi",
      reviews: [
        {
          name: "Rajesh",
          review: "This creamy tomato gravy is heavenly!",
          profile_url: "https://www.pngkey.com/png/detail/202-2024792_user_profile-icon-png-download-fa-user-circle.png",
        },
        {
          name: "Sonia",
          review: "The perfect comfort food. Goes great with rice or naan.",
          profile_url: "https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
        },
      ],
    },
    {
      name: "Naan",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbabwm4QRR6QiOhCDQ2GJ9-FbkHyCEvk28VLw8K_m_qwZ5oM61nCkbrpfednm9",
      reviews: [
        {
          name: "Aisha",
          review: "Soft and fluffy naan bread. Perfect for scooping up curries!",
          profile_url: "https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
        },
        {
          name: "Vikas",
          review: "A delicious addition to any Indian meal.",
          profile_url: "https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
        },
      ],
    },
]

const nonvegDishes = JSON.parse(localStorage.getItem('nonvegDishes')) ?? [
    {
      name: "Chicken Tikka Masala",
      img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSDt2N_A5wIJqq1QUZxLcd5rnYrdCQ_5AAwSmWIhG5ByoKcGeoDJfQGRf4vegHk",
      reviews: [
        {
          name: "Ramesh",
          review: "Very delicious food to eat. Must order",
          profile_url: "https://www.pngkey.com/png/detail/202-24792_user-profile-icon-png-download-fa-user-circle.png",
        },
        {
          name: "Priya",
          review: "Loved the creamy texture and spices!",
          profile_url: "https://www.pngkey.com/png/detail/202-24792_user-profile-icon-png-download-fa-user-circle.png",
        },
      ],
    },
    {
      name: "Vegetable Biryani",
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSbxXpz3Bw1OCWswNJydr0eboP4fVdGwvLBt_i1g0NGuKiabe6gkZG5s5VxSHfn",
      reviews: [
        {
          name: "Amit",
          review: "The perfect blend of vegetables and rice. Loved it!",
          profile_url: "https://www.pngkey.com/png/detail/202-24792_user-profile-icon-png-download-fa-user-circle.png",
        },
        {
          name: "Sarah",
          review: "Aromatic and flavorful. Highly recommend!",
          profile_url: "https://www.pngkey.com/png/detail/202-24792_user-profile-icon-png-download-fa-user-circle.png",
        },
      ],
    },
    {
      name: "Butter Chicken",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzuiDdfOjPjDUekS_tpEvpqsiihnjjDnFnLcJ181qP-u5zWHE2wcbDeSUGdxvi",
      reviews: [
        {
          name: "Rajesh",
          review: "This creamy tomato gravy is heavenly!",
          profile_url: "https://www.pngkey.com/png/detail/202-24792_user-profile-icon-png-download-fa-user-circle.png",
        },
        {
          name: "Sonia",
          review: "The perfect comfort food. Goes great with rice or naan.",
          profile_url: "https://www.pngkey.com/png/detail/202-24792_user-profile-icon-png-download-fa-user-circle.png",
        },
      ],
    },
    {
      name: "Mutton Rogan Josh",
      img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTKKduVsXxKCVfPSlRrZUoFfFefAjBKij6px53HB6CCZoguJKvt74ocTMiMA5PD",
      reviews: [],
    },
    {
      name: "Tandoori Chicken ",
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTNLX90Mb1AZkgljLSnJCDnKPY1xjRcAyDEK61HyjyTUodos4LPTBm3RRAaJdCM",
      reviews: [],
    },
    {
      name: "Vegetable Biryani",
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSbxXpz3Bw1OCWswNJydr0eboP4fVdGwvLBt_i1g0NGuKiabe6gkZG5s5VxSHfn",
      reviews: [
        {
          name: "Amit",
          review: "The perfect blend of vegetables and rice. Loved it!",
          profile_url: "https://www.pngkey.com/png/detail/202-24792_user-profile-icon-png-download-fa-user-circle.png",
        },
        {
          name: "Sarah",
          review: "Aromatic and flavorful. Highly recommend!",
          profile_url: "https://www.pngkey.com/png/detail/202-24792_user-profile-icon-png-download-fa-user-circle.png",
        },
      ],
    },
    {
      name: "Butter Chicken",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzuiDdfOjPjDUekS_tpEvpqsiihnjjDnFnLcJ181qP-u5zWHE2wcbDeSUGdxvi",
      reviews: [
        {
          name: "Rajesh",
          review: "This creamy tomato gravy is heavenly!",
          profile_url: "https://www.pngkey.com/png/detail/202-24792_user-profile-icon-png-download-fa-user-circle.png",
        },
        {
          name: "Sonia",
          review: "The perfect comfort food. Goes great with rice or naan.",
          profile_url: "https://www.pngkey.com/png/detail/202-24792_user-profile-icon-png-download-fa-user-circle.png",
        },
      ],
    },
    {
      name: "Mutton Rogan Josh",
      img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTKKduVsXxKCVfPSlRrZUoFfFefAjBKij6px53HB6CCZoguJKvt74ocTMiMA5PD",
      reviews: [],
    },
    {
      name: "Tandoori Chicken ",
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTNLX90Mb1AZkgljLSnJCDnKPY1xjRcAyDEK61HyjyTUodos4LPTBm3RRAaJdCM",
      reviews: [],
    }
]

const veganDishes = JSON.parse(localStorage.getItem('veganDishes')) ?? [
    {
      name: "Vegan Tikka Masala",
      img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS0JXvhHIZbQINhsKDrNuzPMVhxP46Kas9hpggqZFiqOGqpWW7reA1JHAYV_hqu",
      reviews: [],
    },
    {
      name: "Vegetable Biryani",
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSbxXpz3Bw1OCWswNJydr0eboP4fVdGwvLBt_i1g0NGuKiabe6gkZG5s5VxSHfn",
      reviews: [
        {
          name: "Amit",
          review: "The perfect blend of vegetables and rice. Loved it!",
          profile_url: "https://www.pngkey.com/png/detail/202-24792_user-profile-icon-png-download-fa-user-circle.png",
        },
        {
          name: "Sarah",
          review: "Aromatic and flavorful. Highly recommend!",
          profile_url: "https://www.pngkey.com/png/detail/202-24792_user-profile-icon-png-download-fa-user-circle.png",
        },
      ],
    },
    {
      name: "Vegan Butter Masala",
      img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTpRb-rVsDN6MhgnjAH_QR1LOY_-5bZ13UfrZ0mlsEn_N80ABh9NvirON55D3-8",
      reviews: [],
    },
    {
      name: "Paneer Rogan Josh",
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQX9Oup4SDyNBA7iuJ1Ubt7yvLygkiAnf7iG9Iu0MQkLuMqFGTKQGGM8oWN9mQe",
      reviews: [],
    },
    {
      name: "Tofu Tikka Masala",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROCTvPC9NWRBxgou6LClbLiFyEqFIYQbZGw6Ke9y_BcqsyENc4kPpSW5RdFVQV",
      reviews: [],
    },
    {
      name: "Vegetable Biryani",
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSbxXpz3Bw1OCWswNJydr0eboP4fVdGwvLBt_i1g0NGuKiabe6gkZG5s5VxSHfn",
      reviews: [
        {
          name: "Amit",
          review: "The perfect blend of vegetables and rice. Loved it!",
          profile_url: "https://www.pngkey.com/png/detail/202-24792_user-profile-icon-png-download-fa-user-circle.png",
        },
        {
          name: "Sarah",
          review: "Aromatic and flavorful. Highly recommend!",
          profile_url: "https://www.pngkey.com/png/detail/202-24792_user-profile-icon-png-download-fa-user-circle.png",
        },
      ],
    },
    {
      name: "Vegan Butter Masala",
      img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTpRb-rVsDN6MhgnjAH_QR1LOY_-5bZ13UfrZ0mlsEn_N80ABh9NvirON55D3-8",
      reviews: [],
    },
    {
      name: "Paneer Rogan Josh",
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQX9Oup4SDyNBA7iuJ1Ubt7yvLygkiAnf7iG9Iu0MQkLuMqFGTKQGGM8oWN9mQe",
      reviews: [],
    },
    {
      name: "Tofu Tikka Masala",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROCTvPC9NWRBxgou6LClbLiFyEqFIYQbZGw6Ke9y_BcqsyENc4kPpSW5RdFVQV",
      reviews: [],
    },
]
  