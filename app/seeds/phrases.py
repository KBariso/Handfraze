from pydoc import describe
from app.models import db, Phrase

def seed_phrases():

    yes = Phrase(
        title = "Yes",
        user_id = 1,
        description = "How to say 'yes' in ASL",
        media_url = "https://www.youtube.com/embed/_uxgyigXU3g",
        category_id = 1
    )
    no = Phrase(
        title = "No",
        user_id = 1,
        description = "How to say 'No' in ASL",
        media_url = "https://www.youtube.com/embed/RKT66ZM7Bw4",
        category_id = 1
    )

    db.session.add(yes)
    db.session.add(no)


    db.session.commit()

def undo_phrases():
    db.session.commit()
