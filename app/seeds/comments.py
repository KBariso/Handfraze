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

    sick = Comment(
        content="Good to know!!",
        user_id=2,
        phrase_id=15
    )

    restroom = Comment(
        content="Good to know if traveling!!",
        user_id=1,
        phrase_id=19
    )

    allergic = Comment(
        content="Never know when to be too careful!!",
        user_id=2,
        phrase_id=26
    )

    alphabet = Comment(
        content="Can't wait to sign my name!!",
        user_id=1,
        phrase_id=8
    )
    howareyou = Comment(
        content="Good starter!",
        user_id=3,
        phrase_id=11
    )
    nounderstand = Comment(
        content="I should learn this first because I dont know anything else!!",
        user_id=2,
        phrase_id=5
    )


    db.session.add(yes1)
    db.session.add(yes2)
    db.session.add(no1)
    db.session.add(sick)
    db.session.add(restroom)
    db.session.add(allergic)
    db.session.add(alphabet)
    db.session.add(howareyou)
    db.session.add(nounderstand)


    db.session.commit()


def undo_comments():
    db.session.commit()
