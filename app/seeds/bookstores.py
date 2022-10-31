from app.models import db, Bookstore
from datetime import datetime, date

now = date.today()


def seed_bookstores():

    bookstore01 = Bookstore(
        ownerId = 10,
        name= "El Ateneo Grand Splendid",
        website = "https://www.yenny-elateneo.com/local/grand-splendid/",
        price= '$$',
        description ='Check out our website at citylights.com! City Lights Bookstore offers three floors of new-release hardcovers and quality paperbacks from all of the major publishing houses, along with an impressive range of titles from smaller, harder-to-find, specialty publishers.',
        category= "usedBooks",
        businessHours="11:30 AM - 11:00 PM",
        phone = "114-813-6052",
        # highlight = "Handmade",
        address ="1860 Happy Ave",
        city = "San Francisco",
        state = "CA",
        country ="USA",
        zipcode ="94133",
        latitude ="-37.80",
        longitude = "-57.77",
        createdAt= now,
        updatedAt= now
    )
    bookstore02 = Bookstore(
        ownerId = 10,
        name= "City Lights Books",
        website = 'http://www.citylights.com/',
        price= '$$',
        description ='Check out our website at citylights.com! City Lights Bookstore offers three floors of new-release hardcovers and quality paperbacks from all of the major publishing houses, along with an impressive range of titles from smaller, harder-to-find, specialty publishers. ',
        category= "coffee",
        businessHours='11:30 AM - 11:00 PM',
        phone = '415-362-8193',
        # highlight = "Handmade",
        address ='261 Columbus Ave',
        city = 'San Francisco',
        state = 'CA',
        country ='USA',
        zipcode ='94133',
        latitude ='37.79769',
        longitude = '-122.40660',
        createdAt= now,
        updatedAt= now
    )
    bookstore03 = Bookstore(
        ownerId = 10,
        name= "Green Apple Books",
        website = 'https://www.greenapplebooks.com/',
        price= '$$',
        description ='Check out our website at citylights.com! City Lights Bookstore offers three floors of new-release hardcovers and quality paperbacks from all of the major publishing houses, along with an impressive range of titles from smaller, harder-to-find, specialty publishers. ',
        category= "usedBooks",
        businessHours='11:30 AM - 11:00 PM',
        phone = '415-387-2272',
        address ='506 Clement St',
        city = 'San Francisco',
        state = 'CA',
        country ='USA',
        zipcode ='94118',
        latitude ='37.79769',
        longitude = '-122.40660',
        createdAt= now,
        updatedAt= now,
    )
    bookstore04 = Bookstore(
        ownerId = 10,
        name= "Stanford University Bookstore",
        website = 'http://standfordbookstore.com',
        price= '$$',
        description ='Check out our website at citylights.com! City Lights Bookstore offers three floors of new-release hardcovers and quality paperbacks from all of the major publishing houses, along with an impressive range of titles from smaller, harder-to-find, specialty publishers. ',
        category= "usedBooks",
        businessHours='11:30 AM - 11:00 PM',
        phone = '650-329-1217',
        address ='519 Lasuen Mall',
        city = 'Stanford',
        state = 'CA',
        country ='USA',
        zipcode ='94305',
        latitude ='37.425',
        longitude = '-122.168',
        createdAt= now,
        updatedAt= now,
    )
    bookstore05 = Bookstore(
        ownerId = 10,
        name= "Bell's Books",
        website = 'http://www.bellsbooks.com/',
        price= '$$',
        description ='Veteran local book shop offering a large collection of new, used & rare books in charming digs. ',
        category= "usedBooks",
        businessHours='11:30 AM - 11:00 PM',
        phone = '650-323-7822',
        address ='536 Emerson St,',
        city = 'Palo Alto',
        state = 'CA',
        country ='USA',
        zipcode ='94301',
        latitude ='37.44422',
        longitude = '-122.16201',
        createdAt= now,
        updatedAt= now
    )
    bookstore06 = Bookstore(
        ownerId= 10,
        name= "Kepler's Books",
        website = 'https://www.keplers.com/',
        price= '$$',
        description ='Stalwart local bookstore with many titles & magazines, plus a variety of book clubs & author events. ',
        category= "usedBooks",
        businessHours='11:30 AM - 11:00 PM',
        phone = '650-324-4321',
        address ='1010 El Camino Real #100',
        city = 'Menlo Park',
        state = 'CA',
        country ='USA',
        zipcode ='94025',
        latitude ='37.45212',
        longitude = '-122.18404',
        createdAt= now,
        updatedAt= now
    )
    bookstore07 = Bookstore(
        ownerId = 9,
        name= "El Ateneo Grand Splendid",
        website = 'http://www.citylights.com/',
        price= '$$',
        description ='Check out our website at citylights.com! City Lights Bookstore offers three floors of new-release hardcovers and quality paperbacks from all of the major publishing houses, along with an impressive range of titles from smaller, harder-to-find, specialty publishers. ',
        category= "stationary",
        businessHours='11:30 AM - 11:00 PM',
        phone = '4153628193',
        # highlight = "Handmade",
        address ='261 Columbus Ave',
        city = 'San Francisco',
        state = 'CA',
        country ='USA',
        zipcode ='94133',
        latitude ='37.79769',
        longitude = '-122.40660',
        createdAt= now,
        updatedAt= now
    )
    bookstore08 = Bookstore(
        ownerId = 9,
        name= "El Ateneo Grand Splendid",
        website = 'http://www.citylights.com/',
        price= '$$',
        description ='Check out our website at citylights.com! City Lights Bookstore offers three floors of new-release hardcovers and quality paperbacks from all of the major publishing houses, along with an impressive range of titles from smaller, harder-to-find, specialty publishers. ',
        category= "kids",
        businessHours='11:30 AM - 11:00 PM',
        phone = '4153628193',
        # highlight = "Handmade",
        address ='261 Columbus Ave',
        city = 'San Francisco',
        state = 'CA',
        country ='USA',
        zipcode ='94133',
        latitude ='37.79769',
        longitude = '-122.40660',
        createdAt= now,
        updatedAt= now
    )
    bookstore09 = Bookstore(
        ownerId = 6,
        name= "El Ateneo Grand Splendid",
        website = 'http://www.citylights.com/',
        price= '$$',
        description ='Check out our website at citylights.com! City Lights Bookstore offers three floors of new-release hardcovers and quality paperbacks from all of the major publishing houses, along with an impressive range of titles from smaller, harder-to-find, specialty publishers. ',
        category= "stationary",
        businessHours='11:30 AM - 11:00 PM',
        phone = '4153628193',
        # highlight = "Handmade",
        address ='261 Columbus Ave',
        city = 'San Francisco',
        state = 'CA',
        country ='USA',
        zipcode ='94133',
        latitude ='37.79769',
        longitude = '-122.40660',
        createdAt= now,
        updatedAt= now,
    )
    bookstore10 = Bookstore(
        ownerId =2,
        name= "El Ateneo Grand Splendid",
        website = 'http://www.citylights.com/',
        price= '$$',
        description ='Check out our website at citylights.com! City Lights Bookstore offers three floors of new-release hardcovers and quality paperbacks from all of the major publishing houses, along with an impressive range of titles from smaller, harder-to-find, specialty publishers. ',
        category= "stationary",
        businessHours='11:30 AM - 11:00 PM',
        phone = '4153628193',
        address ='261 Columbus Ave',
        city = 'San Francisco',
        state = 'CA',
        country ='USA',
        zipcode ='94133',
        latitude ='37.79769',
        longitude = '-122.40660',
        createdAt= now,
        updatedAt= now,
    )
    bookstore11 = Bookstore(
        ownerId = 7,
        name= "El Ateneo Grand Splendid",
        website = 'http://www.citylights.com/',
        price= '$$',
        description ='Check out our website at citylights.com! City Lights Bookstore offers three floors of new-release hardcovers and quality paperbacks from all of the major publishing houses, along with an impressive range of titles from smaller, harder-to-find, specialty publishers. ',
        category= "stationary",
        businessHours='11:30 AM - 11:00 PM',
        phone = '4153628193',
        address ='261 Columbus Ave',
        city = 'San Francisco',
        state = 'CA',
        country ='USA',
        zipcode ='94133',
        latitude ='37.79769',
        longitude = '-122.40660',
        createdAt= now,
        updatedAt= now
    )
    bookstore12 = Bookstore(
        ownerId = 8,
        name= "El Ateneo Grand Splendid",
        website = 'http://www.citylights.com/',
        price= '$$',
        description ='Check out our website at citylights.com! City Lights Bookstore offers three floors of new-release hardcovers and quality paperbacks from all of the major publishing houses, along with an impressive range of titles from smaller, harder-to-find, specialty publishers. ',
        category= "stationary",
        businessHours='11:30 AM - 11:00 PM',
        phone = '4153628193',
        address ='261 Columbus Ave',
        city = 'San Francisco',
        state = 'CA',
        country ='USA',
        zipcode ='94133',
        latitude ='37.79769',
        longitude = '-122.40660',
        createdAt= now,
        updatedAt= now
    )
    bookstore13 = Bookstore(
        ownerId = 7,
        name= "El Ateneo Grand Splendid",
        website = 'http://www.citylights.com/',
        price= '$$',
        description ='Check out our website at citylights.com! City Lights Bookstore offers three floors of new-release hardcovers and quality paperbacks from all of the major publishing houses, along with an impressive range of titles from smaller, harder-to-find, specialty publishers. ',
        category= "stationary",
        businessHours='11:30 AM - 11:00 PM',
        phone = '4153628193',
        address ='261 Columbus Ave',
        city = 'San Francisco',
        state = 'CA',
        country ='USA',
        zipcode ='94133',
        latitude ='37.79769',
        longitude = '-122.40660',
        createdAt= now,
        updatedAt= now,
    )
    bookstore14 = Bookstore(
        ownerId = 8,
        name= "El Ateneo Grand Splendid",
        website = 'http://www.citylights.com/',
        price= '$$',
        description ='Check out our website at citylights.com! City Lights Bookstore offers three floors of new-release hardcovers and quality paperbacks from all of the major publishing houses, along with an impressive range of titles from smaller, harder-to-find, specialty publishers. ',
        category= "stationary",
        businessHours='11:30 AM - 11:00 PM',
        phone = '4153628193',
        address ='261 Columbus Ave',
        city = 'San Francisco',
        state = 'CA',
        country ='USA',
        zipcode ='94133',
        latitude ='37.79769',
        longitude = '-122.40660',
        createdAt= now,
        updatedAt= now
    )
    bookstore15 = Bookstore(
        ownerId = 1,
        name= "El Ateneo Grand Splendid",
        website = 'http://www.citylights.com/',
        price= '$$',
        description ='Check out our website at citylights.com! City Lights Bookstore offers three floors of new-release hardcovers and quality paperbacks from all of the major publishing houses, along with an impressive range of titles from smaller, harder-to-find, specialty publishers. ',
        category= "stationary",
        businessHours='11:30 AM - 11:00 PM',
        phone = '4153628193',
        address ='261 Columbus Ave',
        city = 'San Francisco',
        state = 'CA',
        country ='USA',
        zipcode ='94133',
        latitude ='37.79769',
        longitude = '-122.40660',
        createdAt= now,
        updatedAt= now,
    )
    bookstore16 = Bookstore(
        ownerId = 5,
        name= "El Ateneo Grand Splendid",
        website = 'http://www.citylights.com/',
        price= '$$',
        description ='Check out our website at citylights.com! City Lights Bookstore offers three floors of new-release hardcovers and quality paperbacks from all of the major publishing houses, along with an impressive range of titles from smaller, harder-to-find, specialty publishers. ',
        category= "kids",
        businessHours='11:30 AM - 11:00 PM',
        phone = '4153628193',
        # highlight = "Handmade",
        address ='261 Columbus Ave',
        city = 'San Francisco',
        state = 'CA',
        country ='USA',
        zipcode ='94133',
        latitude ='37.79769',
        longitude = '-122.40660',
        createdAt= now,
        updatedAt= now
    )
    bookstore17 = Bookstore(
        ownerId = 6,
        name= "El Ateneo Grand Splendid",
        website = 'http://www.citylights.com/',
        price= '$$',
        description ='Check out our website at citylights.com! City Lights Bookstore offers three floors of new-release hardcovers and quality paperbacks from all of the major publishing houses, along with an impressive range of titles from smaller, harder-to-find, specialty publishers. ',
        category= "kids",
        businessHours='11:30 AM - 11:00 PM',
        phone = '4153628193',
        # highlight = "Handmade",
        address ='261 Columbus Ave',
        city = 'San Francisco',
        state = 'CA',
        country ='USA',
        zipcode ='94133',
        latitude ='37.79769',
        longitude = '-122.40660',
        createdAt= now,
        updatedAt= now
    )
    bookstore18 = Bookstore(
        ownerId = 2,
        name= "El Ateneo Grand Splendid",
        website = 'http://www.citylights.com/',
        price= '$$',
        description ='Check out our website at citylights.com! City Lights Bookstore offers three floors of new-release hardcovers and quality paperbacks from all of the major publishing houses, along with an impressive range of titles from smaller, harder-to-find, specialty publishers. ',
        category= "kids",
        businessHours='11:30 AM - 11:00 PM',
        phone = '4153628193',
        # highlight = "Handmade",
        address ='261 Columbus Ave',
        city = 'San Francisco',
        state = 'CA',
        country ='USA',
        zipcode ='94133',
        latitude ='37.79769',
        longitude = '-122.40660',
        createdAt= now,
        updatedAt= now
    )
    bookstore19 = Bookstore(
        ownerId = 2,
        name= "El Ateneo Grand Splendid",
        website = 'http://www.citylights.com/',
        price= '$$',
        description ='Check out our website at citylights.com! City Lights Bookstore offers three floors of new-release hardcovers and quality paperbacks from all of the major publishing houses, along with an impressive range of titles from smaller, harder-to-find, specialty publishers. ',
        category= "kids",
        businessHours='11:30 AM - 11:00 PM',
        phone = '4153628193',
        # highlight = "Handmade",
        address ='261 Columbus Ave',
        city = 'San Francisco',
        state = 'CA',
        country ='USA',
        zipcode ='94133',
        latitude ='37.79769',
        longitude = '-122.40660',
        createdAt= now,
        updatedAt= now
    )
    bookstore20 = Bookstore(
        ownerId = 2,
        name= "El Ateneo Grand Splendid",
        website = 'http://www.citylights.com/',
        price= '$$',
        description ='Check out our website at citylights.com! City Lights Bookstore offers three floors of new-release hardcovers and quality paperbacks from all of the major publishing houses, along with an impressive range of titles from smaller, harder-to-find, specialty publishers. ',
        category= "kids",
        businessHours='11:30 AM - 11:00 PM',
        phone = '4153628193',
        # highlight = "Handmade",
        address ='261 Columbus Ave',
        city = 'San Francisco',
        state = 'CA',
        country ='USA',
        zipcode ='94133',
        latitude ='37.79769',
        longitude = '-122.40660',
        createdAt= now,
        updatedAt= now
    )
    bookstore21 = Bookstore(
        ownerId = 2,
        name= "El Ateneo Grand Splendid",
        website = 'http://www.citylights.com/',
        price= '$$',
        description ='Check out our website at citylights.com! City Lights Bookstore offers three floors of new-release hardcovers and quality paperbacks from all of the major publishing houses, along with an impressive range of titles from smaller, harder-to-find, specialty publishers. ',
        category= "kids",
        businessHours='11:30 AM - 11:00 PM',
        phone = '4153628193',
        # highlight = "Handmade",
        address ='261 Columbus Ave',
        city = 'San Francisco',
        state = 'CA',
        country ='USA',
        zipcode ='94133',
        latitude ='37.79769',
        longitude = '-122.40660',
        createdAt= now,
        updatedAt= now
    )
    bookstore22 = Bookstore(
        ownerId = 2,
        name= "El Ateneo Grand Splendid",
        website = 'http://www.citylights.com/',
        price= '$$',
        description ='Check out our website at citylights.com! City Lights Bookstore offers three floors of new-release hardcovers and quality paperbacks from all of the major publishing houses, along with an impressive range of titles from smaller, harder-to-find, specialty publishers. ',
        category= "kids",
        businessHours='11:30 AM - 11:00 PM',
        phone = '4153628193',
        # highlight = "Handmade",
        address ='261 Columbus Ave',
        city = 'San Francisco',
        state = 'CA',
        country ='USA',
        zipcode ='94133',
        latitude ='37.79769',
        longitude = '-122.40660',
        createdAt= now,
        updatedAt= now
    )
    bookstore23 = Bookstore(
        ownerId = 2,
        name= "El Ateneo Grand Splendid",
        website = 'http://www.citylights.com/',
        price= '$$',
        description ='Check out our website at citylights.com! City Lights Bookstore offers three floors of new-release hardcovers and quality paperbacks from all of the major publishing houses, along with an impressive range of titles from smaller, harder-to-find, specialty publishers. ',
        category= "lounge",
        businessHours='11:30 AM - 11:00 PM',
        phone = '4153628193',
        # highlight = "Handmade",
        address ='261 Columbus Ave',
        city = 'San Francisco',
        state = 'CA',
        country ='USA',
        zipcode ='94133',
        latitude ='37.79769',
        longitude = '-122.40660',
        createdAt= now,
        updatedAt= now
    )
    bookstore24 = Bookstore(
        ownerId = 2,
        name= "El Ateneo Grand Splendid",
        website = 'http://www.citylights.com/',
        price= '$$',
        description ='Check out our website at citylights.com! City Lights Bookstore offers three floors of new-release hardcovers and quality paperbacks from all of the major publishing houses, along with an impressive range of titles from smaller, harder-to-find, specialty publishers. ',
        category= "lounge",
        businessHours='11:30 AM - 11:00 PM',
        phone = '4153628193',
        # highlight = "Handmade",
        address ='261 Columbus Ave',
        city = 'San Francisco',
        state = 'CA',
        country ='USA',
        zipcode ='94133',
        latitude ='37.79769',
        longitude = '-122.40660',
        createdAt= now,
        updatedAt= now
    )
    bookstore25 = Bookstore(
        ownerId = 2,
        name= "El Ateneo Grand Splendid",
        website = 'http://www.citylights.com/',
        price= '$$',
        description ='Check out our website at citylights.com! City Lights Bookstore offers three floors of new-release hardcovers and quality paperbacks from all of the major publishing houses, along with an impressive range of titles from smaller, harder-to-find, specialty publishers. ',
        category= "lounge",
        businessHours='11:30 AM - 11:00 PM',
        phone = '4153628193',
        # highlight = "Handmade",
        address ='261 Columbus Ave',
        city = 'San Francisco',
        state = 'CA',
        country ='USA',
        zipcode ='94133',
        latitude ='37.79769',
        longitude = '-122.40660',
        createdAt= now,
        updatedAt= now
    )
    bookstore26 = Bookstore(
        ownerId = 2,
        name= "El Ateneo Grand Splendid",
        website = 'http://www.citylights.com/',
        price= '$$',
        description ='Check out our website at citylights.com! City Lights Bookstore offers three floors of new-release hardcovers and quality paperbacks from all of the major publishing houses, along with an impressive range of titles from smaller, harder-to-find, specialty publishers. ',
        category= "lounge",
        businessHours='11:30 AM - 11:00 PM',
        phone = '4153628193',
        # highlight = "Handmade",
        address ='261 Columbus Ave',
        city = 'San Francisco',
        state = 'CA',
        country ='USA',
        zipcode ='94133',
        latitude ='37.79769',
        longitude = '-122.40660',
        createdAt= now,
        updatedAt= now
    )
    bookstore27 = Bookstore(
         ownerId = 2,
        name= "El Ateneo Grand Splendid",
        website = 'http://www.citylights.com/',
        price= '$$',
        description ='Check out our website at citylights.com! City Lights Bookstore offers three floors of new-release hardcovers and quality paperbacks from all of the major publishing houses, along with an impressive range of titles from smaller, harder-to-find, specialty publishers. ',
        category= "lounge",
        businessHours='11:30 AM - 11:00 PM',
        phone = '4153628193',
        # highlight = "Handmade",
        address ='261 Columbus Ave',
        city = 'San Francisco',
        state = 'CA',
        country ='USA',
        zipcode ='94133',
        latitude ='37.79769',
        longitude = '-122.40660',
        createdAt= now,
        updatedAt= now
    )
    bookstore28 = Bookstore(
        ownerId = 2,
        name= "El Ateneo Grand Splendid",
        website = 'http://www.citylights.com/',
        price= '$$',
        description ='Check out our website at citylights.com! City Lights Bookstore offers three floors of new-release hardcovers and quality paperbacks from all of the major publishing houses, along with an impressive range of titles from smaller, harder-to-find, specialty publishers. ',
        category= "lounge",
        businessHours='11:30 AM - 11:00 PM',
        phone = '4153628193',
        # highlight = "Handmade",
        address ='261 Columbus Ave',
        city = 'San Francisco',
        state = 'CA',
        country ='USA',
        zipcode ='94133',
        latitude ='37.79769',
        longitude = '-122.40660',
        createdAt= now,
        updatedAt= now
    )
    bookstore29 = Bookstore(
        ownerId = 2,
        name= "El Ateneo Grand Splendid",
        website = 'http://www.citylights.com/',
        price= '$$',
        description ='Check out our website at citylights.com! City Lights Bookstore offers three floors of new-release hardcovers and quality paperbacks from all of the major publishing houses, along with an impressive range of titles from smaller, harder-to-find, specialty publishers. ',
        category= "CD & Video",
        businessHours='11:30 AM - 11:00 PM',
        phone = '4153628193',
        # highlight = "Handmade",
        address ='261 Columbus Ave',
        city = 'San Francisco',
        state = 'CA',
        country ='USA',
        zipcode ='94133',
        latitude ='37.79769',
        longitude = '-122.40660',
        createdAt= now,
        updatedAt= now
    )
    bookstore30 = Bookstore(
        ownerId = 2,
        name= "El Ateneo Grand Splendid",
        website = 'http://www.citylights.com/',
        price= '$$',
        description ='Check out our website at citylights.com! City Lights Bookstore offers three floors of new-release hardcovers and quality paperbacks from all of the major publishing houses, along with an impressive range of titles from smaller, harder-to-find, specialty publishers. ',
        category= "CD & Video",
        businessHours='11:30 AM - 11:00 PM',
        phone = '4153628193',
        # highlight = "Handmade",
        address ='261 Columbus Ave',
        city = 'San Francisco',
        state = 'CA',
        country ='USA',
        zipcode ='94133',
        latitude ='37.79769',
        longitude = '-122.40660',
        createdAt= now,
        updatedAt= now
    )
    bookstore31 = Bookstore(
        ownerId = 2,
        name= "El Ateneo Grand Splendid",
        website = 'http://www.citylights.com/',
        price= '$$',
        description ='Check out our website at citylights.com! City Lights Bookstore offers three floors of new-release hardcovers and quality paperbacks from all of the major publishing houses, along with an impressive range of titles from smaller, harder-to-find, specialty publishers. ',
        category= "CD & Video",
        businessHours='11:30 AM - 11:00 PM',
        phone = '4153628193',
        # highlight = "Handmade",
        address ='261 Columbus Ave',
        city = 'San Francisco',
        state = 'CA',
        country ='USA',
        zipcode ='94133',
        latitude ='37.79769',
        longitude = '-122.40660',
        createdAt= now,
        updatedAt= now
    )
    bookstore32 = Bookstore(
        ownerId = 2,
        name= "El Ateneo Grand Splendid",
        website = 'http://www.citylights.com/',
        price= '$$',
        description ='Check out our website at citylights.com! City Lights Bookstore offers three floors of new-release hardcovers and quality paperbacks from all of the major publishing houses, along with an impressive range of titles from smaller, harder-to-find, specialty publishers. ',
        category= "CD & Video",
        businessHours='11:30 AM - 11:00 PM',
        phone = '4153628193',
        # highlight = "Handmade",
        address ='261 Columbus Ave',
        city = 'San Francisco',
        state = 'CA',
        country ='USA',
        zipcode ='94133',
        latitude ='37.79769',
        longitude = '-122.40660',
        createdAt= now,
        updatedAt= now
     )
    bookstore33 = Bookstore(
        ownerId = 2,
        name= "El Ateneo Grand Splendid",
        website = 'http://www.citylights.com/',
        price= '$$',
        description ='Check out our website at citylights.com! City Lights Bookstore offers three floors of new-release hardcovers and quality paperbacks from all of the major publishing houses, along with an impressive range of titles from smaller, harder-to-find, specialty publishers. ',
        category= "CD & Video",
        businessHours='11:30 AM - 11:00 PM',
        phone = '4153628193',
        # highlight = "Handmade",
        address ='261 Columbus Ave',
        city = 'San Francisco',
        state = 'CA',
        country ='USA',
        zipcode ='94133',
        latitude ='37.79769',
        longitude = '-122.40660',
        createdAt= now,
        updatedAt= now
    )
    bookstore34 = Bookstore(
        ownerId = 2,
        name= "El Ateneo Grand Splendid",
        website = 'http://www.citylights.com/',
        price= '$$',
        description ='Check out our website at citylights.com! City Lights Bookstore offers three floors of new-release hardcovers and quality paperbacks from all of the major publishing houses, along with an impressive range of titles from smaller, harder-to-find, specialty publishers. ',
        category= "CD & Video",
        businessHours='11:30 AM - 11:00 PM',
        phone = '4153628193',
        # highlight = "Handmade",
        address ='261 Columbus Ave',
        city = 'San Francisco',
        state = 'CA',
        country ='USA',
        zipcode ='94133',
        latitude ='37.79769',
        longitude = '-122.40660',
        createdAt= now,
        updatedAt= now
    )
    bookstore35 = Bookstore(
        ownerId = 2,
        name= "El Ateneo Grand Splendid",
        website = 'http://www.citylights.com/',
        price= '$$',
        description ='Check out our website at citylights.com! City Lights Bookstore offers three floors of new-release hardcovers and quality paperbacks from all of the major publishing houses, along with an impressive range of titles from smaller, harder-to-find, specialty publishers. ',
        category= "CD & Video",
        businessHours='11:30 AM - 11:00 PM',
        phone = '4153628193',
        # highlight = "Handmade",
        address ='261 Columbus Ave',
        city = 'San Francisco',
        state = 'CA',
        country ='USA',
        zipcode ='94133',
        latitude ='37.79769',
        longitude = '-122.40660',
        createdAt= now,
        updatedAt= now
    )
    bookstore36 = Bookstore(
        ownerId = 2,
        name= "El Ateneo Grand Splendid",
        website = 'http://www.citylights.com/',
        price= '$$',
        description ='Check out our website at citylights.com! City Lights Bookstore offers three floors of new-release hardcovers and quality paperbacks from all of the major publishing houses, along with an impressive range of titles from smaller, harder-to-find, specialty publishers. ',
        category= "multiple stories",
        businessHours='11:30 AM - 11:00 PM',
        phone = '4153628193',
        # highlight = "Handmade",
        address ='261 Columbus Ave',
        city = 'San Francisco',
        state = 'CA',
        country ='USA',
        zipcode ='94133',
        latitude ='37.79769',
        longitude = '-122.40660',
        createdAt= now,
        updatedAt= now
    )
    bookstore37 = Bookstore(
       ownerId = 2,
        name= "El Ateneo Grand Splendid",
        website = 'http://www.citylights.com/',
        price= '$$',
        description ='Check out our website at citylights.com! City Lights Bookstore offers three floors of new-release hardcovers and quality paperbacks from all of the major publishing houses, along with an impressive range of titles from smaller, harder-to-find, specialty publishers. ',
        category= "multiple stories",
        businessHours='11:30 AM - 11:00 PM',
        phone = '4153628193',
        # highlight = "Handmade",
        address ='261 Columbus Ave',
        city = 'San Francisco',
        state = 'CA',
        country ='USA',
        zipcode ='94133',
        latitude ='37.79769',
        longitude = '-122.40660',
        createdAt= now,
        updatedAt= now
    )
    bookstore38 = Bookstore(
       ownerId = 2,
        name= "El Ateneo Grand Splendid",
        website = 'http://www.citylights.com/',
        price= '$$',
        description ='Check out our website at citylights.com! City Lights Bookstore offers three floors of new-release hardcovers and quality paperbacks from all of the major publishing houses, along with an impressive range of titles from smaller, harder-to-find, specialty publishers. ',
        category= "multiple stories",
        businessHours='11:30 AM - 11:00 PM',
        phone = '4153628193',
        # highlight = "Handmade",
        address ='261 Columbus Ave',
        city = 'San Francisco',
        state = 'CA',
        country ='USA',
        zipcode ='94133',
        latitude ='37.79769',
        longitude = '-122.40660',
        createdAt= now,
        updatedAt= now
    )
    bookstore39 = Bookstore(
       ownerId = 2,
        name= "El Ateneo Grand Splendid",
        website = 'http://www.citylights.com/',
        price= '$$',
        description ='Check out our website at citylights.com! City Lights Bookstore offers three floors of new-release hardcovers and quality paperbacks from all of the major publishing houses, along with an impressive range of titles from smaller, harder-to-find, specialty publishers. ',
        category= "multiple stories",
        businessHours='11:30 AM - 11:00 PM',
        phone = '4153628193',
        # highlight = "Handmade",
        address ='261 Columbus Ave',
        city = 'San Francisco',
        state = 'CA',
        country ='USA',
        zipcode ='94133',
        latitude ='37.79769',
        longitude = '-122.40660',
        createdAt= now,
        updatedAt= now
    )
    bookstore40 = Bookstore(
        ownerId = 2,
        name= "El Ateneo Grand Splendid",
        website = 'http://www.citylights.com/',
        price= '$$',
        description ='Check out our website at citylights.com! City Lights Bookstore offers three floors of new-release hardcovers and quality paperbacks from all of the major publishing houses, along with an impressive range of titles from smaller, harder-to-find, specialty publishers. ',
        category= "multiple stories",
        businessHours='11:30 AM - 11:00 PM',
        phone = '4153628193',
        # highlight = "Handmade",
        address ='261 Columbus Ave',
        city = 'San Francisco',
        state = 'CA',
        country ='USA',
        zipcode ='94133',
        latitude ='37.79769',
        longitude = '-122.40660',
        createdAt= now,
        updatedAt= now
    )
    bookstore41 = Bookstore(
        ownerId = 2,
        name= "El Ateneo Grand Splendid",
        website = 'http://www.citylights.com/',
        price= '$$',
        description ='Check out our website at citylights.com! City Lights Bookstore offers three floors of new-release hardcovers and quality paperbacks from all of the major publishing houses, along with an impressive range of titles from smaller, harder-to-find, specialty publishers. ',
        category= "multiple stories",
        businessHours='11:30 AM - 11:00 PM',
        phone = '4153628193',
        address ='261 Columbus Ave',
        city = 'San Francisco',
        state = 'CA',
        country ='USA',
        zipcode ='94133',
        latitude ='37.79769',
        longitude = '-122.40660',
        createdAt= now,
        updatedAt= now
    )
    bookstore42 = Bookstore(
        ownerId = 6,
        name= "El Ateneo Grand Splendid",
        website = 'http://www.citylights.com/',
        price= '$$',
        description ='Check out our website at citylights.com! City Lights Bookstore offers three floors of new-release hardcovers and quality paperbacks from all of the major publishing houses, along with an impressive range of titles from smaller, harder-to-find, specialty publishers. ',
        category= "restroom",
        businessHours='11:30 AM - 11:00 PM',
        phone = '4153628193',
        address ='261 Columbus Ave',
        city = 'San Francisco',
        state = 'CA',
        country ='USA',
        zipcode ='94133',
        latitude ='37.79769',
        longitude = '-122.40660',
        createdAt= now,
        updatedAt= now
    )
    bookstore43 = Bookstore(
        ownerId = 7,
        name= "El Ateneo Grand Splendid",
        website = 'http://www.citylights.com/',
        price= '$$',
        description ='Check out our website at citylights.com! City Lights Bookstore offers three floors of new-release hardcovers and quality paperbacks from all of the major publishing houses, along with an impressive range of titles from smaller, harder-to-find, specialty publishers. ',
        category= "restroom",
        businessHours='11:30 AM - 11:00 PM',
        phone = '4153628193',
        address ='261 Columbus Ave',
        city = 'San Francisco',
        state = 'CA',
        country ='USA',
        zipcode ='94133',
        latitude ='37.79769',
        longitude = '-122.40660',
        createdAt= now,
        updatedAt= now
    )
    bookstore44 = Bookstore(
        ownerId = 7,
        name= "El Ateneo Grand Splendid",
        website = 'http://www.citylights.com/',
        price= '$$',
        description ='Check out our website at citylights.com! City Lights Bookstore offers three floors of new-release hardcovers and quality paperbacks from all of the major publishing houses, along with an impressive range of titles from smaller, harder-to-find, specialty publishers. ',
        category= "restroom",
        businessHours='11:30 AM - 11:00 PM',
        phone = '4153628193',
        address ='261 Columbus Ave',
        city = 'San Francisco',
        state = 'CA',
        country ='USA',
        zipcode ='94133',
        latitude ='37.79769',
        longitude = '-122.40660',
        createdAt= now,
        updatedAt= now
    )
    bookstore45 = Bookstore(
        ownerId = 7,
        name= "El Ateneo Grand Splendid",
        website = 'http://www.citylights.com/',
        price= '$$',
        description ='Check out our website at citylights.com! City Lights Bookstore offers three floors of new-release hardcovers and quality paperbacks from all of the major publishing houses, along with an impressive range of titles from smaller, harder-to-find, specialty publishers. ',
        category= "restroom",
        businessHours='11:30 AM - 11:00 PM',
        phone = '4153628193',
        address ='261 Columbus Ave',
        city = 'San Francisco',
        state = 'CA',
        country ='USA',
        zipcode ='94133',
        latitude ='37.79769',
        longitude = '-122.40660',
        createdAt= now,
        updatedAt= now
    )
    bookstore46 = Bookstore(
        ownerId = 7,
        name= "El Ateneo Grand Splendid",
        website = 'http://www.citylights.com/',
        price= '$$',
        description ='Check out our website at citylights.com! City Lights Bookstore offers three floors of new-release hardcovers and quality paperbacks from all of the major publishing houses, along with an impressive range of titles from smaller, harder-to-find, specialty publishers. ',
        category= "restroom",
        businessHours='11:30 AM - 11:00 PM',
        phone = '4153628193',
        address ='261 Columbus Ave',
        city = 'San Francisco',
        state = 'CA',
        country ='USA',
        zipcode ='94133',
        latitude ='37.79769',
        longitude = '-122.40660',
        createdAt= now,
        updatedAt= now
    )
    bookstore47 = Bookstore(
        ownerId = 1,
        name= "El Ateneo Grand Splendid",
        website = 'http://www.citylights.com/',
        price= '$$',
        description ='Check out our website at citylights.com! City Lights Bookstore offers three floors of new-release hardcovers and quality paperbacks from all of the major publishing houses, along with an impressive range of titles from smaller, harder-to-find, specialty publishers. ',
        category= "restroom",
        businessHours='11:30 AM - 11:00 PM',
        phone = '4153628193',
        address ='261 Columbus Ave',
        city = 'San Francisco',
        state = 'CA',
        country ='USA',
        zipcode ='94133',
        latitude ='37.79769',
        longitude = '-122.40660',
        createdAt= now,
        updatedAt= now
    )
    bookstore48 = Bookstore(
        ownerId = 1,
        name= "El Ateneo Grand Splendid",
        website = 'http://www.citylights.com/',
        price= '$$',
        description ='Check out our website at citylights.com! City Lights Bookstore offers three floors of new-release hardcovers and quality paperbacks from all of the major publishing houses, along with an impressive range of titles from smaller, harder-to-find, specialty publishers. ',
        category= "restroom",
        businessHours='11:30 AM - 11:00 PM',
        phone = '4153628193',
        address ='261 Columbus Ave',
        city = 'San Francisco',
        state = 'CA',
        country ='USA',
        zipcode ='94133',
        latitude ='37.79769',
        longitude = '-122.40660',
        createdAt= now,
        updatedAt= now
    )
    bookstore49 = Bookstore(
        ownerId = 1,
        name= "El Ateneo Grand Splendid",
        website = 'http://www.citylights.com/',
        price= '$$',
        description ='Check out our website at citylights.com! City Lights Bookstore offers three floors of new-release hardcovers and quality paperbacks from all of the major publishing houses, along with an impressive range of titles from smaller, harder-to-find, specialty publishers. ',
        category= "restroom",
        businessHours='11:30 AM - 11:00 PM',
        phone = '4153628193',
        address ='261 Columbus Ave',
        city = 'San Francisco',
        state = 'CA',
        country ='USA',
        zipcode ='94133',
        latitude ='37.79769',
        longitude = '-122.40660',
        createdAt= now,
        updatedAt= now
    )
    bookstore50 = Bookstore(
        ownerId = 1,
        name= "El Ateneo Grand Splendid",
        website = 'http://www.citylights.com/',
        price= '$$',
        description ='Check out our website at citylights.com! City Lights Bookstore offers three floors of new-release hardcovers and quality paperbacks from all of the major publishing houses, along with an impressive range of titles from smaller, harder-to-find, specialty publishers. ',
        category= "restroom",
        businessHours='11:30 AM - 11:00 PM',
        phone = '4153628193',
        address ='261 Columbus Ave',
        city = 'San Francisco',
        state = 'CA',
        country ='USA',
        zipcode ='94133',
        latitude ='37.79769',
        longitude = '-122.40660',
        createdAt= now,
        updatedAt= now
    )
    bookstore51 = Bookstore(
        ownerId = 7,
        name= "El Ateneo Grand Splendid",
        website = 'http://www.citylights.com/',
        price= '$$',
        description ='Check out our website at citylights.com! City Lights Bookstore offers three floors of new-release hardcovers and quality paperbacks from all of the major publishing houses, along with an impressive range of titles from smaller, harder-to-find, specialty publishers. ',
        category= "restroom",
        businessHours='11:30 AM - 11:00 PM',
        phone = '4153628193',
        address ='261 Columbus Ave',
        city = 'San Francisco',
        state = 'CA',
        country ='USA',
        zipcode ='94133',
        latitude ='37.79769',
        longitude = '-122.40660',
        createdAt= now,
        updatedAt= now
    )

    db.session.add(bookstore01)
    db.session.add(bookstore02)
    db.session.add(bookstore03)
    db.session.add(bookstore04)
    db.session.add(bookstore05)
    db.session.add(bookstore06)
    db.session.add(bookstore07)
    db.session.add(bookstore08)
    db.session.add(bookstore09)
    db.session.add(bookstore10)
    db.session.add(bookstore11)
    db.session.add(bookstore12)
    db.session.add(bookstore13)
    db.session.add(bookstore14)
    db.session.add(bookstore15)
    db.session.add(bookstore16)
    db.session.add(bookstore17)
    db.session.add(bookstore18)
    db.session.add(bookstore19)
    db.session.add(bookstore20)
    db.session.add(bookstore21)
    db.session.add(bookstore22)
    db.session.add(bookstore23)
    db.session.add(bookstore24)
    db.session.add(bookstore25)
    db.session.add(bookstore26)
    db.session.add(bookstore27)
    db.session.add(bookstore28)
    db.session.add(bookstore29)
    db.session.add(bookstore30)
    db.session.add(bookstore31)
    db.session.add(bookstore32)
    db.session.add(bookstore33)
    db.session.add(bookstore34)
    db.session.add(bookstore35)
    db.session.add(bookstore36)
    db.session.add(bookstore37)
    db.session.add(bookstore38)
    db.session.add(bookstore39)
    db.session.add(bookstore40)
    db.session.add(bookstore41)
    db.session.add(bookstore42)
    db.session.add(bookstore43)
    db.session.add(bookstore44)
    db.session.add(bookstore45)
    db.session.add(bookstore46)
    db.session.add(bookstore47)
    db.session.add(bookstore48)
    db.session.add(bookstore49)
    db.session.add(bookstore50)
    db.session.add(bookstore51)

    db.session.commit()


def undo_bookstores():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
