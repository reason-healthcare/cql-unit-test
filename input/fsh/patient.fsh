Instance: Patient1
InstanceOf: Patient
* meta.tag = #older
* birthDate = "1940-01-01"

Instance: Patient2
InstanceOf: Patient
* meta.tag = #younger
* birthDate = "2020-01-01"

Instance: Patient3
InstanceOf: Patient
* meta.tag = #younger
* birthDate = "2080-01-01"

Instance: TestData1
InstanceOf: Bundle
* type = #collection
* entry[+].resource = Patient1

Instance: TestData2
InstanceOf: Bundle
* type = #collection
* entry[+].resource = Patient2

Instance: TestData3
InstanceOf: Bundle
* type = #collection
* entry[+].resource = Patient3