import React from 'react'
import ReduxToastr from 'react-redux-toastr'
import 'modules/react-redux-toastr/lib/css/react-redux-toastr.css'

export default props => (
    <ReduxToastr 
    timeOut={8000}
    newesOnTop={false}
    preventDuplicates={true}
    position='top-right'
    transmitionIn='fedeIn'
    transmitionOut='fedeOut'
    progressBar />
)