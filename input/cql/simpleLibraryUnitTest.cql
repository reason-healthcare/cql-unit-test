library simpleLibraryUnitTest version '0.0.1'

using FHIR version '4.0.1'

include simpleLibrary called simple

context Patient

/**
 * Tests all return true
 *
 * @test:
 * @data: older
 */
define "is older":
  simple."Is over 70"

/**
 * Tests all return true
 *
 * @test:
 * @data: younger
 */
define "is younger":
  simple."Is over 70" = false