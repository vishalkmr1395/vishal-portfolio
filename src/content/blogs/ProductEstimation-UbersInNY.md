---
title: Estimating the number of ubers in New York.
date: 2025-08-20
author: Vishal Kumar Subramanian
tags: [Product Analytical, Product Estimation]
readTime:  7 min read 
type:    "Product Management" 
subType: 'Analytical'
excerpt: Estimating the number of ubers in New York.
published: true
featured: false
---

## Clarifying Questions and Assumptions 
             1. What is the population of New York City? 8.5 million  
             2. Should the estimate be based on the number of people who book through uber app irrespective of the platform? Yes  
             3. Do we have to focus on any specific time period or is this on an average day? Average day   


## User Segmentation - 
    Based on Age (Since it is on an average day  age seems to be a good segmentation factor)  
             1. 0-18 years: 20% of the population - 0.20*8.5M = 1.7M  
             2. 19-35 years: 30% of the population - 0.30*8.5M = 2.55M  
             3. 36-50 years: 20% of the population - 0.20*8.5M = 1.7M  
             4. 51-60 years: 10% of the population - 0.10*8.5M = 0.85M  
             5. 60+ years: 20% of the population - 0.20*8.5M = 1.7M  

             Users who use uber app per day based on their age group  
             1. 0-18 years: 1% of the age group population - 0.01*1.7M = 17k (because they're not allowed to use uber on their own)  
             2. 19-35 years: 15% of the age group population - 0.15*2.55M = 382k  
             3. 36-50 years: 10% of the age group population - 0.10*1.7M = 170k  
             4. 51-60 years: 8% of the age group population - 0.08*0.85M = 68k (because they are more likely to prefer their cars)   
             5. 60+ years: 1% of the age group population - 0.01*1.7M = 17k  


## Wrapping up calculation 
             Summing up each user group gives us the total number of users who use uber app per day  
             1. 17k + 382k + 170k + 68k + 17k = 654k  
             The age groups  0-18 and 60+ years are likely to share the ride with someone accompanying them as opposed to the other 2 user age groups.  
             The college students and office workers that belong in the 19-50 category are likely to share  hence I am not taking the actual count and reducing a bit so that we don't over estimate the number of uber rides in a day.  
             382k + 170k = 552k ~20% can be cut from this due to the above reason - 552k * 0.8 = 441.6k   

            
## Conclusion
             Hence  the number of uber rides for 0-18 and 60+ age groups are around - 17k combined  
             The number of uber rides for 19-35 and 36-50 age groups are around - 461k  
             The number of uber rides in a day for the others - 17k + 461k + 68k = 546k  
             Hence  the total number of uber rides in a day in New York City is around 546k 
