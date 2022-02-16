from app.models import db, Category

def seed_categories():

    category1 = Category(
        title = "Basic Phrase"
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


    db.session.add(category1)
    db.session.add(category2)
    db.session.add(category3)
    db.session.add(category4)
    db.session.add(category5)

    db.session.commit()

def undo_categories():
    db.session.commit()
