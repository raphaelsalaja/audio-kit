import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EnvelopePlus({
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
          d="M1 5.25C1 3.73079 2.23079 2.5 3.75 2.5H14.25C15.7692 2.5 17 3.73079 17 5.25V11.628C16.7654 11.5451 16.513 11.5 16.25 11.5H16V11.25C16 10.0074 14.9926 9 13.75 9C12.5074 9 11.5 10.0074 11.5 11.25V11.5H11.25C10.0074 11.5 9 12.5074 9 13.75C9 14.4568 9.32592 15.0875 9.83567 15.5H3.75C2.23079 15.5 1 14.2692 1 12.75V5.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M14.5 11.25C14.5 10.8358 14.1642 10.5 13.75 10.5C13.3358 10.5 13 10.8358 13 11.25V13H11.25C10.8358 13 10.5 13.3358 10.5 13.75C10.5 14.1642 10.8358 14.5 11.25 14.5H13V16.25C13 16.6642 13.3358 17 13.75 17C14.1642 17 14.5 16.6642 14.5 16.25V14.5H16.25C16.6642 14.5 17 14.1642 17 13.75C17 13.3358 16.6642 13 16.25 13H14.5V11.25Z"
          fill={fill}
        />
        <path
          d="M16.9688 4.83458L9.84531 8.76513C9.31885 9.05549 8.68124 9.05557 8.15478 8.76521L1.03101 4.83535C1.23084 3.513 2.37171 2.5 3.74998 2.5H14.25C15.628 2.5 16.7687 3.5126 16.9688 4.83458Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default EnvelopePlus;
