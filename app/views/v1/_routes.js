//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Route to handle the school quantity check
router.get('/check-schools', function (req, res) {
  // Get the schools array from session data
  const assignedSchools = req.session.data['assigned-schools']
  
  // Check the quantity of schools
  if (!assignedSchools || assignedSchools.length === 0) {
    // No schools assigned
    res.redirect('/v1/no-schools')
  } else if (assignedSchools.length === 1) {
    // Single school - redirect straight to the school overview
    res.redirect('/v1/school-overview')
  } else {
    // Multiple schools - redirect to school selection page
    res.redirect('/v1/select-school')
  }
})

// Example of handling school selection for multiple schools
router.post('/select-school', function (req, res) {
  const selectedSchool = req.session.data['selected-school']
  
  if (!selectedSchool) {
    // No school selected - show error
    res.render('v1/select-school', {
      errorMessage: 'Select a school'
    })
  } else {
    res.redirect('/v1/school-overview')
  }
})

module.exports = router