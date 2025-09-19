---
title: Amazon Search increased by 10%  adds 2 seconds to load time.
date: 2025-08-20
author: Vishal Kumar Subramanian
tags: [Product Analytical, Product Execution]
readTime:  7 min read 
type:    Product Management   
subType: 'Analytical'
excerpt: Amazon Search increased by 10%  adds 2 seconds to load time.
published: true
featured: false
---

## Clarifying Questions and Assumptions 
             1. By Amazon search  do you mean the search feature in Amazon shopping? - Yes  
             2. Is this happening globally or in a specific region? - Globally  
             3. Is this happenning in all platforms? - Yes  all platforms  
             4. Is this happening all of a sudden or is it a gradual increase? - The moment this feature
            was launched  the load time increased by 2 seconds  
             5. What is the current load time? - 1 second  
             6. Is there any other business metric affected due to this? - Yes  customers are leaving the site more often  

## Rephrased Question  
             Amazon Search increased by 10%  adds 2 seconds to load time for customers in the US across all platforms.  

             Interviewer says ok and asks to proceed with the solution  I would look at this problem 
             in different buckets to be able to think of root causes which may require some questions 
             answering which would help us land at the solution.  
           
## Solution  

             1. The 2 different buckets are Internal and External  
             2. Internal - This is something that we can control  like the product features  change in design  business logic  legal etc.  
             3. External - This is something that we cannot control  like the internet speed  device used location etc.  
             4. I would start with the External bucket and then move to the Internal bucket  
             5. External - I would look at the internet speed  device used  location etc. 
             and see if there is any correlation between the load time and these factors. -> No correlation found  
             6. External - I would look to see if there's any negative PR against us 
             any competitors launched any products that we don't have? -> No negative PR 
             no competitors launched any products that we don't have  
             7. As we don't have any correlation with the external factors  I would move
            to the Internal bucket  
             8. Internal - I would look at the product features - Did we make any design change
            that affects the search experience of the customers? -> No  
             9. Internal - I would look at the business logic - Did we change any business logic that
            affects the search experience of the customers? -> No  
             10. Internal - Do we see any increase suddenly in the number of customers 
             using the search feature? -> Yes  we see a 10% increase in the number of customers using the search feature  
             11. Internal - Are there any logs of customer issues reported because of this? - No  
             12. Internal - Is the engineering team aware of the sudden increase in the customer increase? - No  
             13. Internal - Since the engineering team is not aware and we see an increase in the number of customers 
             I see an issue regarding the data handling which could be related to this issue. So I would put a pin on that  
             14. Internal - I would look at the legal side of things - Did we change any legal that 
             affects the search experience of the customers? -> No  
            
## Conclusion
             I would work with the engineering team and take a look at it to see if there is any issue
            with the data handling that could be causing the increase in load time. If there is an issue 
            I would work with the engineering team to fix it and then monitor the load time to see if it improves.
            If it does not improve  I would look at other factors that could be causing the increase in load time.  
