import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Pickaxe({
  fill = "currentColor",
  secondaryfill,
  strokewidth = 1,
  width = "1em",
  height = "1em",
  title = "badge 13",
  ...props
}: IconProps) {
  secondaryfill = secondaryfill || fill;

  return (
    <svg
      height={height}
      width={width}
      {...props}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="m9.6138,10.4297l-2.0425-2.0425c-.0829-.083-.1495-.177-.2204-.2681l-5.2019,5.2019c-.338.3379-.524.7869-.524,1.2649s.186.927.524,1.2651c.338.3379.787.5239,1.265.5239s.927-.186,1.265-.5239l5.2018-5.2019c-.0908-.0706-.1845-.137-.2671-.2195Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m14.8495,6.9619l.1354-.1353c.4873-.4873.4873-1.2803,0-1.7676l-2.043-2.043c-.4873-.4873-1.2803-.4873-1.7676,0l-.1311.1311c-1.7963-1.1521-3.6407-1.7415-5.4929-1.7415-.1118,0-.2202.0376-.3081.1064l-.5884.4604c-.1226.0957-.1934.2427-.1919.3984.0015.1553.0752.3013.1992.3945,1.2984.9768,2.5537,2.0317,3.7528,3.1182-.0881.1731-.1483.3584-.1483.5581,0,.3345.1299.6484.3662.8848l2.0425,2.0425c.2437.2437.564.3657.8843.3657.1933,0,.3801-.0596.5568-.1487,1.0917,1.2048,2.145,2.458,3.119,3.7527.0933.124.2393.1978.3945.1992h.0049c.1538,0,.2988-.0708.394-.1919l.4922-.6294c.0684-.0879.106-.1963.106-.3081,0-1.7866-.5877-3.6006-1.7765-5.4468Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Pickaxe;
