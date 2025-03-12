**Software Module Specification: Point service and Scoreboard service**

## 1. Overview
The module is a backend application server module responsible for update user's score and scoreboard data.

## 2. Requirements
- Shows the top 10 user’s scores.
- Live update of the score board.
- User can do an action, completing this action will increase the user’s score by submit to server
- We want to prevent malicious users from increasing scores without authorisation.
## 3. Solution
To solve the requirements we need to build 2 services: 
- Scoreboard service:
  + Provide api to serve top 10 user’s scores: We can use Redis to cache top 10 score data
  + Notify to users when new scoreboard data is updated: We can use realtime lib like Socket.IO to trigger event when new data is updated.
  => To calculate top 10 user's scores, we can use Redis Sorted Set to manage scores and compare to current top 10 scores to detect that top 10 is changed. Check diagram "Diagram_store_user_scores_and_check_diff.png"
- Point service
  + Provide api to allow user to update score: When user submit data to system, we need to validate user 's point base on idenity and submited data. If user's action is on 3rd system, we need to validate with 3rd system. Check diagram "Diagram_user_submit_point.png"


