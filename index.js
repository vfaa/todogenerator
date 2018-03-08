const addTodo = require('./addTodo');
const _ = require('underscore');

let mar2016 = [];
let apr2016 = [];
let may2016 = [];
let jun2016 = [];
let jul2016 = [];
let aug2016 = [];
let sep2016 = [];
let oct2016 = [];
let nov2016 = [];
let dec2016 = [];

let jan2017 = [];
let feb2017 = [];
let mar2017 = [];
let apr2017 = [];
let may2017 = [];
let jun2017 = [];
let jul2017 = [];
let aug2017 = [];
let sep2017 = [];
let oct2017 = [];
let nov2017 = [];
let dec2017 = [];

let jan2018 = [];
let feb2018 = [];

let tagChoices = ['books', 'movies', 'personal', 'family', 'sports', 'travel', 'recipe', 'restaurant'];

function dinner(start, end) {
  return {
    title: 'Dinner with family',
    description: 'at restaurant nearby',
    tags: ['personal', 'family', 'restaurant'],
    createdDate: start,
    dueDate: end,
    priority: '2',
    sortableCreatedDate: new Date(start),
  };
}
function visit(start, end) {
  return {
    title: 'Visit favorite niece',
    description: 'read bedtime story',
    tags: ['personal', 'family', 'books'],
    createdDate: start,
    dueDate: end,
    priority: '2',
    sortableCreatedDate: new Date(start),
  };
}
function valentines(start, end) {
  return {
    title: 'Movie and dinner night',
    description: 'with boyfriend',
    tags: ['personal', 'movie', 'restaurant'],
    createdDate: start,
    dueDate: end,
    priority: '4',
    sortableCreatedDate: new Date(start),
  };
}
function readBook(title, chapter, start, end) {
  return {
    title: `Read ${title} book`,
    description: `chapter ${chapter}`,
    tags: ['personal', 'books'],
    createdDate: start,
    dueDate: end,
    priority: '3',
    sortableCreatedDate: new Date(start),
  };
}
function volleyball(start, end) {
  return {
    title: 'Volleyball bonding',
    description: 'with friends',
    tags: ['personal', 'sports'],
    createdDate: start,
    dueDate: end,
    priority: '2',
    sortableCreatedDate: new Date(start),
  };
}
function travelFam(place, start, end) {
  return {
    title: `Travel to ${place}`,
    description: 'family vacation',
    tags: ['family', 'travel'],
    createdDate: start,
    dueDate: end,
    priority: '1',
    sortableCreatedDate: new Date(start),
  };
}
function travelBf(place, start, end) {
  return {
    title: `Travel to ${place}`,
    description: 'vacation with boyfriend',
    tags: ['personal', 'travel'],
    createdDate: start,
    dueDate: end,
    priority: '2',
    sortableCreatedDate: new Date(start),
  };
}
function cook(start, end) {
  return {
    title: 'Cook dinner at home',
    description: 'for the family',
    tags: ['family', 'recipe'],
    createdDate: start,
    dueDate: end,
    priority: '1',
    sortableCreatedDate: new Date(start),
  };
}
function travelWork(start, end) {
  return {
    title: 'Travel to field office',
    description: 'for work - site inspection',
    tags: ['travel'],
    createdDate: start,
    dueDate: end,
    priority: '4',
    sortableCreatedDate: new Date(start),
  };
}
function deposit(start, end) {
  return {
    title: 'Deposit to bank',
    description: 'savings for the future',
    tags: ['personal'],
    createdDate: start,
    dueDate: end,
    priority: '4',
    sortableCreatedDate: new Date(start),
  };
}
function myBday(start, end) {
  return {
    title: 'My birthday celebration',
    description: 'with family and friends',
    tags: ['personal', 'family'],
    createdDate: start,
    dueDate: end,
    priority: '5',
    sortableCreatedDate: new Date(start),
  };
}
function dadBday(start, end) {
  return {
    title: 'Dad birthday celebration',
    description: '',
    tags: ['family'],
    createdDate: start,
    dueDate: end,
    priority: '4',
    sortableCreatedDate: new Date(start),
  };
}
function momBday(start, end) {
  return {
    title: 'Mom birthday celebration',
    description: '',
    tags: ['family'],
    createdDate: start,
    dueDate: end,
    priority: '4',
    sortableCreatedDate: new Date(start),
  };
}
function bro1Bday(start, end) {
  return {
    title: 'First brother birthday celebration',
    description: '',
    tags: ['family'],
    createdDate: start,
    dueDate: end,
    priority: '3',
    sortableCreatedDate: new Date(start),
  };
}
function bro2Bday(start, end) {
  return {
    title: 'Second brother birthday celebration',
    description: '',
    tags: ['family'],
    createdDate: start,
    dueDate: end,
    priority: '3',
    sortableCreatedDate: new Date(start),
  };
}
function bestfriend(start, end) {
  return {
    title: 'Meet highschool bestfriend',
    description: '',
    tags: ['personal'],
    createdDate: start,
    dueDate: end,
    priority: '2',
    sortableCreatedDate: new Date(start),
  };
}
function monthlyMeeting(start, end) {
  return {
    title: 'Monthly Company Meeting',
    description: '',
    tags: [],
    createdDate: start,
    dueDate: end,
    priority: '4',
    sortableCreatedDate: new Date(start),
  };
}
function weeklyMeeting(start, end) {
  return {
    title: 'Weekly Team Meeting',
    description: '',
    tags: [],
    createdDate: start,
    dueDate: end,
    priority: '5',
    sortableCreatedDate: new Date(start),
  };
}
function grocery3(start, end) {
  return {
    title: 'Buy groceries',
    description: '',
    tags: [],
    createdDate: start,
    dueDate: end,
    priority: '3',
    sortableCreatedDate: new Date(start),
  };
}
function grocery2(start, end) {
  return {
    title: 'Buy groceries',
    description: '',
    tags: [],
    createdDate: start,
    dueDate: end,
    priority: '2',
    sortableCreatedDate: new Date(start),
  };
}
function transfer(start, end) {
  return {
    title: 'Look for and transfer to new house',
    description: '',
    tags: [],
    createdDate: start,
    dueDate: end,
    priority: '3',
    sortableCreatedDate: new Date(start),
  };
}
function laundry(start, end) {
  return {
    title: 'Do some laundry',
    description: '',
    tags: [],
    createdDate: start,
    dueDate: end,
    priority: '3',
    sortableCreatedDate: new Date(start),
  };
}

