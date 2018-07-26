
- Créer une inté basique

- Créer composants de présentations et leur containers

- Importer Redux dans App ( Provider et createStore)

* REDUCER 

- Créer Store (reducer, index)

- Créer les actions ainsi que leur action types dans le reducer pour :
    -   Ajouter un message
    -   Choisir un nom d'utilisateur

- Créer le switch du reducer par rapport aux actions :
    -   Quand on ajoute un message, qui sera ajoutée a la liste locale
        des messages
    -   Choisir un nom d'utilisateur, ajouté a la liste des utilisateurs

* COMPOSANTS

- Compléter le composant qui permettra d'ajouter un message, dans un input, avec
  un onkeypress(entrée, puis dispatch de la value)
- Compléter le composant qui permettra d'afficher les messages ajoutés avec le nom
  de son user (map sur la liste des messages)
- Compléter le composant qui permettra d'entrer un nom d'utilisateur pour nos futurs
  messages.

* CONTAINERS

- Compléter les trois containers
    - Form : mapDispatch (message, user) puis connect
    - Messages : connect
    - Settings : dispatch/connect ?
