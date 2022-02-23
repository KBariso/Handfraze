from app.models import db, Category

def seed_categories():

    category1 = Category(
        title = "Basic Phrases"
    )
    category2 = Category(
        title = "Greeting"
    )
    category3 = Category(
        title = "Food"
    )
    category4 = Category(
        title = "Shopping"
    )
    category5 = Category(
        title = "Location"
    )
    category6 = Category(
        title = "Other"
    )


    db.session.add(category1)
    db.session.add(category2)
    db.session.add(category3)
    db.session.add(category4)
    db.session.add(category5)
    db.session.add(category6)

    db.session.commit()

def undo_categories():
    db.session.execute('TRUNCATE categories RESTART IDENTITY CASCADE;')
    db.session.commit()