// dinner
{
  mar2016.push(dinner('03/05/2016','03/06/2016'));
  apr2016.push(dinner('04/05/2016','04/06/2016'));
  may2016.push(dinner('05/05/2016','05/06/2016'));
  jun2016.push(dinner('06/05/2016','06/06/2016'));
  jul2016.push(dinner('07/05/2016','07/06/2016'));
  aug2016.push(dinner('08/05/2016','08/06/2016'));
  sep2016.push(dinner('09/05/2016','09/06/2016'));
  oct2016.push(dinner('10/05/2016','10/06/2016'));
  nov2016.push(dinner('11/05/2016','11/06/2016'));
  dec2016.push(dinner('12/05/2016','12/06/2016'));

  jan2017.push(dinner('01/05/2017','01/06/2017'));
  feb2017.push(dinner('02/05/2017','02/06/2017'));
  mar2017.push(dinner('03/05/2017','03/06/2017'));
  apr2017.push(dinner('04/05/2017','04/06/2017'));
  may2017.push(dinner('05/05/2017','05/06/2017'));
  jun2017.push(dinner('06/05/2017','06/06/2017'));
  jul2017.push(dinner('07/05/2017','07/06/2017'));
  aug2017.push(dinner('08/05/2017','08/06/2017'));
  sep2017.push(dinner('09/05/2017','09/06/2017'));
  oct2017.push(dinner('10/05/2017','10/06/2017'));
  nov2017.push(dinner('11/05/2017','11/06/2017'));
  dec2017.push(dinner('12/05/2017','12/06/2017'));

  jan2018.push(dinner('01/05/2018','01/06/2018'));
  feb2018.push(dinner('02/05/2018','02/06/2018'));
}

// visit
{
  mar2016.push(visit('03/20/2016','03/21/2016'));
  apr2016.push(visit('04/20/2016','04/21/2016'));
  may2016.push(visit('05/20/2016','05/21/2016'));
  jun2016.push(visit('06/20/2016','06/21/2016'));
  jul2016.push(visit('07/20/2016','07/21/2016'));
  aug2016.push(visit('08/20/2016','08/21/2016'));
  sep2016.push(visit('09/20/2016','09/21/2016'));
  oct2016.push(visit('10/20/2016','10/21/2016'));
  nov2016.push(visit('11/20/2016','11/21/2016'));
  dec2016.push(visit('12/20/2016','12/21/2016'));

  jan2017.push(visit('01/20/2017','01/21/2017'));
  feb2017.push(visit('02/20/2017','02/21/2017'));
  mar2017.push(visit('03/20/2017','03/21/2017'));
  apr2017.push(visit('04/20/2017','04/21/2017'));
  may2017.push(visit('05/20/2017','05/21/2017'));
  jun2017.push(visit('06/20/2017','06/21/2017'));
  jul2017.push(visit('07/20/2017','07/21/2017'));
  aug2017.push(visit('08/20/2017','08/21/2017'));
  sep2017.push(visit('09/20/2017','09/21/2017'));
  oct2017.push(visit('10/20/2017','10/21/2017'));
  nov2017.push(visit('11/20/2017','11/21/2017'));
  dec2017.push(visit('12/20/2017','12/21/2017'));

  jan2018.push(visit('01/20/2018','01/21/2018'));
  feb2018.push(visit('02/20/2018','02/21/2018'));
}

// valentines
{
  feb2017.push(valentines('02/07/2017','02/14/2017'));
  feb2018.push(valentines('02/07/2018','02/14/2018'));
}

