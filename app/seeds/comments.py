from app.models import db, Comment


from app.models import db, Comment


def seed_comments():

    yes1 = Comment(
        content="Thank you so much!!!",
        user_id=2,
        phrase_id=1
    )

    yes2 = Comment(
        content="Very helpful!!!",
        user_id=1,
        phrase_id=1
    )

    no1 = Comment(
        content="This is great!!",
        user_id=2,
        phrase_id=2
    )


    db.session.add(yes1)
    db.session.add(yes2)
    db.session.add(no1)


    db.session.commit()


def undo_comments():
    db.session.commit()
