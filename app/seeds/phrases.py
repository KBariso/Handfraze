from pydoc import describe
from app.models import db, Phrase

def seed_phrases():

    yes = Phrase(
        title = "Yes",
        user_id = 1,
        description = "How to sign 'yes' in ASL",
        media_url = "https://www.youtube.com/embed/4y8h0tkjC2M",
        category_id = 1
    )
    no = Phrase(
        title = "No",
        user_id = 1,
        description = "How to sign 'No' in ASL",
        media_url = "https://www.youtube.com/embed/73JF7-IY9DI",
        category_id = 1
    )
    thankyou = Phrase(
        title = "Thank You",
        user_id = 2,
        description = "How to sign 'Thank You' in ASL",
        media_url = "https://www.youtube.com/embed/Hs6n3cgOSh0",
        category_id = 1
    )
    hello = Phrase(
        title = "Hello",
        user_id = 2,
        description = "How to sign 'Hello' in ASL",
        media_url = "https://www.youtube.com/embed/vRlKKV-AH9s",
        category_id = 2
    )
    notunderstand = Phrase(
        title = "I Do Not Understand",
        user_id = 1,
        description = "How to sign 'I do not understand' in ASL",
        media_url = "https://www.youtube.com/embed/BHzRatG7tQw",
        category_id = 1
    )
    understand = Phrase(
        title = "I Understand",
        user_id = 1,
        description = "How to sign 'I understand' in ASL",
        media_url = "https://www.youtube.com/embed/qk3A-R7Htn4",
        category_id = 1
    )
    please = Phrase(
        title = "Please",
        user_id = 2,
        description = "How to sign 'please' in ASL",
        media_url = "https://www.youtube.com/embed/DlhDMMZlbgk",
        category_id = 1
    )
    alphabet = Phrase(
        title = "Alphabet",
        user_id = 1,
        description = "How to sign the alphabet A-Z in ASL",
        media_url = "https://www.youtube.com/embed/wqmSKu9YcFo",
        category_id = 1
    )
    mynameis = Phrase(
        title = "Hello, my name is...",
        user_id = 1,
        description = "How to sign 'Hello, my name is...' in ASL",
        media_url = "https://www.youtube.com/embed/uI32WU3PyMo",
        category_id = 2
    )
    meet = Phrase(
        title = "Nice To Meet You",
        user_id = 2,
        description = "How to sign 'Nice to meet you' in ASL",
        media_url = "https://www.youtube.com/embed/XepcP9GeVps",
        category_id = 2
    )
    howareyou = Phrase(
        title = "How are you?",
        user_id = 2,
        description = "How to sign 'How are you?' in ASL",
        media_url = "https://www.youtube.com/embed/GOV6KwltGQk",
        category_id = 2
    )
    whatdoing = Phrase(
        title = "What are you doing?",
        user_id = 1,
        description = "How to sign 'What are you doing?' in ASL",
        media_url = "https://www.youtube.com/embed/KV2GrhESw7s",
        category_id = 2
    )
    howold = Phrase(
        title = "How old are you?",
        user_id = 1,
        description = "How to sign 'Hello, my name is...' in ASL",
        media_url = "https://www.youtube.com/embed/C7qyICMCVd0",
        category_id = 2
    )
    goodbye = Phrase(
        title = "Goodbye",
        user_id = 1,
        description = "How to sign 'Goodbye' in ASL",
        media_url = "https://www.youtube.com/embed/K986VB_FSgs",
        category_id = 1
    )
    sick = Phrase(
        title = "I am sick",
        user_id = 1,
        description = "How to sign 'I am sick.' in ASL",
        media_url = "https://www.youtube.com/embed/lGhiLcGumlc",
        category_id = 6
    )
    profession = Phrase(
        title = "What is your profession?",
        user_id = 1,
        description = "How to sign 'What is your profession' in ASL",
        media_url = "https://www.youtube.com/embed/n4aNhOjW2is",
        category_id = 2
    )
    sorry = Phrase(
        title = "I am sorry",
        user_id = 2,
        description = "How to sign 'I am sorry' in ASL",
        media_url = "https://www.youtube.com/embed/bS-_Jedkr-I",
        category_id = 1
    )
    ihelp = Phrase(
        title = "I need help",
        user_id = 2,
        description = "How to sign 'I need help' in ASL",
        media_url = "https://www.youtube.com/embed/D-2aQXUKDd8",
        category_id = 1
    )
    restroom = Phrase(
        title = "Where is the restroom?",
        user_id = 1,
        description = "How to sign 'Where is the restroom' in ASL",
        media_url = "https://www.youtube.com/embed/zD32gdBZqLQ",
        category_id = 5
    )
    who = Phrase(
        title = "Who",
        user_id = 1,
        description = "How to sign 'Who' in ASL",
        media_url = "https://www.youtube.com/embed/ijAMRcvZqs8",
        category_id = 6
    )
    what = Phrase(
        title = "What",
        user_id = 2,
        description = "How to sign 'What' in ASL",
        media_url = "https://www.youtube.com/embed/tJnWUR_0k8Q",
        category_id = 6
    )
    when = Phrase(
        title = "When",
        user_id = 2,
        description = "How to sign 'When' in ASL",
        media_url = "https://www.youtube.com/embed/5E14bSXmjbE",
        category_id = 6
    )
    where = Phrase(
        title = "Where",
        user_id = 1,
        description = "How to sign 'Where' in ASL",
        media_url = "https://www.youtube.com/embed/8ZOoDwcsQdA",
        category_id = 6
    )
    why = Phrase(
        title = "Why",
        user_id = 1,
        description = "How to sign 'Why' in ASL",
        media_url = "https://www.youtube.com/embed/tJicKiCF3DA",
        category_id = 6
    )
    hungry = Phrase(
        title = "I'm Hungry",
        user_id = 1,
        description = "How to sign 'I'm Hungry' in ASL",
        media_url = "https://www.youtube.com/embed/iWbQpAbGVIw",
        category_id = 6
    )
    allergic = Phrase(
        title = "I'm allergic to this",
        user_id = 1,
        description = "How to sign 'I'm allergic to this' in ASL",
        media_url = "https://www.youtube.com/embed/WyCNrkDbmTI",
        category_id = 3
    )
    thirsty = Phrase(
        title = "I am Thirsty",
        user_id = 2,
        description = "How to sign 'I am thirsty' in ASL",
        media_url = "https://www.youtube.com/embed/TQ2LxOXvXsA",
        category_id = 3
    )
    water = Phrase(
        title = "Bottle of Water",
        user_id = 1,
        description = "How to sign 'Bottle of Water' in ASL",
        media_url = "https://www.youtube.com/embed/-uACWToEUDo",
        category_id = 3
    )
    ice = Phrase(
        title = "Ice",
        user_id = 1,
        description = "How to sign 'Ice' in ASL",
        media_url = "https://www.youtube.com/embed/Kzfq__ghSvE",
        category_id = 3
    )
    cold = Phrase(
        title = "Cold",
        user_id = 2,
        description = "How to sign 'Cold' in ASL",
        media_url = "https://www.youtube.com/embed/IvPGcQF1pLQ",
        category_id = 6
    )
    hot = Phrase(
        title = "Hot",
        user_id = 1,
        description = "How to sign 'Hot' in ASL",
        media_url = "https://www.youtube.com/embed/3YerWMBSM7A",
        category_id = 6
    )
    numbers = Phrase(
        title = "Numbers 1-10",
        user_id = 2,
        description = "How to sign 'Numbers 1-10' in ASL",
        media_url = "https://www.youtube.com/embed/85OZp-1mkZU",
        category_id = 1
    )
    howmuch = Phrase(
        title = "How much is this?",
        user_id = 1,
        description = "How to sign 'How much is this?' in ASL",
        media_url = "https://www.youtube.com/embed/Q19T7pVnsZg",
        category_id = 4
    )


    db.session.add(yes)
    db.session.add(no)
    db.session.add(thankyou)
    db.session.add(hello)
    db.session.add(notunderstand)
    db.session.add(understand)
    db.session.add(please)
    db.session.add(alphabet)
    db.session.add(mynameis)
    db.session.add(meet)
    db.session.add(howareyou)
    db.session.add(whatdoing)
    db.session.add(howold)
    db.session.add(goodbye)
    db.session.add(sick)
    db.session.add(profession)
    db.session.add(sorry)
    db.session.add(ihelp)
    db.session.add(restroom)
    db.session.add(who)
    db.session.add(what)
    db.session.add(when)
    db.session.add(where)
    db.session.add(why)
    db.session.add(hungry)
    db.session.add(allergic)
    db.session.add(thirsty)
    db.session.add(water)
    db.session.add(ice)
    db.session.add(cold)
    db.session.add(hot)
    db.session.add(numbers)
    db.session.add(howmuch)


    db.session.commit()

def undo_phrases():
    db.session.commit()
