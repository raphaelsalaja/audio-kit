import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CarElectric({
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
          d="m3.5607,4.1296c.2887-1.2469,1.3994-2.1296,2.6791-2.1296h5.5205c1.2797,0,2.3903.8829,2.679,2.1296l.6796,2.9346.7811.5858c.6924.5193,1.1,1.3345,1.1,2.2v4.4c0,.9665-.7835,1.75-1.75,1.75h-.5c-.9665,0-1.75-.7835-1.75-1.75v-.25H5v.25c0,.9665-.7835,1.75-1.75,1.75h-.4999c-.9665,0-1.75-.7835-1.75-1.75v-4.4c0-.8656.4075-1.6807,1.1-2.2l.7811-.5858.6796-2.9346Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m11.3047,7.3364c-.1079-.2065-.3213-.3364-.5547-.3364h-1.3379l.6104-1.5166c.1182-.2949-.0029-.6313-.2822-.7827-.2798-.1519-.6274-.0703-.8096.1904l-2.1924,3.125c-.1338.1909-.1504.4404-.043.6475.1079.2065.3213.3364.5547.3364h1.3379l-.6104,1.5166c-.1182.2949.0029.6313.2822.7827.0942.0513.1963.0757.2974.0757.1982,0,.3916-.0938.5122-.2661l2.1924-3.125c.1338-.1909.1504-.4404.043-.6475Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m3.998,11c.5523,0,1-.4477,1-1s-.4477-1-1-1-1,.4477-1,1,.4477,1,1,1Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m14.0436,11c.5523,0,1-.4477,1-1s-.4477-1-1-1-1,.4477-1,1,.4477,1,1,1Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default CarElectric;
