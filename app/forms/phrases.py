# from msilib.schema import Error
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, SelectField
from wtforms.validators import DataRequired, URL

# def media_valid(form, field):
#     media = field.data
#     valid = URL(media)
#     if not valid:
#         raise ValidationError('Not a valid URL')



class NewPhrase(FlaskForm):
    title = StringField("Title", validators=[DataRequired()])
    description = StringField("Description", validators=[DataRequired()])
    media_url = StringField("media_url", validators=[URL(require_tld=True, message="Please enter valid URL")])
    category_id = SelectField("category", choices=[(1, "Basic Phrase"),(2, "Greeting"), (3, "Food"), (4, "Shopping"), (5, "Location"), (6, "Other")])
    submit = SubmitField("Submit")
