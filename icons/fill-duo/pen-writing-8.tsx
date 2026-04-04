import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PenWriting8({
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
          d="M12.0234 2.23448C12.7859 1.11599 14.3116 0.828146 15.4295 1.59026C16.5481 2.35277 16.8359 3.87848 16.0738 4.99644L12.0369 10.9173C11.3779 11.8844 10.3359 12.5189 9.53084 12.9023C9.11804 13.0988 8.74342 13.2405 8.47117 13.3334C8.33463 13.38 8.22274 13.4147 8.14334 13.4382C7.89041 13.513 7.62699 13.5255 7.39844 13.3696C7.16673 13.2116 7.08556 12.9662 7.06264 12.7013C7.05551 12.6188 7.04695 12.5019 7.04046 12.3578C7.02753 12.0704 7.02261 11.6699 7.05477 11.2139C7.11748 10.3244 7.3274 9.12256 7.98624 8.15565L12.0234 2.23448Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M1.5 12.75C1.5 12.3358 1.83579 12 2.25 12H4.75C5.16421 12 5.5 12.3358 5.5 12.75C5.5 13.1642 5.16421 13.5 4.75 13.5H2.25C1.83579 13.5 1.5 13.1642 1.5 12.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1.5 16.25C1.5 15.8358 1.83579 15.5 2.25 15.5H15.75C16.1642 15.5 16.5 15.8358 16.5 16.25C16.5 16.6642 16.1642 17 15.75 17H2.25C1.83579 17 1.5 16.6642 1.5 16.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default PenWriting8;
