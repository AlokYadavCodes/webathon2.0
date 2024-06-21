const dishesArray = JSON.parse(localStorage.getItem('dishesArray')) ?? [
    {
      name: "Paneer Tikka",
      img: "https://images.fittrapi.com/tr:w-1024,pr-true,q-60/5287daf8-db97-4ee2-a193-6a8933c39d3c.jpeg",
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
      img: "https://images.fittrapi.com/tr:w-1024,pr-true,q-60/5287daf8-db97-4ee2-a193-6a8933c39d3c.jpeg",
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
      img: "https://images.fittrapi.com/tr:w-1024,pr-true,q-60/5287daf8-db97-4ee2-a193-6a8933c39d3c.jpeg",
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
      img: "https://images.fittrapi.com/tr:w-1024,pr-true,q-60/5287daf8-db97-4ee2-a193-6a8933c39d3c.jpeg",
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
    }
]
  