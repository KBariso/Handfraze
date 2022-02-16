from unicodedata import category
from flask import Blueprint, jsonify, request
from app.models import db, Phrase, Category
from app.forms.phrases import NewPhrase
from flask_login import current_user


phrases = Blueprint(
    'phrases',__name__, url_prefix='/phrases'
)


# ---------------GET ONE PHRASE -------------------
@phrases.route('/<int:id>')

def phrase(id):
    phrase = Phrase.query.get(id)
    return phrase.to_dict()


# ---------------GET ALL PHRASES -------------------
@phrases.route('/', methods=['GET'], strict_slashes=False)
def get_all_phrases():
    # phrases = Phrase.query.all()
    phrases = [phrase.to_dict() for phrase in Phrase.query.all() ]
    # return {'phrases': [phrase.to_dict() for phrase in phrases]}
    return jsonify(phrases)



# ---------------CREATE A PHRASE -------------------

@phrases.route('/new', methods=['POST'])
def phrase_form_submit():
    # get all categories
    # categories = Category.query.all()
    categories = [category.to_dict() for category in Category.query.all() ]
    # print(categories[0])
    form = NewPhrase()

    # Turn categories into a tuple
    # form.categories.choices = [categories.id, f"Category {category.title}" for category in categories]


    # form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        data = form.data
        new_phrase = Phrase(user_id = current_user.id,
                            description = data["description"],
                            media_url = data["media_url"],
                            title = data["title"],
                            category_id = categories.id
                            )
        db.session.add(new_phrase)

        db.session.commit()
        return new_phrase.to_dict()

    else:
        return "Bad Data"