//readBook
{
  mar2016.push(readBook('Rich Dad Poor Dad', '1', '03/01/2016', '03/13/2016'));
  mar2016.push(readBook('Rich Dad Poor Dad', '2', '03/14/2016', '03/27/2016'));
  mar2016.push(readBook('Rich Dad Poor Dad', '3', '03/28/2016', '04/10/2016'));

  apr2016.push(readBook('Rich Dad Poor Dad', '4', '04/11/2016', '04/24/2016'));
  apr2016.push(readBook('Rich Dad Poor Dad', '5', '04/25/2016', '05/08/2016'));

  may2016.push(readBook('Rich Dad Poor Dad', '6', '05/09/2016', '05/22/2016'));
  may2016.push(readBook('Rich Dad Poor Dad', '7', '05/23/2016', '06/05/2016'));

  jun2016.push(readBook('Rich Dad Poor Dad', '8', '06/06/2016', '06/19/2016'));
  jun2016.push(readBook('Rich Dad Poor Dad', '9', '06/20/2016', '07/03/2016'));

  jul2016.push(readBook('Cashflow Quadrant', '1', '07/04/2016', '07/17/2016'));
  jul2016.push(readBook('Cashflow Quadrant', '2', '07/18/2016', '07/31/2016'));

  aug2016.push(readBook('Cashflow Quadrant', '3', '08/01/2016', '08/14/2016'));
  aug2016.push(readBook('Cashflow Quadrant', '4', '08/15/2016', '08/28/2016'));
  aug2016.push(readBook('Cashflow Quadrant', '5', '08/29/2016', '09/11/2016'));

  sep2016.push(readBook('Cashflow Quadrant', '6', '09/12/2016', '09/25/2016'));
  sep2016.push(readBook('Cashflow Quadrant', '7', '09/26/2016', '10/09/2016'));

  oct2016.push(readBook('Cashflow Quadrant', '8', '10/10/2016', '10/23/2016'));
  oct2016.push(readBook('Cashflow Quadrant', '9', '10/24/2016', '11/06/2016'));

  nov2016.push(readBook('Cashflow Quadrant', '10', '11/07/2016', '11/20/2016'));
  nov2016.push(readBook('Cashflow Quadrant', '11', '11/21/2016', '12/04/2016'));

  dec2016.push(readBook('Cashflow Quadrant', '12', '12/05/2016', '12/18/2016'));
  dec2016.push(readBook('Cashflow Quadrant', '13', '12/19/2016', '01/01/2017'));

  jan2017.push(readBook('Cashflow Quadrant', '14', '01/02/2017', '01/15/2017'));
  jan2017.push(readBook('Cashflow Quadrant', '15', '01/16/2017', '01/29/2017'));
  jan2017.push(readBook('Cashflow Quadrant', '16', '01/30/2017', '02/12/2017'));

  feb2017.push(readBook('Cashflow Quadrant', '17', '02/13/2017', '02/26/2017'));
  feb2017.push(readBook('Cashflow Quadrant', '18', '02/27/2017', '03/12/2017'));


  mar2017.push(readBook('Think and Grow Rich', '1', '03/13/2017', '03/26/2017'));
  mar2017.push(readBook('Think and Grow Rich', '2', '03/27/2017', '04/09/2017'));

  apr2017.push(readBook('Think and Grow Rich', '3', '04/10/2017', '04/23/2017'));
  apr2017.push(readBook('Think and Grow Rich', '4', '04/24/2017', '05/07/2017'));

  may2017.push(readBook('Think and Grow Rich', '5', '05/08/2017', '05/21/2017'));
  may2017.push(readBook('Think and Grow Rich', '6', '05/22/2017', '06/04/2017'));

  jun2017.push(readBook('Think and Grow Rich', '7', '06/05/2017', '06/18/2017'));
  jun2017.push(readBook('Think and Grow Rich', '8', '06/19/2017', '07/02/2017'));

  jul2017.push(readBook('Think and Grow Rich', '9', '07/03/2017', '07/16/2017'));
  jul2017.push(readBook('Think and Grow Rich', '10', '07/17/2017', '07/30/2017'));
  jul2017.push(readBook('Think and Grow Rich', '11', '07/31/2017', '08/13/2017'));

  aug2017.push(readBook('Think and Grow Rich', '12', '08/14/2017', '08/27/2017'));
  aug2017.push(readBook('Think and Grow Rich', '13', '08/28/2017', '09/10/2017'));

  sep2017.push(readBook('Think and Grow Rich', '14', '09/11/2017', '09/24/2017'));
  sep2017.push(readBook('Think and Grow Rich', '15', '09/25/2017', '10/08/2017'));

  oct2017.push(readBook('How to Win Friends and Influence People', '1', '10/09/2017', '10/22/2017'));
  oct2017.push(readBook('How to Win Friends and Influence People', '2', '10/23/2017', '11/05/2017'));

  nov2017.push(readBook('How to Win Friends and Influence People', '3', '11/06/2017', '11/19/2017'));
  nov2017.push(readBook('How to Win Friends and Influence People', '4', '11/20/2017', '12/03/2017'));

  dec2017.push(readBook('How to Win Friends and Influence People', '5', '12/04/2017', '12/17/2017'));
  dec2017.push(readBook('How to Win Friends and Influence People', '6', '12/18/2017', '12/31/2017'));

  jan2018.push(readBook('How to Win Friends and Influence People', '7', '01/01/2018', '01/14/2018'));
  jan2018.push(readBook('How to Win Friends and Influence People', '8', '01/15/2018', '01/28/2018'));
  jan2018.push(readBook('How to Win Friends and Influence People', '9', '01/29/2018', '02/11/2018'));

  feb2018.push(readBook('How to Win Friends and Influence People', '10', '02/12/2018', '02/25/2018'));
  feb2018.push(readBook('How to Win Friends and Influence People', '11', '02/26/2018', '03/11/2018'));
}

// volleyball
{
  mar2016.push(volleyball('03/01/2016','03/30/2016'));
  apr2016.push(volleyball('04/01/2016','04/30/2016'));
  may2016.push(volleyball('05/01/2016','05/30/2016'));
  jun2016.push(volleyball('06/01/2016','06/30/2016'));
  jul2016.push(volleyball('07/01/2016','07/30/2016'));
  aug2016.push(volleyball('08/01/2016','08/30/2016'));
  sep2016.push(volleyball('09/01/2016','09/30/2016'));
  oct2016.push(volleyball('10/01/2016','10/30/2016'));
  nov2016.push(volleyball('11/01/2016','11/30/2016'));
  dec2016.push(volleyball('12/01/2016','12/30/2016'));

  jan2017.push(volleyball('01/01/2017','01/30/2017'));
  feb2017.push(volleyball('02/01/2017','02/28/2017'));
  mar2017.push(volleyball('03/01/2017','03/30/2017'));
  apr2017.push(volleyball('04/01/2017','04/30/2017'));
  may2017.push(volleyball('05/01/2017','05/30/2017'));
  jun2017.push(volleyball('06/01/2017','06/30/2017'));
  jul2017.push(volleyball('07/01/2017','07/30/2017'));
  aug2017.push(volleyball('08/01/2017','08/30/2017'));
  sep2017.push(volleyball('09/01/2017','09/30/2017'));
  oct2017.push(volleyball('10/01/2017','10/30/2017'));
  nov2017.push(volleyball('11/01/2017','11/30/2017'));
  dec2017.push(volleyball('12/01/2017','12/30/2017'));

  jan2018.push(volleyball('01/01/2018','01/30/2018'));
  feb2018.push(volleyball('02/01/2018','02/28/2018'));
}

// travelFam
{
  jul2016.push(travelFam('Japan', '07/01/2016','09/30/2016'));
  jan2017.push(travelFam('Hongkong', '01/01/2017','03/30/2017'));
  jul2017.push(travelFam('China', '07/01/2017','09/30/2017'));
  jan2018.push(travelFam('Korea', '01/01/2018','03/30/2018'));
}

