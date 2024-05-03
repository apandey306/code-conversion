# Represents weather data including temperature, min temperature, max temperature, description, and visibility.
class WeatherData:
    def __init__(self, temperature, min_temperature, max_temperature, description, visibility):
        self.temperature = temperature
        self.min_temperature = min_temperature
        self.max_temperature = max_temperature
        self.description = description
        self.visibility = visibility
