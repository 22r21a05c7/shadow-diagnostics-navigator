
export interface Disease {
  id: number;
  name: string;
  description: string;
  symptoms: number[];
  probability_weight: number;
  treatment: string;
  diet: string;
  lifestyle: string;
}

// List of diseases with their symptoms, treatments, diets, and lifestyle recommendations
export const diseases: Disease[] = [
  {
    id: 1,
    name: "Common Cold",
    description: "A viral infection of the upper respiratory tract that primarily affects the nose and throat.",
    symptoms: [2, 5, 7, 8, 18, 26, 27],
    probability_weight: 0.8,
    treatment: "Rest, plenty of fluids, over-the-counter pain relievers, and decongestants.",
    diet: "Warm soups, broths, herbal teas with honey, citrus fruits, and foods rich in vitamin C.",
    lifestyle: "Get adequate rest, stay hydrated, use a humidifier, and wash hands frequently."
  },
  {
    id: 2,
    name: "Influenza (Flu)",
    description: "A contagious respiratory illness caused by influenza viruses that infect the nose, throat, and lungs.",
    symptoms: [1, 2, 3, 5, 6, 7, 18, 28],
    probability_weight: 0.7,
    treatment: "Antiviral medications, rest, plenty of fluids, and over-the-counter pain relievers.",
    diet: "Clear broths, herbal teas, toast or crackers, applesauce, and foods high in vitamin C and zinc.",
    lifestyle: "Stay home and rest, avoid close contact with others, cover coughs and sneezes, and wash hands frequently."
  },
  {
    id: 3,
    name: "COVID-19",
    description: "A respiratory illness caused by the SARS-CoV-2 virus, affecting various body systems.",
    symptoms: [1, 2, 3, 4, 5, 6, 7, 8, 11, 12, 14, 15],
    probability_weight: 0.75,
    treatment: "Supportive care, rest, fluids, and in severe cases, hospitalization and specific treatments like antivirals.",
    diet: "Well-balanced diet rich in fruits, vegetables, lean proteins, and whole grains. Stay well-hydrated.",
    lifestyle: "Isolate from others, rest, monitor symptoms, seek medical care if symptoms worsen, and follow public health guidelines."
  },
  {
    id: 4,
    name: "Pneumonia",
    description: "An infection that inflames the air sacs in one or both lungs, which may fill with fluid.",
    symptoms: [1, 2, 3, 4, 9, 18, 89],
    probability_weight: 0.6,
    treatment: "Antibiotics for bacterial pneumonia, antiviral medications for viral pneumonia, cough medicine, pain relievers, and plenty of rest.",
    diet: "High-calorie, protein-rich foods, plenty of fluids, and foods rich in vitamins A, C, and E.",
    lifestyle: "Rest, avoid smoking, use a humidifier, and practice good hand hygiene."
  },
  {
    id: 5,
    name: "Bronchitis",
    description: "Inflammation of the lining of the bronchial tubes, which carry air to and from the lungs.",
    symptoms: [2, 3, 4, 9, 58, 59],
    probability_weight: 0.65,
    treatment: "Rest, plenty of fluids, over-the-counter pain relievers, cough medicine, and in some cases, antibiotics.",
    diet: "Warm liquids, soups, herbal teas, and foods rich in vitamins A and C.",
    lifestyle: "Avoid smoke and air pollution, use a humidifier, and get plenty of rest."
  },
  {
    id: 6,
    name: "Asthma",
    description: "A condition in which airways narrow and swell and produce extra mucus, making it difficult to breathe.",
    symptoms: [4, 9, 57, 58],
    probability_weight: 0.7,
    treatment: "Inhalers (bronchodilators and corticosteroids), oral medications, and biologics in severe cases.",
    diet: "Anti-inflammatory foods like fruits, vegetables, and omega-3 fatty acids. Avoid known trigger foods.",
    lifestyle: "Identify and avoid triggers, maintain a clean living environment, exercise regularly as tolerated, and follow an asthma action plan."
  },
  {
    id: 7,
    name: "Gastroenteritis",
    description: "Inflammation of the stomach and intestines, typically resulting from bacterial or viral infections.",
    symptoms: [1, 3, 10, 11, 12, 13],
    probability_weight: 0.75,
    treatment: "Oral rehydration solutions, rest, and in some cases, antibiotics.",
    diet: "Clear liquids, broths, rice, bananas, toast, and applesauce. Avoid dairy, fatty, and spicy foods.",
    lifestyle: "Rest, stay hydrated, practice good hand hygiene, and avoid preparing food for others while sick."
  },
  {
    id: 8,
    name: "Urinary Tract Infection (UTI)",
    description: "An infection in any part of the urinary system, including the kidneys, bladder, ureters, and urethra.",
    symptoms: [1, 32, 33, 85, 87],
    probability_weight: 0.8,
    treatment: "Antibiotics, pain relievers, and plenty of fluids.",
    diet: "Plenty of water, cranberry juice, and foods rich in vitamin C. Avoid alcohol, caffeine, and spicy foods.",
    lifestyle: "Practice good hygiene, urinate after sexual activity, wear loose cotton clothing, and stay hydrated."
  },
  {
    id: 9,
    name: "Diabetes Mellitus",
    description: "A group of diseases that result in too much sugar in the blood (high blood glucose).",
    symptoms: [3, 28, 29, 31, 32, 39, 40, 84],
    probability_weight: 0.65,
    treatment: "Insulin therapy, oral medications, regular blood sugar monitoring, and lifestyle changes.",
    diet: "Low in added sugars and refined carbs, high in fiber, lean proteins, and healthy fats. Regular meal timing is important.",
    lifestyle: "Regular physical activity, weight management, stress reduction, regular check-ups, and blood sugar monitoring."
  },
  {
    id: 10,
    name: "Hypertension (High Blood Pressure)",
    description: "A common condition in which the long-term force of the blood against your artery walls is high enough that it may eventually cause health problems.",
    symptoms: [5, 20, 72, 91],
    probability_weight: 0.7,
    treatment: "Antihypertensive medications, lifestyle changes, and regular blood pressure monitoring.",
    diet: "Low in sodium and saturated fats, rich in fruits, vegetables, whole grains, lean proteins, and foods high in potassium, magnesium, and calcium (DASH diet).",
    lifestyle: "Regular physical activity, weight management, stress reduction, limited alcohol consumption, and no smoking."
  },
  {
    id: 11,
    name: "Migraine",
    description: "A headache of varying intensity, often accompanied by nausea and sensitivity to light and sound.",
    symptoms: [5, 12, 20, 23, 74, 75],
    probability_weight: 0.75,
    treatment: "Pain relievers, triptans, anti-nausea medications, and preventive medications.",
    diet: "Regular meals, adequate hydration, and identifying and avoiding trigger foods like aged cheeses, red wine, and processed foods.",
    lifestyle: "Regular sleep schedule, stress management, regular exercise, and avoiding known triggers."
  },
  {
    id: 12,
    name: "Sinusitis",
    description: "Inflammation of the sinuses, which are air-filled spaces in the skull.",
    symptoms: [5, 7, 8, 26, 27, 59],
    probability_weight: 0.7,
    treatment: "Nasal decongestants, pain relievers, nasal steroids, and in some cases, antibiotics.",
    diet: "Warm fluids, spicy foods to help clear sinuses, and foods rich in vitamin C and antioxidants.",
    lifestyle: "Use a humidifier, apply warm compresses to the face, avoid allergens, and practice good hand hygiene."
  },
  {
    id: 13,
    name: "Otitis Media (Middle Ear Infection)",
    description: "Inflammation and infection of the middle ear.",
    symptoms: [1, 25, 91],
    probability_weight: 0.8,
    treatment: "Antibiotics, pain relievers, and in chronic cases, tubes to drain the ear.",
    diet: "Well-balanced diet rich in fruits, vegetables, and lean proteins.",
    lifestyle: "Avoid smoking, practice good hand hygiene, breastfeed infants when possible, and avoid bottle feeding while lying down."
  },
  {
    id: 14,
    name: "Gastroesophageal Reflux Disease (GERD)",
    description: "A digestive disorder that affects the lower esophageal sphincter, the ring of muscle between the esophagus and stomach.",
    symptoms: [9, 12, 36, 37],
    probability_weight: 0.75,
    treatment: "Antacids, H2 blockers, proton pump inhibitors, and in severe cases, surgery.",
    diet: "Avoid trigger foods like spicy, fatty, or acidic foods, chocolate, coffee, and alcohol. Eat smaller, more frequent meals.",
    lifestyle: "Maintain a healthy weight, avoid lying down after eating, elevate the head of the bed, and avoid tight-fitting clothing."
  },
  {
    id: 15,
    name: "Irritable Bowel Syndrome (IBS)",
    description: "A common disorder that affects the large intestine, causing abdominal pain, bloating, gas, and diarrhea or constipation, or both.",
    symptoms: [10, 11, 35],
    probability_weight: 0.7,
    treatment: "Dietary changes, medications to control symptoms, stress management, and probiotics.",
    diet: "Low-FODMAP diet, adequate fiber, regular meals, and avoiding trigger foods like fatty foods, beans, and carbonated drinks.",
    lifestyle: "Regular exercise, stress management, adequate sleep, and avoiding known triggers."
  },
  {
    id: 16,
    name: "Osteoarthritis",
    description: "A type of arthritis that occurs when the protective cartilage that cushions the ends of your bones wears down over time.",
    symptoms: [17, 19, 38, 56, 79],
    probability_weight: 0.65,
    treatment: "Pain relievers, anti-inflammatory drugs, physical therapy, and in severe cases, surgery.",
    diet: "Anti-inflammatory foods like fish, nuts, fruits, vegetables, and olive oil. Maintain a healthy weight.",
    lifestyle: "Regular low-impact exercise, weight management, physical therapy, and use of assistive devices when needed."
  },
  {
    id: 17,
    name: "Rheumatoid Arthritis",
    description: "A chronic inflammatory disorder affecting many joints, including those in the hands and feet.",
    symptoms: [3, 17, 38, 39, 40, 65, 81],
    probability_weight: 0.6,
    treatment: "Disease-modifying antirheumatic drugs (DMARDs), biologics, and anti-inflammatory drugs.",
    diet: "Anti-inflammatory foods like fish, nuts, fruits, vegetables, and olive oil. Avoid processed foods, red meat, and high-fat dairy.",
    lifestyle: "Regular exercise, joint protection, heat and cold therapy, and stress management."
  },
  {
    id: 18,
    name: "Hypothyroidism",
    description: "A condition in which the thyroid gland doesn't produce enough thyroid hormone.",
    symptoms: [3, 29, 39, 47, 48, 49, 50, 68, 82],
    probability_weight: 0.7,
    treatment: "Synthetic thyroid hormone replacement therapy.",
    diet: "Well-balanced diet rich in iodine, selenium, and zinc. Limit goitrogenic foods like soy and certain cruciferous vegetables.",
    lifestyle: "Regular exercise, stress management, and consistent medication schedule."
  },
  {
    id: 19,
    name: "Hyperthyroidism",
    description: "A condition in which the thyroid gland produces too much thyroid hormone.",
    symptoms: [3, 20, 28, 29, 31, 47, 51, 52, 70],
    probability_weight: 0.65,
    treatment: "Anti-thyroid medications, radioactive iodine therapy, and in some cases, surgery.",
    diet: "Well-balanced diet, limit iodine-rich foods, and ensure adequate calcium and vitamin D.",
    lifestyle: "Regular exercise, stress management, and avoid excessive heat."
  },
  {
    id: 20,
    name: "Depression",
    description: "A mood disorder that causes a persistent feeling of sadness and loss of interest.",
    symptoms: [3, 28, 29, 42, 43, 44, 46],
    probability_weight: 0.7,
    treatment: "Antidepressant medications, psychotherapy, and in severe cases, electroconvulsive therapy.",
    diet: "Well-balanced diet rich in omega-3 fatty acids, complex carbohydrates, lean proteins, and antioxidants.",
    lifestyle: "Regular exercise, adequate sleep, stress management, social support, and avoiding alcohol and recreational drugs."
  },
  {
    id: 21,
    name: "Anxiety Disorders",
    description: "A group of mental disorders characterized by significant feelings of anxiety and fear.",
    symptoms: [5, 20, 42, 43, 45, 46, 52, 100],
    probability_weight: 0.75,
    treatment: "Anti-anxiety medications, antidepressants, psychotherapy, and cognitive-behavioral therapy.",
    diet: "Well-balanced diet, limit caffeine and alcohol, and stay hydrated.",
    lifestyle: "Regular exercise, adequate sleep, stress management techniques like meditation and deep breathing, and social support."
  },
  {
    id: 22,
    name: "Alzheimer's Disease",
    description: "A progressive disorder that causes brain cells to degenerate and die.",
    symptoms: [22, 41, 42, 99],
    probability_weight: 0.5,
    treatment: "Medications to temporarily improve symptoms, and supportive care.",
    diet: "Mediterranean diet rich in fruits, vegetables, whole grains, fish, and olive oil.",
    lifestyle: "Mental stimulation, regular exercise, social engagement, stress management, and adequate sleep."
  },
  {
    id: 23,
    name: "Parkinson's Disease",
    description: "A progressive nervous system disorder that affects movement.",
    symptoms: [22, 55, 77, 78, 79, 80, 81],
    probability_weight: 0.5,
    treatment: "Medications to increase dopamine in the brain, deep brain stimulation, and physical therapy.",
    diet: "Well-balanced diet rich in antioxidants, fiber, and omega-3 fatty acids.",
    lifestyle: "Regular exercise, physical therapy, occupational therapy, and adequate rest."
  },
  {
    id: 24,
    name: "Multiple Sclerosis",
    description: "A disease in which the immune system eats away at the protective covering of nerves.",
    symptoms: [3, 20, 23, 39, 40, 79, 80, 81],
    probability_weight: 0.5,
    treatment: "Medications to modify the course of the disease, treat relapses, and manage symptoms.",
    diet: "Well-balanced diet low in saturated fat and high in fruits, vegetables, and whole grains.",
    lifestyle: "Regular exercise, stress management, adequate rest, and avoiding extreme heat."
  },
  {
    id: 25,
    name: "Anemia",
    description: "A condition in which you lack enough healthy red blood cells to carry adequate oxygen to your body's tissues.",
    symptoms: [3, 20, 29, 52, 68, 81, 91],
    probability_weight: 0.7,
    treatment: "Iron supplements, vitamin B-12 injections, and in severe cases, blood transfusions or bone marrow transplant.",
    diet: "Iron-rich foods like lean red meat, beans, and leafy greens, and foods high in vitamin B-12 and folate.",
    lifestyle: "Regular exercise as tolerated, adequate rest, and avoiding excessive alcohol consumption."
  },
  {
    id: 26,
    name: "Celiac Disease",
    description: "An immune reaction to eating gluten, a protein found in wheat, barley, and rye.",
    symptoms: [3, 10, 11, 12, 28, 29, 86],
    probability_weight: 0.6,
    treatment: "Strict gluten-free diet.",
    diet: "Gluten-free foods like rice, corn, potatoes, fruits, vegetables, and lean proteins.",
    lifestyle: "Reading food labels carefully, avoiding cross-contamination, and regular check-ups to monitor nutritional status."
  },
  {
    id: 27,
    name: "Crohn's Disease",
    description: "An inflammatory bowel disease that causes inflammation of the digestive tract, which can lead to abdominal pain, severe diarrhea, fatigue, weight loss, and malnutrition.",
    symptoms: [3, 10, 11, 12, 13, 28, 29, 34],
    probability_weight: 0.55,
    treatment: "Anti-inflammatory drugs, immune system suppressors, antibiotics, and in severe cases, surgery.",
    diet: "Low-fiber diet during flares, well-balanced diet in remission, and adequate hydration.",
    lifestyle: "Regular exercise, stress management, avoiding smoking, and adequate rest."
  },
  {
    id: 28,
    name: "Ulcerative Colitis",
    description: "An inflammatory bowel disease that causes long-lasting inflammation and ulcers in the digestive tract.",
    symptoms: [10, 11, 12, 13, 28, 29, 34],
    probability_weight: 0.55,
    treatment: "Anti-inflammatory drugs, immune system suppressors, and in severe cases, surgery.",
    diet: "Low-fiber diet during flares, well-balanced diet in remission, and adequate hydration.",
    lifestyle: "Regular exercise, stress management, avoiding smoking, and adequate rest."
  },
  {
    id: 29,
    name: "Kidney Disease",
    description: "A condition that impairs the kidneys' ability to filter blood, leading to build-up of waste and fluid in the body.",
    symptoms: [3, 29, 31, 32, 33, 51, 53, 54, 84, 86, 87, 88],
    probability_weight: 0.5,
    treatment: "Medications to control underlying causes, dialysis, and in severe cases, kidney transplant.",
    diet: "Low in sodium, potassium, and phosphorus, with controlled protein intake.",
    lifestyle: "Regular exercise, avoiding smoking and excessive alcohol, and careful management of underlying conditions like diabetes and hypertension."
  },
  {
    id: 30,
    name: "Liver Disease",
    description: "Any disorder that affects the liver, impairing its function.",
    symptoms: [3, 10, 12, 13, 28, 29, 35, 67, 86],
    probability_weight: 0.5,
    treatment: "Depends on the cause, may include medications, lifestyle changes, and in severe cases, liver transplant.",
    diet: "Low in salt and fat, high in fiber, adequate protein, and no alcohol.",
    lifestyle: "Avoiding alcohol and recreational drugs, regular exercise, weight management, and vaccination against hepatitis."
  },
  {
    id: 31,
    name: "Heart Failure",
    description: "A condition in which the heart can't pump blood as well as it should.",
    symptoms: [3, 4, 9, 20, 30, 52, 53, 54, 57, 71],
    probability_weight: 0.5,
    treatment: "Medications to improve heart function, lifestyle changes, and in severe cases, surgery or heart transplant.",
    diet: "Low in sodium and saturated fat, rich in fruits, vegetables, whole grains, and lean proteins.",
    lifestyle: "Regular physical activity as tolerated, weight management, stress reduction, limited alcohol consumption, and no smoking."
  },
  {
    id: 32,
    name: "Coronary Artery Disease",
    description: "A type of heart disease where major blood vessels that supply your heart become damaged or diseased.",
    symptoms: [3, 4, 9, 20, 52, 70, 72],
    probability_weight: 0.6,
    treatment: "Medications to control symptoms and risk factors, angioplasty, stents, and in severe cases, bypass surgery.",
    diet: "Low in saturated fat, trans fat, and sodium, rich in fruits, vegetables, whole grains, and lean proteins.",
    lifestyle: "Regular physical activity, weight management, stress reduction, limited alcohol consumption, and no smoking."
  },
  {
    id: 33,
    name: "Stroke",
    description: "A medical emergency where blood flow to the brain is interrupted, causing brain cells to die.",
    symptoms: [20, 22, 23, 39, 40, 77, 78, 79, 80, 81, 83],
    probability_weight: 0.4,
    treatment: "Depends on the type of stroke, may include clot-busting drugs, blood thinners, and rehabilitation.",
    diet: "Low in sodium and saturated fat, rich in fruits, vegetables, whole grains, and lean proteins (DASH or Mediterranean diet).",
    lifestyle: "Regular physical activity, weight management, stress reduction, limited alcohol consumption, and no smoking."
  },
  {
    id: 34,
    name: "Lung Cancer",
    description: "A type of cancer that begins in the lungs and can spread to other parts of the body.",
    symptoms: [2, 3, 4, 9, 13, 28, 29, 58, 89],
    probability_weight: 0.4,
    treatment: "Surgery, chemotherapy, radiation therapy, targeted drug therapy, and immunotherapy.",
    diet: "Well-balanced diet rich in fruits, vegetables, whole grains, and lean proteins.",
    lifestyle: "Avoiding smoking and secondhand smoke, avoiding exposure to carcinogens, and regular check-ups."
  },
  {
    id: 35,
    name: "Breast Cancer",
    description: "A type of cancer that forms in the cells of the breasts.",
    symptoms: [65, 66],
    probability_weight: 0.55,
    treatment: "Surgery, chemotherapy, radiation therapy, hormone therapy, and targeted drug therapy.",
    diet: "Low in saturated fat, high in fruits, vegetables, whole grains, and lean proteins.",
    lifestyle: "Regular physical activity, weight management, limited alcohol consumption, and no hormone replacement therapy."
  },
  {
    id: 36,
    name: "Prostate Cancer",
    description: "A type of cancer that forms in the prostate gland in men.",
    symptoms: [32, 85, 93],
    probability_weight: 0.55,
    treatment: "Surgery, radiation therapy, hormone therapy, and chemotherapy.",
    diet: "Low in saturated fat, high in fruits, vegetables, whole grains, and lean proteins.",
    lifestyle: "Regular physical activity, weight management, and regular check-ups."
  },
  {
    id: 37,
    name: "Colorectal Cancer",
    description: "A type of cancer that starts in the colon or rectum.",
    symptoms: [10, 11, 28, 29, 34, 35],
    probability_weight: 0.5,
    treatment: "Surgery, chemotherapy, radiation therapy, and targeted drug therapy.",
    diet: "Low in red and processed meat, high in fruits, vegetables, whole grains, and lean proteins.",
    lifestyle: "Regular physical activity, weight management, limited alcohol consumption, no smoking, and regular screenings."
  },
  {
    id: 38,
    name: "Skin Cancer",
    description: "A type of cancer that begins in the cells of the skin.",
    symptoms: [16, 63, 64],
    probability_weight: 0.7,
    treatment: "Surgery, radiation therapy, chemotherapy, photodynamic therapy, and biological therapy.",
    diet: "Well-balanced diet rich in antioxidants and foods high in vitamin D.",
    lifestyle: "Protecting skin from UV radiation, avoiding tanning beds, regular skin self-examinations, and regular check-ups with a dermatologist."
  },
  {
    id: 39,
    name: "Thyroid Cancer",
    description: "A type of cancer that forms in the thyroid gland.",
    symptoms: [37, 56, 65],
    probability_weight: 0.6,
    treatment: "Surgery, radioactive iodine therapy, external beam radiation, and targeted drug therapy.",
    diet: "Well-balanced diet, adequate iodine, and follow specific guidelines if undergoing radioactive iodine therapy.",
    lifestyle: "Regular check-ups, neck self-examinations, and maintaining a healthy weight."
  },
  {
    id: 40,
    name: "Leukemia",
    description: "A group of cancers that usually begin in the bone marrow and result in high numbers of abnormal white blood cells.",
    symptoms: [3, 21, 28, 29, 30, 66, 68],
    probability_weight: 0.4,
    treatment: "Chemotherapy, targeted therapy, radiation therapy, stem cell transplant, and immunotherapy.",
    diet: "Well-balanced diet rich in fruits, vegetables, whole grains, and lean proteins. Strict food safety guidelines during treatment.",
    lifestyle: "Regular physical activity as tolerated, adequate rest, infection prevention, and regular check-ups."
  },
  {
    id: 41,
    name: "Lymphoma",
    description: "A group of blood cancers that develop from lymphocytes (a type of white blood cell).",
    symptoms: [3, 21, 28, 29, 30, 66],
    probability_weight: 0.45,
    treatment: "Chemotherapy, radiation therapy, immunotherapy, targeted therapy, and stem cell transplant.",
    diet: "Well-balanced diet rich in fruits, vegetables, whole grains, and lean proteins. Strict food safety guidelines during treatment.",
    lifestyle: "Regular physical activity as tolerated, adequate rest, infection prevention, and regular check-ups."
  },
  {
    id: 42,
    name: "Epilepsy",
    description: "A central nervous system disorder in which brain activity becomes abnormal, causing seizures or periods of unusual behavior, sensations, and sometimes loss of awareness.",
    symptoms: [22, 41, 90, 91],
    probability_weight: 0.6,
    treatment: "Antiepileptic medications, surgery, vagus nerve stimulation, and ketogenic diet.",
    diet: "Well-balanced diet, ketogenic diet in some cases, and avoiding trigger foods.",
    lifestyle: "Regular sleep schedule, stress management, avoiding alcohol and recreational drugs, and safety precautions to prevent injury during seizures."
  },
  {
    id: 43,
    name: "Schizophrenia",
    description: "A chronic brain disorder that affects less than one percent of the U.S. population.",
    symptoms: [22, 42, 95, 96, 97],
    probability_weight: 0.4,
    treatment: "Antipsychotic medications, psychosocial therapies, and supportive care.",
    diet: "Well-balanced diet rich in omega-3 fatty acids, antioxidants, and B vitamins.",
    lifestyle: "Regular exercise, adequate sleep, stress management, avoiding alcohol and recreational drugs, and social support."
  },
  {
    id: 44,
    name: "Bipolar Disorder",
    description: "A mental disorder that causes unusual shifts in mood, energy, activity levels, concentration, and the ability to carry out day-to-day tasks.",
    symptoms: [22, 42, 43, 44, 45, 46, 98],
    probability_weight: 0.55,
    treatment: "Mood stabilizers, antipsychotics, antidepressants, and psychotherapy.",
    diet: "Well-balanced diet, regular meal timing, and limiting caffeine and alcohol.",
    lifestyle: "Regular sleep schedule, stress management, regular exercise, avoiding alcohol and recreational drugs, and social support."
  },
  {
    id: 45,
    name: "Attention Deficit Hyperactivity Disorder (ADHD)",
    description: "A chronic condition including attention difficulty, hyperactivity, and impulsiveness.",
    symptoms: [41, 43, 99, 100],
    probability_weight: 0.7,
    treatment: "Stimulant and non-stimulant medications, behavioral therapy, and educational support.",
    diet: "Well-balanced diet, regular meal timing, and limiting sugar and artificial additives.",
    lifestyle: "Regular exercise, adequate sleep, stress management, organizational strategies, and educational accommodations."
  },
  {
    id: 46,
    name: "Autism Spectrum Disorder",
    description: "A developmental disorder that affects communication and behavior.",
    symptoms: [41, 42, 76, 99],
    probability_weight: 0.6,
    treatment: "Behavioral therapies, educational support, and medications for specific symptoms.",
    diet: "Well-balanced diet, addressing specific sensory preferences, and in some cases, special diets under medical supervision.",
    lifestyle: "Structured routine, sensory-friendly environment, social skills training, and support for families."
  },
  {
    id: 47,
    name: "Obsessive-Compulsive Disorder (OCD)",
    description: "A disorder in which a person has uncontrollable, reoccurring thoughts (obsessions) and/or behaviors (compulsions) that he or she feels the urge to repeat over and over.",
    symptoms: [42, 43, 45, 96, 97, 99],
    probability_weight: 0.6,
    treatment: "Cognitive-behavioral therapy, particularly exposure and response prevention, and medications like SSRIs.",
    diet: "Well-balanced diet and avoiding excessive caffeine.",
    lifestyle: "Regular exercise, adequate sleep, stress management, and social support."
  },
  {
    id: 48,
    name: "Post-Traumatic Stress Disorder (PTSD)",
    description: "A condition that may develop after a person experiences or witnesses a traumatic event.",
    symptoms: [42, 43, 44, 45, 46, 95, 96, 98],
    probability_weight: 0.55,
    treatment: "Psychotherapy, particularly trauma-focused cognitive-behavioral therapy, and medications.",
    diet: "Well-balanced diet, limiting caffeine and alcohol.",
    lifestyle: "Regular exercise, adequate sleep, stress management, avoiding triggers, and social support."
  },
  {
    id: 49,
    name: "Eating Disorders",
    description: "A group of conditions marked by an unhealthy relationship with food.",
    symptoms: [28, 29, 42, 43, 44, 45],
    probability_weight: 0.55,
    treatment: "Nutritional counseling, psychotherapy, and in severe cases, hospitalization.",
    diet: "Supervised meal plans designed by healthcare professionals.",
    lifestyle: "Regular therapy sessions, avoiding triggers, building a positive body image, and social support."
  },
  {
    id: 50,
    name: "Substance Use Disorders",
    description: "A condition in which there is uncontrolled use of a substance despite harmful consequences.",
    symptoms: [3, 22, 28, 29, 42, 43, 44, 45, 46],
    probability_weight: 0.5,
    treatment: "Detoxification, behavioral therapies, medications, and support groups.",
    diet: "Well-balanced diet to address nutritional deficiencies, and adequate hydration.",
    lifestyle: "Avoiding triggers, building a supportive network, finding healthy coping mechanisms, and regular therapy sessions."
  }
];