// travelBf
{
  apr2016.push(travelBf('Bangkok', '04/01/2016','06/30/2016'));
  oct2016.push(travelBf('Singapore', '10/01/2016','12/30/2016'));
  apr2017.push(travelBf('Paris', '04/01/2017','06/30/2017'));
  oct2017.push(travelBf('Italy', '10/01/2017','12/30/2017'));
}

// cook
{
  for(i=new Date('03/04/2016');i<=new Date('03/08/2018');i=new Date(i.setDate(i.getDate()+7))){
    const alterableDate = new Date(i);
    let start = i.toLocaleDateString('en-US');
    const endDate = new Date(alterableDate.setDate(alterableDate.getDate() + 2));
    let end = endDate.toLocaleDateString('en-US');
    if (start.length < 10) {
      const startArr = start.split('/');
      for (let i = 0; i < startArr.length; i++) {
        if (startArr[i].length === 1) {
          startArr[i] = `0${startArr[i]}`;
        }
      }
      start = startArr.join('/');
    }
    if (end.length < 10) {
      const endArr = end.split('/');
      for (let i = 0; i < endArr.length; i++) {
        if (endArr[i].length === 1) {
          endArr[i] = `0${endArr[i]}`;
        }
      }
      end = endArr.join('/');
    }

    if (start.startsWith('03') && start.endsWith('2016')) {
      mar2016.push(cook(start, end));
    }
    if (start.startsWith('04') && start.endsWith('2016')) {
      apr2016.push(cook(start, end));
    }
    if (start.startsWith('05') && start.endsWith('2016')) {
      may2016.push(cook(start, end));
    }
    if (start.startsWith('06') && start.endsWith('2016')) {
      jun2016.push(cook(start, end));
    }
    if (start.startsWith('07') && start.endsWith('2016')) {
      jul2016.push(cook(start, end));
    }
    if (start.startsWith('08') && start.endsWith('2016')) {
      aug2016.push(cook(start, end));
    }
    if (start.startsWith('09') && start.endsWith('2016')) {
      sep2016.push(cook(start, end));
    }
    if (start.startsWith('10') && start.endsWith('2016')) {
      oct2016.push(cook(start, end));
    }
    if (start.startsWith('11') && start.endsWith('2016')) {
      nov2016.push(cook(start, end));
    }
    if (start.startsWith('12') && start.endsWith('2016')) {
      dec2016.push(cook(start, end));
    }
    if (start.startsWith('01') && start.endsWith('2017')) {
      jan2017.push(cook(start, end));
    }
    if (start.startsWith('02') && start.endsWith('2017')) {
      feb2017.push(cook(start, end));
    }

    if (start.startsWith('03') && start.endsWith('2017')) {
      mar2017.push(cook(start, end));
    }
    if (start.startsWith('04') && start.endsWith('2017')) {
      apr2017.push(cook(start, end));
    }
    if (start.startsWith('05') && start.endsWith('2017')) {
      may2017.push(cook(start, end));
    }
    if (start.startsWith('06') && start.endsWith('2017')) {
      jun2017.push(cook(start, end));
    }
    if (start.startsWith('07') && start.endsWith('2017')) {
      jul2017.push(cook(start, end));
    }
    if (start.startsWith('08') && start.endsWith('2017')) {
      aug2017.push(cook(start, end));
    }
    if (start.startsWith('09') && start.endsWith('2017')) {
      sep2017.push(cook(start, end));
    }
    if (start.startsWith('10') && start.endsWith('2017')) {
      oct2017.push(cook(start, end));
    }
    if (start.startsWith('11') && start.endsWith('2017')) {
      nov2017.push(cook(start, end));
    }
    if (start.startsWith('12') && start.endsWith('2017')) {
      dec2017.push(cook(start, end));
    }
    if (start.startsWith('01') && start.endsWith('2018')) {
      jan2018.push(cook(start, end));
    }
    if (start.startsWith('02') && start.endsWith('2018')) {
      feb2018.push(cook(start, end));
    }
  }
}

// travelWork
{
  mar2016.push(travelWork('03/07/2016','03/10/2016'));
  apr2016.push(travelWork('04/11/2016','04/14/2016'));
  may2016.push(travelWork('05/09/2016','05/12/2016'));
  jun2016.push(travelWork('06/13/2016','06/16/2016'));
  jul2016.push(travelWork('07/11/2016','07/14/2016'));
  aug2016.push(travelWork('08/08/2016','08/11/2016'));
  sep2016.push(travelWork('09/12/2016','09/15/2016'));
  oct2016.push(travelWork('10/10/2016','10/13/2016'));
  nov2016.push(travelWork('11/14/2016','11/17/2016'));
  dec2016.push(travelWork('12/12/2016','12/15/2016'));

  jan2017.push(travelWork('01/08/2017','01/11/2017'));
  feb2017.push(travelWork('02/13/2017','02/16/2017'));
  mar2017.push(travelWork('03/13/2017','03/16/2017'));
  apr2017.push(travelWork('04/10/2017','04/13/2017'));
  may2017.push(travelWork('05/08/2017','05/11/2017'));
  jun2017.push(travelWork('06/12/2017','06/15/2017'));
  jul2017.push(travelWork('07/10/2017','07/13/2017'));
  aug2017.push(travelWork('08/14/2017','08/17/2017'));
  sep2017.push(travelWork('09/11/2017','09/14/2017'));
  oct2017.push(travelWork('10/8/2017','10/11/2017'));
  nov2017.push(travelWork('11/13/2017','11/16/2017'));
  dec2017.push(travelWork('12/11/2017','12/14/2017'));

  jan2018.push(travelWork('01/08/2018','01/11/2018'));
  feb2018.push(travelWork('02/12/2018','02/15/2018'));
}

