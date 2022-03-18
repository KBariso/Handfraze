from flask import Blueprint, jsonify, request
from app.models import db, Phrase, Category
from app.forms.phrases import NewPhrase
from flask_login import current_user, login_required
import click


phrases = Blueprint(
    'phrases',__name__, url_prefix='/phrases'
)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{error}')
    return errorMessages

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



# # ---------------GET ALL PHRASES THAT MATCH WITH CATEGORY -------------------
# @phrases.route('/', methods=['GET'])
# def category_phrases():

#     phrases = [phrase.to_dict() for phrase in Phrase.query.all() ]
#     categories = [category.to_dict() for category in Category.query.all()]
#     category_phrases = [phrase for phrase in phrases if phrase.category_id in categories]

#     print(category_phrases)

#     return jsonify(category_phrases)








# ---------------CREATE A PHRASE -------------------

@phrases.route('/new', methods=['POST'])
# @login_required
def phrase_form_submit():
    form = NewPhrase()
    req_body = request.json
    # print(req_body)
    form['csrf_token'].data = request.cookies['csrf_token']

    # print("I AM HERE!!!")

    if form.validate_on_submit():
        data = form.data
        new_phrase = Phrase(title = data["title"],
                            description = data["description"],
                            media_url = data["media_url"],
                            user_id = current_user.id,
                            category_id = req_body["category_id"]
                            )
        db.session.add(new_phrase)
        db.session.commit()

        click.echo(click.style("new_phrase.to_dict(),", bg='red', fg='white'))
        return new_phrase.to_dict()

    else:
        print(form.errors)
        return {'errors': validation_errors_to_error_messages(form.errors)}


# ---------------EDIT A PHRASE -------------------
@phrases.route('/<int:id>/edit', methods=["PUT"])
def edit_phrase(id):
    print("OVER HERE!!!!")
    form = NewPhrase()
    phrase = Phrase.query.get(id)
    req_body = request.json

    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        phrase.title = form.data["title"]
        phrase.description = form.data["description"]
        phrase.media_url = form.data["media_url"]
        phrase.category_id = form.data["category_id"]

        db.session.commit()
        return phrase.to_dict()
    print(form.errors)
    return {'error': "Bad Data Form"}


# ---------------DELETE A PHRASE -------------------
@phrases.route('/<int:id>', methods=["DELETE"])
def delete_phrase(id):
    deletePhrase = Phrase.query.filter(Phrase.id == id).first()
    db.session.delete(deletePhrase)
    db.session.commit()

    return {"response":"ok"}
