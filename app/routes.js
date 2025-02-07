//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

const sessionDataDefaults = require('./data/session-data-defaults')

// Content pages
router.get('/content/:pageURL', (req, res) => {
    
    const lifeCycleContentPages = req.session.data.lifeCycleContentPages

    const pageURL = req.params.pageURL

    const lifeCycleContentPage = lifeCycleContentPages.find( (lifeCycleContentPage) => {
        return lifeCycleContentPage.pageURL === pageURL
    })

    console.log(lifeCycleContentPage)

    res.render('content-page-template.html', {
        lifeCycleContentPage
    })
})

// Resource pages
router.get('/tools-and-resources/:resourceURL', (req, res) => {
    
    const resources = req.session.data.resources

    const resourceURL = req.params.resourceURL

    const resource = resources.find( (resource) => {
        return resource.resourceURL === resourceURL
    })

    console.log(resource)

    res.render('resource-page-template.html', {
        resource
    })
})


// Schools pages
router.get('/schools/:schoolURN', (req, res) => {
    
    const schools = req.session.data.schools

    const schoolURN = req.params.schoolURN

    const school = schools.find( (school) => {
        return school.schoolURN === schoolURN
    })

    console.log(school)

    res.render('school-page-template.html', {
        school
    })
})
