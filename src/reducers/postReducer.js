const initialState = [
  {
    id: 0,
    title: "DAILY EXERCISE IS ESSENTIAL",
    date: "November 23, 2020",
    category: "HealthX",
    img:
      "https://plethorathemes.com/healthflex/wp-content/uploads/2015/11/woman_running-1024x541.jpg",
    description:
      "When was the last time you went out for a 30min walk? Allergy allergy-triggered asthma biopsy cone contact lenses depression dna fatty acids laxatives lymph node otitis media retinopathy urinalysis urine vitreous body. Allergy-triggered asthma blood bank blood type carbohydrate carbohydrate counting cardiologist cough diaphragm diarrhea ear canal epiglottis gingivitis histamine hyperglycemia immune system insulin insulin pump involuntary muscle lacrimal glands mucus nausea navel occupational therapist oncologist orthodontist pulse rhinovirus saliva sternutation tinnitus. Abdominals cardiologist complete blood count (cbc) dietitian dust mites gastric juices hyperglycemia navel papillae skin test. Antibiotics asthma action plan blood glucose meter bone marrow cerumen cochlea congestion conjunctivitis dislocation epiglottis fats gurney histamine hydrocortisone malocclusion nausea nearsighted rheumatologist social worker suture virus yawn.",
    tags: ["Exercise", "Fitness", "Health", "Tips"],
    comments: [
      {
        user: "HealthX",
        date: "September 29, 2020",
        text: "Great theme guys!"
      }
    ]
  },
  {
    id: 1,
    title: "MEDICAL ADVICE FOR ALL AGES AND SEXES",
    date: "December 13, 2020",
    category: "plethoratthemes",
    img:
      "https://plethorathemes.com/healthflex/wp-content/uploads/2015/09/blog-pills.jpg",
    description:
      "When was the last time you went out for a 30min walk? Allergy allergy-triggered asthma biopsy cone contact lenses depression dna fatty acids laxatives lymph node otitis media retinopathy urinalysis urine vitreous body. Allergy-triggered asthma blood bank blood type carbohydrate carbohydrate counting cardiologist cough diaphragm diarrhea ear canal epiglottis gingivitis histamine hyperglycemia immune system insulin insulin pump involuntary muscle lacrimal glands mucus nausea navel occupational therapist oncologist orthodontist pulse rhinovirus saliva sternutation tinnitus. Abdominals cardiologist complete blood count (cbc) dietitian dust mites gastric juices hyperglycemia navel papillae skin test. Antibiotics asthma action plan blood glucose meter bone marrow cerumen cochlea congestion conjunctivitis dislocation epiglottis fats gurney histamine hydrocortisone malocclusion nausea nearsighted rheumatologist social worker suture virus yawn.",
    tags: ["Exercise", "Fitness", "Health", "Tips"],
    comments: [
      {
        user: "HealthX",
        date: "September 29, 2020",
        text: "Great theme guys!"
      }
    ]
  },
  {
    id: 2,
    title: "DIABETES DIET AND HEALTHY FOOD TIPS",
    date: "November 23, 2020",
    category: "plethoratthemes",
    img:
      "https://plethorathemes.com/healthflex/wp-content/uploads/2015/09/blog-salad.jpg",
    description:
      "When was the last time you went out for a 30min walk? Allergy allergy-triggered asthma biopsy cone contact lenses depression dna fatty acids laxatives lymph node otitis media retinopathy urinalysis urine vitreous body. Allergy-triggered asthma blood bank blood type carbohydrate carbohydrate counting cardiologist cough diaphragm diarrhea ear canal epiglottis gingivitis histamine hyperglycemia immune system insulin insulin pump involuntary muscle lacrimal glands mucus nausea navel occupational therapist oncologist orthodontist pulse rhinovirus saliva sternutation tinnitus. Abdominals cardiologist complete blood count (cbc) dietitian dust mites gastric juices hyperglycemia navel papillae skin test. Antibiotics asthma action plan blood glucose meter bone marrow cerumen cochlea congestion conjunctivitis dislocation epiglottis fats gurney histamine hydrocortisone malocclusion nausea nearsighted rheumatologist social worker suture virus yawn.",
    tags: ["Exercise", "Fitness", "Health", "Tips"],
    comments: [
      {
        user: "HealthX",
        date: "September 29, 2020",
        text: "Great theme guys!"
      }
    ]
  },
  {
    id: 3,
    title: "DIABETES DIET AND HEALTHY FOOD TIPS",
    date: "November 23, 2020",
    category: "HralthX",
    img: "/assets/news/post_3.jpg",
    description:
      "When was the last time you went out for a 30min walk? Allergy allergy-triggered asthma biopsy cone contact lenses depression dna fatty acids laxatives lymph node otitis media retinopathy urinalysis urine vitreous body. Allergy-triggered asthma blood bank blood type carbohydrate carbohydrate counting cardiologist cough diaphragm diarrhea ear canal epiglottis gingivitis histamine hyperglycemia immune system insulin insulin pump involuntary muscle lacrimal glands mucus nausea navel occupational therapist oncologist orthodontist pulse rhinovirus saliva sternutation tinnitus. Abdominals cardiologist complete blood count (cbc) dietitian dust mites gastric juices hyperglycemia navel papillae skin test. Antibiotics asthma action plan blood glucose meter bone marrow cerumen cochlea congestion conjunctivitis dislocation epiglottis fats gurney histamine hydrocortisone malocclusion nausea nearsighted rheumatologist social worker suture virus yawn.",
    tags: ["Exercise", "Fitness", "Health", "Tips"],
    comments: [
      {
        user: "HealthX",
        date: "September 29, 2020",
        text: "Great theme guys!"
      }
    ]
  },
  {
    id: 4,
    title: "LABS WALKTHROUGH",
    date: "November 23, 2020",
    category: "HralthX",
    img: "/assets/news/post_4.jpg",
    description:
      "When was the last time you went out for a 30min walk? Allergy allergy-triggered asthma biopsy cone contact lenses depression dna fatty acids laxatives lymph node otitis media retinopathy urinalysis urine vitreous body. Allergy-triggered asthma blood bank blood type carbohydrate carbohydrate counting cardiologist cough diaphragm diarrhea ear canal epiglottis gingivitis histamine hyperglycemia immune system insulin insulin pump involuntary muscle lacrimal glands mucus nausea navel occupational therapist oncologist orthodontist pulse rhinovirus saliva sternutation tinnitus. Abdominals cardiologist complete blood count (cbc) dietitian dust mites gastric juices hyperglycemia navel papillae skin test. Antibiotics asthma action plan blood glucose meter bone marrow cerumen cochlea congestion conjunctivitis dislocation epiglottis fats gurney histamine hydrocortisone malocclusion nausea nearsighted rheumatologist social worker suture virus yawn.",
    tags: ["Exercise", "Fitness", "Health", "Tips"],
    comments: [
      {
        user: "HealthX",
        date: "September 29, 2020",
        text: "Great theme guys!"
      }
    ]
  },
  {
    id: 5,
    title: "LABS FOOD EXAM",
    date: "November 23, 2020",
    category: "HralthX",
    img: "/assets/news/post_5.jpg",
    description:
      "When was the last time you went out for a 30min walk? Allergy allergy-triggered asthma biopsy cone contact lenses depression dna fatty acids laxatives lymph node otitis media retinopathy urinalysis urine vitreous body. Allergy-triggered asthma blood bank blood type carbohydrate carbohydrate counting cardiologist cough diaphragm diarrhea ear canal epiglottis gingivitis histamine hyperglycemia immune system insulin insulin pump involuntary muscle lacrimal glands mucus nausea navel occupational therapist oncologist orthodontist pulse rhinovirus saliva sternutation tinnitus. Abdominals cardiologist complete blood count (cbc) dietitian dust mites gastric juices hyperglycemia navel papillae skin test. Antibiotics asthma action plan blood glucose meter bone marrow cerumen cochlea congestion conjunctivitis dislocation epiglottis fats gurney histamine hydrocortisone malocclusion nausea nearsighted rheumatologist social worker suture virus yawn.",
    tags: ["Exercise", "Fitness", "Health", "Tips"],
    comments: [
      {
        user: "HealthX",
        date: "September 29, 2020",
        text: "Great theme guys!"
      }
    ]
  },
  {
    id: 6,
    title: "DIETARY ADVICE",
    date: "November 23, 2020",
    category: "HralthX",
    img: "/assets/news/post_6.jpg",
    description:
      "When was the last time you went out for a 30min walk? Allergy allergy-triggered asthma biopsy cone contact lenses depression dna fatty acids laxatives lymph node otitis media retinopathy urinalysis urine vitreous body. Allergy-triggered asthma blood bank blood type carbohydrate carbohydrate counting cardiologist cough diaphragm diarrhea ear canal epiglottis gingivitis histamine hyperglycemia immune system insulin insulin pump involuntary muscle lacrimal glands mucus nausea navel occupational therapist oncologist orthodontist pulse rhinovirus saliva sternutation tinnitus. Abdominals cardiologist complete blood count (cbc) dietitian dust mites gastric juices hyperglycemia navel papillae skin test. Antibiotics asthma action plan blood glucose meter bone marrow cerumen cochlea congestion conjunctivitis dislocation epiglottis fats gurney histamine hydrocortisone malocclusion nausea nearsighted rheumatologist social worker suture virus yawn.",
    tags: ["Exercise", "Fitness", "Health", "Tips"],
    comments: [
      {
        user: "HealthX",
        date: "September 29, 2020",
        text: "Great theme guys!"
      }
    ]
  },
  {
    id: 7,
    title: "PRACTITIONER’S ADVICE",
    date: "November 23, 2020",
    category: "HralthX",
    img: "/assets/news/post_7.jpg",
    description:
      "When was the last time you went out for a 30min walk? Allergy allergy-triggered asthma biopsy cone contact lenses depression dna fatty acids laxatives lymph node otitis media retinopathy urinalysis urine vitreous body. Allergy-triggered asthma blood bank blood type carbohydrate carbohydrate counting cardiologist cough diaphragm diarrhea ear canal epiglottis gingivitis histamine hyperglycemia immune system insulin insulin pump involuntary muscle lacrimal glands mucus nausea navel occupational therapist oncologist orthodontist pulse rhinovirus saliva sternutation tinnitus. Abdominals cardiologist complete blood count (cbc) dietitian dust mites gastric juices hyperglycemia navel papillae skin test. Antibiotics asthma action plan blood glucose meter bone marrow cerumen cochlea congestion conjunctivitis dislocation epiglottis fats gurney histamine hydrocortisone malocclusion nausea nearsighted rheumatologist social worker suture virus yawn.",
    tags: ["Exercise", "Fitness", "Health", "Tips"],
    comments: [
      {
        user: "HealthX",
        date: "September 29, 2020",
        text: "Great theme guys!"
      }
    ]
  }
];

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default postReducer;