// deposit
{
  mar2016.push(deposit('03/15/2016','03/17/2016'));
  apr2016.push(deposit('04/15/2016','04/17/2016'));
  may2016.push(deposit('05/15/2016','05/17/2016'));
  jun2016.push(deposit('06/15/2016','06/17/2016'));
  jul2016.push(deposit('07/15/2016','07/17/2016'));
  aug2016.push(deposit('08/15/2016','08/17/2016'));
  sep2016.push(deposit('09/15/2016','09/17/2016'));
  oct2016.push(deposit('10/15/2016','10/17/2016'));
  nov2016.push(deposit('11/15/2016','11/17/2016'));
  dec2016.push(deposit('12/15/2016','12/17/2016'));

  jan2017.push(deposit('01/15/2017','01/17/2017'));
  feb2017.push(deposit('02/15/2017','02/17/2017'));
  mar2017.push(deposit('03/15/2017','03/17/2017'));
  apr2017.push(deposit('04/15/2017','04/17/2017'));
  may2017.push(deposit('05/15/2017','05/17/2017'));
  jun2017.push(deposit('06/15/2017','06/17/2017'));
  jul2017.push(deposit('07/15/2017','07/17/2017'));
  aug2017.push(deposit('08/15/2017','08/17/2017'));
  sep2017.push(deposit('09/15/2017','09/17/2017'));
  oct2017.push(deposit('10/15/2017','10/17/2017'));
  nov2017.push(deposit('11/15/2017','11/17/2017'));
  dec2017.push(deposit('12/15/2017','12/17/2017'));

  jan2018.push(deposit('01/15/2018','01/17/2018'));
  feb2018.push(deposit('02/15/2018','02/17/2018'));


  mar2016.push(deposit('03/30/2016','04/02/2016'));
  apr2016.push(deposit('04/30/2016','05/02/2016'));
  may2016.push(deposit('05/30/2016','06/02/2016'));
  jun2016.push(deposit('06/30/2016','07/02/2016'));
  jul2016.push(deposit('07/30/2016','08/02/2016'));
  aug2016.push(deposit('08/30/2016','09/02/2016'));
  sep2016.push(deposit('09/30/2016','10/02/2016'));
  oct2016.push(deposit('10/30/2016','11/02/2016'));
  nov2016.push(deposit('11/30/2016','12/02/2016'));
  dec2016.push(deposit('12/30/2016','01/02/2016'));

  jan2017.push(deposit('01/30/2017','02/02/2017'));
  feb2017.push(deposit('02/28/2017','03/02/2017'));
  mar2017.push(deposit('03/30/2017','04/02/2017'));
  apr2017.push(deposit('04/30/2017','05/02/2017'));
  may2017.push(deposit('05/30/2017','06/02/2017'));
  jun2017.push(deposit('06/30/2017','07/02/2017'));
  jul2017.push(deposit('07/30/2017','08/02/2017'));
  aug2017.push(deposit('08/30/2017','09/02/2017'));
  sep2017.push(deposit('09/30/2017','10/02/2017'));
  oct2017.push(deposit('10/30/2017','11/02/2017'));
  nov2017.push(deposit('11/30/2017','12/02/2017'));
  dec2017.push(deposit('12/30/2017','01/02/2017'));

  jan2018.push(deposit('01/30/2018','02/02/2018'));
  feb2018.push(deposit('02/28/2018','03/02/2018'));
}

// myBday
{
  sep2016.push(myBday('09/25/2016', '09/25/2016'));
  sep2017.push(myBday('09/25/2017', '09/25/2017'));
}

// dadBday
{
  may2016.push(dadBday('05/27/2016', '05/27/2016'));
  may2017.push(dadBday('05/27/2017', '05/27/2017'));
}

// momBday
{
  apr2016.push(momBday('04/07/2016', '04/07/2016'));
  apr2017.push(momBday('04/07/2017', '04/07/2017'));
}

// bro1Bday
{
  nov2016.push(bro1Bday('11/02/2016', '11/02/2016'));
  nov2017.push(bro1Bday('11/02/2017', '11/02/2017'));
}

// bro2Bday
{
  sep2016.push(bro2Bday('09/23/2016', '09/23/2016'));
  sep2017.push(bro2Bday('09/23/2017', '09/23/2017'));
}

// bestfriend
{
  nov2016.push(bestfriend('11/01/2016', '11/30/2016'));
  nov2017.push(bestfriend('11/01/2017', '11/30/2017'));
}

// monthlyMeeting
{
  mar2016.push(monthlyMeeting('03/05/2016','03/10/2016'));
  apr2016.push(monthlyMeeting('04/05/2016','04/10/2016'));
  may2016.push(monthlyMeeting('05/05/2016','05/10/2016'));
  jun2016.push(monthlyMeeting('06/05/2016','06/10/2016'));
  jul2016.push(monthlyMeeting('07/05/2016','07/10/2016'));
  aug2016.push(monthlyMeeting('08/05/2016','08/10/2016'));
  sep2016.push(monthlyMeeting('09/05/2016','09/10/2016'));
  oct2016.push(monthlyMeeting('10/05/2016','10/10/2016'));
  nov2016.push(monthlyMeeting('11/05/2016','11/10/2016'));
  dec2016.push(monthlyMeeting('12/05/2016','12/10/2016'));

  jan2017.push(monthlyMeeting('01/05/2017','01/10/2017'));
  feb2017.push(monthlyMeeting('02/05/2017','02/10/2017'));
  mar2017.push(monthlyMeeting('03/05/2017','03/10/2017'));
  apr2017.push(monthlyMeeting('04/05/2017','04/10/2017'));
  may2017.push(monthlyMeeting('05/05/2017','05/10/2017'));
  jun2017.push(monthlyMeeting('06/05/2017','06/10/2017'));
  jul2017.push(monthlyMeeting('07/05/2017','07/10/2017'));
  aug2017.push(monthlyMeeting('08/05/2017','08/10/2017'));
  sep2017.push(monthlyMeeting('09/05/2017','09/10/2017'));
  oct2017.push(monthlyMeeting('10/05/2017','10/10/2017'));
  nov2017.push(monthlyMeeting('11/05/2017','11/10/2017'));
  dec2017.push(monthlyMeeting('12/05/2017','12/10/2017'));

  jan2018.push(monthlyMeeting('01/05/2018','01/10/2018'));
  feb2018.push(monthlyMeeting('02/05/2018','02/10/2018'));
}

