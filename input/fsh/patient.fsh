Instance: Patient1
InstanceOf: Patient
* birthDate = "1940-01-01"

Instance: Patient2
InstanceOf: Patient
* birthDate = "2020-01-01"

Instance: Patient3
InstanceOf: Patient
* birthDate = "2080-01-01"

Instance: TestData1
InstanceOf: Bundle
* meta.tag = #older
* type = #collection
* entry[+].resource = Patient1

Instance: TestData2
InstanceOf: Bundle
* meta.tag = #younger
* type = #collection
* entry[+].resource = Patient2

Instance: TestData3
InstanceOf: Bundle
* meta.tag = #younger
* type = #collection
* entry[+].resource = Patient3