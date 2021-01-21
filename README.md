# Strapi application

A quick description of your strapi application

TESTER AVEC POSTMAN !

Utilisateurs: 

Utilisateur 1: { "identifier": "Francois", "password": "password" },
Utilisateur 2: { "identifier": Sami"password": radi},

(Si existants alors il faut les créer)

API for login:

POST - http://localhost:1337/auth/local:

retourne un jwt .


APIs for messages: (Enregistrer le Token-jwt dans l'option Bearer Token dans l'onglet Auth)

Format d'un message: { "body": Text, "creator": related_to_user, "subject": related_to_subject, "creation_date": Date }

GET - http://localhost:1337/messages;

GET - http://localhost:1337/messages/:id;

POST - http://localhost:1337/messages;

----------


APIs for subjects: (Enregistrer le Token-jwt dans l'option Bearer Token dans l'onglet Auth)

Format d'un Sujet: { "title": Text, "creator": related_to_user, "creation_date": Date }

GET - http://localhost:1337/subjects;

GET - http://localhost:1337/subjects/:id;

POST - http://localhost:1337/subjects;


----------

Copie de base de données postgres a la racine du dossier
