import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import { Pannellum } from 'pannellum-react'
import { withStyles } from '@material-ui/core/styles'
import Swal from 'sweetalert2'
import BasicAlert from '../Alerts/basicAlert'
import StepAlert from '../Alerts/StepsAlert'
import Stepper from '../Stepper/Stepper'
import ContactALert from '../Alerts/contactAlert'
import BdeAlert from '../Alerts/bdeAlert'


import getScene from './scenes'
import getHotspots from './hotspots'

import '../../assets/css/animate.css'
import '../../assets/css/customAnimations.css'
import '../../assets/css/customPanellum.css'
import './../../App.css'

//    Modal basique
    const openModal = (params) => {
    Swal(Object.assign({}, params, {
      target: '.pnlm-render-container',
      html: ReactDOMServer.renderToStaticMarkup(<BasicAlert text={params.text} image={params.img}/>),
      animation: false,
      customClass: 'animated fadeIn'
    }))
  }

  //    Modal bde
  const openModalbde = (params) => {
    Swal(Object.assign({}, params, {
      target: '.pnlm-render-container',
      html: ReactDOMServer.renderToStaticMarkup(<BdeAlert text={params.text}/>),
      animation: false,
      customClass: 'animated fadeIn'
    }))
  }

//    Modal 2 steps
  const openModalSteps = (params) => {
    Swal.mixin({
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      progressSteps: ['1', '2']
    }).queue([
      {
        title: params.title,
        target: '.pnlm-render-container',
        html: ReactDOMServer.renderToStaticMarkup(<StepAlert step={1} text={params.text1} image={params.img}/>)
      },
      {
        title: params.title,
        target: '.pnlm-render-container',
        html: ReactDOMServer.renderToStaticMarkup(<StepAlert step={2} text={params.text2} image={params.img}/>)
      }

    ])
  }

// Modal Contact
  const openModalContact = (params) =>{
    Swal.mixin({
      showCancelButton: true,
      progressSteps: ['1', '2', '3']
    }).queue([
      {
        title: params.title,
        target: '.pnlm-render-container',
        html: ReactDOMServer.renderToStaticMarkup(<ContactALert step={1}/>)
      },
      {
        title: params.title,
        target: '.pnlm-render-container',
        html: ReactDOMServer.renderToStaticMarkup(<ContactALert step={2}/>)
      },
      {
        title: params.title,
        target: '.pnlm-render-container',
        html: ReactDOMServer.renderToStaticMarkup(<ContactALert step={3}/> )
      }
    ])
  }
const styles = theme => ({
  progress: {
    position: 'absolute',
    left: 'calc(50% - 20px)',
    top: 'calc(40% - 20px)'
  }
})

class Viewer extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      sceneKey: 'outside',
      firstScene: true
    }
    
    this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick(hotspotId) {
    const hotspot = getHotspots(this.props.sceneKey).find(hotspot => hotspot.id === hotspotId)
    if(hotspot.nextScene) {
      this.props.handleSceneChange(hotspot.nextScene)
      return
    }
    
    if(hotspot.modal) {
      if(hotspot.modal.alert==='basic')
      {
        openModal(hotspot.modal)
      }else if(hotspot.modal.alert==='step'){
        openModalSteps(hotspot.modal)
      }else if(hotspot.modal.alert==='contact'){
        if(!hotspot.modal.IsAlreadyPass){
          openModal(hotspot.modal)
          hotspot.modal.IsAlreadyPass=true
        }else{
          openModalContact(hotspot.modal)
        }
      }else if(hotspot.modal.alert==='bde'){
        openModalbde(hotspot.modal)
      }
      return
    }
  }

  renderStepper() {
    ReactDOM.render(
      <Stepper 
        handleSceneChange={this.props.handleSceneChange} 
        sceneKey={this.props.sceneKey} 
      />,
      document.getElementsByClassName('pnlm-dragfix')[0]
    )
  }
  
  componentDidMount() {
    this.renderStepper()
  }

  componentDidUpdate() {
    this.renderStepper()
  }

  render() {
    const { firstScene } = this.state
    const { sceneKey } = this.props
    const scene = getScene(sceneKey)
    return (
      <div style={{background: 'black', height: '500px'}}>
        <Pannellum
          id={firstScene ? '0' : sceneKey}
          width="100%"
          height="100%"
          image={scene.path}
          pitch={-10.429402860937797}
          yaw={-1.0780267425584553}
          hfov={140}
          title={scene.title}
          autoLoad
          showFullscreenCtrl
          orientationOnByDefault
          hotSpotDebug
        >
          {getHotspots(sceneKey).map(hotspot => (
              <Pannellum.Hotspot
                type="custom"
                pitch={hotspot.pitch}
                yaw={hotspot.yaw}
                name={hotspot.name}
                cssClass={hotspot.type}
                handleClick={(evt, name) => this.handleClick(name)}
                handleClickArg={hotspot.id}
                key={`${sceneKey}-${hotspot.id}`}
              />
          ))}
        </Pannellum>
      </div>
    )
  }
}

export default withStyles(styles)(Viewer)