// weeklyMeeting
{
  for(i=new Date('03/07/2016');i<=new Date('03/05/2018');i=new Date(i.setDate(i.getDate()+7))){
    const alterableDate = new Date(i);
    let start = i.toLocaleDateString('en-US');
    const endDate = new Date(alterableDate.setDate(alterableDate.getDate() + 4));
    let end = endDate.toLocaleDateString('en-US');
    if (start.length < 10) {
      const startArr = start.split('/');
      for (let i = 0; i < startArr.length; i++) {
        if (startArr[i].length === 1) {
          startArr[i] = `0${startArr[i]}`;
        }
      }
      start = startArr.join('/');
    }
    if (end.length < 10) {
      const endArr = end.split('/');
      for (let i = 0; i < endArr.length; i++) {
        if (endArr[i].length === 1) {
          endArr[i] = `0${endArr[i]}`;
        }
      }
      end = endArr.join('/');
    }

    if (start.startsWith('03') && start.endsWith('2016')) {
      mar2016.push(weeklyMeeting(start, end));
    }
    if (start.startsWith('04') && start.endsWith('2016')) {
      apr2016.push(weeklyMeeting(start, end));
    }
    if (start.startsWith('05') && start.endsWith('2016')) {
      may2016.push(weeklyMeeting(start, end));
    }
    if (start.startsWith('06') && start.endsWith('2016')) {
      jun2016.push(weeklyMeeting(start, end));
    }
    if (start.startsWith('07') && start.endsWith('2016')) {
      jul2016.push(weeklyMeeting(start, end));
    }
    if (start.startsWith('08') && start.endsWith('2016')) {
      aug2016.push(weeklyMeeting(start, end));
    }
    if (start.startsWith('09') && start.endsWith('2016')) {
      sep2016.push(weeklyMeeting(start, end));
    }
    if (start.startsWith('10') && start.endsWith('2016')) {
      oct2016.push(weeklyMeeting(start, end));
    }
    if (start.startsWith('11') && start.endsWith('2016')) {
      nov2016.push(weeklyMeeting(start, end));
    }
    if (start.startsWith('12') && start.endsWith('2016')) {
      dec2016.push(weeklyMeeting(start, end));
    }
    if (start.startsWith('01') && start.endsWith('2017')) {
      jan2017.push(weeklyMeeting(start, end));
    }
    if (start.startsWith('02') && start.endsWith('2017')) {
      feb2017.push(weeklyMeeting(start, end));
    }

    if (start.startsWith('03') && start.endsWith('2017')) {
      mar2017.push(weeklyMeeting(start, end));
    }
    if (start.startsWith('04') && start.endsWith('2017')) {
      apr2017.push(weeklyMeeting(start, end));
    }
    if (start.startsWith('05') && start.endsWith('2017')) {
      may2017.push(weeklyMeeting(start, end));
    }
    if (start.startsWith('06') && start.endsWith('2017')) {
      jun2017.push(weeklyMeeting(start, end));
    }
    if (start.startsWith('07') && start.endsWith('2017')) {
      jul2017.push(weeklyMeeting(start, end));
    }
    if (start.startsWith('08') && start.endsWith('2017')) {
      aug2017.push(weeklyMeeting(start, end));
    }
    if (start.startsWith('09') && start.endsWith('2017')) {
      sep2017.push(weeklyMeeting(start, end));
    }
    if (start.startsWith('10') && start.endsWith('2017')) {
      oct2017.push(weeklyMeeting(start, end));
    }
    if (start.startsWith('11') && start.endsWith('2017')) {
      nov2017.push(weeklyMeeting(start, end));
    }
    if (start.startsWith('12') && start.endsWith('2017')) {
      dec2017.push(weeklyMeeting(start, end));
    }
    if (start.startsWith('01') && start.endsWith('2018')) {
      jan2018.push(weeklyMeeting(start, end));
    }
    if (start.startsWith('02') && start.endsWith('2018')) {
      feb2018.push(weeklyMeeting(start, end));
    }
  }
}

// grocery3
{
  for(i=new Date('03/05/2016');i<=new Date('03/03/2018');i=new Date(i.setDate(i.getDate()+28))){
    const alterableDate = new Date(i);
    let start = i.toLocaleDateString('en-US');
    const endDate = new Date(alterableDate.setDate(alterableDate.getDate() + 1));
    let end = endDate.toLocaleDateString('en-US');
    if (start.length < 10) {
      const startArr = start.split('/');
      for (let i = 0; i < startArr.length; i++) {
        if (startArr[i].length === 1) {
          startArr[i] = `0${startArr[i]}`;
        }
      }
      start = startArr.join('/');
    }
    if (end.length < 10) {
      const endArr = end.split('/');
      for (let i = 0; i < endArr.length; i++) {
        if (endArr[i].length === 1) {
          endArr[i] = `0${endArr[i]}`;
        }
      }
      end = endArr.join('/');
    }

    if (start.startsWith('03') && start.endsWith('2016')) {
      mar2016.push(grocery3(start, end));
    }
    if (start.startsWith('04') && start.endsWith('2016')) {
      apr2016.push(grocery3(start, end));
    }
    if (start.startsWith('05') && start.endsWith('2016')) {
      may2016.push(grocery3(start, end));
    }
    if (start.startsWith('06') && start.endsWith('2016')) {
      jun2016.push(grocery3(start, end));
    }
    if (start.startsWith('07') && start.endsWith('2016')) {
      jul2016.push(grocery3(start, end));
    }
    if (start.startsWith('08') && start.endsWith('2016')) {
      aug2016.push(grocery3(start, end));
    }
    if (start.startsWith('09') && start.endsWith('2016')) {
      sep2016.push(grocery3(start, end));
    }
    if (start.startsWith('10') && start.endsWith('2016')) {
      oct2016.push(grocery3(start, end));
    }
    if (start.startsWith('11') && start.endsWith('2016')) {
      nov2016.push(grocery3(start, end));
    }
    if (start.startsWith('12') && start.endsWith('2016')) {
      dec2016.push(grocery3(start, end));
    }
    if (start.startsWith('01') && start.endsWith('2017')) {
      jan2017.push(grocery3(start, end));
    }
    if (start.startsWith('02') && start.endsWith('2017')) {
      feb2017.push(grocery3(start, end));
    }

    if (start.startsWith('03') && start.endsWith('2017')) {
      mar2017.push(grocery3(start, end));
    }
    if (start.startsWith('04') && start.endsWith('2017')) {
      apr2017.push(grocery3(start, end));
    }
    if (start.startsWith('05') && start.endsWith('2017')) {
      may2017.push(grocery3(start, end));
    }
    if (start.startsWith('06') && start.endsWith('2017')) {
      jun2017.push(grocery3(start, end));
    }
    if (start.startsWith('07') && start.endsWith('2017')) {
      jul2017.push(grocery3(start, end));
    }
    if (start.startsWith('08') && start.endsWith('2017')) {
      aug2017.push(grocery3(start, end));
    }
    if (start.startsWith('09') && start.endsWith('2017')) {
      sep2017.push(grocery3(start, end));
    }
    if (start.startsWith('10') && start.endsWith('2017')) {
      oct2017.push(grocery3(start, end));
    }
    if (start.startsWith('11') && start.endsWith('2017')) {
      nov2017.push(grocery3(start, end));
    }
    if (start.startsWith('12') && start.endsWith('2017')) {
      dec2017.push(grocery3(start, end));
    }
    if (start.startsWith('01') && start.endsWith('2018')) {
      jan2018.push(grocery3(start, end));
    }
    if (start.startsWith('02') && start.endsWith('2018')) {
      feb2018.push(grocery3(start, end));
    }
  }
}

