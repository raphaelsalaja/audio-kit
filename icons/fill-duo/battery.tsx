import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Battery({
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
          d="M1 6.25C1 4.73128 2.23069 3.5 3.75 3.5H13.75C15.2693 3.5 16.5 4.73128 16.5 6.25V11.75C16.5 13.2687 15.2693 14.5 13.75 14.5H3.75C2.23069 14.5 1 13.2687 1 11.75V6.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M16.5 11H17.25C17.6642 11 18 10.6642 18 10.25V7.75C18 7.33579 17.6642 7 17.25 7H16.5V11Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Battery;
