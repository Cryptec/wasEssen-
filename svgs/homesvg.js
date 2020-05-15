import React from "react";
import { SvgXml } from "react-native-svg";

export default function SecuritySVG(){
const security = `<svg width="100%" height="100%" viewBox="0 0 194 127" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
<g transform="matrix(1,0,0,1,-271.36,-32.0266)">
    <path d="M285.901,130.136C291.852,84.61 315.869,55.042 365.044,47.696C362.416,44.843 361.713,41.974 362.406,39.122C364.074,34.984 366.807,32.976 370.32,32.527C375.012,32.982 378.471,34.978 380.213,39.122C380.958,43.215 379.78,46.106 377.575,48.355C423.33,54.945 449.863,81.825 456.717,129.477L285.901,130.136Z" style="fill:white;stroke:black;stroke-width:0.58px;"/>
</g>
<g transform="matrix(1,0,0,1,-271.36,-32.0266)">
    <path d="M293.098,123.913C295.877,95.385 311.496,72.263 347.126,57.567C323.339,72.293 308.672,94.203 303.903,123.913L293.098,123.913Z" style="fill:rgb(218,218,218);"/>
</g>
<g transform="matrix(1,0,0,1,-271.36,-32.0266)">
    <path d="M281.654,135.364L456.717,135.026C457.185,135.159 457.573,135.542 457.98,135.807C465.408,140.655 466.702,149.789 460.739,155.129C459.663,156.092 458.852,157.021 456.717,157.651L280.978,157.988C277.824,157.715 272.04,154.873 271.862,146.831C271.778,143.001 274.296,136.072 281.654,135.364Z" style="fill:white;stroke:black;stroke-width:0.58px;"/>
</g>
</svg>
`
const SecuritySVG = () => <SvgXml xml = {security} width="80%" height="80%" />;

    return <SecuritySVG/>;
}