// grocery2
{
  for(i=new Date('03/19/2016');i<=new Date('03/03/2018');i=new Date(i.setDate(i.getDate()+28))){
    const alterableDate = new Date(i);
    let start = i.toLocaleDateString('en-US');
    const endDate = new Date(alterableDate.setDate(alterableDate.getDate() + 1));
    let end = endDate.toLocaleDateString('en-US');
    if (start.length < 10) {
      const startArr = start.split('/');
      for (let i = 0; i < startArr.length; i++) {
        if (startArr[i].length === 1) {
          startArr[i] = `0${startArr[i]}`;
        }
      }
      start = startArr.join('/');
    }
    if (end.length < 10) {
      const endArr = end.split('/');
      for (let i = 0; i < endArr.length; i++) {
        if (endArr[i].length === 1) {
          endArr[i] = `0${endArr[i]}`;
        }
      }
      end = endArr.join('/');
    }

    if (start.startsWith('03') && start.endsWith('2016')) {
      mar2016.push(grocery2(start, end));
    }
    if (start.startsWith('04') && start.endsWith('2016')) {
      apr2016.push(grocery2(start, end));
    }
    if (start.startsWith('05') && start.endsWith('2016')) {
      may2016.push(grocery2(start, end));
    }
    if (start.startsWith('06') && start.endsWith('2016')) {
      jun2016.push(grocery2(start, end));
    }
    if (start.startsWith('07') && start.endsWith('2016')) {
      jul2016.push(grocery2(start, end));
    }
    if (start.startsWith('08') && start.endsWith('2016')) {
      aug2016.push(grocery2(start, end));
    }
    if (start.startsWith('09') && start.endsWith('2016')) {
      sep2016.push(grocery2(start, end));
    }
    if (start.startsWith('10') && start.endsWith('2016')) {
      oct2016.push(grocery2(start, end));
    }
    if (start.startsWith('11') && start.endsWith('2016')) {
      nov2016.push(grocery2(start, end));
    }
    if (start.startsWith('12') && start.endsWith('2016')) {
      dec2016.push(grocery2(start, end));
    }
    if (start.startsWith('01') && start.endsWith('2017')) {
      jan2017.push(grocery2(start, end));
    }
    if (start.startsWith('02') && start.endsWith('2017')) {
      feb2017.push(grocery2(start, end));
    }

    if (start.startsWith('03') && start.endsWith('2017')) {
      mar2017.push(grocery2(start, end));
    }
    if (start.startsWith('04') && start.endsWith('2017')) {
      apr2017.push(grocery2(start, end));
    }
    if (start.startsWith('05') && start.endsWith('2017')) {
      may2017.push(grocery2(start, end));
    }
    if (start.startsWith('06') && start.endsWith('2017')) {
      jun2017.push(grocery2(start, end));
    }
    if (start.startsWith('07') && start.endsWith('2017')) {
      jul2017.push(grocery2(start, end));
    }
    if (start.startsWith('08') && start.endsWith('2017')) {
      aug2017.push(grocery2(start, end));
    }
    if (start.startsWith('09') && start.endsWith('2017')) {
      sep2017.push(grocery2(start, end));
    }
    if (start.startsWith('10') && start.endsWith('2017')) {
      oct2017.push(grocery2(start, end));
    }
    if (start.startsWith('11') && start.endsWith('2017')) {
      nov2017.push(grocery2(start, end));
    }
    if (start.startsWith('12') && start.endsWith('2017')) {
      dec2017.push(grocery2(start, end));
    }
    if (start.startsWith('01') && start.endsWith('2018')) {
      jan2018.push(grocery2(start, end));
    }
    if (start.startsWith('02') && start.endsWith('2018')) {
      feb2018.push(grocery2(start, end));
    }
  }
}

// transfer
{
  mar2016.push(transfer('03/10/2016', '03/10/2017'));
}

