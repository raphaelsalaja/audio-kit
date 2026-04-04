import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TextXmark({
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
          d="m8.5,13c0-3.0327,2.4673-5.5,5.5-5.5.3675,0,.7253.0399,1.0725.1101.0595.012.1775-.018.1775-.1356v-3.2245c0-1.1045-.8954-2-2-2H4.75c-1.1046,0-2,.8955-2,2v9.5c0,1.1045.8954,2,2,2h4.1441c.1059,0,.2271-.2202.1711-.3336-.3601-.7299-.5652-1.549-.5652-2.4164Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m6,6.25h6"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m6,9.25h2.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m15.25,6.876v-2.626c0-1.1046-.8954-2-2-2H4.75c-1.1046,0-2,.8954-2,2v9.5c0,1.1046.8954,2,2,2h3.6386"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m11.1716,10.1716c-1.5596,1.5596-1.5596,4.0973,0,5.6569s4.0973,1.5596,5.6569,0,1.5596-4.0973,0-5.6569-4.0973-1.5596-5.6569,0Zm4.8462,1.8713l-.9571.9571.9571.9571c.2928.2928.2928.7679,0,1.0607s-.7679.2928-1.0607,0l-.9571-.9571-.9571.9571c-.2928.2928-.7679.2928-1.0607,0s-.2928-.7679,0-1.0607l.9571-.9571-.9571-.9571c-.2928-.2928-.2928-.7679,0-1.0607s.7679-.2928,1.0607,0l.9571.9571.9571-.9571c.2928-.2928.7679-.2928,1.0607,0s.2928.7679,0,1.0607Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default TextXmark;
