const TEMP_POSTS = [
  {
    "postId": "34df28a7",
    "author": "Braden Buyers",
    "postTime": "08/05/2022",
    "body": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    "image": "https://picsum.photos/id/1/1024/1024",
    "likesCount": 73, "commentsCount": 45
  },
  {
    "postId": "72b38239",
    "author": "Aldin Thurlbeck",
    "postTime": "09/04/2022",
    "body": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    "image": "https://picsum.photos/id/2/1024/1024",
    "likesCount": 5, "commentsCount": 60
  },
  {
    "postId": "f8318e94",
    "author": "Isahella Conti",
    "postTime": "06/29/2022",
    "body": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    "image": "https://picsum.photos/id/3/1024/1024",
    "likesCount": 88, "commentsCount": 88
  },
  {
    "postId": "d8939942",
    "author": "Esdras Kimm",
    "postTime": "05/28/2022",
    "body": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    "image": "https://picsum.photos/id/4/1024/1024",
    "likesCount": 80, "commentsCount": 62
  },
  {
    "postId": "6bfeaccb",
    "author": "Perkin Knifton",
    "postTime": "09/10/2022",
    "body": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    "image": "https://picsum.photos/id/5/1024/1024",
    "likesCount": 53, "commentsCount": 51
  },
  {
    "postId": "c353b8ef",
    "author": "Averill Tulleth",
    "postTime": "12/17/2021",
    "body": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    "image": "https://picsum.photos/id/6/1024/1024",
    "likesCount": 64, "commentsCount": 3
  },
  {
    "postId": "fdef68d2",
    "author": "Aldin Cosens",
    "postTime": "08/02/2022",
    "body": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    "image": "https://picsum.photos/id/7/1024/1024",
    "likesCount": 24, "commentsCount": 87
  },
  {
    "postId": "9951b7e6",
    "author": "Fredra Oakton",
    "postTime": "10/18/2022",
    "body": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    "image": "https://picsum.photos/id/8/1024/1024",
    "likesCount": 82, "commentsCount": 54
  },
  {
    "postId": "b76dc643",
    "author": "Drusi Capper",
    "postTime": "02/17/2022",
    "body": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    "image": "https://picsum.photos/id/9/1024/1024",
    "likesCount": 49, "commentsCount": 13
  },
  {
    "postId": "8b2b19f3",
    "author": "Edan Yeeles",
    "postTime": "08/25/2022",
    "body": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    "image": "https://picsum.photos/id/10/1024/1024",
    "likesCount": 11, "commentsCount": 4
  },
  {
    "postId": "671927dd",
    "author": "Dniren Chadbourn",
    "postTime": "10/10/2022",
    "body": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    "image": "https://picsum.photos/id/11/1024/1024",
    "likesCount": 76, "commentsCount": 77
  },
  {
    "postId": "f49bab7b",
    "author": "Wiatt Whetland",
    "postTime": "02/11/2022",
    "body": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    "image": "https://picsum.photos/id/12/1024/1024",
    "likesCount": 88, "commentsCount": 4
  },
  {
    "postId": "733106d6",
    "author": "Aldin Collingworth",
    "postTime": "06/10/2022",
    "body": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    "image": "https://picsum.photos/id/13/1024/1024",
    "likesCount": 38, "commentsCount": 8
  },
  {
    "postId": "2985cdda",
    "author": "Lancelot Briatt",
    "postTime": "04/15/2022",
    "body": "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    "image": "https://picsum.photos/id/14/1024/1024",
    "likesCount": 94, "commentsCount": 91
  },
  {
    "postId": "8c1e4394",
    "author": "Chester Roubay",
    "postTime": "08/25/2022",
    "body": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    "image": "https://picsum.photos/id/15/1024/1024",
    "likesCount": 15, "commentsCount": 75
  },
  {
    "postId": "742ddde7",
    "author": "Stillmann Hucquart",
    "postTime": "02/17/2022",
    "body": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    "image": "https://picsum.photos/id/16/1024/1024",
    "likesCount": 9, "commentsCount": 89
  },
  {
    "postId": "47bc2521",
    "author": "Jackie Remirez",
    "postTime": "04/18/2022",
    "body": "In congue. Etiam justo. Aldin Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    "image": "https://picsum.photos/id/17/1024/1024",
    "likesCount": 54, "commentsCount": 55
  },
  {
    "postId": "f0fc1f57",
    "author": "Jo-anne Lanaway",
    "postTime": "06/01/2022",
    "body": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    "image": "https://picsum.photos/id/18/1024/1024",
    "likesCount": 85, "commentsCount": 8
  },
  {
    "postId": "1a4661cd",
    "author": "Cele Common",
    "postTime": "10/25/2022",
    "body": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    "image": "https://picsum.photos/id/19/1024/1024",
    "likesCount": 55, "commentsCount": 37
  },
  {
    "postId": "8dd7dfa6",
    "author": "Damian Haskey",
    "postTime": "07/05/2022",
    "body": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
    "image": "https://picsum.photos/id/20/1024/1024",
    "likesCount": 60, "commentsCount": 26
  },
  {
    "postId": "ab57cd37",
    "author": "Kori Brogioni",
    "postTime": "04/24/2022",
    "body": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    "image": "https://picsum.photos/id/21/1024/1024",
    "likesCount": 34, "commentsCount": 56
  },
  {
    "postId": "977cb4e0",
    "author": "Doria Elstob",
    "postTime": "02/03/2022",
    "body": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    "image": "https://picsum.photos/id/22/1024/1024",
    "likesCount": 2, "commentsCount": 49
  },
  {
    "postId": "e18b8b8b",
    "author": "Valli Coite",
    "postTime": "01/09/2022",
    "body": "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    "image": "https://picsum.photos/id/23/1024/1024",
    "likesCount": 53, "commentsCount": 99
  },
  {
    "postId": "d3a14d9a",
    "author": "Elbert Galiero",
    "postTime": "06/04/2022",
    "body": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    "image": "https://picsum.photos/id/24/1024/1024",
    "likesCount": 71, "commentsCount": 49
  },
  {
    "postId": "75d41c48",
    "author": "Merry Lynds",
    "postTime": "02/20/2022",
    "body": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    "image": "https://picsum.photos/id/25/1024/1024",
    "likesCount": 45, "commentsCount": 70
  },
  {
    "postId": "6b4f30c7",
    "author": "Marleah Staning",
    "postTime": "09/05/2022",
    "body": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    "image": "https://picsum.photos/id/26/1024/1024",
    "likesCount": 94, "commentsCount": 61
  },
  {
    "postId": "876dadee",
    "author": "Roxana Imlin",
    "postTime": "03/18/2022",
    "body": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    "image": "https://picsum.photos/id/27/1024/1024",
    "likesCount": 10, "commentsCount": 2
  },
  {
    "postId": "1d42b929",
    "author": "Margi Fennelly",
    "postTime": "10/20/2022",
    "body": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    "image": "https://picsum.photos/id/28/1024/1024",
    "likesCount": 1, "commentsCount": 68
  },
  {
    "postId": "e925db47",
    "author": "Parsifal Kemston",
    "postTime": "12/24/2021",
    "body": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    "image": "https://picsum.photos/id/29/1024/1024",
    "likesCount": 48, "commentsCount": 83
  },
  {
    "postId": "c0046837",
    "author": "Kellen Lumsdaine",
    "postTime": "03/06/2022",
    "body": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    "image": "https://picsum.photos/id/30/1024/1024",
    "likesCount": 38, "commentsCount": 58
  },
  {
    "postId": "e4b9b205",
    "author": "Ana Bierman",
    "postTime": "01/11/2022",
    "body": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    "image": "https://picsum.photos/id/31/1024/1024",
    "likesCount": 15, "commentsCount": 57
  },
  {
    "postId": "bc1c9989",
    "author": "Carling Kealy",
    "postTime": "01/29/2022",
    "body": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    "image": "https://picsum.photos/id/32/1024/1024",
    "likesCount": 95, "commentsCount": 39
  },
  {
    "postId": "65885c21",
    "author": "Isaiah Peirpoint",
    "postTime": "05/15/2022",
    "body": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    "image": "https://picsum.photos/id/33/1024/1024",
    "likesCount": 67, "commentsCount": 92
  },
  {
    "postId": "fd12e73e",
    "author": "Jamesy Grouen",
    "postTime": "09/01/2022",
    "body": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    "image": "https://picsum.photos/id/34/1024/1024",
    "likesCount": 27, "commentsCount": 64
  },
  {
    "postId": "ab8e1c63",
    "author": "Axel Stuchberry",
    "postTime": "06/16/2022",
    "body": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    "image": "https://picsum.photos/id/35/1024/1024",
    "likesCount": 57, "commentsCount": 31
  },
  {
    "postId": "85796ae5",
    "author": "Nikki Varne",
    "postTime": "09/08/2022",
    "body": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    "image": "https://picsum.photos/id/36/1024/1024",
    "likesCount": 51, "commentsCount": 36
  },
  {
    "postId": "8caaa747",
    "author": "Shane Sinclar",
    "postTime": "11/26/2021",
    "body": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    "image": "https://picsum.photos/id/37/1024/1024",
    "likesCount": 20, "commentsCount": 75
  },
  {
    "postId": "7541c720",
    "author": "Guinevere Ubsdall",
    "postTime": "09/30/2022",
    "body": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    "image": "https://picsum.photos/id/38/1024/1024",
    "likesCount": 22, "commentsCount": 8
  },
  {
    "postId": "d150a6b5",
    "author": "Allyn Paulley",
    "postTime": "09/01/2022",
    "body": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    "image": "https://picsum.photos/id/39/1024/1024",
    "likesCount": 83, "commentsCount": 15
  },
  {
    "postId": "39bbe2fb",
    "author": "Carrie Wellman",
    "postTime": "06/26/2022",
    "body": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    "image": "https://picsum.photos/id/40/1024/1024",
    "likesCount": 56, "commentsCount": 40
  },
  {
    "postId": "d8d61ed6",
    "author": "Laure D'Orsay",
    "postTime": "08/24/2022",
    "body": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    "image": "https://picsum.photos/id/41/1024/1024",
    "likesCount": 33, "commentsCount": 9
  },
  {
    "postId": "c64c2bc2",
    "author": "Rosetta Ailsbury",
    "postTime": "07/13/2022",
    "body": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    "image": "https://picsum.photos/id/42/1024/1024",
    "likesCount": 98, "commentsCount": 28
  },
  {
    "postId": "963490f9",
    "author": "Talyah Croughan",
    "postTime": "03/05/2022",
    "body": "Fusce consequat. Nulla nisl. Nunc nisl.",
    "image": "https://picsum.photos/id/43/1024/1024",
    "likesCount": 93, "commentsCount": 6
  },
  {
    "postId": "33e5a959",
    "author": "Koralle Sayes",
    "postTime": "05/05/2022",
    "body": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    "image": "https://picsum.photos/id/44/1024/1024",
    "likesCount": 3, "commentsCount": 99
  },
  {
    "postId": "4c614f7c",
    "author": "Marlon Conre",
    "postTime": "06/03/2022",
    "body": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    "image": "https://picsum.photos/id/45/1024/1024",
    "likesCount": 58, "commentsCount": 58
  },
  {
    "postId": "51364a18",
    "author": "Devin Jeays",
    "postTime": "09/25/2022",
    "body": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    "image": "https://picsum.photos/id/46/1024/1024",
    "likesCount": 54, "commentsCount": 14
  },
  {
    "postId": "90591e0b",
    "author": "Max Caile",
    "postTime": "02/16/2022",
    "body": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    "image": "https://picsum.photos/id/47/1024/1024",
    "likesCount": 92, "commentsCount": 97
  },
  {
    "postId": "abd5faf7",
    "author": "Camellia Rebeiro",
    "postTime": "04/25/2022",
    "body": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    "image": "https://picsum.photos/id/48/1024/1024",
    "likesCount": 15, "commentsCount": 53
  },
  {
    "postId": "b4e87994",
    "author": "Maggee Kibbel",
    "postTime": "04/28/2022",
    "body": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    "image": "https://picsum.photos/id/49/1024/1024",
    "likesCount": 60, "commentsCount": 18
  },
  {
    "postId": "e63c9a42",
    "author": "Miguel Impy",
    "postTime": "10/05/2022",
    "body": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    "image": "https://picsum.photos/id/50/1024/1024",
    "likesCount": 38, "commentsCount": 47
  }];

