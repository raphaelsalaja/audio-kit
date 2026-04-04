import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function StarSparkle({
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
          d="m11.24,6.289l-2.24-4.539-2.24,4.539-5.01.728,3.625,3.534-.856,4.989,4.3006-2.1125.31-.1744c.2095-.5502.6568-.9927,1.2371-1.1861l.5514-.1839.1849-.5546c.3338-.994,1.2606-1.3285,1.8965-1.3285.0584,0,.1192.0028.1818.0087l3.0687-2.9917-5.01-.728Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m4.743,2.492l-.946-.315-.316-.947c-.102-.306-.609-.306-.711,0l-.316.947-.946.315c-.153.051-.257.194-.257.356s.104.305.257.356l.946.315.316.947c.051.153.194.256.355.256s.305-.104.355-.256l.316-.947.946-.315c.153-.051.257-.194.257-.356s-.104-.305-.257-.356h.001Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m15.158,13.49l-1.263-.421-.421-1.263c-.137-.408-.812-.408-.949,0l-.421,1.263-1.263.421c-.204.068-.342.259-.342.474s.138.406.342.474l1.263.421.421,1.263c.068.204.26.342.475.342s.406-.138.475-.342l.421-1.263,1.263-.421c.204-.068.342-.259.342-.474s-.138-.406-.342-.474h-.001Z"
          fill={fill}
          strokeWidth="0"
        />
        <polyline
          fill="none"
          points="13.8297 9.3765 16.25 7.0171 11.24 6.29 9 1.75 6.76 6.29 1.75 7.0171 5.375 10.551 4.519 15.54 8.2808 13.5625"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle cx="14.25" cy="3.25" fill={fill} r=".75" strokeWidth="0" />
      </g>
    </svg>
  );
}

export default StarSparkle;
