endpoints API


METHOD          PATH                BODY                DATA                STATUS              DESCRICAO
------------------------------------------------------------------------------------------------------------------
GET             'aluno/'            ---                 [Alunos]            200 (OK)            Obter alunos
POST            'aluno/'            dados aluno         Aluno               201 (CREATED)       Cadastrar aluno
GET             'aluno/id'          ---                 Aluno               200 (OK)            Obter aluno
PUT             'aluno/id'          dados aluno         Aluno               201 (CREATED)       Modificar aluno
DELETE          'aluno/id'          ---                 -----               204 (NO CONTENT)    Remover aluno

GET             'exercicio/'       ---                [Exercicios]          200 (OK)           Obter exercicios
POST            'exercicio/'       dados exercicio     Exercicio            201 (CREATED)      Cadastrar exercicio
GET             'exercicio/id'     ---                 Exercicio            200 (OK)           Obter exercicio
PUT             'exercicio/id'     dados exercicio     Exercicio            201 (CREATED)      Modificar exercicio
DELETE          'exercicio/id'     ---                 -----                204 (NO CONTENT)   Remover exercicio