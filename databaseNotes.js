
/////Stab-It Rabbit Data Table////////
// Created tables in elephant sql browser
// Statements here for reference

/////////Events
// CREATE TABLE event (
//     name varchar NOT NULL,
//     event_id INT NOT null,
//     FOREIGN KEY (event_id)
//     REFERENCES events_list (id),
//     comment_id INT NOT null,
//     FOREIGN KEY (comment_id)
//     REFERENCES comments (id)
//     )
/////////Comments
//     CREATE TABLE comments (
//     id SERIAL PRIMARY KEY,
//     username VARCHAR NOT NULL,
//     event_id INT NOT NULL,
//     date_posted TIMESTAMP NOT NULL,
//     comment VARCHAR NOT NULL
//     )

/////////Participants
//     CREATE TABLE participants (
//     participant_id INT NOT NULL,
//     FOREIGN KEY (participant_id)
//     REFERENCES users (id),
//     event_id INT NOT NULL,
//     FOREIGN KEY (event_id)
//     REFERENCES events_list (id)
//     )

/////////Events List
// CREATE TABLE events_list (
//     id SERIAL PRIMARY KEY,
//     host VARCHAR NOT NULL,
//     title VARCHAR NOT NULL,
//     date DATE NOT NULL,
//     start_date VARCHAR NOT NULL,
//     end_date VARCHAR NOT NULL,
//     activity VARCHAR NOT NULL,
//     max_participants INT NOT NULL,
//     location VARCHAR NOT NULL
// )

/////////Users
//     CREATE TABLE users (
//     id SERIAL PRIMARY KEY,
//     first_name VARCHAR NOT NULL,
//     last_name VARCHAR NOT NULL,
//     user_name VARCHAR NOT NULL,
//     password VARCHAR NOT NULL,
//     zip INT,
//     profile_picture_url VARCHAR
//     );

/////////Sessions Table
//     CREATE TABLE sessions (
    //SSID session_id
//     session_id varchar PRIMARY KEY,
//     user_id INT NOT NULL,
//     FOREIGN KEY (user_id)
//     REFERENCES users (id)
//     );


/////////////**********/////////////Previous Database Notes////////////////**********////////////////
// USER TABLE

// CREATE TABLE users(
//     id SERIAL PRIMARY KEY,
//     full_name varchar,
//     user_name varchar NOT NULL,
//     password varchar NOT NULL,
//     zip int,
//     participant_id int,
//     hobby_id int,
//     profile_picture_id int
// );

//   INSERT INTO users(user_name, password, zip)
// VALUES('fake', null, 96813)


//   //HOBBY TABLE

//   //   Table hobby {
//   //     id int [pk, increment]
//   //     hobby varchar
//   //   }
  
//   CREATE TABLE hobby(
//     id SERIAL PRIMARY KEY,
//     hobby varchar,
// );

//   //PARTICPANTS TABLE
//   //Table participants as P {
//     //     id int [pk, increment] // primary key
//     //     name varchar
//     //   }

//     CREATE TABLE participants(
//     id SERIAL PRIMARY KEY,
//     name varchar
// );

//     //COMMENTS TABLE
//     //Table comments as C {
//       //     id int [pk, increment] // primary key
//       //     name varchar
//       //     start_date datetime
//       //     comment varchar
//       //   }

//       CREATE TABLE comments(
//     id SERIAL PRIMARY KEY,
//     user_name varchar,
//     time TIMESTAMP,
//     comment varchar
// );


// //   Table profile_picture {
// //     id int [pk, increment]
// //     picture varchar
// //   }

// //   Ref: U.hobby_id < hobby.id
// //   Ref: U.profile_picture_id - profile_picture.id
// //   Ref: U.user_name - comments.name

// // Table events as E {
// //     id int [pk, increment] // auto-increment
// //     title varchar
// //     start_date datetime
// //     end_date datetime
// //     activity_type varchar
// //     num_participants int [default: 1]
// //     zip int // inline relationship (many-to-one)
// //     participant_id int
// //     comment_id int
// //   }
  
// CREATE TABLE events(
//     id SERIAL PRIMARY KEY,
//     title varchar,
//     date DATE,
//     start_time TIME,
//     end_time TIME,
//     activity_type varchar,
//     num_participants int DEFAULT 1,
//     zip int,
//     participant_id int,
//     comment_id int
// )


// UPDATE events SET date = '2022-06-26', start_time = '010:00', end_time = '012:00', activity_type = 'Basketball', num_participants = 10, zip = 96813 WHERE id = 1

// //   Table participants as P {
// //     id int [pk, increment] // primary key
// //     name varchar
// //   }


// //   Ref: events.participant_id < participants.id
// //   Ref: U.participant_id > participants.id
// //   Ref: events.comment_id < comments.id


// //update event
// UPDATE events
//    SET num_participants = num_participants + 1
// WHERE id = 1;