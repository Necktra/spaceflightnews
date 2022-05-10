import styles from './logo.module.scss';

const Logo = () => {
    return (
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
        className={styles.logo}
        viewBox="0 0 512.000000 512.000000"
        preserveAspectRatio="xMidYMid meet">
       <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
        stroke="none">
       <path d="M359 5101 c-90 -29 -156 -71 -220 -138 -64 -69 -98 -127 -123 -212
       -14 -50 -16 -255 -16 -2191 0 -1936 2 -2141 16 -2191 49 -166 180 -299 342
       -349 63 -20 98 -20 2201 -20 2359 0 2176 -5 2303 62 69 36 166 135 201 203 61
       122 57 -48 57 2296 0 2103 0 2138 -20 2201 -48 158 -181 290 -339 338 -62 20
       -104 20 -2205 19 -2023 0 -2144 -1 -2197 -18z m2462 -652 c372 -38 667 -181
       880 -427 145 -167 248 -424 249 -619 l0 -63 -299 0 -298 0 -7 78 c-15 179 -75
       314 -191 427 -84 82 -174 133 -296 169 -228 66 -462 48 -669 -51 -139 -67
       -253 -207 -289 -356 -15 -63 -15 -213 -1 -268 58 -218 270 -372 694 -505 529
       -167 675 -223 849 -328 222 -132 371 -292 447 -476 53 -130 65 -200 64 -385 0
       -155 -3 -178 -27 -258 -95 -309 -321 -526 -670 -642 -196 -65 -344 -85 -627
       -85 -279 0 -421 20 -631 90 -424 141 -710 417 -804 776 -13 50 -35 200 -35
       242 0 9 68 12 305 12 l305 0 0 -53 c0 -132 72 -305 169 -406 258 -267 776
       -340 1125 -158 229 119 336 351 281 610 -56 267 -246 394 -862 582 -674 205
       -1007 429 -1143 768 -88 221 -75 518 31 730 145 287 441 497 805 571 170 35
       448 46 645 25z"/>
       </g>
       </svg>
    )
}

export default Logo;