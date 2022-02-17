from flask import Blueprint, jsonify, request
from app.models import db, Phrase
from app.forms.phrases import NewPhrase
from flask_login import current_user, login_required


phrases = Blueprint(
    'phrases',__name__, url_prefix='/phrases'
)


# ---------------GET ONE PHRASE -------------------
@phrases.route('/<int:id>')

def phrase(id):
    phrase = Phrase.query.get(id)
    return phrase.to_dict()


# ---------------GET ALL PHRASES -------------------
@phrases.route('/', methods=['GET'])
def get_all_phrases():
    # phrases = Phrase.query.all()
    phrases = [phrase.to_dict() for phrase in Phrase.query.all() ]
    # return {'phrases': [phrase.to_dict() for phrase in phrases]}
    return jsonify(phrases)



# ---------------CREATE A PHRASE -------------------

@phrases.route('/new', methods=['POST'])
# @login_required
def phrase_form_submit():
    form = NewPhrase()
    req_body = request.json
    print(req_body)
    form['csrf_token'].data = request.cookies['csrf_token']

    print("I AM HERE!!!")

    if form.validate_on_submit():
        print("IN THE IF STATEMENT!!!")
        data = form.data
        new_phrase = Phrase(title = data["title"],
                            description = data["description"],
                            media_url = data["media_url"],
                            user_id = current_user.id,
                            category_id = req_body["category_id"]
                            )
        db.session.add(new_phrase)
        db.session.commit()
        print(new_phrase.to_dict(), "NEW PHRASE")
        return new_phrase.to_dict()

    else:
        print(form.errors)
        return {'error':"Bad Data"}
