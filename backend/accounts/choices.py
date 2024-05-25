class Role:
    USER = 'user'
    ADMIN = 'admin'

    CHOICES = [
        (USER, 'User'),
        (ADMIN, 'Admin'),
    ]

    @classmethod
    def get_choices(cls):
        return cls.CHOICES