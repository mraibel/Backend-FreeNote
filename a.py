class MotorDiagnosticoMedico:
    def __init__(self):
        self.reglas = []
        self.hechos = set()
        self.diagnosticos = set()
        
    def agregar_regla(self, sintomas, diagnostico):
        """Agrega una regla médica: (sintomas -> diagnostico)"""
        self.reglas.append((sintomas, diagnostico))
        
    def agregar_sintoma(self, sintoma):
        """Agrega un sintoma conocido"""
        self.hechos.add(sintoma)