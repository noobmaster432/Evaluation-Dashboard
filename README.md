
# Evaluation Dashboard App - Mentor View

## Description

The Evaluation Dashboard App is a mentor-view solution designed for the evaluation of students participating in a semester-long project at college. This application allows mentors to manage students, assign marks based on various parameters, edit or remove assigned students, and submit final evaluations.

## Requirements

- Each mentor can assign a minimum of 3 and a maximum of 4 students.
- No two mentors can assign the same student during the evaluation period.
- Mentors must assign marks to each student based on different parameters.
- Marks assigned to each student should be visible to the mentor.
- Mentors should be able to edit or remove assigned students and modify assigned marks.
- There should be a final submit functionality to lock the marks, making them uneditable.
- Mentors should be able to view all students and their assigned marks, with filters for students with and without assigned marks.
- Mentors should be able to download CSV of all the Students Data.

## Technologies Used

- **Frontend**: Next.js
- **Backend**: Express.js
- **Database**: MongoDB

## Screenshots

### Frontend UI

#### Mentor Selector Page
![select mentor](https://github.com/noobmaster432/Evaluation-Dashboard/assets/103204431/e018437a-814c-4bcc-94af-f3bd1fd5f147)

#### Assigned Students Data showcasing using Tables
![Assigned Students Data](https://github.com/noobmaster432/Evaluation-Dashboard/assets/103204431/129e120f-274a-4a52-9403-3c9479cc41f6)

#### Editing Assigned Student's marks
![Editing Assigned Student's marks](https://github.com/noobmaster432/Evaluation-Dashboard/assets/103204431/7d4745d8-27c1-4722-a2eb-aa0ef24d09fe)

#### Submitting Assigned Student Data
![Submitting Assigned Student Data](https://github.com/noobmaster432/Evaluation-Dashboard/assets/103204431/865718b2-a7c4-48ec-a129-5e4e9d941155)

#### Once submitted, Student's Data becomes immutable
![Submitted Data](https://github.com/noobmaster432/Evaluation-Dashboard/assets/103204431/89fba07d-55e7-4041-b835-51491ff48db3)

#### Unassigned Students
![UnAssigned Students](https://github.com/noobmaster432/Evaluation-Dashboard/assets/103204431/13306d5d-593c-41d5-84db-4f2cb2b6161a)

#### Assigning a student
![Assigning a student](https://github.com/noobmaster432/Evaluation-Dashboard/assets/103204431/1d840e47-3c86-4250-b86c-3cd7cac16d51)

### Some Postman API testing

#### Adding Mentor
![Adding Mentor](https://github.com/noobmaster432/Evaluation-Dashboard/assets/103204431/a2bb9bc1-8013-459f-8968-20b7d521e6f1)

#### Getting list of all mentors
![Getting list of all mentors](https://github.com/noobmaster432/Evaluation-Dashboard/assets/103204431/5d432cf2-e7d0-4e31-9fd0-3f9cd1169cd4)

#### Adding marks for student
![Adding marks for student](https://github.com/noobmaster432/Evaluation-Dashboard/assets/103204431/11424a5d-6d2f-492f-92db-5c2cddc9ec31)
