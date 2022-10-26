from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', firstName='Demo', lastName='User', password='password')
    marnie = User(
        username='marniebalcom', email='marnie@aa.io', firstName='Marnie', lastName='Balcom', password='password')
    bobbie = User(
        username='bobbiejack', email='bobbie@aa.io', firstName='Bobbie', lastName='Fuselier', password='password')
    jimgreen = User(
        username='jimgreen', email='jimgreen@aa.io', firstName="Jim", lastName='Green',password='password')
    meimeihan = User(
        username='meimeihan', email='meimeihan@aa.io', firstName="Meimeihan", lastName='Palmer',password='password')
    vera = User(
        username='vera', email='vera@aa.io', firstName="Vera", lastName='Kline', password='password')
    brant = User(
        username='brant', email='brant@aa.io', firstName="Brant", lastName='Soukup', password='password')
    jeffie = User(
        username='jieffie', email='jeffie@aa.io', firstName="Jeffie", lastName='Parnell', password='password')
    carmen = User(
        username='carmen', email='carmen@aa.io',firstName="Carmen", lastName='Caylor', password='password')
    theressa = User(
        username='theressa', email='theressa@aa.io', firstName="Theressa", lastName='Hoaglin', password='password')



    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(jimgreen)
    db.session.add(meimeihan)
    db.session.add(vera)
    db.session.add(brant)
    db.session.add(jeffie)
    db.session.add(carmen)
    db.session.add(theressa)



    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