const TEMP_USERS = [{
  "id": 1,
  "fullName": "Sophia Minillo",
  "gender": "Female",
  "email": "admin@vsn.com",
  "password": "123456",
  "role": "admin",
  "imageURL": null
}, {
  "id": 2,
  "fullName": "Brennan Wittrington",
  "gender": "Male",
  "email": "user1@vsn.com",
  "password": "123456",
  "role": "user",
  "imageURL": null
}, {
  "id": 3,
  "fullName": "Johnathon Pashen",
  "gender": "Male",
  "email": "user2@vsn.com",
  "password": "123456",
  "role": "user",
  "imageURL": null
}, {
  "id": 4,
  "fullName": "Schuyler Meineken",
  "gender": "Male",
  "email": "smeineken3@walmart.com",
  "password": "123456",
  "role": "user",
  "imageURL": null
}, {
  "id": 5,
  "fullName": "Anatole Hawkslee",
  "gender": "Male",
  "email": "ahawkslee4@blogspot.com",
  "password": "123456",
  "role": "user",
  "imageURL": null
}, {
  "id": 6,
  "fullName": "Gonzales Saltrese",
  "gender": "Male",
  "email": "gsaltrese5@biblegateway.com",
  "password": "123456",
  "role": "user",
  "imageURL": null
}, {
  "id": 7,
  "fullName": "Nerty O'Hear",
  "gender": "Female",
  "email": "nohear6@netvibes.com",
  "password": "123456",
  "role": "user",
  "imageURL": null
}, {
  "id": 8,
  "fullName": "Robers Jaume",
  "gender": "Male",
  "email": "rjaume7@icio.us",
  "password": "123456",
  "role": "user",
  "imageURL": null
}, {
  "id": 9,
  "fullName": "Justinn Kinig",
  "gender": "Female",
  "email": "jkinig8@facebook.com",
  "password": "123456",
  "role": "user",
  "imageURL": null
}, {
  "id": 10,
  "fullName": "Dudley MacCallester",
  "gender": "Male",
  "email": "dmaccallester9@epa.gov",
  "password": "123456",
  "role": "user",
  "imageURL": null
}]

export {
  TEMP_POSTS,
  TEMP_USERS
}
