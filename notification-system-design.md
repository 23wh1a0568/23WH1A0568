# Notification System Design

Approach:
1. Fetch the notifications
2. Filter unread notifications
3. Calculate priority score
4. Sort notifications
5. Display top 10
6. Refresh every 30 seconds

Priority Algorithm:
priority score=(priority * 100)+(importance * 10)

Filtering is done in descending order
