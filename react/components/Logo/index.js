import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import logo from './logo.css'

/**
 * Logo of the store
 */
export default class Logo extends Component {
  static propTypes = {
    /** URL of the logo */
    url: PropTypes.string,
    /** Title to be displayed as alt text */
    title: PropTypes.string.isRequired,
    /** Logo's color */
    color: PropTypes.string,
    /** Logo's width */
    width: PropTypes.number,
    /** Logo's height */
    height: PropTypes.number,
    /** Set label visibility */
    showLabel: PropTypes.bool,
  }

  static defaultProps = {
    title: 'VTEX logo',
    color: '#F71963',
    showLabel: true,
    width: 493,
    height: 177,
  }

  render() {
    const { width, height, isMobile, color, showLabel, url, title } = this.props
    const imgClassNames = classNames('vtex-logo', {
      [logo.maxSizeDesktop]: !isMobile,
      [logo.maxSizeMobile]: isMobile,
    })
    const svgClassNames = classNames('vtex-logo', {
      [logo.sizeDesktop]: !isMobile,
      [logo.sizeMobile]: isMobile,
    })

    if (url) {
      return <img className={`${imgClassNames} store-logo`} src={url} alt={title} />
    }

    if (!showLabel) {
      return (
        <div className={`${svgClassNames} store-logo`}>
          <svg xmlns="http://www.w3.org/2000/svg" width={`${width}px`} height={`${height}px`} viewBox="0 0 24 24">
            <path fill={color} d="M22.2029951,2 L4.28456322,2 C2.89573023,2 2.00548,3.45312422 2.65431247,4.64375547 L4.44783693,7.95552421 L1.19680743,7.95552421 C0.296493196,7.95552421 -0.280470412,8.85287845 0.140086685,9.62472859 L5.90522357,20.1887392 C6.35336788,21.0110278 7.56744234,21.0045158 8.01748106,20.1831745 L9.58332217,17.3210893 L11.5485268,20.925543 C12.2398649,22.1940814 14.1130726,22.195147 14.8071339,20.9280294 L23.7877802,4.5463122 C24.4227598,3.38729378 23.5564264,2 22.2029951,2 M14.1533286,8.98098734 L10.2804619,16.0501827 C9.98102805,16.5965991 9.17318428,16.5957703 8.87505286,16.0487619 L5.03936375,9.00975856 C4.75958436,8.4962574 5.14355582,7.87820895 5.74242344,7.87820895 L13.4699233,7.87820895 C14.0535173,7.87820895 14.427188,8.48110219 14.1533286,8.98098734" className="fill-rebel-pink">
            </path>
            <path d="M0 0h24v24H0z" fill="none"></path>
          </svg>
        </div>
      )
    }

    return (
      <div className={`${svgClassNames} store-logo`}>
        <svg width={width} height={height} viewBox='0 0 142 80' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <rect width='142' height='80' fill='#F2F4F5' stroke='#E3E4E6' />
          <path d='M84.8156 47.5402L77.8157 33.9407C77.5479 33.4222 77.0282 33.0703 76.4349 33.0108C75.8434 32.9445 75.2572 33.1876 74.8844 33.6381L68.8854 40.9206L64.9707 38.386C64.5717 38.1293 64.08 38.0392 63.6162 38.1412C63.149 38.2432 62.7447 38.5271 62.4997 38.9249L57.2497 47.4246C56.9242 47.9499 56.9172 48.6026 57.227 49.1381C57.5367 49.6719 58.1195 50 58.7495 50H83.2494C83.8567 50 84.4184 49.694 84.7386 49.1925C85.0589 48.691 85.0851 48.0655 84.8156 47.5402Z' fill='#CACBCC' />
          <path d='M67.5 33C69.433 33 71 31.433 71 29.5C71 27.567 69.433 26 67.5 26C65.567 26 64 27.567 64 29.5C64 31.433 65.567 33 67.5 33Z' fill='#CACBCC' />
          <defs>
            <clipPath id="clip0">
              <rect width="127" height="65" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div >
    )
  }
}