// laundry
{
  for(i=new Date('03/28/2016');i<=new Date('03/05/2018');i=new Date(i.setDate(i.getDate()+28))){
    const alterableDate = new Date(i);
    let start = i.toLocaleDateString('en-US');
    const endDate = new Date(alterableDate.setDate(alterableDate.getDate() + 6));
    let end = endDate.toLocaleDateString('en-US');
    if (start.length < 10) {
      const startArr = start.split('/');
      for (let i = 0; i < startArr.length; i++) {
        if (startArr[i].length === 1) {
          startArr[i] = `0${startArr[i]}`;
        }
      }
      start = startArr.join('/');
    }
    if (end.length < 10) {
      const endArr = end.split('/');
      for (let i = 0; i < endArr.length; i++) {
        if (endArr[i].length === 1) {
          endArr[i] = `0${endArr[i]}`;
        }
      }
      end = endArr.join('/');
    }

    if (start.startsWith('03') && start.endsWith('2016')) {
      mar2016.push(laundry(start, end));
    }
    if (start.startsWith('04') && start.endsWith('2016')) {
      apr2016.push(laundry(start, end));
    }
    if (start.startsWith('05') && start.endsWith('2016')) {
      may2016.push(laundry(start, end));
    }
    if (start.startsWith('06') && start.endsWith('2016')) {
      jun2016.push(laundry(start, end));
    }
    if (start.startsWith('07') && start.endsWith('2016')) {
      jul2016.push(laundry(start, end));
    }
    if (start.startsWith('08') && start.endsWith('2016')) {
      aug2016.push(laundry(start, end));
    }
    if (start.startsWith('09') && start.endsWith('2016')) {
      sep2016.push(laundry(start, end));
    }
    if (start.startsWith('10') && start.endsWith('2016')) {
      oct2016.push(laundry(start, end));
    }
    if (start.startsWith('11') && start.endsWith('2016')) {
      nov2016.push(laundry(start, end));
    }
    if (start.startsWith('12') && start.endsWith('2016')) {
      dec2016.push(laundry(start, end));
    }
    if (start.startsWith('01') && start.endsWith('2017')) {
      jan2017.push(laundry(start, end));
    }
    if (start.startsWith('02') && start.endsWith('2017')) {
      feb2017.push(laundry(start, end));
    }

    if (start.startsWith('03') && start.endsWith('2017')) {
      mar2017.push(laundry(start, end));
    }
    if (start.startsWith('04') && start.endsWith('2017')) {
      apr2017.push(laundry(start, end));
    }
    if (start.startsWith('05') && start.endsWith('2017')) {
      may2017.push(laundry(start, end));
    }
    if (start.startsWith('06') && start.endsWith('2017')) {
      jun2017.push(laundry(start, end));
    }
    if (start.startsWith('07') && start.endsWith('2017')) {
      jul2017.push(laundry(start, end));
    }
    if (start.startsWith('08') && start.endsWith('2017')) {
      aug2017.push(laundry(start, end));
    }
    if (start.startsWith('09') && start.endsWith('2017')) {
      sep2017.push(laundry(start, end));
    }
    if (start.startsWith('10') && start.endsWith('2017')) {
      oct2017.push(laundry(start, end));
    }
    if (start.startsWith('11') && start.endsWith('2017')) {
      nov2017.push(laundry(start, end));
    }
    if (start.startsWith('12') && start.endsWith('2017')) {
      dec2017.push(laundry(start, end));
    }
    if (start.startsWith('01') && start.endsWith('2018')) {
      jan2018.push(laundry(start, end));
    }
    if (start.startsWith('02') && start.endsWith('2018')) {
      feb2018.push(laundry(start, end));
    }
  }
}

// sort
mar2016 = _.sortBy(mar2016, 'sortableCreatedDate');
apr2016 = _.sortBy(apr2016, 'sortableCreatedDate');
may2016 = _.sortBy(may2016, 'sortableCreatedDate');
jun2016 = _.sortBy(jun2016, 'sortableCreatedDate');
jul2016 = _.sortBy(jul2016, 'sortableCreatedDate');
aug2016 = _.sortBy(aug2016, 'sortableCreatedDate');
sep2016 = _.sortBy(sep2016, 'sortableCreatedDate');
oct2016 = _.sortBy(oct2016, 'sortableCreatedDate');
nov2016 = _.sortBy(nov2016, 'sortableCreatedDate');
dec2016 = _.sortBy(dec2016, 'sortableCreatedDate');
jan2017 = _.sortBy(jan2017, 'sortableCreatedDate');
feb2017 = _.sortBy(feb2017, 'sortableCreatedDate');

mar2017 = _.sortBy(mar2017, 'sortableCreatedDate');
apr2017 = _.sortBy(apr2017, 'sortableCreatedDate');
may2017 = _.sortBy(may2017, 'sortableCreatedDate');
jun2017 = _.sortBy(jun2017, 'sortableCreatedDate');
jul2017 = _.sortBy(jul2017, 'sortableCreatedDate');
aug2017 = _.sortBy(aug2017, 'sortableCreatedDate');
sep2017 = _.sortBy(sep2017, 'sortableCreatedDate');
oct2017 = _.sortBy(oct2017, 'sortableCreatedDate');
nov2017 = _.sortBy(nov2017, 'sortableCreatedDate');
dec2017 = _.sortBy(dec2017, 'sortableCreatedDate');
jan2018 = _.sortBy(jan2018, 'sortableCreatedDate');
feb2018 = _.sortBy(feb2018, 'sortableCreatedDate');

async function addTodosPerMonth(monthArr) {
  for (let i = 0; i < monthArr.length; i++) {
    await addTodo(monthArr[i]);
  }
}

mar2016 = mar2016.slice(5);

// addTodosPerMonth(mar2016);
// addTodosPerMonth(apr2016);
// addTodosPerMonth(may2016);
// addTodosPerMonth(jun2016);
// addTodosPerMonth(jul2016);

// above is done

addTodosPerMonth(aug2016);
// addTodosPerMonth(sep2016);
// addTodosPerMonth(oct2016);
// addTodosPerMonth(nov2016);
// addTodosPerMonth(dec2016);
// addTodosPerMonth(jan2017);
// addTodosPerMonth(feb2017);

// addTodosPerMonth(mar2);
// addTodosPerMonth(apr2);
// addTodosPerMonth(may2);
// addTodosPerMonth(jun2);
// addTodosPerMonth(jul2);
// addTodosPerMonth(aug2);
// addTodosPerMonth(sep2);
// addTodosPerMonth(oct2);
// addTodosPerMonth(nov2);
// addTodosPerMonth(dec2);\
// addTodosPerMonth(jan2018);
// addTodosPerMonth(feb2018);
