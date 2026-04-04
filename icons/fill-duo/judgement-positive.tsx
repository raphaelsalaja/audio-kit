import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function JudgementPositive({
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
          d="M2.75 11C2.33579 11 2 11.3358 2 11.75C2 12.1642 2.33579 12.5 2.75 12.5H4V17.25C4 17.6642 4.33579 18 4.75 18H13.25C13.6642 18 14 17.6642 14 17.25V12.5H15.25C15.6642 12.5 16 12.1642 16 11.75C16 11.3358 15.6642 11 15.25 11H2.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9 6.5C6.51479 6.5 4.5 8.51479 4.5 11H13.5C13.5 8.51479 11.4852 6.5 9 6.5Z"
          fill={fill}
        />
        <path
          d="M6.5 3C6.5 1.6189 7.6189 0.5 9 0.5C10.3811 0.5 11.5 1.6189 11.5 3C11.5 4.3811 10.3811 5.5 9 5.5C7.6189 5.5 6.5 4.3811 6.5 3Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M11.2073 12.4055C11.5356 12.6581 11.597 13.129 11.3445 13.4573L8.8445 16.7073C8.70405 16.8899 8.4875 16.9978 8.25717 17C8.02684 17.0022 7.80827 16.8984 7.66438 16.7185L6.66438 15.4685C6.40562 15.1451 6.45806 14.6731 6.78151 14.4144C7.10495 14.1556 7.57692 14.208 7.83568 14.5315L8.23846 15.035L10.1556 12.5427C10.4081 12.2144 10.879 12.153 11.2073 12.4055Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default JudgementPositive;
