//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

const sessionDataDefaults = require('./data/session-data-defaults')


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
