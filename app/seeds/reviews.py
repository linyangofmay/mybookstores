
from app.models import db, Review
from datetime import datetime, date

now = date.today()

def seed_reviews():
    review01 = Review(
        bookstoreId = 1,
        userId = 1,
        stars = 5,
        review = "New and used books in all subject areas. Widest selection in these sections: literature, fiction, mystery, science fiction, art, cooking, children's, young adult, and poetry. ",
        createdAt= now,
        updatedAt= now,
    )
    review02 = Review(
        bookstoreId = 1,
        userId = 2,
        stars = 5,
        review = "A real treasure of a bookstore. They even have zines! So many really great zines. There's a lot of books for adults and kids on gender and all sorts of topics.",
        updatedAt= now,
        createdAt= now,
    )
    review03 = Review(
        bookstoreId = 1,
        userId = 4,
        stars = 5,
        review = "The best used book selection in the city. Very friendly, helpful staff in a great neighborhood.",
        createdAt= now,
        updatedAt= now,
    )
    review04 = Review(
        bookstoreId = 1,
        userId = 5,
        stars = 5,
        review = "Completely perfect bookstore on Clement Street with any title you could possibly want. Stocked full and could get lost in here!!",
        createdAt= now,
        updatedAt= now,
    )
    review05 = Review(
        bookstoreId = 1,
        userId = 2,
        stars = 5,
        review = "They nicely separated the early reader and young adult section to the mezzanine level to give kids a quiet place to explore and unwind.",
        createdAt= now,
        updatedAt= now,
    )
    review06 = Review(
        bookstoreId = 2,
        userId = 3,
        stars = 5,
        review = "I'm not sure how to rate a book store but I always left with a book at a good price. Reselling used books is such a great thing for everyone. Book sellers, book readers, books.",
        createdAt= now,
        updatedAt= now,
    )
    review07 = Review(
        bookstoreId = 2,
        userId = 4,
        stars = 5,
        review = "Good vibes! The employees were nice and I loved seeing the walls of shelves stacked high with books. I especially enjoyed their selection of graphic novels and trade paperbacks.",
        createdAt= now,
        updatedAt= now,
    )
    review08 = Review(
        bookstoreId = 3,
        userId = 1,
        stars = 5,
        review = "Just everything you'd want in a bookstore. If you're a book lover (or if you enjoy a good bookstore), definitely stop in - the vibes are perfect!",
        createdAt= now,
        updatedAt= now,
    )
    review09 = Review(
        bookstoreId = 3,
        userId = 3,
        stars = 5,
        review = "I really loved this bookstore. I bought 5 books that I had been searching other used bookstores for and could never find. I would definitely recommend. They have a large selection.",
        createdAt= now,
        updatedAt= now,
    )
    review10 = Review(
        bookstoreId = 3,
        userId = 4,
        stars = 5,
        review = "Green Apple has been in the neighborhood for as long as I can remember. They have an amazing selection of new and used books under hundreds of categories.",
        createdAt= now,
        updatedAt= now,
    )
    review11 = Review(
        bookstoreId = 4,
        userId = 1,
        stars = 4,
        review = 'Great collection of books to peruse around and very nicely organized.',
        createdAt= now,
        updatedAt= now,
    )
    review12 = Review(
        bookstoreId = 4,
        userId = 2,
        stars = 4,
        review = "This is one of the better bookstores I've been to recently and I definitely want to do a better job of supporting local bookstores so they continue to do well. They have a good variety of books including both new and used options.",
        createdAt= now,
        updatedAt= now,
    )
    review13 = Review(
        bookstoreId = 4,
        userId = 4,
        stars = 3,
        review = 'Such a cool bookstore. I got sucked into discovering new topics to learn and dive deeper into, as they have a great layout to their assortment of books. ',
        createdAt= now,
        updatedAt= now,
    )
    review14 = Review(
        bookstoreId = 5,
        userId = 1,
        stars = 5,
        review = 'What I love the most about this store is the queer representation of the staff. When you walk into any business and see this representation, it empowers the queer community and proves that trans/gnc folx deserve to be in the work force.',
        createdAt= now,
        updatedAt= now,
    )
    review15 = Review(
        bookstoreId = 5,
        userId = 2,
        stars = 4,
        review = 'This book store is huge! Me and my friends were waiting to be seated at a restaurant nearby. The wait was around an hour. Going to this bookstore made the time fly by. ',
        createdAt= now,
        updatedAt= now,
    )
    review16 = Review(
        bookstoreId = 5,
        userId = 3,
        stars = 5,
        review = 'This is everything a book store should be; tons of new and used books, helpful staff, great nooks and crannies, good music, well labeled.',
        createdAt= now,
        updatedAt= now,
    )
    review17 = Review(
        bookstoreId = 6,
        userId = 1,
        stars = 4,
        review = "I've been coming here since I was a little girl. I used to spend my summers in SF with my big sister & she would bring me here every time I would come up to visit--ugh, I love it so much! It's cozy & squeaky & nostalgic.",
        createdAt= now,
        updatedAt= now,
    )
    review18 = Review(
        bookstoreId = 6,
        userId = 2,
        stars = 5,
        review = 'They sell new, used, rare, autographed books as well as vinyl records, comics, magazines, gifts, and other things. I remember coming in at least 2x at midnight for the launch of a certain book series back in the days. ',
        createdAt= now,
        updatedAt= now,
    )
    review19 = Review(
        bookstoreId = 6,
        userId = 3,
        stars = 4,
        review = "This bookstore is the perfect embodiment of San Francisco. It's small, compact, and yet still bigger than you would think. I came in yesterday because I was in the neighborhood and it was nice to see an indie bookstore thriving.",
        createdAt= now,
        updatedAt= now
    )
    review20 = Review(
        bookstoreId = 6,
        userId = 4,
        stars = 4,
        review = "My go-to used book store for years. Today was the first time I sold books to them. They took in 3 books from my pile and seemed like they chose the modern publications that didn't have significant damage.",
        createdAt= now,
        updatedAt= now
    )
    review21 = Review(
        bookstoreId = 7,
        userId = 1,
        stars = 5,
        review = "This was my neighborhood bookstore growing up and it's still my family's favorite place to shop for books. ",
        createdAt= now,
        updatedAt= now
    )
    review22 = Review(
        bookstoreId = 7,
        userId = 2,
        stars = 5,
        review = 'They always have a great variety of popular books from all genres. I love the staff recommendation cards posted on the shelves.',
        createdAt= now,
        updatedAt= now,
    )
    review23 = Review(
        bookstoreId = 7,
        userId = 3,
        stars = 5,
        review = 'I could spend hours here with all of the different rooms to wander through. If you love local bookstores, Green Apple should be on your bucket list.',
        createdAt= now,
        updatedAt= now,
    )
    review24 = Review(
        bookstoreId = 7,
        userId = 4,
        stars = 5,
        review = "I love this place. It's funky, quirky, but it has an amazing selection of artist monographs.",
        createdAt= now,
        updatedAt= now,
    )
    review25 = Review(
        bookstoreId = 8,
        userId = 1,
        stars = 5,
        review = "Everyone working here has been very nice and helpful. I've called in a few times to see if someone could help me stalk out a rare book. They've always been willing to help. Great people that just love books.",
        createdAt= now,
        updatedAt= now,
    )
    review26 = Review(
        bookstoreId = 8,
        userId = 2,
        stars = 5,
        review = "One of the 'hidden' gems of the Richmond District. I pleasantly stumbled upon this bookstore by walking west down Clement from just noticing the carts of books placed in front of the store, being drawn to step inside. ",
        createdAt= now,
        updatedAt= now,
    )
    review27 = Review(
        bookstoreId = 8,
        userId = 3,
        stars = 5,
        review = " If you're looking for your next read or just simply wanting to momentarily lose yourself for a little while as you explore every inch of this Clement Street favorite, look no further. ",
        createdAt= now,
        updatedAt= now,
    )
    review28 = Review(
        bookstoreId = 9,
        userId = 2,
        stars = 5,
        review = 'Phenomenal and large bookstore. A standout and a gem of a treasure trove. Not just New books but plenty of Used as well. ',
        createdAt= now,
        updatedAt= now,
    )
    review29 = Review(
        bookstoreId = 9,
        userId = 3,
        stars = 5,
        review = "They have a great selection of both new and used books and I really like browsing their games and gifts sections. I would recommend this place to anyone looking to shop or browse.",
        createdAt= now,
        updatedAt= now,
    )
    review30 = Review(
        bookstoreId = 10,
        userId = 1,
        stars = 5,
        review = 'The bookstore has two floors, and they do not just sell books.  They also sell board games and stationary supplies.  They have a great, unique selection of books. ',
        createdAt= now,
        updatedAt= now,
    )
    db.session.add(review01)
    db.session.add(review02)
    db.session.add(review03)
    db.session.add(review04)
    db.session.add(review05)
    db.session.add(review06)
    db.session.add(review07)
    db.session.add(review08)
    db.session.add(review09)
    db.session.add(review10)
    db.session.add(review11)
    db.session.add(review12)
    db.session.add(review13)
    db.session.add(review14)
    db.session.add(review15)
    db.session.add(review16)
    db.session.add(review17)
    db.session.add(review18)
    db.session.add(review19)
    db.session.add(review20)
    db.session.add(review21)
    db.session.add(review22)
    db.session.add(review23)
    db.session.add(review24)
    db.session.add(review25)
    db.session.add(review26)
    db.session.add(review27)
    db.session.add(review28)
    db.session.add(review29)
    db.session.add(review30)


    db.session.commit()


def undo_reviews():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
