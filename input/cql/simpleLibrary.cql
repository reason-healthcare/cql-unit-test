library simpleLibrary version '0.0.1'

using FHIR version '4.0.1'

context Patient

define "age":
  AgeInYears()

define "Is over 70":
  AgeInYears() > 70
