from flask import Blueprint, jsonify, request
from app.forms.comments import NewComment
from app.models import db, Comment
from flask_login import current_user


comments = Blueprint(
    'comments',__name__, url_prefix='/comments'
)



# -----------------GET ALL COMMENTS----------------
@comments.route('/', methods=["GET"])
def get_all_comments():

    comments = [comment.to_dict() for comment in Comment.query.all()]
    return jsonify(comments)



# ------------------CREATE A NEW COMMENT -------------------
@comments.route('/new', methods=["POST"])
def comment_form_submit():
    form = NewComment()
    req_body = request.json #To get the info we need from front to back
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        data = form.data
        new_comment = Comment(content = data["content"],
                              user_id = current_user.id,
                              phrase_id = req_body["phrase_id"])
        db.session.add(new_comment)

        db.session.commit()
        return new_comment.to_dict()

    else:
        print(form.errors)
        return {'error':"Bad Data"}




# --------------------EDIT A COMMENT -------------------
@comments.route('/<id>/edit', methods=["PUT"])
def edit_comment(id):
    comment = Comment.query.filter_by(id=id).first()

    comment.content = request.json['content']
    db.session.commit()
    return jsonify(comment.content)



# --------------------DELETE A COMMENT -------------------

@comments.route("/<int:id>", methods=["DELETE"])
def delete_comment(id):
    comment = Comment.query.get(id)

    db.session.delete(comment)
    db.session.commit()
    return 'ok'
